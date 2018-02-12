import {assert}                     from 'chai'
import { given }                    from 'mocha-testdata'
import VXPayHasSessionCookieMessage from './../../src/VXPay/Message/VXPayHasSessionCookieMessage'
import VXPayMessageFactory          from './../../src/VXPay/Message/VXPayMessageFactory'

describe('VXPayMessageFactory', () => {
	describe('#fromJson()', () => {
		it('Should be able to parse VXPayHasSessionCookieMessage correctly', () => {
			given(
				'{"type":"modalbox-response-hasLoginCookie","data":true}',
				'{"type":"modalbox-response-hasLoginCookie","data":false}'
			)
			.test('Should be able to parse the message', (json) => {
				assert.instanceOf(VXPayMessageFactory.fromJson(json), VXPayHasSessionCookieMessage);
			});
		});
		it('Will throw a TypeError on invalid format', () => {
			assert.throws(() => VXPayMessageFactory.fromJson('{}'), TypeError);
		});
	});
});
