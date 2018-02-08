import VXPayEnvironment from "./VXPayEnvironment"
import VXPayLanguage    from "./VXPayLanguage"
import VXPayValidator   from "./VXPayValidator"
import VXPayFlow        from "./Config/VXPayFlow"

class VXPayConfig {

	/**
	 * Set default config structure
	 */
	constructor() {
		this._env     = VXPayEnvironment.DEVELOPMENT;
		this._logging = false;
		this._flow    = VXPayFlow.LOGIN;
		this._lang    = VXPayLanguage.getDefault();
		this._urls    = {
			abg:     VXPayConfig.ABG_DEFAULT.replace('{language}', this._lang),
			privacy: VXPayConfig.PRIVACY_DEFAULT.replace('{language}', this._lang),
		};
	}

	/**
	 * @return {String}
	 */
	get abgUrl() {
		return this._urls.abg;
	}

	/**
	 * @param {String} url
	 */
	set abgUrl(url) {
		if (!VXPayValidator.isUrl(url)) {
			throw new Error('Invalid URL provided: ' + url);
		}

		this._urls.abg = url;
	}

	/**
	 * @return {String}
	 */
	get privacyUrl() {
		return this._urls.privacy;
	}

	/**
	 * @param {String} url
	 */
	set privacyUrl(url) {
		if (!VXPayValidator.isUrl(url)) {
			throw new Error('Invalid URL provided: ' + url);
		}

		this._urls.privacy = url;
	}

	/**
	 * @return {String}
	 */
	get env() {
		return this._env;
	}

	/**
	 * @param {String} value
	 */
	set env(value) {
		if (!VXPayValidator.isEnvironmentSupported(value)) {
			throw new TypeError('Environment ' + value + ' is not supported. Please select one of ' + VXPayEnvironment.getAvailable())
		}

		this._env = value;
	}

	/**
	 * @return {Boolean}
	 */
	get logging() {
		return this._logging;
	}

	/**
	 * @param {Boolean} value
	 */
	set logging(value) {
		this._logging = value;
	}

	/**
	 * @return {String}
	 */
	get language() {
		return this._lang;
	}

	/**
	 * @param {String} value
	 */
	set language(value) {
		if (!VXPayValidator.isLanguageSupported(value)) {
			const msg = 'Unsupported language: ' + value.toString() + '. Allowed: ' + VXPayLanguage.getAvailable().join(', ');
			throw new TypeError(msg);
		}

		this._lang = value;
	}

	/**
	 * @return {String}
	 */
	get flow() {
		return this._flow;
	}

	/**
	 * @param {String} value
	 * @see VXPayFlow
	 */
	set flow(value) {
		if (!VXPayValidator.isFlowAllowed(value)) {
			const msg = 'Flow not allowed: ' + value.toString() + '. Select one of: ' + VXPayFlow.getAvailable().join(', ');
			throw new TypeError(msg);
		}

		this._flow = value;
	}
}

VXPayConfig.ABG_DEFAULT     = 'https://www.visit-x.net/CAMS/{language}/Info/Zentrum.html?submod=AGB&track=Account';
VXPayConfig.PRIVACY_DEFAULT = 'https://www.visit-x.net/CAMS/DE/Info/Zentrum.html?submod=Datenschutz&track=Index';

export default VXPayConfig;
