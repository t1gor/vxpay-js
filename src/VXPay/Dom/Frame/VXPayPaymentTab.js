import VXPayPaymentHooksConfig from './../../Config/VXPayPaymentHooksConfig'
import VXPayEventListener      from "../../Event/VXPayEventListener";
import VXPayIframe             from "../VXPayIframe";
import VXPayMessageFactory     from "../../Message/VXPayMessageFactory";
import VXPayMessage            from "../../VXPayMessage";

/**
 * @link https://www.npmjs.com/package/es6-interface
 */
class VXPayPaymentTab {
	/**
	 * @param {Document} document
	 * @param {String} url
	 */
	constructor(document, url) {
		console.log('VXPayPaymentTab::constructor');
		this._document = document;
		this._url = url;
		this._hooks = new VXPayPaymentHooksConfig();
		this._loaded = false;
	}

	/**
	 * Open the window
	 */
	triggerLoad() {
		console.log('VXPayPaymentTab::triggerLoad');
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
		console.log('mark loaded');
		this._loaded = true;
		return this._hooks.trigger(VXPayPaymentHooksConfig.ON_LOAD);
	}

	hide() {

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
			this._window,
			this.routeHook.bind(this)
		);
	}

	/**
	 * @param {MessageEvent} event
	 */
	routeHook(event) {
		console.log(event);
		const message = VXPayMessageFactory.fromJson(event.data);

		// route any
		this._hooks.trigger(VXPayPaymentHooksConfig.ON_ANY, [message]);

		switch (message.type) {
			case VXPayMessage.TYPE_CONTENT_LOADED:
				return this._hooks.trigger(VXPayPaymentHooksConfig.ON_CONTENT_LOADED, [message]);

			case VXPayMessage.TYPE_VIEW_READY:
				return this._hooks.trigger(VXPayPaymentHooksConfig.ON_VIEW_READY, [message]);

			case VXPayMessage.TYPE_IFRAME_CLOSE:
				return this._hooks.trigger(VXPayPaymentHooksConfig.ON_CLOSE, [message]);

			case VXPayMessage.TYPE_SUCCESS:
				return this._hooks.trigger(VXPayPaymentHooksConfig.ON_SUCCESS, [message]);
		}
	}
}

export default VXPayPaymentTab;
