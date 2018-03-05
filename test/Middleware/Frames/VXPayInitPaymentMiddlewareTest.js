import {assert}                   from 'chai'
import {describe, it, beforeEach} from 'mocha'
import VXPay                      from './../../../src/VXPay'
import VXPayConfig                from './../../../src/VXPay/VXPayConfig'
import VXPayTestFx                from './../../Fixtures/VXPayTestFx'
import VXPayInitPaymentMiddleware from './../../../src/VXPay/Middleware/Frames/VXPayInitPaymentMiddleware'
import VXPayPaymentTab            from './../../../src/VXPay/Dom/Frame/VXPayPaymentTab'
import VXPayPaymentFrame          from './../../../src/VXPay/Dom/Frame/VXPayPaymentFrame'

describe('VXPayInitPaymentMiddleware', () => {
	xdescribe('#run()', () => {
		/** @var {VXPay} */
		let vxpay;

		/** Setup VXPay object mock */
		beforeEach(done => {
			vxpay = new VXPay(new VXPayConfig(VXPayTestFx.getWindow()));
			done();
		});

		it('Should resolve when already init', done => {
			const resolve = (mutated) => {
				assert.instanceOf(mutated, VXPay);
				done();
			};

			vxpay._initPaymentFrame();
			VXPayInitPaymentMiddleware(vxpay, resolve);
		});
		it('Should init a PaymentTab based on enableTab config', done => {
			const resolve = (mutated) => {
				assert.instanceOf(mutated.paymentFrame, VXPayPaymentTab);
				done();
			};

			vxpay.config.enableTab = true;
			VXPayInitPaymentMiddleware(vxpay, resolve);
		});
		it('Should init a PaymentFrame based on enableTab config', done => {
			vxpay.config.enableTab = false;
			vxpay._initPaymentFrame();

			const resolve = (mutated) => {
				assert.instanceOf(mutated.paymentFrame, VXPayPaymentFrame);
				done();
			};

			VXPayInitPaymentMiddleware(vxpay, resolve);
		});
	});
});
