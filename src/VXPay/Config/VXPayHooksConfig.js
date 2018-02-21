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
		this._onLoad.push(handler);
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayHooksConfig}
	 */
	onAny(handler) {
		this._onAny.push(handler);
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayHooksConfig}
	 */
	onBeforeSend(handler) {
		this._onBeforeSend.push(handler);
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
			callback.apply(callback, callbackArguments);
		});

		return true;
	}
}

VXPayHooksConfig.ON_LOAD        = 'onLoad';
VXPayHooksConfig.ON_ANY         = 'onAny';
VXPayHooksConfig.ON_BEFORE_SEND = 'onBeforeSend';

export default VXPayHooksConfig;
