import VXPayHooksConfig from './VXPayHooksConfig'

class VXPayPaymentHooksConfig extends VXPayHooksConfig {
	constructor() {
		super();
		this._onViewReady     = [];
		this._onContentLoaded = [];
		this._onClose         = [];
		this._onSuccess       = [];
		this._onIframeReady   = [];
		this._onLogin         = [];
		this._onFlowChange    = [];
		this._onIsLoggedIn    = [];
		this._onTransferToken = [];
		this._onAVSStatus     = [];
		this._onBalance       = [];
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	onBalance(handler) {
		this._onBalance.push(handler);
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {boolean}
	 */
	hasOnBalance(handler) {
		return this._onBalance.indexOf(handler) !== -1;
	}

	/**
	 * @param {Function} handler
	 */
	onAVSStatus(handler) {
		this._onAVSStatus.push(handler);
	}

	/**
	 * @param {Function} handler
	 * @return {boolean}
	 */
	hasOnAVSStatus(handler) {
		return this._onAVSStatus.indexOf(handler) !== -1;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	onIsLoggedIn(handler) {
		this._onIsLoggedIn.push(handler);
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {boolean}
	 */
	hasOnIsLoggedIn(handler) {
		return this._onIsLoggedIn.indexOf(handler) !== -1;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	onTransferToken(handler) {
		this._onTransferToken.push(handler);
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	onFlowChange(handler) {
		this._onFlowChange.push(handler);
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	onLogin(handler) {
		this._onLogin.push(handler);
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	onIframeReady(handler) {
		this._onIframeReady.push(handler);
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	onClose(handler) {
		this._onClose.push(handler);
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	onSuccess(handler) {
		this._onSuccess.push(handler);
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	onViewReady(handler) {
		this._onViewReady.push(handler);
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	onContentLoaded(handler) {
		this._onContentLoaded.push(handler);
		return this;
	}
}

VXPayPaymentHooksConfig.ON_VIEW_READY     = 'onViewReady';
VXPayPaymentHooksConfig.ON_IFRAME_READY   = 'onIframeReady';
VXPayPaymentHooksConfig.ON_CONTENT_LOADED = 'onContentLoaded';
VXPayPaymentHooksConfig.ON_CLOSE          = 'onClose';
VXPayPaymentHooksConfig.ON_SUCCESS        = 'onSuccess';
VXPayPaymentHooksConfig.ON_LOGIN          = 'onLogin';
VXPayPaymentHooksConfig.ON_FLOW_CHANGE    = 'onFlowChange';
VXPayPaymentHooksConfig.ON_IS_LOGGED_IN   = 'onIsLoggedIn';
VXPayPaymentHooksConfig.ON_TRANSFER_TOKEN = 'onTransferToken';
VXPayPaymentHooksConfig.ON_AVS_STATUS     = 'onAVSStatus';
VXPayPaymentHooksConfig.ON_BALANCE        = 'onBalance';

export default VXPayPaymentHooksConfig;
