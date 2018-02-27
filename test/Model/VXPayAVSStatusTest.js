import {assert}       from 'chai'
import {describe, it} from 'mocha'
import VXPayAVSStatus from './../../src/VXPay/Model/VXPayAVSStatus'
import VXPayTestFx    from './../Fixtures/VXPayTestFx'

describe('VXPayAVSStatus', () => {
	describe('#constructor', () => {
		it('Should construct an empty object', () => {
			assert.isFalse((new VXPayAVSStatus).fsk18);
		});
	});
	describe('get/set #fsk18', () => {
		it('Should be able to get FSK18 status', () => {
			assert.isFalse((new VXPayAVSStatus).fsk18);
		});
		it('Should be able to set FSK18 status', () => {
			const status = new VXPayAVSStatus;
			assert.isFalse(status.fsk18);

			status.fsk18 = true;
			assert.isTrue(status.fsk18);
		});
	});
	describe('#fromData', () => {
		it('Should construct an empty on no data', () => {
			const status = VXPayAVSStatus.fromData();
			assert.instanceOf(status, VXPayAVSStatus);
			assert.isFalse(status.fsk18);
		});
		it('Should construct a valid object on valid data', () => {
			const event = VXPayTestFx.getMessage('avs-status-response'),
			      status = VXPayAVSStatus.fromData(JSON.parse(event).data);
			assert.instanceOf(status, VXPayAVSStatus);
			assert.isTrue(status.fsk18);
		});
	});
});
