import VXPayConfig       from './VXPay/VXPayConfig'
import VXPayLogger       from './VXPay/VXPayLogger'
import VXPayPaymentFrame from "./VXPay/Dom/Frame/VXPayPaymentFrame";

export default class VXPay {

	/**
	 * @param {VXPayConfig} config
	 * @param {Window} window
	 */
	constructor(config, window = undefined) {
		this.config      = config;
		this.logger      = new VXPayLogger(this.config.logging, window);
		this._apiVersion = 3;
		this._window = window;
		this._initFrame();
	}

	_initFrame() {
		this._payFrame = new VXPayPaymentFrame(
			this._window.document,
			'https://www.visit-x.net/VXPAY/V' + this._apiVersion + '/',
			'vx-pay-frame-payment'
		);
	}

	openLogin() {
		this.logger.log('open login');
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
}
