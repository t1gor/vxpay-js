import {assert}                           from 'chai'
import {describe, it}                     from 'mocha'
import VXPay                              from './../../../src/VXPay'
import VXPayConfig                        from './../../../src/VXPay/VXPayConfig'
import VXPayTestFx                        from './../../Fixtures/VXPayTestFx'
import VXPayListenForBalanceMiddleware    from './../../../src/VXPay/Middleware/Actions/VXPayListenForBalanceMiddleware'

describe('VXPayListenForBalanceMiddleware', () => {

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
			assert.isFalse(vxpay.hooks.hasOnBalance(handler));

			const after = VXPayListenForBalanceMiddleware(vxpay, handler, handler);

			// and now SHOULD have
			assert.isTrue(vxpay.hooks.hasOnBalance(handler));
			assert.instanceOf(after, VXPay);
		});
		it('Should not set the hooks on consecutive call', () => {
			const handler = () => {};

			VXPayListenForBalanceMiddleware(vxpay, handler, handler);
			assert.equal(1, vxpay.hooks._onBalance.length);

			// call again - not another hook set
			VXPayListenForBalanceMiddleware(vxpay, handler, handler);
			assert.equal(1, vxpay.hooks._onBalance.length);
		});
		it('Should reject on error', done => {
			// unset payment frame
			vxpay._paymentFrame = undefined;

			const reject = (err) => {
				assert.instanceOf(err, Error);
				done();
			};

			const after = VXPayListenForBalanceMiddleware(vxpay, () => {}, reject);
			assert.instanceOf(after, VXPay);
		})
	});
});