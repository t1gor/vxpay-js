import VXPayMessage from './../VXPayMessage'

export default class VXPayIframeReadyMessage extends VXPayMessage {
	constructor(type = '') {
		super(VXPayMessage.TYPE_IFRAME_READY);
	}
}
