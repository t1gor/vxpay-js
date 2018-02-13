import VXPayMessage from './../VXPayMessage'

export default class VXPayUpdateParamsMessage extends VXPayMessage {
	/**
	 * @param {Object} options
	 */
	constructor(options = {}) {
		super(VXPayMessage.TYPE_UPDATE_PARAMS);
		this.options = options;
	}
}
