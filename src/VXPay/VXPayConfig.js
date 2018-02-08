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
			ruri:    ''
		};

		this._host      = null;
		this._token     = null;
		this._promoCode = null;
		this._wmId      = null;
		this._wmSubRef  = null;
		this._wmToken   = null;
		this._adtv      = null;
		this._subRef    = null;
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
			const msg = 'Flow not allowed: ' + value.toString() + '. Select one of: ' + VXPayFlow.getAllowed().join(', ');
			throw new TypeError(msg);
		}

		this._flow = value;
	}

	/**
	 * @return {String|int}
	 */
	get host() {
		return this._host;
	}

	/**
	 * @param {String|int} value
	 */
	set host(value) {
		this._host = value;
	}

	/**
	 * @return {String}
	 */
	get token() {
		return this._token;
	}

	/**
	 * @param {String} value
	 */
	set token(value) {
		this._token = value;
	}

	/**
	 * @return {String}
	 */
	get promoCode() {
		return this._promoCode;
	}

	/**
	 * @param {String} value
	 */
	set promoCode(value) {
		this._promoCode = value;
	}

	/**
	 * @return {String|int}
	 */
	get wmId() {
		return this._wmId;
	}

	/**
	 * @param {String|int} value
	 */
	set wmId(value) {
		this._wmId = value;
	}

	/**
	 * @return {String|int}
	 */
	get wmSubRef() {
		return this._wmSubRef;
	}

	/**
	 * @param {String|int} value
	 */
	set wmSubRef(value) {
		this._wmSubRef = value;
	}

	/**
	 * @return {String}
	 */
	get wmToken() {
		return this._wmToken;
	}

	/**
	 * @param {String} value
	 */
	set wmToken(value) {
		this._wmToken = value;
	}

	/**
	 * @return {*}
	 */
	get adtv() {
		return this._adtv;
	}

	/**
	 * @param value
	 */
	set adtv(value) {
		this._adtv = value;
	}

	/**
	 * @return {*}
	 */
	get subRef() {
		return this._subRef;
	}

	/**
	 * @param value
	 */
	set subRef(value) {
		this._subRef = value;
	}
}

VXPayConfig.ABG_DEFAULT     = 'https://www.visit-x.net/CAMS/{language}/Info/Zentrum.html?submod=AGB&track=Account';
VXPayConfig.PRIVACY_DEFAULT = 'https://www.visit-x.net/CAMS/DE/Info/Zentrum.html?submod=Datenschutz&track=Index';

export default VXPayConfig;
