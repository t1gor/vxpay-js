import VXPayLanguage    from './VXPayLanguage'
import VXPayEnvironment from './VXPayEnvironment'
import VXPayFlow        from './Config/VXPayFlow'
import {Url}            from 'url'

export default class VXPayValidator {
	/**
	 * @param {String} url
	 * @return {boolean}
	 */
	static isUrl(url) {
		let construct = Url || URL;

		try {
			new construct(url);
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
}
