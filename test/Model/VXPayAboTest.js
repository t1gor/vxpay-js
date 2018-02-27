import {assert}       from 'chai'
import {describe, it} from 'mocha'
import VXPayAbo from './../../src/VXPay/Model/VXPayAbo'

describe('VXPayAbo', () => {
	describe('#constructor', () => {
		it('Should construct an empty object', () => {
			const abo = new VXPayAbo;
			assert.equal(0, abo.amount);
			assert.equal(0, abo.endDate);
			assert.isFalse(abo.isActive);
			assert.isFalse(abo.isFreeAbo);
			assert.isTrue(abo.isPaidAbo);
			assert.isTrue(abo.isTrialAbo);
		});
	});
	describe('#amount', () => {
		it('Should be able to get/set amount', () => {
			const abo = new VXPayAbo;
			assert.equal(0, abo.amount);

			abo.amount = 12.35;
			assert.equal(12.35, abo.amount);
		})
	});
	describe('#endDate', () => {
		it('Should be able to get/set end date', () => {
			const abo = new VXPayAbo;
			assert.equal(0, abo.endDate);

			abo.endDate = 123456789;
			assert.equal(123456789, abo.endDate);
		})
	});
	describe('#isActive', () => {
		it('Should be able to get/set is-active flag', () => {
			const abo = new VXPayAbo;
			assert.isFalse(abo.isActive);

			abo.isActive = true;
			assert.isTrue(abo.isActive);
		})
	});
	describe('#isFreeAbo', () => {
		it('Should be able to get/set is-free flag', () => {
			const abo = new VXPayAbo;
			assert.isFalse(abo.isFreeAbo);
			assert.isTrue(abo.isPaidAbo);

			abo.isFreeAbo = true;
			assert.isTrue(abo.isFreeAbo);
			assert.isFalse(abo.isPaidAbo);
		})
	});
	describe('#isPaidAbo', () => {
		it('Should be able to get/set is-paid flag', () => {
			const abo = new VXPayAbo;
			assert.isFalse(abo.isFreeAbo);
			assert.isTrue(abo.isPaidAbo);

			abo.isPaidAbo = false;
			assert.isTrue(abo.isFreeAbo);
			assert.isFalse(abo.isPaidAbo);
		})
	});
	describe('#isTrialAbo', () => {
		it('Should be able to get/set trial flag', () => {
			const abo = new VXPayAbo;
			assert.isTrue(abo.isTrialAbo);

			abo.isTrialAbo = false;
			assert.isFalse(abo.isTrialAbo);
		})
	});
	describe('#name', () => {
		it('Should be able to get/set name', () => {
			const abo = new VXPayAbo;
			assert.isEmpty(abo.name);

			abo.name = 'Test abo';
			assert.equal('Test abo', abo.name);
		})
	});
});
