import VXPayMessageFactory     from './../VXPayMessageFactory'
import VXPayMessage            from './../../VXPayMessage'
import VXPayPaymentHooksConfig from './../../Config/VXPayPaymentHooksConfig'
import VXPayHookMessage        from './VXPayHookMessage'
import VXPayIframe             from "../../Dom/VXPayIframe";

/**
 * @param {VXPayPaymentHooksConfig} hooks
 * @param {MessageEvent|Object} event
 * @return {boolean}
 * @throws {TypeError}
 * @constructor
 */
const VXPayHookRouter = (hooks, event) => {
	// origin check
	if (event.origin && VXPayIframe.ORIGIN.indexOf(event.origin) === -1) {
		throw new TypeError('Event origin does not match: ' + event.origin);
	}

	// parse message
	const message = VXPayMessageFactory.fromJson(event.data);

	// route any
	hooks.trigger(VXPayPaymentHooksConfig.ON_ANY, [message]);

	switch (message.type) {
		case VXPayMessage.TYPE_TRANSFER_TOKEN:
			return hooks.trigger(VXPayPaymentHooksConfig.ON_TRANSFER_TOKEN, [message]);

		case VXPayMessage.TYPE_IFRAME_READY:
			return hooks.trigger(VXPayPaymentHooksConfig.ON_IFRAME_READY, [message]);

		case VXPayMessage.TYPE_CONTENT_LOADED:
			return hooks.trigger(VXPayPaymentHooksConfig.ON_CONTENT_LOADED, [message]);

		case VXPayMessage.TYPE_VIEW_READY:
			return hooks.trigger(VXPayPaymentHooksConfig.ON_VIEW_READY, [message]);

		case VXPayMessage.TYPE_IFRAME_CLOSE:
			return hooks.trigger(VXPayPaymentHooksConfig.ON_CLOSE, [message]);

		case VXPayMessage.TYPE_SUCCESS:
			return hooks.trigger(VXPayPaymentHooksConfig.ON_SUCCESS, [message]);

		case VXPayMessage.TYPE_IS_LOGGED_IN:
			return hooks.trigger(VXPayPaymentHooksConfig.ON_IS_LOGGED_IN, [message]);

		case VXPayMessage.TYPE_HOOK:
			switch (message.hook) {
				case VXPayHookMessage.HOOK_LOGIN:
					return hooks.trigger(VXPayPaymentHooksConfig.ON_LOGIN, [message]);

				case VXPayHookMessage.HOOK_FLOW_CHANGED:
					return hooks.trigger(VXPayPaymentHooksConfig.ON_FLOW_CHANGE, [message]);
			}
	}
};

export default VXPayHookRouter;
