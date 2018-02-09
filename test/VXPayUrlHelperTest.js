import {assert}       from 'chai'
import VXPayUrlHelper from "../src/VXPay/VXPayUrlHelper";

describe('VXPayUrlHelper', () => {
	describe('#generateUrl()', () => {
		it('Should return the base URL if no params or config', () => {
			const base = 'https://www.example.com';
			assert.equal(base, VXPayUrlHelper.generate(base));
		});
		it('Should strip the hash, if any', () => {
			assert.equal('https://www.example.com', VXPayUrlHelper.generate('https://www.example.com#some-hash'));
			assert.equal('https://www.example.com/', VXPayUrlHelper.generate('https://www.example.com/#some-hash'));
		});
		it('Should encode and append params (as object)', () => {
			const base = 'http://api.example.com',
			      params = {foo: 'bar'};
			assert.equal('http://api.example.com?foo=bar', VXPayUrlHelper.generate(base, params));
		});
		it('Should encode and append config (as object)', () => {
			const base = 'http://user.example.com',
			      params = false,
				  config = {some: 'value', another: 123};
			assert.equal('http://user.example.com?mc[some]=value&mc[another]=123', VXPayUrlHelper.generate(base, params, config));
		});
	});
});
