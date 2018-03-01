import {assert}              from 'chai'
import {describe, it}        from 'mocha'
import VXPayAVSStatusMessage from './../../../src/VXPay/Message/Actions/VXPayAVSStatusMessage'
import VXPayAVSStatus        from './../../../src/VXPay/Model/VXPayAVSStatus'

describe('VXPayAVSStatusMessageTest', () => {
	describe('#construct()', () => {
		it('Should build a valid object', () => {
			const msg = new VXPayAVSStatusMessage;
			assert.instanceOf(msg, VXPayAVSStatusMessage);
			assert.instanceOf(msg.status, VXPayAVSStatus);
			assert.isFalse(msg.status.fsk18);
		});
		it('Should build a valid object when constructed with status object', () => {
			const status = new VXPayAVSStatus();

			status.fsk18 = true;

			const msg = new VXPayAVSStatusMessage(status);

			assert.instanceOf(msg, VXPayAVSStatusMessage);
			assert.instanceOf(msg.status, VXPayAVSStatus);
			assert.isTrue(msg.status.fsk18);
		})
	})
});

