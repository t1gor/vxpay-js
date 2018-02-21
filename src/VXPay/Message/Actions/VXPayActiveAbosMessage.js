import VXPayMessage from './../../VXPayMessage'

class VXPayActiveAbosMessage extends VXPayMessage {
	constructor() {
		super(VXPayMessage.TYPE_ACTIVE_ABOS);
		this.abos = [];
	}

	/**
	 * @todo finish!
	 * @param {Object} data
	 * @return {VXPayActiveAbosMessage}
	 */
	static fromData(data = VXPayActiveAbosMessage.SAMPLE_DATA) {
		const instance = new VXPayActiveAbosMessage;
		return instance;
	}
}

VXPayActiveAbosMessage.SAMPLE_DATA = {

};

export default VXPayActiveAbosMessage;
