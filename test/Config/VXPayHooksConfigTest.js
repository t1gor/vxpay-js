import {describe, it}   from 'mocha'
import {assert}         from 'chai'
import VXPayHooksConfig from './../../src/VXPay/Config/VXPayHooksConfig'

describe('VXPayHooksConfig', () => {
	describe('#onLoad()', () => {
		it('Should allow setting onLoad hook', () => {
			const hooks = new VXPayHooksConfig();
			assert.equal(0, hooks._onLoad.length);
			hooks.onLoad(() => {});
			assert.equal(1, hooks._onLoad.length);
		});
	});
});
