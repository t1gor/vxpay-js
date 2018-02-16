import VXPayHookMessage from './VXPayHookMessage'

export default class VXPayLoggedInMessage extends VXPayHookMessage {
	constructor(hook = '') {
		super(VXPayHookMessage.HOOK_LOGIN);
	}
}
