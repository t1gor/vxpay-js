import {assert}    from 'chai'
import VXPay       from '../src/VXPay'
import VXPayConfig from '../src/VXPay/VXPayConfig'
import VXPayLogger from '../src/VXPay/VXPayLogger'

describe('VXPay', () => {
	describe('#constructor()', () => {
		it('Can only be called with a valid config object', () => {
			assert.throws(() => new VXPay, TypeError, 'Please provide an instance of VXPayConfig!');
		});
		it('Will initialize logger by default', () => {
			const pay = new VXPay(new VXPayConfig());
			assert.isTrue(pay.logger instanceof VXPayLogger);
		});
	});
	describe('#config()', () => {
		it('Config can be set on the fly', () => {
			const pay = new VXPay(new VXPayConfig());
			const newConfig = new VXPayConfig();
			newConfig.logging = true;
			pay.config = newConfig;
			assert.equal(newConfig, pay.config);
		});
		it('Only a valid config can be accepted', () => {
			const pay = new VXPay(new VXPayConfig());
			assert.throws(() => { pay.config = {}; }, TypeError, 'Please provide an instance of VXPayConfig!');
		});
	});
	describe('#logger()', () => {
		it('Logger can be set on the fly', () => {
			const pay = new VXPay(new VXPayConfig());
			const newLogger = new VXPayLogger(true);
			pay.logger = newLogger;
			assert.equal(newLogger, pay.logger);
		});
		it('Only a valid logger can be accepted', () => {
			const pay = new VXPay(new VXPayConfig());
			assert.throws(() => { pay.logger = {}; }, TypeError, 'Please provide an instance of VXPayLogger!');
		});
	});
});
