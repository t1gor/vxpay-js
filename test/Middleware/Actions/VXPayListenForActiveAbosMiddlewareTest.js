import {assert}                         from 'chai'
import {describe, it}                   from 'mocha'
import sinon                            from 'sinon'
import VXPay                            from './../../../src/VXPay'
import VXPayConfig                      from './../../../src/VXPay/VXPayConfig'
import VXPayTestFx                      from './../../Fixtures/VXPayTestFx'
import VXPayListenForActiveAbosMiddleware from './../../../src/VXPay/Middleware/Actions/VXPayListenForActiveAbosMiddleware'

describe('VXPayListenForActiveAbosMiddleware', () => {

	/** @var {VXPay} */
	let vxpay;

	/** Setup VXPay object mock */
	beforeEach(done => {
		vxpay = new VXPay(new VXPayConfig(VXPayTestFx.getWindow()));
		vxpay._initPaymentFrame();
		done();
	});

	describe('#run()', () => {
		it('Should set a hook if not yet set up', () => {
			const handler = () => {};

			// should not have a onIsLoggedIn handler
			assert.isFalse(vxpay.hooks.hasOnActiveAbos(handler));

			const after = VXPayListenForActiveAbosMiddleware(vxpay, handler, handler);

			// and now SHOULD have
			assert.isTrue(vxpay.hooks.hasOnActiveAbos(handler));
			assert.instanceOf(after, VXPay);
		});
		it('Should reject on error', () => {
			// unset payment frame
			vxpay._paymentFrame = undefined;

			const reject = (err) => {
				assert.instanceOf(err, Error);
			};

			const after = VXPayListenForActiveAbosMiddleware(vxpay, () => {}, reject);
			assert.instanceOf(after, VXPay);
		})
	});
});
