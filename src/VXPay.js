import VXPayConfig                          from './VXPay/VXPayConfig'
import VXPayLogger                          from './VXPay/VXPayLogger'
import VXPayHelperFrame                     from './VXPay/Dom/Frame/VXPayHelperFrame'
import VXPayPaymentFrame                    from './VXPay/Dom/Frame/VXPayPaymentFrame'
import VXPayPaymentTab                      from './VXPay/Dom/Frame/VXPayPaymentTab'
import VXPaySetLoginFlowMiddleware          from './VXPay/Middleware/VXPaySetLoginFlowMiddleware'
import VXPaySetVisibleOnViewReadyMiddleware from './VXPay/Middleware/VXPaySetVisibleOnViewReadyMiddleware'
import VXPayShowLoginMiddleware             from './VXPay/Middleware/VXPayShowLoginMiddleware'
import VXPayShowSignUpMiddleware            from "./VXPay/Middleware/VXPayShowSignUpMiddleware";
import VXPayFlow                            from "./VXPay/Config/VXPayFlow";
import VXPaySetMoneyChargeMiddleware        from "./VXPay/Middleware/VXPaySetMoneyChargeMiddleware";

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
		this._initHelperFrame();
	}

	/**
	 * @return {VXPayHelperFrame}
	 * @private
	 */
	_initHelperFrame() {
		// check already initialized
		if (this.hasOwnProperty('_helperFrame')) {
			return this._helperFrame;
		}

		this._helperFrame = new VXPayHelperFrame(
			this._window.document,
			'https://www.visit-x.net/VXPAY-V' + this._apiVersion + '/helper',
			'vx-helper-frame-payment'
		);

		// just trigger load, don't handle
		this._helperFrame.getLoginCookie();

		return this._helperFrame;
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
		return new Promise(resolve => {
			// check already initialized
			if (this.hasOwnProperty('_paymentFrame') && this._paymentFrame.loaded) {
				resolve(this);
			}

			if (this._config.enableTab) {
				this._paymentFrame = new VXPayPaymentTab(
					this._window.document,
					this._config.getPaymentFrameUrl()
				);
			} else {
				this._paymentFrame = new VXPayPaymentFrame(
					this._window.document,
					this._config.getPaymentFrameUrl(),
					'vx-payment-frame-payment'
				);
			}

			// set resolve hook
			this._paymentFrame
				.hooks
				.onContentLoaded(() => resolve(this))
				.onClose(msg => this._paymentFrame.hide())
				.onSuccess(msg => this._paymentFrame.hide());

			// do we need logging?
			if (this.config.logging) {
				this._paymentFrame
					.hooks
					.onAny(msg => this.logger.log('<-- []', msg))
					.onBeforeSend(msg => this.logger.log('--> []', msg))
			}

			this._paymentFrame.triggerLoad();
		})
	}

	openLogin() {
		this.config.flow = VXPayFlow.LOGIN;

		this._initPaymentFrame()
			.then(VXPaySetVisibleOnViewReadyMiddleware)
			.then(VXPaySetLoginFlowMiddleware)
			.then(VXPayShowLoginMiddleware);
	}

	openSignup() {
		this._initPaymentFrame()
			.then(VXPaySetVisibleOnViewReadyMiddleware)
			.then(VXPaySetLoginFlowMiddleware)
			.then(VXPayShowSignUpMiddleware);
	}

	openSignupOrLogin() {

	}

	openPayment() {
		this._initPaymentFrame()
			.then(VXPaySetVisibleOnViewReadyMiddleware)
			.then(VXPaySetMoneyChargeMiddleware)
			/** @todo change last step */
			.then(VXPayShowSignUpMiddleware);
	}

	openAbo() {

	}

	openSettings() {

	}

	resetPassword() {

	}

	lostPassword() {

	}

	limitPayment() {

	}

	changeCard() {

	}

	vipAbo() {

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
}
