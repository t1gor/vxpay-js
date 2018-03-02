export default class VXPayUrlHelper {
	/**
	 * @param {Function} urlImplementation
	 */
	constructor(urlImplementation = undefined) {
		this._urlImpl = typeof urlImplementation === 'undefined' ? window.URL : urlImplementation;
	}

	/**
	 * @param {String} baseUrl
	 * @param {Object} params
	 * @param {Object} config
	 * @return {string}
	 */
	generate(baseUrl, params = undefined, config = undefined) {
		let url = new this._urlImpl(baseUrl);

		// fix url, remove existing hashes
		url.hash = '';

		// add params
		if (params) {
			for (let d in params) {
				if (typeof params[d] === 'undefined') {
					continue;
				}

				url.searchParams.append(d, params[d]);
			}
		}

		// add module config
		if (config) {
			for (let d2 in config) {
				// skip underline in object props
				let name = d2.charAt(1) === '_' ? d2.substr(1) : d2;

				if (typeof config[name] === 'undefined') {
					continue;
				}

				url.searchParams.append('mc[' + d2 + ']', config[d2]);
			}
		}

		return url.toString();
	}

	/**
	 * @param {String} location
	 * @param {String} name
	 * @return {String}
	 */
	getQueryParam(location, name) {
		try {
			const url = new this._urlImpl(location);
			return url.searchParams[name];
		} catch (err) {
			return '';
		}
	}

	/**
	 * @param {String} url
	 * @return {boolean}
	 */
	isValid(url) {
		try {
			new this._urlImpl(url);
			return true;
		} catch (_) {
			return false;
		}
	}
}