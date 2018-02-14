import VXPayMessage from './../VXPayMessage'

export default class VXPayContentLoadedMessage extends VXPayMessage {
	constructor(type = '') {
		super(VXPayMessage.TYPE_CONTENT_LOADED);
	}
}
