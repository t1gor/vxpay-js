import VXPayMessage from './../VXPayMessage'

export default class VXPayIframeCloseMessage extends VXPayMessage {
	/**
	 * @param {Object} data
	 */
	constructor(data = {}) {
		super(VXPayMessage.TYPE_IFRAME_CLOSE);
		this.data = data;
	}
}
