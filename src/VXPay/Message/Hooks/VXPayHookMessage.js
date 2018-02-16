import VXPayMessage from './../../VXPayMessage'

class VXPayHookMessage extends VXPayMessage {

	/**
	 * @param {string} hook
	 */
	constructor(hook = '') {
		super(VXPayMessage.TYPE_HOOK);
		this.hook = hook;
	}
}

VXPayHookMessage.HOOK_FLOW_CHANGED = 'flowChanged';
VXPayHookMessage.HOOK_LOGIN = 'login';

export default VXPayHookMessage;
