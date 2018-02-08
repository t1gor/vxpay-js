import VXPayConfig from './VXPay/VXPayConfig'
import VXPayLogger from './VXPay/VXPayLogger'

export default class VXPay {

	/**
	 * @param {VXPayConfig} config
	 */
	constructor(config) {
		this.config = config;
		this.logger = new VXPayLogger(this.config.logging);
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
}
