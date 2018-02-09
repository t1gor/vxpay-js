class VXPayIframe {
	/**
	 * @param {Document} document
	 * @param {CSSStyleDeclaration} style
	 */
	constructor(document, style = null) {
		if (typeof document.createElement !== 'function') {
			throw new TypeError('An iFrame can only be build on a valid Document object!');
		}

		this._frame = document.createElement('iframe');

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
}

VXPayIframe.POSITION_ABSOLUTE = 'absolute';
VXPayIframe.POSITION_FIXED = 'fixed';

export default VXPayIframe;
