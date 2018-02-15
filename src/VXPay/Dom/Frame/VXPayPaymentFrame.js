import VXPayIframe              from './../VXPayIframe'
import VXPayInitSessionMessage  from './../../Message/VXPayInitSessionMessage'
import VXPayUpdateParamsMessage from './../../Message/VXPayUpdateParamsMessage'
import VXPayChangeRouteMessage  from './../../Message/VXPayChangeRouteMessage'
import VXPayUserAgentHelper     from './../../VXPayUserAgentHelper'
import VXPayDomHelper           from "../VXPayDomHelper";
import VXPayEventListener       from "../../Event/VXPayEventListener";
import VXPayMessageFactory      from "../../Message/VXPayMessageFactory";
import VXPayPaymentHooksConfig  from "../../Config/VXPayPaymentHooksConfig";
import VXPayMessage             from "../../VXPayMessage";

class VXPayPaymentFrame extends VXPayIframe {
	/**
	 * Override styles
	 */
	constructor(document, url, id, style = {}) {
		// merge default with incoming
		style = Object.assign(
			{},
			VXPayPaymentFrame.getDefaultStyles(document),
			style
		);

		// call parent
		super(document, url, id, style);

		// allow transparent iframe for <= IE8
		this._frame.allowTransparency = true;

		// hooks config
		this._hooks = new VXPayPaymentHooksConfig();

		// listen for incoming post messages
		this.startListening();
	}

	/**
	 * Insert in DOM
	 */
	triggerLoad() {
		this._frame
			.ownerDocument
			.getElementsByTagName('body')
			.item(0)
			.appendChild(this._frame);
	}

	/**
	 * @todo refactor this mess!
	 * @param {Document} document
	 * @return {Object}
	 */
	static getDefaultStyles(document) {
		const userAgent     = new VXPayUserAgentHelper(document.defaultView.navigator.userAgent),
		      bodyElement   = document.getElementsByTagName('body').item(0),
		      defaultStyles = {
			      border:     'none',
			      width:      '675px',
			      height:     '740px',
			      top:        '5%',
			      left:       '50%',
			      marginLeft: '-325px',  // margin does not seem to be applied :/
			      zIndex:     10001,
			      display:    'none'
		      };

		defaultStyles.position = userAgent.isMobile()
			? VXPayIframe.POSITION_ABSOLUTE
			: VXPayIframe.POSITION_FIXED;

		if (VXPayDomHelper.isStyleAttributeSuppored(bodyElement, 'maxHeight', '100vh')) {
			defaultStyles.maxHeight = '100vh';
		} else {
			if (userAgent.isMobile()) {
				defaultStyles.maxHeight = VXPayDomHelper.getClientHeight(document.defaultView) + 'px';
			}
		}

		return defaultStyles;
	}

	/**
	 * listen for incoming messages
	 */
	startListening() {
		VXPayEventListener.addEvent(
			VXPayIframe.EVENT_MESSAGE,
			this._frame.ownerDocument.defaultView,
			this.routeHook.bind(this)
		);
	}

	/**
	 * Override to add a hook
	 * @protected
	 */
	_markLoaded() {
		super._markLoaded();
		return this._hooks.trigger(VXPayPaymentHooksConfig.ON_LOAD);
	}

	/**
	 * @param {MessageEvent} event
	 */
	routeHook(event) {
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

	/**
	 * Override to add a before send hook
	 * @param {String|VXPayMessage} message
	 * @param {String} origin
	 */
	postMessage(message, origin = '*') {
		this._hooks.trigger(VXPayPaymentHooksConfig.ON_BEFORE_SEND, [message]);
		super.postMessage(message, origin);
	}

	/**
	 * @param {String|undefined} token
	 */
	initSession(token = undefined) {
		token = token || null;

		// init lazy loading session
		this.postMessage(new VXPayInitSessionMessage(token));
	}

	sendAction() {

	}

	/**
	 * @param {Object} options
	 * @return {VXPayPaymentFrame}
	 */
	sendOptions(options = {}) {
		this.postMessage(new VXPayUpdateParamsMessage(options));
		return this;
	}

	/**
	 * @param {String} path
	 */
	show(path = 'login') {
		this.showOverlay();
		this.showSpinner();
		this.changeRoute('/' + path);
		this.initSession();
		super.show();
	}

	showSpinner() {

	}

	showOverlay() {

	}

	/**
	 * @param {String} route
	 */
	changeRoute(route) {
		this.postMessage(new VXPayChangeRouteMessage(route));
	}

	/**
	 * @return {VXPayPaymentHooksConfig}
	 */
	get hooks() {
		return this._hooks;
	}
}

export default VXPayPaymentFrame;
