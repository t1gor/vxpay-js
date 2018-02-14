import VXPayMessage from './../VXPayMessage'

export default class VXPayViewReadyMessage extends VXPayMessage {
	constructor(type = '') {
		super(VXPayMessage.TYPE_VIEW_READY);
	}
}
