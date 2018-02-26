import {assert}                      from 'chai'
import VXPayMessage                  from './../../src/VXPay/VXPayMessage'
import VXPayAdditionalOptionsMessage from './../../src/VXPay/Message/VXPayAdditionalOptionsMessage'

describe('VXPayAdditionalOptionsMessageTest', () => {
	describe('#constructor()', () => {
		it('Should construct a correct object', () => {
			const msg = new VXPayAdditionalOptionsMessage();
			assert.equal(VXPayMessage.TYPE_ADDITIONAL_INFO, msg.type, "Type doesn't match!");
			assert.empty(msg.options);
		})
	});
	describe('#toString()', () => {
		it('Should convert to JSON when called', () => {
			assert.equal(
				'{"type":"modalbox-additional-info","options":{}}',
				(new VXPayAdditionalOptionsMessage).toString()
			);
			assert.equal(
				'{"type":"modalbox-additional-info","options":{"test":"foobar"}}',
				(new VXPayAdditionalOptionsMessage({test: "foobar"})).toString()
			)
		})
	});
});
