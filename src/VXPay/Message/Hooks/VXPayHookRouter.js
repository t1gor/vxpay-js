import VXPayMessageFactory     from './../VXPayMessageFactory'
import VXPayMessage            from './../../VXPayMessage'
import VXPayPaymentHooksConfig from './../../Config/VXPayPaymentHooksConfig'

/**
 * @param {VXPayPaymentHooksConfig} hooks
 * @param {MessageEvent} event
 * @return {boolean}
 * @constructor
 */
const VXPayHookRouter = (hooks, event) => {
	const message = VXPayMessageFactory.fromJson(event.data);

	// route any
	hooks.trigger(VXPayPaymentHooksConfig.ON_ANY, [message]);

	switch (message.type) {
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
	}
};

export default VXPayHookRouter;