import VXPayHookMessage            from './VXPayHookMessage'
import VXPayFlowChangedHookMessage from './VXPayFlowChangedMessage'

export default class VXPayHookMessageFactory {

	/**
	 * @param data
	 * @return {VXPayHookMessage}
	 */
	static fromData(data = {}) {
		if (!data.hasOwnProperty('hook')) {
			throw new TypeError('Invalid message format - no hook field');
		}

		switch (data.hook) {
			case VXPayHookMessage.HOOK_FLOW_CHANGED:
				return new VXPayFlowChangedHookMessage(data.prevFlow, data.flow);
		}
	}
}
