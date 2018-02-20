import VXPayMessage from './../../VXPayMessage'

class VXPayIsLoggedInResponseMessage extends VXPayMessage {
	/**
	 * @param {Boolean} loggedIn
	 */
	constructor(loggedIn = false) {
		super(VXPayMessage.TYPE_IS_LOGGED_IN);
		this.loggedIn = loggedIn;
	}
}

export default VXPayIsLoggedInResponseMessage;
