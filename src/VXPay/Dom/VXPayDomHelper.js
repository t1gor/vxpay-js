export default class VXPayDomHelper {

	/**
	 * @param {Window} window
	 * @return {number}
	 */
	static getClientHeight(window) {
		return window.innerHeight ||
			window.document.documentElement.clientHeight ||
			window.document.body.clientHeight;
	}
}
