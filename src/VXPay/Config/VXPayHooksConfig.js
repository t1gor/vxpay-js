class VXPayHooksConfig {
	constructor() {
		this._onAny           = [];
		this._onBeforeSend    = [];
		this._onLoad          = [];
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayHooksConfig}
	 */
	onLoad(handler) {
		if (!this.hasOnLoad(handler)) {
			this._onLoad.push(handler);
		}
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {boolean}
	 */
	hasOnLoad(handler) {
		return this._onLoad.indexOf(handler) !== -1;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayHooksConfig}
	 */
	onAny(handler) {
		if (!this.hasOnAny(handler)) {
			this._onAny.push(handler);
		}
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {boolean}
	 */
	hasOnAny(handler) {
		return this._onAny.indexOf(handler) !== -1;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayHooksConfig}
	 */
	onBeforeSend(handler) {
		if (!this.hasOnBeforeSend(handler)) {
			this._onBeforeSend.push(handler);
		}
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {boolean}
	 */
	hasOnBeforeSend(handler) {
		return this._onBeforeSend.indexOf(handler) !== -1;
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

VXPayHooksConfig.ON_LOAD        = 'onLoad';
VXPayHooksConfig.ON_ANY         = 'onAny';
VXPayHooksConfig.ON_BEFORE_SEND = 'onBeforeSend';

export default VXPayHooksConfig;
