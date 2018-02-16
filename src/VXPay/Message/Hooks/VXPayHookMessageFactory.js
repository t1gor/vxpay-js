import VXPayHookMessage            from './VXPayHookMessage'
import VXPayFlowChangedHookMessage from './VXPayFlowChangedMessage'
import VXPayLoggedInMessage        from './VXPayLoggedInMessage'

export default class VXPayHookMessageFactory {

	/**
	 * @param data
	 * @return {VXPayHookMessage}
	 */
	static fromData(data = {}) {
		if (typeof data === 'undefined' || !data.hasOwnProperty('hook')) {
			throw new TypeError('Invalid message format - no hook field');
		}

		switch (data.hook) {
			case VXPayHookMessage.HOOK_FLOW_CHANGED:
				return new VXPayFlowChangedHookMessage(data.prevFlow, data.flow);

			case VXPayHookMessage.HOOK_LOGIN:
				return new VXPayLoggedInMessage();

			default:
				return new VXPayHookMessage();
		}
	}
}
