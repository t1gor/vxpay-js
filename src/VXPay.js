import VXPayConfig       from './VXPay/VXPayConfig'
import VXPayLogger       from './VXPay/VXPayLogger'
import VXPayPaymentFrame from './VXPay/Dom/Frame/VXPayPaymentFrame'
import VXPayHelperFrame  from "./VXPay/Dom/Frame/VXPayHelperFrame";

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
		this._initHelperFrame();
	}

	_initHelperFrame() {
		this.logger.log('VXPay - _initHelperFrame');

		this._helperFrame = new VXPayHelperFrame(
			this._window.document,
			'https://www.visit-x.net/VXPAY-V' + this._apiVersion + '/helper',
			'vx-helper-frame-payment'
		);

		console.log('VXPayHelperFrame - get cookie', this._helperFrame.frame);
		const cookiePromise = this._helperFrame.getLoginCookie();

		// insert to DOM
		this._window.document
			.getElementsByTagName('html')
			.item(0)
			.appendChild(this._helperFrame.frame);

		this.logger.log(cookiePromise);
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
