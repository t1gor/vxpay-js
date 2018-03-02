import VXPayMessage                   from './../VXPayMessage'
import VXPayHasSessionCookieMessage   from './VXPayHasSessionCookieMessage'
import VXPayContentLoadedMessage      from './VXPayContentLoadedMessage'
import VXPayHookMessageFactory        from './Hooks/VXPayHookMessageFactory'
import VXPayIframeReadyMessage        from './VXPayIframeReadyMessage'
import VXPayViewReadyMessage          from './VXPayViewReadyMessage'
import VXPayTransferTokenMessage      from './VXPayTransferTokenMessage'
import VXPayIframeCloseMessage        from './VXPayIframeCloseMessage'
import VXPayIsVisibleMessage          from './VXPayIsVisibleMessage'
import VXPaySuccessMessage            from './VXPaySuccessMessage'
import VXPayIsLoggedInResponseMessage from './Actions/VXPayIsLoggedInResponseMessage'
import VXPayAVSStatusMessage          from './Actions/VXPayAVSStatusMessage'
import VXPayAVSStatus                 from './../Model/VXPayAVSStatus'
import VXPayBalanceMessage            from './Actions/VXPayBalanceMessage'
import VXPayActiveAbosMessage         from './Actions/VXPayActiveAbosMessage'
import VXPayLoggedOutMessage          from './Actions/VXPayLoggedOutMessage'

export default class VXPayMessageFactory {

	/**
	 * @param {string} json
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

			case VXPayMessage.TYPE_AVS_STATUS:
				return new VXPayAVSStatusMessage(VXPayAVSStatus.fromData(message.data));

			case VXPayMessage.TYPE_BALANCE:
				return VXPayBalanceMessage.fromData(message.data);

			case VXPayMessage.TYPE_LOGGED_OUT:
				return new VXPayLoggedOutMessage;

			case VXPayMessage.TYPE_ACTIVE_ABOS:
				return VXPayActiveAbosMessage.fromData(message.data);

			case VXPayMessage.TYPE_CONTENT_LOADED:
				return new VXPayContentLoadedMessage();

			case VXPayMessage.TYPE_IFRAME_READY:
				return new VXPayIframeReadyMessage();

			case VXPayMessage.TYPE_HOOK:
				return VXPayHookMessageFactory.fromData(message.data);

			case VXPayMessage.TYPE_VIEW_READY:
				return new VXPayViewReadyMessage();

			case VXPayMessage.TYPE_IFRAME_CLOSE:
				return new VXPayIframeCloseMessage(message.data);

			case VXPayMessage.TYPE_IS_VISIBLE:
				return new VXPayIsVisibleMessage();

			case VXPayMessage.TYPE_SUCCESS:
				return new VXPaySuccessMessage(message.data);

			case VXPayMessage.TYPE_IS_LOGGED_IN:
				return new VXPayIsLoggedInResponseMessage(message.data);
		}

		// default
		// transfer token?
		if (message.type.indexOf(VXPayMessage.TRANSFER_TOKEN_PREFIX) === 0) {
			const token = message.type.substr(VXPayMessage.TRANSFER_TOKEN_PREFIX.length);
			return new VXPayTransferTokenMessage(token);
		}

		// return an unknown message, but still a message
		const unknown = new VXPayMessage(message.type);
		unknown.raw   = json;

		return unknown;
	}
}
