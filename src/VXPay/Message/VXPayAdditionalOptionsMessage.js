import VXPayMessage from './../VXPayMessage'

class VXPayAdditionalOptionsMessage extends VXPayMessage {
	/**
	 * @param {Object} options
	 */
	constructor(options = {}) {
		super(VXPayMessage.TYPE_ADDITIONAL_INFO);
		this.options = options;
	}
}

export default VXPayAdditionalOptionsMessage;
