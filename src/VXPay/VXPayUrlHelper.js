import { URL } from 'whatwg-url'

export default class VXPayUrlHelper {
	/**
	 * @param {String} baseUrl
	 * @param {Object} params
	 * @param {Object} config
	 * @return {string}
	 */
	static generate(baseUrl, params = undefined, config = undefined) {
		let url = new URL(baseUrl);

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
}