import VXPayConfig                     from './VXPay/VXPayConfig'
import VXPayLogger                     from './VXPay/VXPayLogger'
import VXPayHelperFrame                from './VXPay/Dom/Frame/VXPayHelperFrame'
import VXPayPaymentFrame               from './VXPay/Dom/Frame/VXPayPaymentFrame'
import VXPayPaymentTab                 from './VXPay/Dom/Frame/VXPayPaymentTab'
import VXPaySetLoginFlowMiddleware     from './VXPay/Middleware/Flow/VXPaySetLoginFlowMiddleware'
import VXPayShowLoginMiddleware        from './VXPay/Middleware/Show/VXPayShowLoginMiddleware'
import VXPayShowSignUpMiddleware       from './VXPay/Middleware/Show/VXPayShowSignUpMiddleware'
import VXPaySetMoneyChargeMiddleware   from './VXPay/Middleware/Flow/VXPaySetMoneyChargeMiddleware'
import VXPaySetLimitFlowMiddleware     from './VXPay/Middleware/Flow/VXPaySetLimitFlowMiddleware'
import VXPaySetSettingsFlowMiddleware  from './VXPay/Middleware/Flow/VXPaySetSettingsFlowMiddleware'
import VXPayShowMiddleware             from './VXPay/Middleware/Show/VXPayShowMiddleware'
import VXPaySetVipAboFlowMiddleware    from './VXPay/Middleware/Flow/VXPaySetVipAboFlowMiddleware'
import VXPayShowAboMiddleware          from './VXPay/Middleware/Show/VXPayShowAboMiddleware'
import VXPaySetPasswordResetMiddleware from './VXPay/Middleware/Flow/VXPaySetPasswordResetMiddleware'
import VXPaySetPasswordLostMiddleware  from './VXPay/Middleware/Flow/VXPaySetPasswordLostFlowMiddleware'
import VXPayInitPaymentMiddleware      from './VXPay/Middleware/Frames/VXPayInitPaymentMiddleware'
import VXPayInitHelperMiddleware       from './VXPay/Middleware/Frames/VXPayInitHelperMiddleware'
import VXPaySetChangeCardMiddleware    from "./VXPay/Middleware/Flow/VXPaySetChangeCardMiddleware";

export default class VXPay {
	/**
	 * @param {VXPayConfig} config
	 * @param {Window} window
	 */
	constructor(config, window = undefined) {
		this.config      = config;
		this.logger      = new VXPayLogger(this.config.logging, window);
		this._apiVersion = 3;
		this._window     = window;
	}

	/**
	 * @return {Promise<VXPay>}
	 * @private
	 */
	_initHelperFrame() {
		return new Promise(resolve => VXPayInitHelperMiddleware(this, resolve))
	}

	/**
	 * @return {VXPayPaymentTab|VXPayPaymentFrame}
	 */
	get frame() {
		return this._paymentFrame;
	}

	/**
	 * @return {Promise<VXPay>}
	 * @private
	 */
	_initPaymentFrame() {
		return new Promise(resolve => VXPayInitPaymentMiddleware(this, resolve))
	}

	openLogin() {
		this._initPaymentFrame()
			.then(VXPaySetLoginFlowMiddleware)
			.then(VXPayShowLoginMiddleware);
	}

	openSignup() {
		this._initPaymentFrame()
			.then(VXPaySetLoginFlowMiddleware)
			.then(VXPayShowSignUpMiddleware);
	}

	openSignupOrLogin() {
		this._initHelperFrame()
			/** @param {VXPay} vxpay */
			.then(vxpay => vxpay.helperFrame.getLoginCookie())
			/** @param {VXPayHasSessionCookieMessage} hasLoginCookieMessage */
			.then(hasLoginCookieMessage => hasLoginCookieMessage.hasCookie ? this.openLogin() : this.openSignup())
	}

	openPayment() {
		this._initPaymentFrame()
			.then(VXPaySetMoneyChargeMiddleware)
			.then(VXPayShowMiddleware);
	}

	openAbo() {
		this._initPaymentFrame()
			.then(VXPaySetVipAboFlowMiddleware)
			.then(VXPayShowAboMiddleware)
	}

	openSettings() {
		this._initPaymentFrame()
			.then(VXPaySetSettingsFlowMiddleware)
			.then(VXPayShowMiddleware)
	}

	resetPassword() {
		this._initPaymentFrame()
			/** @param {VXPay} vxpay */
			.then(vxpay => VXPaySetPasswordResetMiddleware(vxpay, this._window))
			.then(VXPayShowMiddleware)
	}

	lostPassword() {
		this._initPaymentFrame()
			/** @param {VXPay} vxpay */
			.then(vxpay => VXPaySetPasswordLostMiddleware(vxpay, this._window))
			.then(VXPayShowMiddleware)
	}

	limitPayment() {
		this._initPaymentFrame()
			.then(VXPaySetLimitFlowMiddleware)
			.then(VXPayShowMiddleware)
	}

	changeCard() {
		this._initPaymentFrame()
			.then(VXPaySetChangeCardMiddleware)
			.then(VXPayShowMiddleware);
	}

	vipAboTrial() {

	}

	premiumAbo() {

	}

	openAVS() {

	}

	openPromoCode() {

	}

	openScratchCard() {

	}

	openOneClick() {

	}

	openAutoReCharge() {

	}

	openBalance() {

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
		return this._window;
	}
}
