import VXPayIframe              from './../VXPayIframe'
import VXPayInitSessionMessage  from './../../Message/VXPayInitSessionMessage'
import VXPayUpdateParamsMessage from './../../Message/VXPayUpdateParamsMessage'
import VXPayChangeRouteMessage  from './../../Message/VXPayChangeRouteMessage'
import VXPayUserAgentHelper     from './../../VXPayUserAgentHelper'
import VXPayDomHelper           from './../VXPayDomHelper'
import VXPayEventListener       from './../../Event/VXPayEventListener'
import VXPayPaymentHooksConfig  from './../../Config/VXPayPaymentHooksConfig'
import VXPayMessage             from './../../VXPayMessage'
import VXPayHookRouter          from './../../Message/Hooks/VXPayHookRouter'
import VXPayIsVisibleMessage    from "../../Message/VXPayIsVisibleMessage";

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
		this._frame.name = 'vxpay';

		// hooks config
		this._hooks = new VXPayPaymentHooksConfig();

		// listen for incoming post messages
		this.startListening();
	}

	/**
	 * Insert in DOM
	 */
	triggerLoad() {
		if (this._loaded) {
			return;
		}

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
			      width:      '100%',
			      height:     '100%',
			      top:        '50%',
			      left:       '50%',
			      marginLeft: '-325px',  // margin does not seem to be applied :/
			      zIndex:     10001,
			      display:    'none',
			      transform:  'translate(-50%, -50%)'
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
			(event) => VXPayHookRouter(this._hooks, event)
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
		this.changeRoute('/' + path);
		this.initSession();
		super.show();
	}

	/**
	 * @param {String} route
	 */
	changeRoute(route) {
		this.postMessage(new VXPayChangeRouteMessage(route));
	}

	/**
	 * @param {VXPayViewReadyMessage} message
	 */
	setVisible(message) {
		this.postMessage(new VXPayIsVisibleMessage());
	}

	/**
	 * @return {VXPayPaymentHooksConfig}
	 */
	get hooks() {
		return this._hooks;
	}
}

VXPayPaymentFrame.NAME = 'vx-payment-frame-payment';

export default VXPayPaymentFrame;
