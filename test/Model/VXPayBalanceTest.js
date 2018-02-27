import {assert}       from 'chai'
import {describe, it} from 'mocha'
import VXPayBalance   from './../../src/VXPay/Model/VXPayBalance'
import VXPayCurrency  from './../../src/VXPay/Config/VXPayCurrency'

describe('VXPayBalance', () => {
	describe('#construct()', () => {
		it('Should build an empty object with no params', () => {
			const balance = new VXPayBalance();
			assert.equal(0, balance.amount);
			assert.equal(VXPayCurrency.EUR, balance.currency);
		});
		it('Should build a valid object with only amount', () => {
			const balance = new VXPayBalance(54.85);
			assert.equal(54.85, balance.amount);
			assert.equal(VXPayCurrency.EUR, balance.currency);
		});
		it('Should build a valid object with all params provided', () => {
			const balance = new VXPayBalance(98.65, VXPayCurrency.CHF);
			assert.equal(98.65, balance.amount);
			assert.equal(VXPayCurrency.CHF, balance.currency);
		});
	});
	describe('#toString()', () => {
		it('Should be able to get a human-readable string', () => {
			assert.equal('12.00 EUR', (new VXPayBalance(12, VXPayCurrency.EUR)).toString());
			assert.equal('22.55 USD', (new VXPayBalance(22.55, VXPayCurrency.USD)).toString());
			assert.equal('0.99 CHF', (new VXPayBalance(0.99, VXPayCurrency.CHF)).toString());
		});
	});
});
