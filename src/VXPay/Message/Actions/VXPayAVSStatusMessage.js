import VXPayMessage   from './../../VXPayMessage'
import VXPayAVSStatus from './../../Model/VXPayAVSStatus'

export default class VXPayAVSStatusMessage extends VXPayMessage {
	/**
	 * @param {VXPayAVSStatus} status
	 */
	constructor(status = new VXPayAVSStatus) {
		super(VXPayMessage.TYPE_AVS_STATUS);
		this.status = status;
	}
}
