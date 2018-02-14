import VXPayMessage from './../VXPayMessage'

export default class VXPayIframeCloseMessage extends VXPayMessage {
	constructor(type = '') {
		super(VXPayMessage.TYPE_IFRAME_CLOSE);
	}
}
