import VXPayValidator     from '../VXPayValidator'
import VXPayEventListener from './../Event/VXPayEventListener'
import VXPayDomHelper     from './VXPayDomHelper'

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

		this._loaded          = false;
		this._onLoadCallbacks = [];
		this._frame           = document.createElement(VXPayDomHelper.TAG_IFRAME);
		this._frame.src       = url;
		this._frame.id        = id;
		this._frame.onload    = this._markLoaded.bind(this);

		// only apply if valid
		if (null !== style) {
			for (let item in style) {
				this._frame.style.setProperty(item, style[item]);
			}
		}
	}

	/**
	 * @protected
	 */
	_markLoaded() {
		this._loaded = true;

		// call the stack
		for (let i = 0; i < this._onLoadCallbacks.length; i++) {
			this._onLoadCallbacks[i].apply(this);
		}
	}

	/**
	 * @param {Function} handler
	 */
	onLoad(handler) {
		this._onLoadCallbacks.push(handler);
	}

	/**
	 * @return {boolean}
	 */
	get loaded() {
		return this._loaded;
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
		VXPayIframe.addEvent(VXPayIframe.EVENT_MESSAGE, this._frame.contentWindow, handler);
	}

	/**
	 * @param {Function} handler
	 */
	removeMessageHandler(handler) {
		VXPayIframe.removeEvent(VXPayIframe.EVENT_MESSAGE, this._frame.window, handler);
	}

	show() {
		this._frame.style.display = 'block';
	}

	hide() {
		console.log(this);
		this._frame.style.display = 'none';
	}
}

VXPayIframe.EVENT_MESSAGE = 'message';
VXPayIframe.EVENT_LOAD = 'load';

VXPayIframe.POSITION_ABSOLUTE = 'absolute';
VXPayIframe.POSITION_FIXED    = 'fixed';

VXPayIframe.MAX_HEIGHT      = '100vh';
VXPayIframe.MAX_WIDTH       = '100%';
VXPayIframe.MAX_TOP         = '0';
VXPayIframe.MAX_LEFT        = '0';
VXPayIframe.MAX_LEFT_MARGIN = '0';

VXPayIframe.ORIGIN = 'https://www.visit-x.net';

export default VXPayIframe;
