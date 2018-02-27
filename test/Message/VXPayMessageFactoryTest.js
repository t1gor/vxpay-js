import {assert}                       from 'chai'
import sinon                          from 'sinon'
import {given}                        from 'mocha-testdata'
import VXPayHasSessionCookieMessage   from './../../src/VXPay/Message/VXPayHasSessionCookieMessage'
import VXPayMessageFactory            from './../../src/VXPay/Message/VXPayMessageFactory'
import VXPayContentLoadedMessage      from './../../src/VXPay/Message/VXPayContentLoadedMessage'
import VXPayIframeReadyMessage        from './../../src/VXPay/Message/VXPayIframeReadyMessage'
import VXPayViewReadyMessage          from './../../src/VXPay/Message/VXPayViewReadyMessage'
import VXPayIframeCloseMessage        from './../../src/VXPay/Message/VXPayIframeCloseMessage'
import VXPayTransferTokenMessage      from './../../src/VXPay/Message/VXPayTransferTokenMessage'
import VXPayIsVisibleMessage          from './../../src/VXPay/Message/VXPayIsVisibleMessage'
import VXPayHookMessageFactory        from './../../src/VXPay/Message/Hooks/VXPayHookMessageFactory'
import VXPayTestFx                    from './../Fixtures/VXPayTestFx'
import VXPayLoggedOutMessage          from './../../src/VXPay/Message/Actions/VXPayLoggedOutMessage'
import VXPayIsLoggedInResponseMessage from './../../src/VXPay/Message/Actions/VXPayIsLoggedInResponseMessage'
import VXPayAVSStatusMessage          from './../../src/VXPay/Message/Actions/VXPayAVSStatusMessage'
import VXPayBalanceMessage            from './../../src/VXPay/Message/Actions/VXPayBalanceMessage'
import VXPayCurrency                  from './../../src/VXPay/Config/VXPayCurrency'
import VXPayActiveAbosMessage         from './../../src/VXPay/Message/Actions/VXPayActiveAbosMessage'
import VXPayAbo                       from './../../src/VXPay/Model/VXPayAbo'

describe('VXPayMessageFactory', () => {
	describe('#fromJson()', () => {
		it('Should be able to parse VXPayHasSessionCookieMessage correctly', () => {
			given(
				VXPayTestFx.getMessage('has-login-cookie-true'),
				VXPayTestFx.getMessage('has-login-cookie-false')
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
			assert.throws(() => VXPayMessageFactory.fromJson(), TypeError);
			assert.throws(() => VXPayMessageFactory.fromJson('{}'), TypeError);
		});
		it('Will return a VXPayContentLoadedMessage object on corresponding event', () => {
			assert.instanceOf(
				VXPayMessageFactory.fromJson(VXPayTestFx.getMessage('content-loaded')),
				VXPayContentLoadedMessage
			);
		});
		it('Will return a VXPayIframeReadyMessage object on corresponding event', () => {
			assert.instanceOf(
				VXPayMessageFactory.fromJson(VXPayTestFx.getMessage('iframe-ready')),
				VXPayIframeReadyMessage
			);
		});
		it('Will return a VXPayViewReadyMessage object on corresponding event', () => {
			assert.instanceOf(
				VXPayMessageFactory.fromJson(VXPayTestFx.getMessage('view-ready')),
				VXPayViewReadyMessage
			);
		});
		it('Will return a VXPayIframeCloseMessage object on corresponding event', () => {
			assert.instanceOf(
				VXPayMessageFactory.fromJson(VXPayTestFx.getMessage('iframe-close')),
				VXPayIframeCloseMessage
			);
		});
		it('Will return a VXPayLoggedOutMessage object on corresponding event', () => {
			assert.instanceOf(
				VXPayMessageFactory.fromJson(VXPayTestFx.getMessage('logout')),
				VXPayLoggedOutMessage
			);
		});
		it('Will return a VXPayIsLoggedInResponseMessage object on corresponding event', () => {
			const msg = VXPayMessageFactory.fromJson(VXPayTestFx.getMessage('is-logged-in'));
			assert.instanceOf(msg, VXPayIsLoggedInResponseMessage);
			assert.isTrue(msg.loggedIn);
		});
		it('Will return a VXPayIsLoggedInResponseMessage object on corresponding event', () => {
			const msg = VXPayMessageFactory.fromJson(VXPayTestFx.getMessage('avs-status-response'));

			assert.instanceOf(msg, VXPayAVSStatusMessage);
			assert.isTrue(msg.status.fsk18);
		});
		it('Will return a VXPayBalanceMessage object on corresponding event', () => {
			const msg = VXPayMessageFactory.fromJson(VXPayTestFx.getMessage('balance-response'));

			assert.instanceOf(msg, VXPayBalanceMessage);
			assert.equal(12.34, msg.balance.amount);
			assert.equal(VXPayCurrency.EUR, msg.balance.currency);
		});
		it('Will return a VXPayActiveAbosMessage object on corresponding event', () => {
			const msg = VXPayMessageFactory.fromJson(VXPayTestFx.getMessage('active-abos'));

			assert.instanceOf(msg, VXPayActiveAbosMessage);
			assert.equal(2, msg.abos.length);
			assert.instanceOf(msg.abos[0], VXPayAbo);
			assert.instanceOf(msg.abos[1], VXPayAbo);
		});
		it('Will return a VXPayTransferTokenMessage object on corresponding event', () => {
			const msg = VXPayMessageFactory.fromJson(VXPayTestFx.getMessage('transfer-token'));

			assert.instanceOf(msg, VXPayTransferTokenMessage);
			assert.equal('TT_1b5e52e0-ea68-4b24-986a-dea36b5c5940', msg.token);
		});
		it('Will return a VXPayIsVisibleMessage object on corresponding event', () => {
			assert.instanceOf(
				VXPayMessageFactory.fromJson(VXPayTestFx.getMessage('is-visible')),
				VXPayIsVisibleMessage
			);
		});
		/**
		 * @link https://semaphoreci.com/community/tutorials/best-practices-for-spies-stubs-and-mocks-in-sinon-js
		 */
		it('Will call the hook factory on hook events', () => {
			const fromData = sinon.spy(VXPayHookMessageFactory, 'fromData'),
			      json     = VXPayTestFx.getMessage('hook-flow-changed');

			// call the factory
			VXPayMessageFactory.fromJson(json);

			// restore function
			fromData.restore();

			// assert called with correct data
			sinon.assert.calledWith(fromData, JSON.parse(json).data);
		});
	})
});
