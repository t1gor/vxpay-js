import {assert}                  from 'chai'
import {describe, it}            from 'mocha'
import VXPay                     from './../../../src/VXPay'
import VXPayConfig               from './../../../src/VXPay/VXPayConfig'
import VXPayTestFx               from './../../Fixtures/VXPayTestFx'
import VXPayWhenTokenTransferred from './../../../src/VXPay/Middleware/Condition/VXPayWhenTokenTransferred'
import VXPayTransferTokenMessage from './../../../src/VXPay/Message/VXPayTransferTokenMessage'

describe('VXPayWhenTokenTransferred', () => {
	/** @var {VXPay} */
	let vxpay;

	/** Setup VXPay object mock */
	beforeEach(done => {
		vxpay = new VXPay(new VXPayConfig(VXPayTestFx.getWindow()));
		vxpay._initPaymentFrame();
		done();
	});

	describe('#run()', () => {
		it('Should return a Promise', () => {
			assert.instanceOf(VXPayWhenTokenTransferred(vxpay), Promise)
		});
		it('Should set a hook if token not yet present', () => {
			assert.equal(2, vxpay.hooks._onTransferToken.length);

			VXPayWhenTokenTransferred(vxpay);

			assert.equal(3, vxpay.hooks._onTransferToken.length);
		});
		it('Resolves when token already present', () => {
			vxpay.state.markHasToken(new VXPayTransferTokenMessage('token'));

			VXPayWhenTokenTransferred(vxpay)
				.then(returned => assert.instanceOf(returned, VXPay))
		});
		it('Will resolve when token transferred', () => {
			VXPayWhenTokenTransferred(vxpay)
				.then(returned => assert.instanceOf(returned, VXPay));

			vxpay.state.markHasToken(new VXPayTransferTokenMessage('token'));
		});
		it('Resolves when enableTab = true', () => {
			vxpay.config.enableTab = true;

			VXPayWhenTokenTransferred(vxpay)
				.then(returned => assert.instanceOf(returned, VXPay))
		});
		it('Rejects on error', () => {
			vxpay._config = undefined;

			VXPayWhenTokenTransferred(vxpay)
				.catch(err => assert.instanceOf(err, Error))
		});
	});
});
