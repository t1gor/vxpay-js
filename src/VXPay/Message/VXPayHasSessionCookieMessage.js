import VXPayMessage from './../VXPayMessage'

export default class VXPayHasSessionCookieMessage extends VXPayMessage {
	/**
	 * @param {Boolean} hasCookie
	 */
	constructor(hasCookie = false) {
		super(VXPayMessage.TYPE_HAS_LOGIN_COOKIE);
		this.hasCookie = hasCookie;
	}
}
