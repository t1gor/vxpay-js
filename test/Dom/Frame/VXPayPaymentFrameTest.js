import {assert}        from 'chai'
import sinon           from 'sinon'
import {describe, it}  from 'mocha'
import VXPayConfig     from './../../../src/VXPay/VXPayConfig'
import VXPayPaymentFrame from './../../../src/VXPay/Dom/Frame/VXPayPaymentFrame'
import VXPayTestFx     from './../../Fixtures/VXPayTestFx'

describe('VXPayPaymentTab', () => {

	/** @var {VXPayPaymentFrame} */
	let frame,
	    /** @var {VXPayConfig} */
	    config,
	    /** @var {Document} */
	    doc,
	    /** @var {String} */
	    fid = 'test-frame-id';

	beforeEach(done => {
		doc    = VXPayTestFx.getDocument();
		config = new VXPayConfig(doc.defaultView);

		frame = new VXPayPaymentFrame(doc, 'https://example.com', fid);
		done();
	});

	describe('#triggerLoad()', () => {
		it('Should inject a frame into Document', () => {
			assert.isFalse(frame.loaded);
			frame.triggerLoad();
			assert.isTrue(frame.loaded);
			assert.equal(doc.getElementById(fid).length, 1);
		});
	});
});