export default class VXPayLogger {
	/**
	 * @param {Boolean} enable
	 */
	constructor(enable) {
		this.enabled = enable || false;
		this._container = [];
	}

	/**
	 * @param {String} message
	 */
	log(message) {
		// check enabled
		if (!this.enabled) {
			return;
		}

		// for browser
		if (typeof window !== 'undefined') {
			return window.console.log(message);
		}

		// for tests - just collect
		this._container.push({
			time: new Date(),
			message: message.toString()
		});
	}

	/**
	 * @return {Array<String>}
	 */
	get container() {
		return this._container;
	}
}
