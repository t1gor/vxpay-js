import VXPayMessage from './../../VXPayMessage'

class VXPayGetBalanceMessage extends VXPayMessage {
	constructor() {
		super(VXPayMessage.TYPE_ACTION_GET_BALANCE);
	}
}

export default VXPayGetBalanceMessage;
