import {describe, it} from 'mocha'
import {assert}       from 'chai'
import VXPayCurrency  from './../../src/VXPay/Config/VXPayCurrency'

describe('VXPayCurrency', () => {
	describe('#getDefault', () => {
		it('Should return a string', () => {
			assert.isString(VXPayCurrency.getDefault())
		});
		it('Should return a valid currency symbol', () => {
			assert.include(
				VXPayCurrency.getAllowed(),
				VXPayCurrency.getDefault()
			)
		});
	});
	describe('#allowed', () => {
		assert.isArray(VXPayCurrency.getAllowed());
		assert.notEmpty(VXPayCurrency.getAllowed());
	});
});
