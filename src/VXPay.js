import VXPayConfig                         from './VXPay/VXPayConfig'
import VXPayLogger                         from './VXPay/VXPayLogger'
import VXPayHelperFrame                    from './VXPay/Dom/Frame/VXPayHelperFrame'
import VXPayPaymentFrame                   from './VXPay/Dom/Frame/VXPayPaymentFrame'
import VXPayPaymentTab                     from './VXPay/Dom/Frame/VXPayPaymentTab'
import VXPaySetLimitFlowMiddleware         from './VXPay/Middleware/Flow/VXPaySetLimitFlowMiddleware'
import VXPayShowMiddleware                 from './VXPay/Middleware/Show/VXPayShowMiddleware'
import VXPaySetVipAboFlowMiddleware        from './VXPay/Middleware/Flow/VXPaySetVipAboFlowMiddleware'
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
import VXPayState                          from './VXPay/Model/VXPayState'
import VXPayWhenTokenTransferred           from './VXPay/Middleware/Condition/VXPayWhenTokenTransferred'
import VXPayOpenLoginCommand               from './VXPay/Middleware/Command/VXPayOpenLoginCommand'
import VXPayOpenSignUpCommand              from './VXPay/Middleware/Command/VXPayOpenSignUpCommand'
import VXPayOpenVoiceCallCommand           from './VXPay/Middleware/Command/VXPayOpenVoiceCallCommand'
import VXPayOpenPaymentCommand             from './VXPay/Middleware/Command/VXPayOpenPaymentCommand'
import VXPayOpenSettingsCommand            from './VXPay/Middleware/Command/VXPayOpenSettingsCommand'
import VXPayOpenAboCommand                 from './VXPay/Middleware/Command/VXPayOpenAboCommand'
import VXPayResetPasswordCommand           from './VXPay/Middleware/Command/VXPayResetPasswordCommand'
import VXPayLostPasswordCommand            from './VXPay/Middleware/Command/VXPayLostPasswordCommand'

export default class VXPay {
	/**
	 * @param {VXPayConfig} config
	 */
	constructor(config) {
		this.config      = config;
		this.logger      = new VXPayLogger(this.config.logging, this.config.window);
		this._state      = new VXPayState();
		this._apiVersion = 3;
	}

	/**
	 * @return {VXPayState}
	 */
	get state() {
		return this._state;
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
		return new Promise((resolve, reject) => {
			return this._initPaymentFrame()
				.then(VXPayWhenTokenTransferred)
				.then(VXPayOpenLoginCommand)
				.then(resolve)
				.catch(reject)
		});
	}

	/**
	 * @return {Promise<VXPay>}
	 */
	openSignUp() {
		return new Promise((resolve, reject) => {
			return this._initPaymentFrame()
				.then(VXPayWhenTokenTransferred)
				.then(VXPayOpenSignUpCommand)
				.then(resolve)
				.catch(reject)
		});
	}

	/**
	 * @return {Promise<VXPay>}
	 */
	openVoiceCall() {
		return new Promise((resolve, reject) => {
			this._initPaymentFrame()
				.then(VXPayWhenTokenTransferred)
				.then(VXPayOpenVoiceCallCommand.run)
				.then(resolve)
				.catch(reject)
		})
	}

	/**
	 * @return {Promise<VXPay>}
	 */
	openSignUpOrLogin() {
		return this._initHelperFrame()
			.then(vxpay => vxpay.helperFrame.getLoginCookie())
			.then(msg => msg.hasCookie ? this.openLogin() : this.openSignUp())
	}

	/**
	 * @return {Promise<VXPay>}
	 */
	openPayment() {
		return new Promise((resolve, reject) => {
			this._initPaymentFrame()
				.then(VXPayWhenTokenTransferred)
				.then(VXPayOpenPaymentCommand.run)
				.then(resolve)
				.catch(reject)
		})
	}

	/**
	 * @return {Promise<VXPay>}
	 */
	openAbo() {
		return new Promise((resolve, reject) => {
			this._initPaymentFrame()
				.then(VXPayWhenTokenTransferred)
				.then(VXPayOpenAboCommand)
				.then(resolve)
				.catch(reject)
		})
	}

	/**
	 * @return {Promise<VXPay>}
	 */
	openSettings() {
		return new Promise((resolve, reject) => {
			this._initPaymentFrame()
				.then(VXPayWhenTokenTransferred)
				.then(VXPayOpenSettingsCommand.run)
				.then(resolve)
				.catch(reject)
		})
	}

	/**
	 * @note most times opens registration?
	 * @note some times view-ready is not fired?
	 *
	 * @return {Promise<VXPay>}
	 */
	resetPassword() {
		return new Promise((resolve, reject) => {
			this._initPaymentFrame()
				.then(VXPayWhenTokenTransferred)
				.then(VXPayResetPasswordCommand.run)
				.then(resolve)
				.catch(reject);
		})
	}

	/**
	 * @return {Promise<VXPay>}
	 */
	lostPassword() {
		return new Promise((resolve, reject) => {
			this._initPaymentFrame()
				.then(VXPayWhenTokenTransferred)
				.then(VXPayLostPasswordCommand.run)
				.then(resolve)
				.catch(reject);
		})
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
