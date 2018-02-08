import VXPayLanguage    from "./VXPayLanguage";
import VXPayEnvironment from "./VXPayEnvironment";

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
}