class VXPayPaymentHooksConfig {
	constructor() {
		this._onAny           = [];
		this._onBeforeSend    = [];
		this._onLoad          = [];
		this._onViewReady     = [];
		this._onContentLoaded = [];
		this._onClose         = [];
		this._onSuccess       = [];
		this._onIframeReady   = [];
		this._onLogin         = [];
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	onLogin(handler) {
		this._onLogin.push(handler);
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	onIframeReady(handler) {
		this._onIframeReady.push(handler);
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	onClose(handler) {
		this._onClose.push(handler);
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	onSuccess(handler) {
		this._onSuccess.push(handler);
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	onAny(handler) {
		this._onAny.push(handler);
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	onBeforeSend(handler) {
		this._onBeforeSend.push(handler);
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	onLoad(handler) {
		this._onLoad.push(handler);
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	onViewReady(handler) {
		this._onViewReady.push(handler);
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	onContentLoaded(handler) {
		this._onContentLoaded.push(handler);
		return this;
	}

	/**
	 * @param {String} hook
	 * @param {Array} callbackArguments
	 * @return {boolean}
	 */
	trigger(hook, callbackArguments = []) {
		const name = '_' + hook;

		if (!this.hasOwnProperty(name)) {
			throw new Error('Hook ' + hook + ' not available!');
		}

		// early exit
		if (this[name].length === 0) {
			return true;
		}

		// process all callbacks
		this[name].map(callback => {
			// @todo what if the function has a bounded context?
			callback.apply(callback, callbackArguments);
		});

		return true;
	}
}

VXPayPaymentHooksConfig.ON_ANY            = 'onAny';
VXPayPaymentHooksConfig.ON_BEFORE_SEND    = 'onBeforeSend';
VXPayPaymentHooksConfig.ON_LOAD           = 'onLoad';
VXPayPaymentHooksConfig.ON_VIEW_READY     = 'onViewReady';
VXPayPaymentHooksConfig.ON_IFRAME_READY   = 'onIframeReady';
VXPayPaymentHooksConfig.ON_CONTENT_LOADED = 'onContentLoaded';
VXPayPaymentHooksConfig.ON_CLOSE          = 'onClose';
VXPayPaymentHooksConfig.ON_SUCCESS        = 'onSuccess';
VXPayPaymentHooksConfig.ON_LOGIN          = 'onLogin';

export default VXPayPaymentHooksConfig;
