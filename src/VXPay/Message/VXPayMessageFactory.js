import VXPayMessage                 from './../VXPayMessage'
import VXPayHasSessionCookieMessage from './VXPayHasSessionCookieMessage'

export default class VXPayMessageFactory {

	/**
	 * @param json
	 * @return {VXPayMessage}
	 * @throws {TypeError|SyntaxError}
	 */
	static fromJson(json = '{}') {
		const message = JSON.parse(json);

		if (!message.hasOwnProperty('type')) {
			throw new TypeError('Invalid message format - no type field');
		}

		switch (message.type) {
			case VXPayMessage.TYPE_HAS_LOGIN_COOKIE:
				return new VXPayHasSessionCookieMessage(!!message.data);
		}
	}
}
