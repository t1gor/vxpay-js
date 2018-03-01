import {assert}                   from 'chai'
import {describe, it, beforeEach} from 'mocha'
import sinon                      from 'sinon'
import VXPay                      from './../../../src/VXPay'
import VXPayTriggerShowForTab     from './../../../src/VXPay/Middleware/Frames/VXPayTriggerShowForTab'
import VXPayTestFx                from './../../Fixtures/VXPayTestFx'
import VXPayConfig                from './../../../src/VXPay/VXPayConfig'

describe('VXPayTriggerShowForTab', () => {
	describe('#run()', () => {
		/** @var {VXPay} */
		let vxpay;

		/** Setup VXPay object mock */
		beforeEach(done => {
			vxpay = new VXPay(new VXPayConfig(VXPayTestFx.getWindow()));
			vxpay._initPaymentFrame();
			done();
		});

		it('Should return {VXPay}', () => assert.instanceOf(VXPayTriggerShowForTab(vxpay), VXPay))
		it('Should show frame if tab enabled', () => {
			vxpay.config.enableTab = true;

			// mock
			sinon.spy(vxpay._paymentFrame, 'show');

			// call!
			VXPayTriggerShowForTab(vxpay);

			assert.isTrue(vxpay._paymentFrame.show.called);

			// cleanup
			vxpay._paymentFrame.show.restore();
		})
	});
});
