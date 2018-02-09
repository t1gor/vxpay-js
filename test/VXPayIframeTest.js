import {assert}    from 'chai'
import {JSDOM}     from 'jsdom'
import VXPayIframe from '../src/VXPay/Dom/VXPayIframe'

const testDocument = "<!DOCTYPE html><html><body id='body'>test</body></html>";

describe('VXPayDomHelper', () => {
	describe('#constructor()', () => {
		it('Should throw an error on an invalid Document', () => {
			assert.throws(() => new VXPayIframe({}), TypeError, 'An iFrame can only be build on a valid Document object!')
		});
		it('Should create an iframe element on valid Document', () => {
			const dom = new JSDOM(testDocument);
			const iframe = new VXPayIframe(dom.window.document);

			// can't compare instance of objects as node.js doesn't have HTMLIframeElement
			assert.equal(iframe.frame.tagName.toLowerCase(), 'iframe');
		});
		it('Should apply styles if passed', () => {
			const dom = new JSDOM(testDocument, { pretendToBeVisual: true });
			const styles = {
				width: '675px',
				height: '740px',
				top: '5%',
				left: '50%',
				display: 'none',
			};
			const iframe = new VXPayIframe(dom.window.document, styles);

			// loop applied styles and check values
			for (let name in styles) {
				assert.equal(
					iframe.frame.style.getPropertyValue(name),
					styles[name],
					'Style property `' + name + "` doesn't match!"
				);
			}
		});
	});
});