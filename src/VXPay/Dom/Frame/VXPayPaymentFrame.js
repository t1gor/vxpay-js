import VXPayIframe             from './../VXPayIframe'
import VXPayInitSessionMessage from './../../Message/VXPayInitSessionMessage'

class VXPayPaymentFrame extends VXPayIframe {
	/**
	 * @param {String} token
	 */
	initSession(token) {
		token = token || null;

		// init lazy loading session
		this.postMessage(new VXPayInitSessionMessage(token));
	}

	sendAction() {

	}
}