export default class VXPayUrlHelper {
	/**
	 * @param {String} baseUrl
	 * @param {Object} params
	 * @param {Object} config
	 * @return {string}
	 */
	static generate(baseUrl, params = undefined, config = undefined) {
		let url = baseUrl;

		// fix url, remove existing hashes
		url = url.replace(/\#.*$/, '');

		// add params
		if (params) {
			let arr = [];
			for (let d in params) {
				if(typeof params[d] !== 'undefined') {
					arr.push(encodeURIComponent(d) + '=' + encodeURIComponent(params[d]));
				}
			}
			url += (url.indexOf('?') >= 0 ? '&' : '?') + arr.join('&');
		}

		// add module config
		if (config) {
			let arr2 = [];
			for (let d2 in config) {
				if(typeof config[d2] !== 'undefined') {
					arr2.push('mc[' + encodeURIComponent(d2) + ']' + '=' + encodeURIComponent(config[d2]));
				}
			}
			url += (url.indexOf('?') >= 0 ? '&' : '?') + arr2.join('&');
		}

		return url;
	}
}