import VXPayConfig           from './VXPay/VXPayConfig'
import VXPayLogger           from './VXPay/VXPayLogger'
import VXPayHelperFrame      from './VXPay/Dom/Frame/VXPayHelperFrame'
import VXPayPaymentFrame     from './VXPay/Dom/Frame/VXPayPaymentFrame'
import VXPayFlow             from './VXPay/Config/VXPayFlow'
import VXPayIsVisibleMessage from "./VXPay/Message/VXPayIsVisibleMessage";

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

		this._helperFrame
			.getLoginCookie()
			.then(function(msg) {
				console.log(msg);
			});

		return this._helperFrame;
	}

	/**
	 * @return {Promise<VXPayPaymentFrame>}
	 * @private
	 */
	_initPaymentFrame() {
		return new Promise(resolve => {
			// check already initialized
			if (this.hasOwnProperty('_paymentFrame') && this._paymentFrame.loaded) {
				resolve(this._paymentFrame);
			}

			this._paymentFrame = new VXPayPaymentFrame(
				this._window.document,
				this._config.getPaymentFrameUrl(),
				'vx-payment-frame-payment'
			);

			const hide = this._paymentFrame.hide.bind(this._paymentFrame);

			// set resolve hook
			this._paymentFrame
				.hooks
				.onContentLoaded(() => resolve(this._paymentFrame))
				.onClose(msg => hide);

			// do we need logging?
			if (this.config.logging) {
				this._paymentFrame
					.hooks
					.onAny(msg => this.logger.log('Received from PaymentFrame:', msg))
					.onBeforeSend(msg => this.logger.log('Sending to PaymentFrame:', msg))
			}
		})
	}

	openLogin() {
		this._initPaymentFrame()
			.then(frame => {
				frame.hooks.onViewReady(() => frame.postMessage(new VXPayIsVisibleMessage()));
				return frame;
			})
			.then(frame => frame.sendOptions({flow: VXPayFlow.LOGIN}).show(VXPayFlow.LOGIN));
	}

	openSignup() {
		this._initPaymentFrame()
			.then(frame => frame.sendOptions({flow: VXPayFlow.LOGIN}).show('signup'));
	}

	openSignupOrLogin() {

	}

	openPayment() {

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
