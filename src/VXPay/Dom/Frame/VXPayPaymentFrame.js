import VXPayIframe              from './../VXPayIframe'
import VXPayInitSessionMessage  from './../../Message/VXPayInitSessionMessage'
import VXPayUpdateParamsMessage from "../../Message/VXPayUpdateParamsMessage";
import VXPayChangeRouteMessage  from "../../Message/VXPayChangeRouteMessage";

class VXPayPaymentFrame extends VXPayIframe {
	/**
	 * @param {String|undefined} token
	 */
	initSession(token = undefined) {
		token = token || null;

		// init lazy loading session
		this.postMessage(new VXPayInitSessionMessage(token));
	}

	sendAction() {

	}

	/**
	 * @param {Object} options
	 * @return {VXPayPaymentFrame}
	 */
	sendOptions(options = {}) {
		this.postMessage(new VXPayUpdateParamsMessage(options));
		return this;
	}

	/**
	 * @param {String} path
	 */
	show(path = 'login') {
		console.log('show :: ' + path);

		this.showOverlay();
		this.showSpinner();
		this.changeRoute('/' + path);
		this.initSession();

		this._frame.style.display = 'block';
	}

	showSpinner() {

	}

	showOverlay() {

	}

	changeRoute(route) {
		this.postMessage(new VXPayChangeRouteMessage(route));
	}
}

export default VXPayPaymentFrame;
