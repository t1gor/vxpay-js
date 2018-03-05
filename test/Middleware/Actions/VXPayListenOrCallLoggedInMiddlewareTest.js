import {assert}                            from 'chai'
import {describe, it, xit}                 from 'mocha'
import VXPay                               from './../../../src/VXPay'
import VXPayConfig                         from './../../../src/VXPay/VXPayConfig'
import VXPayTestFx                         from './../../Fixtures/VXPayTestFx'
import VXPayListenOrCallLoggedInMiddleware from './../../../src/VXPay/Middleware/Actions/VXPayListenOrCallLoggedInMiddleware'

describe('VXPayListenOrCallLoggedInMiddleware', () => {

	/** @var {VXPay} */
	let vxpay;

	/** Setup VXPay object mock */
	beforeEach(done => {
		vxpay = new VXPay(new VXPayConfig(VXPayTestFx.getWindow()));
		vxpay._initPaymentFrame();
		done();
	});

	xdescribe('#run()', () => {
		it('Should set a hook if token not yet received', () => {
			const handler = () => {
			};

			// should have 2 default handlers
			assert.lengthOf(vxpay.hooks._onTransferToken, 2);

			const after = (new VXPayListenOrCallLoggedInMiddleware(vxpay, handler, handler)).run();

			// and now another one
			assert.lengthOf(vxpay.hooks._onTransferToken, 3);
			assert.instanceOf(after, VXPay);
		});
		it('Should NOT set the hooks on consecutive call', () => {
			const handler    = () => {
			      },
			      middleware = new VXPayListenOrCallLoggedInMiddleware(vxpay, handler, handler);

			middleware.run();
			assert.equal(vxpay.hooks._onTransferToken.length, 3);

			// call again - not another hook set
			middleware.run();
			assert.equal(vxpay.hooks._onTransferToken.length, 3);
		});
		/**
		 * @todo
		 */
		xit('Should call trigger when token is already received', done => {
			const handler    = () => {
			      },
			      // init middleware
			      middleware = new VXPayListenOrCallLoggedInMiddleware(vxpay, handler, handler);

			// re-define trigger
			middleware.trigger = () => {
				console.log('fsbfnfns', this);
				done();
			};
			middleware.trigger.bind(middleware);
			middleware._handler = middleware.trigger.bind(middleware);

			middleware._handler();
		});
		it('Should reject on error', done => {
			// unset payment frame
			vxpay._paymentFrame = undefined;

			const reject = (err) => {
				assert.instanceOf(err, Error);
				done();
			};

			const after = (new VXPayListenOrCallLoggedInMiddleware(vxpay, () => {
			}, reject)).run();
			assert.instanceOf(after, VXPay);
		})
	});
});
