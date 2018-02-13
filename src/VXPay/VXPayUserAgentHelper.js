export default class VXPayUserAgentHelper {
	/**
	 * @param {String} uaString
	 */
	constructor(uaString = '') {
		this._userAgent = uaString;
	}

	/**
	 * @return {boolean}
	 */
	isMobile() {
		return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(this._userAgent));
	}

	/**
	 * @return {string}
	 */
	get userAgent() {
		return this._userAgent;
	}

	/**
	 * @param {string} value
	 */
	set userAgent(value) {
		this._userAgent = value;
	}
}
