import sinon                        from 'sinon'
import {assert}                     from 'chai'
import {describe, it}               from 'mocha'
import VXPayPaymentHooksConfig      from './../../src/VXPay/Config/VXPayPaymentHooksConfig'
import VXPayMessageFactory          from './../../src/VXPay/Message/VXPayMessageFactory'
import VXPayHookRouter              from './../../src/VXPay/Message/Hooks/VXPayHookRouter'
import VXPayTestFx                  from './../Fixtures/VXPayTestFx'
import VXPayHasSessionCookieMessage from './../../src/VXPay/Message/VXPayHasSessionCookieMessage'
import VXPayIframeReadyMessage      from './../../src/VXPay/Message/VXPayIframeReadyMessage'
import VXPayContentLoadedMessage from './../../src/VXPay/Message/VXPayContentLoadedMessage'
import VXPayViewReadyMessage     from './../../src/VXPay/Message/VXPayViewReadyMessage'
import VXPayIframeCloseMessage   from './../../src/VXPay/Message/VXPayIframeCloseMessage'
import VXPaySuccessMessage       from './../../src/VXPay/Message/VXPaySuccessMessage'
import VXPayHookMessage          from './../../src/VXPay/Message/Hooks/VXPayHookMessage'
import VXPayTransferTokenMessage from './../../src/VXPay/Message/VXPayTransferTokenMessage'
import VXPayAVSStatusMessage     from './../../src/VXPay/Message/Actions/VXPayAVSStatusMessage'
import VXPayAVSStatus            from './../../src/VXPay/Model/VXPayAVSStatus'

describe('VXPayHookRouter', () => {
	it('Will parse event data', () => {
		const eventData = '{"type":"test"}',
		      fromJson  = sinon.spy(VXPayMessageFactory, 'fromJson');

		// call router function
		VXPayHookRouter(new VXPayPaymentHooksConfig(), {data: eventData});

		// restore original
		fromJson.restore();

		// assert called with correct data
		sinon.assert.calledWith(fromJson, eventData);
	});
	it('Should check event origin', () => {
		const event = {origin: 'http://example.com'};

		assert.throws(
			() => VXPayHookRouter(new VXPayPaymentHooksConfig, event),
			TypeError,
			'Event origin does not match: ' + event.origin
		);
	});
	it('Will trigger `onAny` when received any message', () => {
		const config      = new VXPayPaymentHooksConfig(),
		      eventString = VXPayTestFx.getMessage('has-login-cookie-true'),
		      msgInstance = new VXPayHasSessionCookieMessage(true),
		      trigger     = sinon.spy(config, 'trigger');

		// call router function
		VXPayHookRouter(config, {data: eventString});

		trigger.restore();

		sinon.assert.calledWith(trigger, VXPayPaymentHooksConfig.ON_ANY, [msgInstance])
	});
	it('Will trigger `onAny` & `onIframeReady` on ready iframe', () => {
		const config      = new VXPayPaymentHooksConfig(),
		      eventString = VXPayTestFx.getMessage('iframe-ready'),
		      msgInstance = new VXPayIframeReadyMessage(),
		      trigger     = sinon.spy(config, 'trigger');

		// call router function
		VXPayHookRouter(config, {data: eventString});

		trigger.restore();

		sinon.assert.calledWith(trigger, VXPayPaymentHooksConfig.ON_ANY, [msgInstance]);
		sinon.assert.calledWith(trigger, VXPayPaymentHooksConfig.ON_IFRAME_READY, [msgInstance]);
	});
	it('Will trigger `onAny` & `onContentLoaded` on frame content loaded', () => {
		const config      = new VXPayPaymentHooksConfig(),
		      eventString = VXPayTestFx.getMessage('content-loaded'),
		      msgInstance = new VXPayContentLoadedMessage(),
		      trigger     = sinon.spy(config, 'trigger');

		// call router function
		VXPayHookRouter(config, {data: eventString});

		trigger.restore();

		sinon.assert.calledWith(trigger, VXPayPaymentHooksConfig.ON_ANY, [msgInstance]);
		sinon.assert.calledWith(trigger, VXPayPaymentHooksConfig.ON_CONTENT_LOADED, [msgInstance]);
	});
	it('Will trigger `onAny` & `onViewReady` on frame content loaded', () => {
		const config      = new VXPayPaymentHooksConfig(),
		      eventString = VXPayTestFx.getMessage('view-ready'),
		      msgInstance = new VXPayViewReadyMessage(),
		      trigger     = sinon.spy(config, 'trigger');

		// call router function
		VXPayHookRouter(config, {data: eventString});

		trigger.restore();

		sinon.assert.calledWith(trigger, VXPayPaymentHooksConfig.ON_ANY, [msgInstance]);
		sinon.assert.calledWith(trigger, VXPayPaymentHooksConfig.ON_VIEW_READY, [msgInstance]);
	});
	it('Will trigger `onAny` & `onClose` on frame close event', () => {
		const config      = new VXPayPaymentHooksConfig(),
		      eventString = VXPayTestFx.getMessage('iframe-close'),
		      msgInstance = new VXPayIframeCloseMessage(),
		      trigger     = sinon.spy(config, 'trigger');

		// call router function
		VXPayHookRouter(config, {data: eventString});

		trigger.restore();

		sinon.assert.calledWith(trigger, VXPayPaymentHooksConfig.ON_ANY, [msgInstance]);
		sinon.assert.calledWith(trigger, VXPayPaymentHooksConfig.ON_CLOSE, [msgInstance]);
	});
	it('Will trigger `onAny` & `onLogin` when user loggs in', () => {
		const config      = new VXPayPaymentHooksConfig(),
		      eventString = VXPayTestFx.getMessage('hook-login'),
		      msgInstance = new VXPayHookMessage(VXPayHookMessage.HOOK_LOGIN),
		      trigger     = sinon.spy(config, 'trigger');

		// call router function
		VXPayHookRouter(config, {data: eventString});

		trigger.restore();

		sinon.assert.calledWith(trigger, VXPayPaymentHooksConfig.ON_ANY, [msgInstance]);
		sinon.assert.calledWith(trigger, VXPayPaymentHooksConfig.ON_LOGIN, [msgInstance]);
	});
	it('Will trigger `onAny` & `onSuccess` when user loggs successfully', () => {
		const config      = new VXPayPaymentHooksConfig(),
		      eventString = VXPayTestFx.getMessage('login-success'),
		      msgInstance = new VXPaySuccessMessage(JSON.parse(eventString).data),
		      trigger     = sinon.spy(config, 'trigger');

		// call router function
		VXPayHookRouter(config, {data: eventString});

		trigger.restore();

		sinon.assert.calledWith(trigger, VXPayPaymentHooksConfig.ON_ANY, [msgInstance]);
		sinon.assert.calledWith(trigger, VXPayPaymentHooksConfig.ON_SUCCESS, [msgInstance]);
	});
	it('Will trigger `onAny` & `onTransferToken` on corresponding message', () => {
		const config      = new VXPayPaymentHooksConfig(),
		      eventString = VXPayTestFx.getMessage('transfer-token'),
		      msgInstance = new VXPayTransferTokenMessage('TT_1b5e52e0-ea68-4b24-986a-dea36b5c5940'),
		      trigger     = sinon.spy(config, 'trigger');

		VXPayHookRouter(config, {data: eventString});

		sinon.assert.calledWith(trigger, VXPayPaymentHooksConfig.ON_ANY, [msgInstance]);
		sinon.assert.calledWith(trigger, VXPayPaymentHooksConfig.ON_TRANSFER_TOKEN, [msgInstance]);
	});
	it('Will trigger `onAny` && `onAvsStatus` on corresponding message', () => {
		const config      = new VXPayPaymentHooksConfig(),
		      eventString = VXPayTestFx.getMessage('avs-status-response'),
		      status      = new VXPayAVSStatus(),
		      msgInstance = new VXPayAVSStatusMessage(status),
		      trigger     = sinon.spy(config, 'trigger');

		status.fsk18 = true;

		VXPayHookRouter(config, {data: eventString});

		sinon.assert.calledWith(trigger, VXPayPaymentHooksConfig.ON_ANY, [msgInstance]);
		sinon.assert.calledWith(trigger, VXPayPaymentHooksConfig.ON_AVS_STATUS, [msgInstance]);
	});
});
