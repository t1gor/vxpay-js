import {assert}       from 'chai'
import {describe, it} from 'mocha'
import VXPayUrlHelper from './../src/VXPay/VXPayUrlHelper'
import {URL}          from 'url'

describe('VXPayUrlHelper', () => {
	describe('#generateUrl()', () => {
		let helper;

		/** Setup helper with URL */
		beforeEach(done => {
			helper = new VXPayUrlHelper(URL);
			done();
		});

		it('Should return the base URL if no params or config', () => {
			const base = 'https://www.example.com/';
			assert.equal(base, helper.generate(base));
		});
		it('Should strip the hash, if any', () => {
			assert.equal(helper.generate('https://www.example.com#some-hash'), 'https://www.example.com/');
			assert.equal(helper.generate('https://www.example.com/#some-hash'), 'https://www.example.com/');
		});
		it('Should encode and append params (as object)', () => {
			const base   = 'http://api.example.com/',
			      params = {foo: 'bar'};
			assert.equal(helper.generate(base, params), 'http://api.example.com/?foo=bar');
		});
		it('Should encode and append config (as object)', () => {
			const base   = 'http://user.example.com/',
			      params = false,
			      config = {some: 'value', another: 123};
			assert.equal(
				helper.generate(base, params, config),
				'http://user.example.com/?mc%5Bsome%5D=value&mc%5Banother%5D=123'
			);
		});
	});
});
