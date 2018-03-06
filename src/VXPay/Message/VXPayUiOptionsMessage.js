import VXPayMessage from './../VXPayMessage'

export default class VXPayUiOptionsMessage extends VXPayMessage {
	/**
	 * @param {Object} options
	 */
	constructor(options = {}) {
		super(VXPayMessage.TYPE_UI_OPTIONS);
		this.data = options;
	}
}
