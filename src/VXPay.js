import VXPayConfig       from './VXPay/VXPayConfig'
import VXPayLogger       from './VXPay/VXPayLogger'
import VXPayHelperFrame  from './VXPay/Dom/Frame/VXPayHelperFrame'
import VXPayPaymentFrame from "./VXPay/Dom/Frame/VXPayPaymentFrame";
import VXPayFlow         from "./VXPay/Config/VXPayFlow";

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
		if (this._helperFrame instanceof VXPayHelperFrame) {
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
	 * @return {VXPayPaymentFrame}
	 * @private
	 */
	_initPaymentFrame() {
		// check already initialized
		if (this.hasOwnProperty('_paymentFrame')) {
			return this._paymentFrame;
		}

		this._paymentFrame = new VXPayPaymentFrame(
			this._window.document,
			this._config.getPaymentFrameUrl(),
			// 'https://www.visit-x.net/VXPAY-V3/?pfm=1502&lang=en&environment=vxone&flow=login&sview=&lazy=1&mc[login]=1&mc[showHeader]=1&mc[showTeaser]=1&mc[showFooter]=1&mc[neutralHeader]=1&mc[teaserBonus]=0&mc[support]=1&mc[showOAuth]=1&mc[showNL]=1&mc[showThank]=0&mc[showLogo]=1&mc[showTeaserBar]=1&mc[parentInFrame]=0',
			'vx-payment-frame-payment'
		);

		// add logging
		this._paymentFrame.beforeSend = (message) => this.logger.log(message);

		return this._paymentFrame;
	}

	openLogin() {
		this._initPaymentFrame()
			.sendOptions({flow: VXPayFlow.LOGIN})
			.show(VXPayFlow.LOGIN);
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
