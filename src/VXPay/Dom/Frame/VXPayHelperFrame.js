import VXPayIframe                  from './../VXPayIframe'
import VXPayHasSessionCookieMessage from './../../Message/VXPayHasSessionCookieMessage'
import VXPayMessageFactory          from './../../Message/VXPayMessageFactory'

class VXPayHelperFrame extends VXPayIframe {
	constructor(document, url, id, style = null) {
		// init the frame
		super(document, url, id, {display: 'none'});
	}

	/**
	 * @return {Promise<any>}
	 */
	getLoginCookie() {
		return new Promise(resolve => {
			this.setMessageHandler(e => {
				// origin check
				if (e && e.origin && 'https://visit-x.net/'.indexOf(e.origin) === -1) {
					return false;
				}

				try {
					resolve(VXPayMessageFactory.fromJson(e.data));
				} catch (e) {}

				// otherwise - not logged in
				resolve(new VXPayHasSessionCookieMessage());
			});
		})
	}
}

export default VXPayHelperFrame
