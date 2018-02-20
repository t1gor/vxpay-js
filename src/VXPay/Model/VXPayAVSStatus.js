export default class VXPayAVSStatus {
	constructor() {
		this._fsk18 = false;
	}

	/**
	 * @return {Boolean}
	 */
	get fsk18() {
		return this._fsk18;
	}

	/**
	 * @param {Boolean} value
	 */
	set fsk18(value) {
		this._fsk18 = value;
	}

	/**
	 * @param {Object} data
	 * @return {VXPayAVSStatus}
	 */
	static fromData(data = {}) {
		const instance = new VXPayAVSStatus();
		instance.fsk18 = data.fsk18 || false;
		return instance;
	}
}
