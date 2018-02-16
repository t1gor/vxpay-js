import VXPayPaymentHooksConfig from './../../Config/VXPayPaymentHooksConfig'
import VXPayEventListener      from './../../Event/VXPayEventListener'
import VXPayIframe             from './../VXPayIframe'
import VXPayHookRouter         from './../../Message/Hooks/VXPayHookRouter'

/**
 * @link https://www.npmjs.com/package/es6-interface
 */
class VXPayPaymentTab {
	/**
	 * @param {Document} document
	 * @param {String} url
	 */
	constructor(document, url) {
		this._document = document;
		this._url = url;
		this._hooks = new VXPayPaymentHooksConfig();
		this._loaded = false;
	}

	/**
	 * Open the window
	 */
	triggerLoad() {
		if (this._loaded) {
			return;
		}

		this.getNewTab(this._document, this._url)
			.then(win => this.startListening);
	}

	/**
	 * @param {Document} document
	 * @param {String} url
	 *
	 * @return {Promise<Window>}
	 */
	getNewTab(document, url) {
		const that = this;

		return new Promise(resolve => {
			if (this.hasOwnProperty('_window')) {
				return this._window;
			}

			this._window = document.defaultView.open(url, 'vxpay');
			VXPayEventListener.addEvent(
				VXPayIframe.EVENT_LOAD,
				this._window,
				() => console.log('bfsbsf')
			);

			resolve(this._window);
		});
	}

	_markLoaded() {
		this._loaded = true;
		return this._hooks.trigger(VXPayPaymentHooksConfig.ON_LOAD);
	}

	hide() {
		console.log('11111 2222');
	}

	get hooks() {
		return this._hooks;
	}

	/**
	 * listen for incoming messages
	 */
	startListening() {
		VXPayEventListener.addEvent(
			VXPayIframe.EVENT_MESSAGE,
			document.defaultView,
			(event) => VXPayHookRouter(this._hooks, event)
		);
	}
}

export default VXPayPaymentTab;