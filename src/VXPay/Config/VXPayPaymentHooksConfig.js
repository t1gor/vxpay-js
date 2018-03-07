import VXPayHooksConfig from './VXPayHooksConfig'
import VXPayIframe      from './../Dom/VXPayIframe'

class VXPayPaymentHooksConfig extends VXPayHooksConfig {
	/**
	 * @param {String} origin
	 */
	constructor(origin = '*') {
		super();
		this._onViewReady     = [];
		this._onContentLoaded = [];
		this._onClose         = [];
		this._onSuccess       = [];
		this._onIframeReady   = [];
		this._onLogin         = [];
		this._onLogout        = [];
		this._onFlowChange    = [];
		this._onIsLoggedIn    = [];
		this._onTransferToken = [];
		this._onAVSStatus     = [];
		this._onBalance       = [];
		this._onActiveAbos    = [];
		this._onConfigChanged = [];
		this._trusted         = [
			VXPayIframe.ORIGIN_VX,
			origin
		];
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	onConfigChanged(handler) {
		if (!this.hasOnConfigChanged(handler)) {
			this._onConfigChanged.push(handler);
		}

		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {boolean}
	 */
	hasOnConfigChanged(handler) {
		return this._onConfigChanged.indexOf(handler) !== -1;
	}

	/**
	 * @return {String[]}
	 */
	get trusted() {
		return this._trusted;
	}

	/**
	 * @param {String} origin
	 * @return {boolean}
	 */
	isTrusted(origin) {
		return this._trusted.indexOf(origin) !== -1;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	onLogout(handler) {
		if (!this.hasOnLogout(handler)) {
			this._onLogout.push(handler);
		}
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {boolean}
	 */
	hasOnLogout(handler) {
		return this._onLogout.indexOf(handler) !== -1;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	onActiveAbos(handler) {
		if (!this.hasOnActiveAbos(handler)) {
			this._onActiveAbos.push(handler);
		}
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {boolean}
	 */
	hasOnActiveAbos(handler) {
		return this._onActiveAbos.indexOf(handler) !== -1;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	onBalance(handler) {
		if (!this.hasOnBalance(handler)) {
			this._onBalance.push(handler);
		}
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
		if (!this.hasOnAVSStatus(handler)) {
			this._onAVSStatus.push(handler);
		}
		return this;
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
		if (!this.hasOnIsLoggedIn(handler)) {
			this._onIsLoggedIn.push(handler);
		}
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
		if (!this.hasOnTransferToken(handler)) {
			this._onTransferToken.push(handler);
		}
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {boolean}
	 */
	hasOnTransferToken(handler) {
		return this._onTransferToken.indexOf(handler) !== -1;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	onFlowChange(handler) {
		if (!this.hasOnFlowChange(handler)) {
			this._onFlowChange.push(handler);
		}
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {boolean}
	 */
	hasOnFlowChange(handler) {
		return this._onFlowChange.indexOf(handler) !== -1;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	onLogin(handler) {
		if (!this.hasOnLogin(handler)) {
			this._onLogin.push(handler);
		}
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {boolean}
	 */
	hasOnLogin(handler) {
		return this._onLogin.indexOf(handler) !== -1;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	onIframeReady(handler) {
		if (!this.hasOnIframeReady(handler)) {
			this._onIframeReady.push(handler);
		}
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {boolean}
	 */
	hasOnIframeReady(handler) {
		return this._onIframeReady.indexOf(handler) !== -1;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	onClose(handler) {
		if (!this.hasOnClose(handler)) {
			this._onClose.push(handler);
		}
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {boolean}
	 */
	hasOnClose(handler) {
		return this._onClose.indexOf(handler) !== -1;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	removeOnClose(handler) {
		if (this.hasOnSuccess(handler)) {
			this._onClose.splice(this._onClose.indexOf(handler), 1);
		}
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	onSuccess(handler) {
		if (!this.hasOnSuccess(handler)) {
			this._onSuccess.push(handler);
		}
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {boolean}
	 */
	hasOnSuccess(handler) {
		return this._onSuccess.indexOf(handler) !== -1;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	removeOnSuccess(handler) {
		if (this.hasOnSuccess(handler)) {
			this._onSuccess.splice(this._onSuccess.indexOf(handler), 1);
		}
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	onViewReady(handler) {
		if (!this.hasOnViewReady(handler)) {
			this._onViewReady.push(handler);
		}
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	removeOnViewReady(handler) {
		console.log(this.hasOnViewReady(handler));

		if (this.hasOnViewReady(handler)) {
			this._onViewReady.splice(this._onViewReady.indexOf(handler), 1);
		}
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {boolean}
	 */
	hasOnViewReady(handler) {
		return this._onViewReady.indexOf(handler) !== -1;
	}

	/**
	 * @param {Function} handler
	 * @return {VXPayPaymentHooksConfig}
	 */
	onContentLoaded(handler) {
		if (!this.hasOnContentLoaded(handler)) {
			this._onContentLoaded.push(handler);
		}
		return this;
	}

	/**
	 * @param {Function} handler
	 * @return {boolean}
	 */
	hasOnContentLoaded(handler) {
		return this._onContentLoaded.indexOf(handler) !== -1;
	}
}

VXPayPaymentHooksConfig.ON_VIEW_READY     = 'onViewReady';
VXPayPaymentHooksConfig.ON_IFRAME_READY   = 'onIframeReady';
VXPayPaymentHooksConfig.ON_CONTENT_LOADED = 'onContentLoaded';
VXPayPaymentHooksConfig.ON_CLOSE          = 'onClose';
VXPayPaymentHooksConfig.ON_SUCCESS        = 'onSuccess';
VXPayPaymentHooksConfig.ON_LOGIN          = 'onLogin';
VXPayPaymentHooksConfig.ON_LOGOUT         = 'onLogout';
VXPayPaymentHooksConfig.ON_FLOW_CHANGE    = 'onFlowChange';
VXPayPaymentHooksConfig.ON_IS_LOGGED_IN   = 'onIsLoggedIn';
VXPayPaymentHooksConfig.ON_TRANSFER_TOKEN = 'onTransferToken';
VXPayPaymentHooksConfig.ON_AVS_STATUS     = 'onAVSStatus';
VXPayPaymentHooksConfig.ON_BALANCE        = 'onBalance';
VXPayPaymentHooksConfig.ON_ACTIVE_ABOS    = 'onActiveAbos';
VXPayPaymentHooksConfig.ON_CONFIG_CHANGED = 'onConfigChanged';

export default VXPayPaymentHooksConfig;
