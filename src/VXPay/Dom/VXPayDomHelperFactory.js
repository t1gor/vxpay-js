import VXPayDomHelper from "./VXPayDomHelper";

class VXPayDomHelperFactory {

	/**
	 * Try to figure out the jQuery/MooTools from window object
	 *
	 * @param {Window} window
	 * @param {jQuery} jQuery
	 * @param {Fx} Fx
	 * @return {VXPayDomHelper}
	 */
	static getHelper(window, jQuery = undefined, Fx = undefined) {
		jQuery = jQuery || window.jQuery;
		Fx     = Fx || window.Fx;
		return new VXPayDomHelper(window, jQuery, Fx);
	}
}
