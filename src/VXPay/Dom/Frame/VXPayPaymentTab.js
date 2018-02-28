import VXPayPaymentHooksConfig from './../../Config/VXPayPaymentHooksConfig'
import VXPayEventListener      from './../../Event/VXPayEventListener'
import VXPayIframe             from './../VXPayIframe'
import VXPayHookRouter         from './../../Message/Hooks/VXPayHookRouter'
import VXPayViewReadyMessage   from './../../Message/VXPayViewReadyMessage'

/**
 * @link https://www.npmjs.com/package/es6-interface
 */
class VXPayPaymentTab {
	/**
	 * @param {Document} document
	 * @param {String} name
	 * @param {VXPayConfig} config
	 */
	constructor(document, name, config) {
		this._document = document;
		this._hooks    = new VXPayPaymentHooksConfig();
		this._loaded   = false;
		this._name     = name;
		this._config   = config;
		this._route    = '/';
	}

	/**
	 * Open the window
	 */
	triggerLoad() {
		this.getNewTab()
			.then(this.startListening.bind(this))
			.catch(console.error)
	}

	/**
	 * @return {Promise<Window>}
	 */
	getNewTab() {
		const url = this._config.getPaymentFrameUrl() + '#' + this._route;

		return new Promise(resolve => {
			if (this.hasOwnProperty('_window') && !this._window.closed) {
				resolve(this._window);
			}

			this._window = this._document.defaultView.open(url, this._name);
			resolve(this._window);
		});
	}

	get hooks() {
		return this._hooks;
	}

	/**
	 * listen for incoming messages
	 * @param {Window} window
	 * @return {Window}
	 */
	startListening(window) {
		VXPayEventListener.addEvent(
			VXPayIframe.EVENT_MESSAGE,
			document.defaultView,
			(event) => VXPayHookRouter(this._hooks, event)
		);

		return window;
	}

	/**
	 * @param {Object} options
	 * @return {VXPayPaymentTab}
	 */
	sendOptions(options = {}) {
		console.log('VXPayPaymentTab::sendOptions', options);
		this._config.merge(options);
		return this;
	}

	/**
	 * @param {Object} options
	 * @return {VXPayPaymentTab}
	 */
	sendAdditionalOptions(options = {}) {
		console.log('VXPayPaymentTab::sendAdditionalOptions', options);
		this._config.merge(options);
		return this;
	}

	/**
	 * @param {String|undefined} token
	 * @return {VXPayPaymentTab}
	 */
	initSession(token = undefined) {
		console.log('VXPayPaymentTab::initSession');
		return this;
	}

	/**
	 * @param {String} route
	 * @return {VXPayPaymentTab}
	 */
	changeRoute(route = '') {
		console.log('VXPayPaymentTab::changeRoute', route);
		this._route = route;
		return this;
	}

	/**
	 * @param {VXPayViewReadyMessage} message
	 */
	setVisible(message) {
		this.triggerLoad();
	}

	show() {
		console.log('VXPayPaymentTab::show');
		this.triggerLoad();
		return this;
	}

	hide() {
		console.log('VXPayPaymentTab::hide');

		if (!this._window.closed) {
			this._window.close();
		}

		return this;
	}
}

VXPayPaymentTab.NAME = 'vx-payment-tab-payment';

export default VXPayPaymentTab;
