class VXPayDomHelper {

	/**
	 * @see VXPayDomHelperFactory::getHelper
	 * @param {Window} window
	 * @param {jQuery} jQuery
	 * @param {Fx} Fx
	 */
	constructor(window, jQuery, Fx) {
		this._window = window;
		this._jQuery = jQuery;
		this._fx     = Fx; // Mootools FX
	}

	/**
	 * @param {Window} window
	 * @return {number}
	 */
	static getClientHeight(window) {
		return window.innerHeight ||
			window.document.documentElement.clientHeight ||
			window.document.body.clientHeight;
	}

	/**
	 * @param {HTMLElement} element
	 * @param {String} attribute
	 * @param {String|Number} value
	 * @return {boolean}
	 */
	static isStyleAttributeSuppored(element, attribute, value) {
		let supported = false;

		try {
			element.style[attribute] = value;
			supported                = element.style[attribute] === value;
		} catch (e) { /* suppress */ }

		return supported;
	}

	/**
	 * @return {boolean}
	 * @private
	 */
	_hasJQuery() {
		return typeof this._jQuery !== 'undefined'
			&& typeof this._jQuery.Animation !== 'undefined';
	}

	/**
	 * @return {boolean}
	 * @private
	 */
	_hasMooTools() {
		return typeof this._fx !== 'undefined'
			&& typeof this._fx.Scroll !== 'undefined';
	}

	/**
	 * @param {Number} top
	 * @return {*}
	 */
	scrollTo(top) {
		try {
			if (this._hasMooTools()) {
				return new this._fx.Scroll(this._window, {duration: 500}).start(0, top);
			}

			if (this._hasJQuery()) {
				return this._jQuery('html, body').animate({scrollTop: top}, 500);
			}

			// default no animation
			return this._window.scrollTo(0, top);

		} catch (e) { /* suppress */ }
	}
}

VXPayDomHelper.TAG_IFRAME = 'iframe';

export default VXPayDomHelper;
