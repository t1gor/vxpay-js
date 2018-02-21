import VXPayLanguage    from './VXPayLanguage'
import VXPayEnvironment from './VXPayEnvironment'
import VXPayFlow        from './Config/VXPayFlow'
import VXPayModalConfig from './Config/VXPayModalConfig'
import VXPayUrlHelper   from './VXPayUrlHelper'

export default class VXPayValidator {
	/**
	 * @param {String} url
	 * @param {URL} urlImplementation
	 * @return {boolean}
	 */
	static isUrl(url, urlImplementation = undefined) {
		const helper = new VXPayUrlHelper(urlImplementation);
		return helper.isValid(url);
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
