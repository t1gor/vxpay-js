import VXPayIframe                   from './../VXPayIframe'
import VXPayInitSessionMessage       from './../../Message/VXPayInitSessionMessage'
import VXPayUpdateParamsMessage      from './../../Message/VXPayUpdateParamsMessage'
import VXPayChangeRouteMessage       from './../../Message/VXPayChangeRouteMessage'
import VXPayUserAgentHelper          from './../../VXPayUserAgentHelper'
import VXPayDomHelper                from './../VXPayDomHelper'
import VXPayEventListener            from './../../Event/VXPayEventListener'
import VXPayPaymentHooksConfig       from './../../Config/VXPayPaymentHooksConfig'
import VXPayHookRouter               from './../../Message/Hooks/VXPayHookRouter'
import VXPayIsVisibleMessage         from './../../Message/VXPayIsVisibleMessage'
import VXPayAdditionalOptionsMessage from './../../Message/VXPayAdditionalOptionsMessage'
import VXPayUiOptionsMessage         from './../../Message/VXPayUiOptionsMessage'

class VXPayPaymentFrame extends VXPayIframe {
	/**
	 * Override styles
	 */
	constructor(document, url, id = VXPayPaymentFrame.NAME, style = {}, hooks) {
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
		this._frame.name              = 'vxpay';

		this._hooks = hooks;
		this._sessionInitialized = false;
		this._listening = false;
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
	 * @return {VXPayPaymentFrame}
	 */
	unload() {
		this._frame.remove();
		return this;
	}

	/**
	 * @todo refactor this mess!
	 * @param {Document} document
	 * @return {Object}
	 */
	static getDefaultStyles(document = undefined) {
		const uaString    = typeof document !== 'undefined' ? document.defaultView.navigator.userAgent : '',
			userAgent     = new VXPayUserAgentHelper(uaString),
			bodyElement   = typeof document !== 'undefined' ? document.getElementsByTagName('body').item(0) : null,
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

		if (typeof document !== 'undefined'
			&& VXPayDomHelper.isStyleAttributeSuppored(bodyElement, 'maxHeight', '100vh')
		) {
			defaultStyles.maxHeight = '100vh';
		} else {
			if (userAgent.isMobile()) {
				defaultStyles.maxHeight = VXPayDomHelper.getClientHeight(document.defaultView) + 'px';
			}
		}

		return defaultStyles;
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
	 * @return {VXPayPaymentFrame}
	 */
	postMessage(message, origin = '*') {
		this._hooks.trigger(VXPayPaymentHooksConfig.ON_BEFORE_SEND, [message]);

		if (this._frame.contentWindow !== null) {
			this._frame.contentWindow.postMessage(message.toString(), origin);
		}

		return this;
	}

	/**
	 * @param {String|undefined} token
	 * @return {VXPayPaymentFrame}
	 */
	initSession(token = undefined) {
		if (this._sessionInitialized) {
			return this;
		}

		token = token || null;

		// init lazy loading session
		this.postMessage(new VXPayInitSessionMessage(token));
		this._sessionInitialized = true;

		return this;
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
	 * @param {Object} options
	 * @return {VXPayPaymentFrame}
	 */
	updateUI(options = {}) {
		this.postMessage(new VXPayUiOptionsMessage(options));
		return this;
	}

	/**
	 * @param {Object} options
	 * @return {VXPayPaymentFrame}
	 */
	sendAdditionalOptions(options = {}) {
		this.postMessage(new VXPayAdditionalOptionsMessage(options));
		return this;
	}

	/**
	 * @param {String} route
	 * @return {VXPayPaymentFrame}
	 */
	changeRoute(route = '') {
		return this.postMessage(new VXPayChangeRouteMessage(route));
	}

	/**
	 * [@param {VXPayViewReadyMessage} message]
	 */
	setVisible() {
		this.postMessage(new VXPayIsVisibleMessage());
	}
}

VXPayPaymentFrame.NAME = 'vx-payment-frame-payment';

export default VXPayPaymentFrame;
