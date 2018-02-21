import VXPayLanguage    from './VXPayLanguage'
import VXPayEnvironment from './VXPayEnvironment'
import VXPayFlow        from './Config/VXPayFlow'
import VXPayModalConfig from './Config/VXPayModalConfig'

export default class VXPayValidator {
	/**
	 * @param {String} url
	 * @return {boolean}
	 */
	static isUrl(url) {
		try {
			new URL(url);
			return true;
		} catch (_) {
			return false;
		}
	}

	/**
	 * @param {String} language
	 * @return {boolean}
	 */
	static isLanguageSupported(language) {
		return VXPayLanguage.getAvailable().indexOf(language) !== -1;
	}

	/**
	 * @param {String} env
	 * @return {boolean}
	 */
	static isEnvironmentSupported(env) {
		return VXPayEnvironment.getAvailable().indexOf(env) !== -1;
	}

	/**
	 * @param {String} flow
	 * @return {boolean}
	 */
	static isFlowAllowed(flow) {
		return VXPayFlow.getAllowed().indexOf(flow) !== -1;
	}

	/**
	 * @param {Number} value
	 * @return {boolean}
	 */
	static isModalConfigValueAllowed(value) {
		return isNumber(value)
			&& [VXPayModalConfig.YES, VXPayModalConfig.NO].indexOf(value) !== -1;
	}
}
