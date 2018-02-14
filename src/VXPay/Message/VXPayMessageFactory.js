import VXPayMessage                 from './../VXPayMessage'
import VXPayHasSessionCookieMessage from './VXPayHasSessionCookieMessage'
import VXPayContentLoadedMessage    from './VXPayContentLoadedMessage'
import VXPayHookMessageFactory      from './Hooks/VXPayHookMessageFactory'
import VXPayIframeReadyMessage      from './VXPayIframeReadyMessage'
import VXPayViewReadyMessage        from './VXPayViewReadyMessage'
import VXPayTransferTokenMessage    from './VXPayTransferTokenMessage'

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

			case VXPayMessage.TYPE_CONTENT_LOADED:
				return new VXPayContentLoadedMessage();

			case VXPayMessage.TYPE_IFRAME_READY:
				return new VXPayIframeReadyMessage();

			case VXPayMessage.TYPE_HOOK:
				return VXPayHookMessageFactory.fromData(message.data);

			case VXPayMessage.TYPE_VIEW_READY:
				return new VXPayViewReadyMessage();

			default:
				// transfer token?
				if (message.type.indexOf(VXPayMessage.TRANSFER_TOKEN_PREFIX) === 0) {
					const token = message.type.substr(VXPayMessage.TRANSFER_TOKEN_PREFIX.length);
					return new VXPayTransferTokenMessage(token);
				}
				console.log(message.type);
		}
	}
}
