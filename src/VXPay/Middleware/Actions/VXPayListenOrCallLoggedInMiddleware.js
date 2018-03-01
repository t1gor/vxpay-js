import VXPayIsLoggedInTriggerMiddleware from './VXPayIsLoggedInTriggerMiddleware'

class VXPayListenOrCallLoggedInMiddleware {
	/**
	 * @param {VXPay} vxpay
	 * @param {Function} resolve
	 * @param {Function} reject
	 * @constructor
	 */
	constructor(vxpay, resolve, reject) {
		this._vxpay   = vxpay;
		this._resolve = resolve;
		this._reject  = reject;
		this._handler = this.trigger.bind(this);
	}

	/**
	 * @return {VXPay}
	 */
	run() {
		try {
			// is token already received?
			if (this._vxpay.state.hasToken) {
				this._handler();
				return this._vxpay;
			}

			// did we set handler already?
			if (!this._vxpay.hooks.hasOnTransferToken(this._handler)) {
				this._vxpay.hooks.onTransferToken(this._handler);
			}

			return this._vxpay;
		} catch (err) {
			this._reject(err);
		}
	}

	/**
	 * @return {void}
	 */
	trigger() {
		VXPayIsLoggedInTriggerMiddleware(this._vxpay, this._resolve, this._reject);
	}
}

export default VXPayListenOrCallLoggedInMiddleware;
