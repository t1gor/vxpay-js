class VXPayPaymentHooksConfig {
	constructor() {
		this._onAny           = [];
		this._onBeforeSend    = [];
		this._onLoad          = [];
		this._onViewReady     = [];
		this._onContentLoaded = [];
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
	 * @return {Function[]}
	 */
	getAny() {
		return this._onAny;
	}

	/**
	 * @return {boolean}
	 */
	hasAny() {
		return this._onAny.length > 0;
	}

	/**
	 * @return {boolean}
	 */
	hasBeforeSend() {
		return this._onBeforeSend.length > 0;
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
	 * @return {Function[]}
	 */
	getBeforeSend() {
		return this._onBeforeSend;
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
	 * @return {Function[]}
	 */
	getOnLoad() {
		return this._onLoad;
	}

	/**
	 * @return {boolean}
	 */
	hasOnLoad() {
		return this._onLoad.length > 0;
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
	 * @return {Function[]}
	 */
	getOnViewReady() {
		return this._onViewReady;
	}

	/**
	 * @return {boolean}
	 */
	hasOnViewReady() {
		return this._onViewReady.length > 0;
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
	 * @return {boolean}
	 */
	hasOnContentLoaded() {
		return this._onContentLoaded.length > 0;
	}

	/**
	 * @return {Function[]}
	 */
	getOnContentLoaded() {
		return this._onContentLoaded;
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
			callback.apply(callback, callbackArguments);
		});

		return true;
	}
}

VXPayPaymentHooksConfig.ON_ANY            = 'onAny';
VXPayPaymentHooksConfig.ON_BEFORE_SEND    = 'onBeforeSend';
VXPayPaymentHooksConfig.ON_LOAD           = 'onLoad';
VXPayPaymentHooksConfig.ON_VIEW_READY     = 'onViewReady';
VXPayPaymentHooksConfig.ON_CONTENT_LOADED = 'onContentLoaded';

export default VXPayPaymentHooksConfig;
