import VXPayIframe    from './../VXPayIframe'
import VXPayMessage   from './../../VXPayMessage'

class VXPayHelperFrame extends VXPayIframe {
	constructor(document, url, id, style = null) {
		// init the frame
		super(document, url, id, {display: 'none'});
	}

	getLoginCookie() {
		return new Promise(resolve => {
			this.setMessageHandler(e => {
				// origin check
				if (e && e.origin && 'https://visit-x.net/'.indexOf(e.origin) === -1) {
					return false;
				}

				try {
					const data = e.data;
					const json = JSON.parse(data);

					if (json.type === VXPayMessage.TYPE_HAS_LOGIN_COOKIE) {
						resolve(!!json.data);
					}
				} catch (e) {}

				// otherwise - not logged in
				resolve(false);
			});
		})
	}
}

export default VXPayHelperFrame
