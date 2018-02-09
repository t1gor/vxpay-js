export default class VXPayEventListener {
	/**
	 * @param {String} event
	 * @param {HTMLElement} elem
	 * @param {Function} func
	 */
	static addEvent(event, elem, func) {
		if (elem.addEventListener) {  // W3C DOM
			elem.addEventListener(event, func, false);
		}
		else if (elem.attachEvent) { // IE DOM
			elem.attachEvent('on' + event, func);
		}
		else { // No much to do
			elem[event] = func;
		}
	}

	/**
	 * @param {String} event
	 * @param {HTMLElement} elem
	 * @param {Function} func
	 */
	static removeEvent(event, elem, func) {
		if (elem.removeEventListener) {  // W3C DOM
			elem.removeEventListener(event, func, false);
		}
		else if (elem.attachEvent) { // IE DOM
			elem.detachEvent('on' + event, func);
		}
		else { // No much to do
			elem[event] = null;
		}
	}
}