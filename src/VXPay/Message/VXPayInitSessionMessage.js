import VXPayMessage from './../VXPayMessage'

class VXPayInitSessionMessage extends VXPayMessage {
	/**
	 * @param {String} token
	 */
	constructor(token) {
		super(VXPayMessage.TYPE_INIT_SESSION);
		this.token = token;
	}
}

export default VXPayInitSessionMessage;
