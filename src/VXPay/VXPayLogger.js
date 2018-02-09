export default class VXPayLogger {
	/**
	 * @param {Boolean} enable
	 * @param {Window} window
	 */
	constructor(enable, window = undefined) {
		this.enabled = enable || false;
		this._container = [];
		this._window = window;
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
		if (typeof this._window !== 'undefined') {
			return this._window.console.log(message);
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
