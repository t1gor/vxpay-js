import VXPayMessage from './../VXPayMessage'

class VXPayInitSessionMessage extends VXPayMessage {
	/**
	 * @param {String} token
	 */
	constructor(token = null) {
		super(VXPayMessage.TYPE_INIT_SESSION);
		this.token = token;
	}
}

export default VXPayInitSessionMessage;
