import {assert}                     from 'chai'
import {describe, it, xit}          from 'mocha'
import sinon                        from 'sinon'
import VXPayTestFx                  from './../../Fixtures/VXPayTestFx'
import VXPay                        from './../../../src/VXPay'
import VXPayConfig                  from './../../../src/VXPay/VXPayConfig'
import VXPayOnAVSStatusListenMiddleware from './../../../src/VXPay/Middleware/Actions/VXPayOnAVSStatusListenMiddleware'

describe('VXPayOnAVSStatusListenMiddleware', () => {
	describe('#run()', () => {

		/** @var {VXPay} */
		let vxpay;

		/** Setup VXPay object mock */
		beforeEach(done => {
			vxpay = new VXPay(new VXPayConfig(VXPayTestFx.getWindow()));
			vxpay._initPaymentFrame();
			done();
		});

		it('Should set a hook if not yet set', () => {
			const handler = () => {};
			assert.isFalse(vxpay.hooks.hasOnAVSStatus(handler));

			const after = VXPayOnAVSStatusListenMiddleware(vxpay, handler, handler);

			assert.isTrue(vxpay.hooks.hasOnAVSStatus(handler));
			assert.instanceOf(after, VXPay);
		});
		it('Should NOT set a hook on consecutive call (for same handler)', () => {
			const handler = () => {};

			VXPayOnAVSStatusListenMiddleware(vxpay, handler, () => {});
			assert.lengthOf(vxpay.hooks._onAVSStatus, 1);

			VXPayOnAVSStatusListenMiddleware(vxpay, handler, () => {});
			assert.lengthOf(vxpay.hooks._onAVSStatus, 1);
		});
		it('Should reject on error', done => {
			const reject = (err) => {
				assert.instanceOf(err, Error);
				done();
			};

			vxpay._paymentFrame = undefined;

			VXPayOnAVSStatusListenMiddleware(vxpay, () => {}, reject);
		});
	});
});
