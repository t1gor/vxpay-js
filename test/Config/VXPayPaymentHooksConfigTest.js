import {describe, it}            from 'mocha'
import {assert}                  from 'chai'
import VXPayPaymentHooksConfig   from './../../src/VXPay/Config/VXPayPaymentHooksConfig'
import VXPayTransferTokenMessage from './../../src/VXPay/Message/VXPayTransferTokenMessage'


describe('VXPayPaymentHooksConfig', () => {

	let hooks;

	beforeEach(done => {
		hooks = undefined;
		hooks = new VXPayPaymentHooksConfig();
		done();
	});

	describe('#hasOnTransferToken()', () => {
		it('Is empty by default', () => assert.equal(hooks._onTransferToken.length, 0));
		it('Should be possible to check if handler is already set', () => {
			const handler = msg => {};

			assert.isFalse(hooks.hasOnTransferToken(handler));
			hooks.onTransferToken(handler);
			assert.isTrue(hooks.hasOnTransferToken(handler));
		});
		it('Should be possible to set handler', () => {
			hooks.onTransferToken(msg => {
				assert.instanceOf(msg, VXPayTransferTokenMessage);
				assert.equal('token', msg.token);
			});

			hooks.trigger(
				VXPayPaymentHooksConfig.ON_TRANSFER_TOKEN,
				[new VXPayTransferTokenMessage('token')]
			);
		});
	});
});
