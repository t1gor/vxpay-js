import VXPayConfig                         from './VXPay/VXPayConfig'
import VXPayLogger                         from './VXPay/VXPayLogger'
import VXPayHelperFrame                    from './VXPay/Dom/Frame/VXPayHelperFrame'
import VXPayPaymentFrame                   from './VXPay/Dom/Frame/VXPayPaymentFrame'
import VXPayPaymentTab                     from './VXPay/Dom/Frame/VXPayPaymentTab'
import VXPaySetLoginFlowMiddleware         from './VXPay/Middleware/Flow/VXPaySetLoginFlowMiddleware'
import VXPayShowLoginMiddleware            from './VXPay/Middleware/Show/VXPayShowLoginMiddleware'
import VXPayShowSignUpMiddleware           from './VXPay/Middleware/Show/VXPayShowSignUpMiddleware'
import VXPaySetMoneyChargeMiddleware       from './VXPay/Middleware/Flow/VXPaySetMoneyChargeMiddleware'
import VXPaySetLimitFlowMiddleware         from './VXPay/Middleware/Flow/VXPaySetLimitFlowMiddleware'
import VXPaySetSettingsFlowMiddleware      from './VXPay/Middleware/Flow/VXPaySetSettingsFlowMiddleware'
import VXPayShowMiddleware                 from './VXPay/Middleware/Show/VXPayShowMiddleware'
import VXPaySetVipAboFlowMiddleware        from './VXPay/Middleware/Flow/VXPaySetVipAboFlowMiddleware'
import VXPayShowAboMiddleware              from './VXPay/Middleware/Show/VXPayShowAboMiddleware'
import VXPaySetPasswordResetMiddleware     from './VXPay/Middleware/Flow/VXPaySetPasswordResetMiddleware'
import VXPaySetPasswordLostMiddleware      from './VXPay/Middleware/Flow/VXPaySetPasswordLostFlowMiddleware'
import VXPayInitPaymentMiddleware          from './VXPay/Middleware/Frames/VXPayInitPaymentMiddleware'
import VXPayInitHelperMiddleware           from './VXPay/Middleware/Frames/VXPayInitHelperMiddleware'
import VXPaySetChangeCardMiddleware        from './VXPay/Middleware/Flow/VXPaySetChangeCardMiddleware'
import VXPaySetVIpAboTrialMiddleware       from './VXPay/Middleware/Flow/VXPaySetVIpAboTrialMiddleware'
import VXPaySetPromoCodeMiddleware         from './VXPay/Middleware/Flow/VXPaySetPromoCodeMiddleware'
import VXPayShowPromoCodeMiddleware        from './VXPay/Middleware/Show/VXPayShowPromoCodeMiddleware'
import VXPaySetScratchCardMiddleware       from './VXPay/Middleware/Flow/VXPaySetScratchCardMiddleware'
import VXPaySetOneClickMiddleware          from './VXPay/Middleware/Flow/VXPaySetOneClickMiddleware'
import VXPaySetAutoRechargeMiddleware      from './VXPay/Middleware/Flow/VXPaySetAutoRechargeMiddleware'
import VXPayShowOpenBalanceMiddleware      from './VXPay/Middleware/Show/VXPayShowOpenBalanceMiddleware'
import VXPaySetOpenBalanceMiddleware       from './VXPay/Middleware/Flow/VXPaySetOpenBalanceMiddleware'
import VXPayListenOrCallLoggedInMiddleware from './VXPay/Middleware/Actions/VXPayListenOrCallLoggedInMiddleware'
import VXPaySetAVSFlowMiddleware           from './VXPay/Middleware/Flow/VXPaySetAVSFlowMiddleware'
import VXPayShowAVSMiddleware              from './VXPay/Middleware/Show/VXPayShowAVSMiddleware'
import VXPayOnAVSStatusListenMiddleware    from './VXPay/Middleware/Actions/VXPayOnAVSStatusListenMiddleware'
import VXPayAVSStatusTriggerMiddleware     from './VXPay/Middleware/Actions/VXPayAVSStatusTriggerMiddleware'
import VXPayListenForBalanceMiddleware     from './VXPay/Middleware/Actions/VXPayListenForBalanceMiddleware'
import VXPayBalanceTriggerMiddleware       from './VXPay/Middleware/Actions/VXPayBalanceTriggerMiddleware'
import VXPayListenForActiveAbosMiddleware  from './VXPay/Middleware/Actions/VXPayListenForActiveAbosMiddleware'
import VXPayActiveAbosTriggerMiddleware    from './VXPay/Middleware/Actions/VXPayActiveAbosTriggerMiddleware'
import VXPayListenForLogoutMiddleware      from './VXPay/Middleware/Actions/VXPayListenForLogoutMiddleware'
import VXPayLogoutTriggerMiddleware        from './VXPay/Middleware/Actions/VXPayLogoutTriggerMiddleware'

export default class VXPay {
	/**
	 * @param {VXPayConfig} config
	 */
	constructor(config) {
		this.config      = config;
		this.logger      = new VXPayLogger(this.config.logging, this.config.window);
		this._apiVersion = 3;
	}

	/**
	 * @return {Promise<VXPay>}
	 * @private
	 */
	_initHelperFrame() {
		return new Promise(resolve => VXPayInitHelperMiddleware(this, resolve))
	}

	/**
	 * @return {Promise<VXPay>}
	 * @private
	 */
	_initPaymentFrame() {
		return new Promise(resolve => VXPayInitPaymentMiddleware(this, resolve))
	}

	/**
	 * @return {Promise<VXPay>}
	 */
	openLogin() {
		return this._initPaymentFrame()
			.then(VXPaySetLoginFlowMiddleware)
			.then(VXPayShowLoginMiddleware);
	}

	/**
	 * @return {Promise<VXPay>}
	 */
	openSignUp() {
		return this._initPaymentFrame()
			.then(VXPaySetLoginFlowMiddleware)
			.then(VXPayShowSignUpMiddleware);
	}

	/**
	 * @return {Promise<VXPay>}
	 */
	openSignUpOrLogin() {
		return this._initHelperFrame()
			.then(vxpay => vxpay.helperFrame.getLoginCookie())
			.then(hasLoginCookieMessage => hasLoginCookieMessage.hasCookie ? this.openLogin() : this.openSignUp())
	}

	/**
	 * @return {Promise<VXPay>}
	 */
	openPayment() {
		this._initPaymentFrame()
			.then(VXPaySetMoneyChargeMiddleware)
			.then(VXPayShowMiddleware);
	}

	/**
	 * @return {Promise<VXPay>}
	 */
	openAbo() {
		return this._initPaymentFrame()
			.then(VXPaySetVipAboFlowMiddleware)
			.then(VXPayShowAboMiddleware)
	}

	/**
	 * @return {Promise<VXPay>}
	 */
	openSettings() {
		this._initPaymentFrame()
			.then(VXPaySetSettingsFlowMiddleware)
			.then(VXPayShowMiddleware)
	}

	/**
	 * @return {Promise<VXPay>}
	 */
	resetPassword() {
		return this._initPaymentFrame()
			.then(VXPaySetPasswordResetMiddleware)
			.then(VXPayShowMiddleware)
	}

	/**
	 * @return {Promise<VXPay>}
	 */
	lostPassword() {
		this._initPaymentFrame()
			.then(VXPaySetPasswordLostMiddleware)
			.then(VXPayShowMiddleware)
	}

	/**
	 * @return {Promise<VXPay>}
	 */
	limitPayment() {
		return this._initPaymentFrame()
			.then(VXPaySetLimitFlowMiddleware)
			.then(VXPayShowMiddleware)
	}

	/**
	 * @return {Promise<VXPay>}
	 */
	changeCard() {
		return this._initPaymentFrame()
			.then(VXPaySetChangeCardMiddleware)
			.then(VXPayShowMiddleware);
	}

	/**
	 * @return {Promise<VXPay>}
	 */
	vipAboTrial() {
		return this._initPaymentFrame()
			.then(VXPaySetVIpAboTrialMiddleware)
			.then(VXPayShowMiddleware);
	}

	/**
	 * @return {Promise<VXPay>}
	 */
	premiumAbo() {
		return this._initPaymentFrame()
			.then(VXPaySetVipAboFlowMiddleware)
			.then(VXPayShowMiddleware);
	}

	/**
	 * @return {Promise<VXPay>}
	 */
	openAVS() {
		return this._initPaymentFrame()
			.then(VXPaySetAVSFlowMiddleware)
			.then(VXPayShowAVSMiddleware)
	}

	/**
	 * @return {Promise<VXPay>}
	 */
	openPromoCode() {
		return this._initPaymentFrame()
			.then(VXPaySetPromoCodeMiddleware)
			.then(VXPayShowPromoCodeMiddleware)
	}

	/**
	 * @return {Promise<VXPay>}
	 */
	openScratchCard() {
		return this._initPaymentFrame()
			.then(VXPaySetScratchCardMiddleware)
			.then(VXPayShowPromoCodeMiddleware)
	}

	/**
	 * @return {Promise<VXPay>}
	 */
	openOneClick() {
		return this._initPaymentFrame()
			.then(VXPaySetOneClickMiddleware)
			.then(VXPayShowMiddleware)
	}

	/**
	 * @return {Promise<VXPay>}
	 */
	openAutoReCharge() {
		return this._initPaymentFrame()
			.then(VXPaySetAutoRechargeMiddleware)
			.then(VXPayShowMiddleware)
	}

	/**
	 * @return {Promise<VXPay>}
	 */
	openBalance() {
		return this._initPaymentFrame()
			.then(VXPaySetOpenBalanceMiddleware)
			.then(VXPayShowOpenBalanceMiddleware)
	}

	/**
	 * @return {Promise<VXPayIsLoggedInResponseMessage>}
	 */
	isLoggedIn() {
		return new Promise((resolve, reject) => {
			this._initPaymentFrame()
				.then(vxpay => VXPayListenOrCallLoggedInMiddleware(vxpay, resolve, reject))
				.catch(reject)
		});
	}

	/**
	 * @return {Promise<VXPayAVSStatusMessage>}
	 */
	getAVSStatus() {
		return new Promise((resolve, reject) => {
			return this._initPaymentFrame()
				.then(vxpay => VXPayOnAVSStatusListenMiddleware(vxpay, resolve))
				.then(VXPayAVSStatusTriggerMiddleware)
				.catch(reject)
		})
	}

	/**
	 * @return {Promise<VXPayBalanceMessage>}
	 */
	getBalance() {
		return new Promise((resolve, reject) => {
			this._initPaymentFrame()
				.then(vxpay => VXPayListenForBalanceMiddleware(vxpay, resolve))
				.then(VXPayBalanceTriggerMiddleware)
				.catch(reject)
		});
	}

	/**
	 * @return {Promise<VXPayActiveAbosMessage>}
	 */
	getActiveAbos() {
		return new Promise((resolve, reject) => {
			this._initPaymentFrame()
				.then(vxpay => VXPayListenForActiveAbosMiddleware(vxpay, resolve))
				.then(VXPayActiveAbosTriggerMiddleware)
				.catch(reject)
		})
	}

	/**
	 * @return {Promise<VXPayLoggedOutMessage>}
	 */
	logout() {
		return new Promise((resolve, reject) => {
			this._initPaymentFrame()
				.then(vxpay => VXPayListenForLogoutMiddleware(vxpay, resolve))
				.then(VXPayLogoutTriggerMiddleware)
				.catch(reject)
		})
	}

	/**
	 * @return {VXPayConfig}
	 */
	get config() {
		return this._config;
	}

	/**
	 * @param {VXPayConfig} value
	 */
	set config(value) {
		if (!(value instanceof VXPayConfig)) {
			throw new TypeError('Please provide an instance of VXPayConfig!');
		}

		this._config = value;
	}

	/**
	 * @return {VXPayLogger}
	 */
	get logger() {
		return this._logger;
	}

	/**
	 * @param {VXPayLogger} value
	 */
	set logger(value) {
		if (!(value instanceof VXPayLogger)) {
			throw new TypeError('Please provide an instance of VXPayLogger!');
		}

		this._logger = value;
	}

	/**
	 * @return {Number}
	 */
	get apiVersion() {
		return this._apiVersion;
	}

	/**
	 * @param {Number} value
	 */
	set apiVersion(value) {
		this._apiVersion = value;
	}

	/**
	 * Expose hooks on VXPay object
	 * @return {VXPayPaymentHooksConfig}
	 */
	get hooks() {
		return this._paymentFrame.hooks;
	}

	/**
	 * @return {VXPayPaymentFrame|VXPayPaymentTab}
	 */
	get paymentFrame() {
		return this._paymentFrame;
	}

	/**
	 * @param {VXPayPaymentFrame|VXPayPaymentTab} value
	 */
	set paymentFrame(value) {
		if (!(value instanceof VXPayPaymentFrame) && !(value instanceof VXPayPaymentTab)) {
			throw new TypeError('Helper frame should be an instance of VXPayPaymentFrame or VXPayPaymentTab');
		}

		this._paymentFrame = value;
	}

	/**
	 * @return {VXPayHelperFrame}
	 */
	get helperFrame() {
		return this._helperFrame;
	}

	/**
	 * @param {VXPayHelperFrame} value
	 */
	set helperFrame(value) {
		if (!(value instanceof VXPayHelperFrame)) {
			throw new TypeError('Helper frame should be an instance of VXPayHelperFrame');
		}

		this._helperFrame = value;
	}

	/**
	 * @return {Window|undefined}
	 */
	get window() {
		return this.config.window;
	}
}
