import VXPayIframe                  from './../VXPayIframe'
import VXPayHasSessionCookieMessage from './../../Message/VXPayHasSessionCookieMessage'
import VXPayMessageFactory          from './../../Message/VXPayMessageFactory'
import VXPayEventListener           from './../../Event/VXPayEventListener'

class VXPayHelperFrame extends VXPayIframe {
	/**
	 * @param {Document} document
	 * @param {String} url
	 * @param {String} id
	 * @param {CSSStyleDeclaration} style
	 */
	constructor(document, url, id, style = {display: 'none'}) {
		// init the frame
		super(document, url, id, style);
		this._cookieMsg = null;
	}

	/**
	 * @param {Function} resolve
	 * @param {Function} reject
	 * @param {MessageEvent} event
	 * @return {boolean}
	 * @private
	 */
	_cookieMessageHandler(resolve, reject, event) {
		// origin check
		if (event.origin && VXPayIframe.ORIGIN.indexOf(event.origin) === -1) {
			reject('Event origin does not match: ' + event.origin);
		}

		try {
			this._cookieMsg = VXPayMessageFactory.fromJson(event.data);
		} catch (e) {
			this._cookieMsg = new VXPayHasSessionCookieMessage();
		}

		// otherwise - not logged in
		resolve(this._cookieMsg);
	}

	/**
	 * @return {Promise<any>}
	 */
	getLoginCookie() {
		return new Promise((resolve, reject) => {
			VXPayEventListener.addEvent(
				VXPayIframe.EVENT_MESSAGE,
				this._frame.ownerDocument.defaultView,
				this._cookieMessageHandler.bind(this, resolve, reject)
			)
		})
	}
}

export default VXPayHelperFrame
