import {assert}                     from 'chai'
import fs                           from 'fs'
import path                         from 'path'
import sinon                        from 'sinon'
import {given}                      from 'mocha-testdata'
import VXPayHasSessionCookieMessage from './../../src/VXPay/Message/VXPayHasSessionCookieMessage'
import VXPayMessageFactory          from './../../src/VXPay/Message/VXPayMessageFactory'
import VXPayContentLoadedMessage    from './../../src/VXPay/Message/VXPayContentLoadedMessage'
import VXPayIframeReadyMessage      from './../../src/VXPay/Message/VXPayIframeReadyMessage'
import VXPayViewReadyMessage        from './../../src/VXPay/Message/VXPayViewReadyMessage'
import VXPayIframeCloseMessage      from './../../src/VXPay/Message/VXPayIframeCloseMessage'
import VXPayTransferTokenMessage    from './../../src/VXPay/Message/VXPayTransferTokenMessage'
import VXPayIsVisibleMessage        from './../../src/VXPay/Message/VXPayIsVisibleMessage'
import VXPayHookMessageFactory      from './../../src/VXPay/Message/Hooks/VXPayHookMessageFactory'
import VXPaySuccessMessage          from './../../src/VXPay/Message/VXPaySuccessMessage'

describe('VXPayMessageFactory', () => {
	const fixtures = path.resolve(__dirname, './../fixtures/message'),
	      getEvent = (type) => fs.readFileSync(path.resolve(fixtures, type + '.json'));

	describe('#fromJson()', () => {
		it('Should be able to parse VXPayHasSessionCookieMessage correctly', () => {
			given(
				getEvent('has-login-cookie-true'),
				getEvent('has-login-cookie-false')
			)
				.test('Should be able to parse the message', (json) => {
					const msg = VXPayMessageFactory.fromJson(json);
					assert.instanceOf(msg, VXPayHasSessionCookieMessage);
					assert.equal(JSON.parse(json).data, msg.hasCookie);
				});
		});
		it('Will throw a SyntaxError on non-JSON message', () => {
			assert.throws(() => VXPayMessageFactory.fromJson(''), SyntaxError);
		});
		it('Will throw a TypeError on invalid format', () => {
			assert.throws(() => VXPayMessageFactory.fromJson('{}'), TypeError);
		});
		it('Will return a VXPayContentLoadedMessage object on corresponding event', () => {
			assert.instanceOf(
				VXPayMessageFactory.fromJson(getEvent('content-loaded')),
				VXPayContentLoadedMessage
			);
		});
		it('Will return a VXPayIframeReadyMessage object on corresponding event', () => {
			assert.instanceOf(
				VXPayMessageFactory.fromJson(getEvent('iframe-ready')),
				VXPayIframeReadyMessage
			);
		});
		it('Will return a VXPayViewReadyMessage object on corresponding event', () => {
			assert.instanceOf(
				VXPayMessageFactory.fromJson(getEvent('view-ready')),
				VXPayViewReadyMessage
			);
		});
		it('Will return a VXPayIframeCloseMessage object on corresponding event', () => {
			assert.instanceOf(
				VXPayMessageFactory.fromJson(getEvent('iframe-close')),
				VXPayIframeCloseMessage
			);
		});
		it('Will return a VXPayTransferTokenMessage object on corresponding event', () => {
			const msg = VXPayMessageFactory.fromJson(getEvent('transfer-token'));

			assert.instanceOf(msg, VXPayTransferTokenMessage);
			assert.equal('TT_1b5e52e0-ea68-4b24-986a-dea36b5c5940', msg.token);
		});
		it('Will return a VXPayIsVisibleMessage object on corresponding event', () => {
			assert.instanceOf(
				VXPayMessageFactory.fromJson(getEvent('is-visible')),
				VXPayIsVisibleMessage
			);
		});
		/**
		 * @link https://semaphoreci.com/community/tutorials/best-practices-for-spies-stubs-and-mocks-in-sinon-js
		 */
		it('Will call the hook factory on hook events', () => {
			const fromData = sinon.spy(VXPayHookMessageFactory, 'fromData'),
			      json     = getEvent('hook-flow-changed');

			// call the factory
			VXPayMessageFactory.fromJson(json);

			// restore function
			fromData.restore();

			// assert called with correct data
			sinon.assert.calledWith(fromData, JSON.parse(json).data);
		});
		it('Will return a VXPaySuccessMessage object on corresponding event', () => {
			const json = getEvent('login-success'),
			      userData = JSON.parse(json).data,
			      msg = VXPayMessageFactory.fromJson(json);

			assert.instanceOf(msg, VXPaySuccessMessage);
			assert.equal(JSON.stringify(msg.userData), JSON.stringify(userData));
		});
	})
});
