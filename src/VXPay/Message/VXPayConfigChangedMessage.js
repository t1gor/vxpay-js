import VXPayMessage from './../VXPayMessage'

export default class VXPayConfigChangedMessage extends VXPayMessage {
	/**
	 * @param {VXPayConfig|String} newConfig
	 */
	constructor(newConfig = '') {
		super(VXPayMessage.TYPE_CONFIG_CHANGED);
		this.config = newConfig;
	}

	/**
	 * @return {Object}
	 */
	hydrateConfig() {
		return JSON.parse(this.config);
	}
}

