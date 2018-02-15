import VXPayMessage from './../VXPayMessage'

export default class VXPaySuccessMessage extends VXPayMessage {
	/**
	 * @param {Object} data
	 */
	constructor(data = {}) {
		super(VXPayMessage.TYPE_SUCCESS);
		this.userData = data;
	}
}
