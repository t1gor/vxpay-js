import {assert}                        from 'chai'
import {describe, it}                  from 'mocha'
import sinon                           from 'sinon'
import VXPay                           from './../../../src/VXPay'
import VXPayConfig                     from './../../../src/VXPay/VXPayConfig'
import VXPayTestFx                     from './../../Fixtures/VXPayTestFx'
import VXPayAVSStatusTriggerMiddleware from './../../../src/VXPay/Middleware/Actions/VXPayAVSStatusTriggerMiddleware'
import VXPayGetAVSStatusMessage        from './../../../src/VXPay/Message/Actions/VXPayGetAVSStatusMessage'
import VXPayTransferTokenMessage       from './../../../src/VXPay/Message/VXPayTransferTokenMessage'
import VXPayPaymentHooksConfig         from './../../../src/VXPay/Config/VXPayPaymentHooksConfig'

describe('VXPayAVSStatusTriggerMiddleware', () => {

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
			// should have 2 default handlers
			assert.lengthOf(vxpay.hooks._onTransferToken, 2);

			const after = VXPayAVSStatusTriggerMiddleware(vxpay);

			// and now another one
			assert.lengthOf(vxpay.hooks._onTransferToken, 3);
			assert.instanceOf(after, VXPay);
		});
		it('Should send a postMessage if token already received', () => {
			// mock postMessage
			sinon.spy(vxpay._paymentFrame, 'postMessage');

			// alter state to have token
			vxpay.state.markHasToken(new VXPayTransferTokenMessage('token'));

			// call middleware
			const after = VXPayAVSStatusTriggerMiddleware(vxpay);

			// hooks count not changed
			assert.lengthOf(vxpay.hooks._onTransferToken, 2);
			assert.instanceOf(after, VXPay);

			// check post message sent (compare in JSON)
			assert.equal(
				JSON.stringify(vxpay._paymentFrame.postMessage.getCall(0).args[0]),
				(new VXPayGetAVSStatusMessage).toString()
			);

			// clean up
			vxpay._paymentFrame.postMessage.restore();
		});
		it('Should send a postMessage when token is received', () => {
			// mock postMessage
			sinon.spy(vxpay._paymentFrame, 'postMessage');

			// call middleware
			const after = VXPayAVSStatusTriggerMiddleware(vxpay);

			// hooks count not changed
			assert.lengthOf(vxpay.hooks._onTransferToken, 3);
			assert.instanceOf(after, VXPay);

			// trigger manually
			vxpay.hooks.trigger(
				VXPayPaymentHooksConfig.ON_TRANSFER_TOKEN,
				[new VXPayTransferTokenMessage('token')]
			);

			// check post message sent (compare in JSON)
			assert.equal(
				JSON.stringify(vxpay._paymentFrame.postMessage.getCall(0).args[0]),
				(new VXPayGetAVSStatusMessage).toString()
			);

			// clean up
			vxpay._paymentFrame.postMessage.restore();
		});
	});
});
