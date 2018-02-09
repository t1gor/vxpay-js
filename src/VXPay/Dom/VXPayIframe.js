import VXPayValidator     from '../VXPayValidator'
import VXPayEventListener from './../Event/VXPayEventListener'

class VXPayIframe extends VXPayEventListener {
	/**
	 * @param {Document} document
	 * @param {String} url
	 * @param {String|Number} id
	 * @param {CSSStyleDeclaration} style
	 */
	constructor(document, url, id, style = null) {
		super();

		if (typeof document.createElement !== 'function') {
			throw new TypeError('An iFrame can only be build on a valid Document object!');
		}

		if (!VXPayValidator.isUrl(url)) {
			throw new TypeError('Please provide a valid URL! ' + url);
		}

		if (!id || id.length === 0) {
			throw new TypeError('Please provide a valid frame ID!');
		}

		this._frame          = document.createElement('iframe');
		this._frame.url      = url;
		this._frame.id       = id;

		// only apply if valid
		if (null !== style) {
			for (let item in style) {
				this._frame.style.setProperty(item, style[item]);
			}
		}
	}

	/**
	 * @return {HTMLIFrameElement|HTMLElement}
	 */
	get frame() {
		return this._frame;
	}

	/**
	 * @return {VXPayIframe}
	 */
	maximize() {
		this._frame.style.width      = VXPayIframe.MAX_WIDTH;
		this._frame.style.height     = VXPayIframe.MAX_HEIGHT;
		this._frame.style.left       = VXPayIframe.MAX_LEFT;
		this._frame.style.top        = VXPayIframe.MAX_TOP;
		this._frame.style.marginLeft = VXPayIframe.MAX_LEFT_MARGIN;
		return this;
	}

	/**
	 * @param {String|VXPayMessage} message
	 * @param {String} origin
	 */
	postMessage(message = '', origin = '*') {
		this._frame.contentWindow.postMessage(message.toString(), origin);
	}

	/**
	 * @param {Function} handler
	 */
	setMessageHandler(handler) {
		VXPayIframe.addEvent('message', this._frame.window, handler);
	}

	/**
	 * @param {Function} handler
	 */
	removeMessageHandler(handler) {
		VXPayIframe.removeEvent('message', this._frame.window, handler);
	}
}

VXPayIframe.POSITION_ABSOLUTE = 'absolute';
VXPayIframe.POSITION_FIXED    = 'fixed';

VXPayIframe.MAX_HEIGHT      = '100vh';
VXPayIframe.MAX_WIDTH       = '100%';
VXPayIframe.MAX_TOP         = '0';
VXPayIframe.MAX_LEFT        = '0';
VXPayIframe.MAX_LEFT_MARGIN = '0';

export default VXPayIframe;
