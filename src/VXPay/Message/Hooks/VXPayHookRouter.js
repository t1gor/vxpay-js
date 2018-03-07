import VXPayMessageFactory     from './../VXPayMessageFactory'
import VXPayMessage            from './../../VXPayMessage'
import VXPayPaymentHooksConfig from './../../Config/VXPayPaymentHooksConfig'
import VXPayHookMessage        from './VXPayHookMessage'


class VXPayHookRouter {
	/**
	 * @param {VXPayPaymentHooksConfig} hooks
	 * @constructor
	 */
	constructor(hooks) {
		this._hooks = hooks;
	}

	/**
	 * @param {MessageEvent|Object} event
	 * @throws {TypeError}
	 * @return {void|boolean|*}
	 */
	route(event) {
		// origin check
		if (!this._hooks.isTrusted(event.origin) || (typeof event.data !== 'string')) {
			// throw new TypeError('Event origin does not match: ' + event.origin);
			return;
		}

		// parse message
		const message = VXPayMessageFactory.fromJson(event.data);

		// route any
		this._hooks.trigger(VXPayPaymentHooksConfig.ON_ANY, [message]);

		switch (message.type) {
			case VXPayMessage.TYPE_CONFIG_CHANGED:
				return this._hooks.trigger(VXPayPaymentHooksConfig.ON_CONFIG_CHANGED, [message]);

			case VXPayMessage.TYPE_TRANSFER_TOKEN:
				return this._hooks.trigger(VXPayPaymentHooksConfig.ON_TRANSFER_TOKEN, [message]);

			case VXPayMessage.TYPE_AVS_STATUS:
				return this._hooks.trigger(VXPayPaymentHooksConfig.ON_AVS_STATUS, [message]);

			case VXPayMessage.TYPE_BALANCE:
				return this._hooks.trigger(VXPayPaymentHooksConfig.ON_BALANCE, [message]);

			case VXPayMessage.TYPE_ACTIVE_ABOS:
				return this._hooks.trigger(VXPayPaymentHooksConfig.ON_ACTIVE_ABOS, [message]);

			case VXPayMessage.TYPE_IFRAME_READY:
				return this._hooks.trigger(VXPayPaymentHooksConfig.ON_IFRAME_READY, [message]);

			case VXPayMessage.TYPE_CONTENT_LOADED:
				return this._hooks.trigger(VXPayPaymentHooksConfig.ON_CONTENT_LOADED, [message]);

			case VXPayMessage.TYPE_VIEW_READY:
				return this._hooks.trigger(VXPayPaymentHooksConfig.ON_VIEW_READY, [message]);

			case VXPayMessage.TYPE_IFRAME_CLOSE:
				return this._hooks.trigger(VXPayPaymentHooksConfig.ON_CLOSE, [message]);

			case VXPayMessage.TYPE_SUCCESS:
				return this._hooks.trigger(VXPayPaymentHooksConfig.ON_SUCCESS, [message]);

			case VXPayMessage.TYPE_IS_LOGGED_IN:
				return this._hooks.trigger(VXPayPaymentHooksConfig.ON_IS_LOGGED_IN, [message]);

			case VXPayMessage.TYPE_LOGGED_OUT:
				return this._hooks.trigger(VXPayPaymentHooksConfig.ON_LOGOUT, [message]);

			case VXPayMessage.TYPE_HOOK:
				switch (message.hook) {
					case VXPayHookMessage.HOOK_LOGIN:
						return this._hooks.trigger(VXPayPaymentHooksConfig.ON_LOGIN, [message]);

					case VXPayHookMessage.HOOK_FLOW_CHANGED:
						return this._hooks.trigger(VXPayPaymentHooksConfig.ON_FLOW_CHANGE, [message]);
				}
		}
	}
}

export default VXPayHookRouter;
