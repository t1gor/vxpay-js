import sinon                        from 'sinon'
import VXPayPaymentHooksConfig      from './../../src/VXPay/Config/VXPayPaymentHooksConfig'
import VXPayMessageFactory          from './../../src/VXPay/Message/VXPayMessageFactory'
import VXPayHookRouter              from './../../src/VXPay/Message/Hooks/VXPayHookRouter'
import VXPayTestFx                  from './../Fixtures/VXPayTestFx'
import VXPayHasSessionCookieMessage from './../../src/VXPay/Message/VXPayHasSessionCookieMessage'
import VXPayIframeReadyMessage      from '../../src/VXPay/Message/VXPayIframeReadyMessage'
import VXPayContentLoadedMessage    from '../../src/VXPay/Message/VXPayContentLoadedMessage'
import VXPayViewReadyMessage        from '../../src/VXPay/Message/VXPayViewReadyMessage'
import VXPayIframeCloseMessage      from '../../src/VXPay/Message/VXPayIframeCloseMessage'
import VXPaySuccessMessage          from '../../src/VXPay/Message/VXPaySuccessMessage'
import VXPayHookMessage             from '../../src/VXPay/Message/Hooks/VXPayHookMessage'

describe('VXPayHookRouter', () => {
	it('Will parse event data', () => {
		const eventData = '{"type":"test"}',
		      fromJson = sinon.spy(VXPayMessageFactory, 'fromJson');

		// call router function
		VXPayHookRouter(new VXPayPaymentHooksConfig(), {data: eventData});

		// restore original
		fromJson.restore();

		// assert called with correct data
		sinon.assert.calledWith(fromJson, eventData);
	});
	it('Will trigger `onAny` when received any message', () => {
		const config = new VXPayPaymentHooksConfig(),
		      eventString = VXPayTestFx.getMessage('has-login-cookie-true'),
		      msgInstance = new VXPayHasSessionCookieMessage(true),
			  trigger = sinon.spy(config, 'trigger');

		// call router function
		VXPayHookRouter(config, { data: eventString });

		trigger.restore();

		sinon.assert.calledWith(trigger, VXPayPaymentHooksConfig.ON_ANY, [msgInstance])
	});
	it('Will trigger `onAny` & `onIframeReady` on ready iframe', () => {
		const config = new VXPayPaymentHooksConfig(),
		      eventString = VXPayTestFx.getMessage('iframe-ready'),
		      msgInstance = new VXPayIframeReadyMessage(),
		      trigger = sinon.spy(config, 'trigger');

		// call router function
		VXPayHookRouter(config, { data: eventString });

		trigger.restore();

		sinon.assert.calledWith(trigger, VXPayPaymentHooksConfig.ON_ANY, [msgInstance]);
		sinon.assert.calledWith(trigger, VXPayPaymentHooksConfig.ON_IFRAME_READY, [msgInstance]);
	});
	it('Will trigger `onAny` & `onContentLoaded` on frame content loaded', () => {
		const config = new VXPayPaymentHooksConfig(),
		      eventString = VXPayTestFx.getMessage('content-loaded'),
		      msgInstance = new VXPayContentLoadedMessage(),
		      trigger = sinon.spy(config, 'trigger');

		// call router function
		VXPayHookRouter(config, { data: eventString });

		trigger.restore();

		sinon.assert.calledWith(trigger, VXPayPaymentHooksConfig.ON_ANY, [msgInstance]);
		sinon.assert.calledWith(trigger, VXPayPaymentHooksConfig.ON_CONTENT_LOADED, [msgInstance]);
	});
	it('Will trigger `onAny` & `onViewReady` on frame content loaded', () => {
		const config = new VXPayPaymentHooksConfig(),
		      eventString = VXPayTestFx.getMessage('view-ready'),
		      msgInstance = new VXPayViewReadyMessage(),
		      trigger = sinon.spy(config, 'trigger');

		// call router function
		VXPayHookRouter(config, { data: eventString });

		trigger.restore();

		sinon.assert.calledWith(trigger, VXPayPaymentHooksConfig.ON_ANY, [msgInstance]);
		sinon.assert.calledWith(trigger, VXPayPaymentHooksConfig.ON_VIEW_READY, [msgInstance]);
	});
	it('Will trigger `onAny` & `onClose` on frame close event', () => {
		const config = new VXPayPaymentHooksConfig(),
		      eventString = VXPayTestFx.getMessage('iframe-close'),
		      msgInstance = new VXPayIframeCloseMessage(),
		      trigger = sinon.spy(config, 'trigger');

		// call router function
		VXPayHookRouter(config, { data: eventString });

		trigger.restore();

		sinon.assert.calledWith(trigger, VXPayPaymentHooksConfig.ON_ANY, [msgInstance]);
		sinon.assert.calledWith(trigger, VXPayPaymentHooksConfig.ON_CLOSE, [msgInstance]);
	});
	it('Will trigger `onAny` & `onLogin` when user loggs in', () => {
		const config = new VXPayPaymentHooksConfig(),
		      eventString = VXPayTestFx.getMessage('hook-login'),
		      msgInstance = new VXPayHookMessage(VXPayHookMessage.HOOK_LOGIN),
		      trigger = sinon.spy(config, 'trigger');

		// call router function
		VXPayHookRouter(config, { data: eventString });

		trigger.restore();

		sinon.assert.calledWith(trigger, VXPayPaymentHooksConfig.ON_ANY, [msgInstance]);
		sinon.assert.calledWith(trigger, VXPayPaymentHooksConfig.ON_LOGIN, [msgInstance]);
	});
	it('Will trigger `onAny` & `onSuccess` when user loggs in', () => {
		const config = new VXPayPaymentHooksConfig(),
		      eventString = VXPayTestFx.getMessage('login-success'),
		      msgInstance = new VXPaySuccessMessage(JSON.parse(eventString).data),
		      trigger = sinon.spy(config, 'trigger');

		// call router function
		VXPayHookRouter(config, { data: eventString });

		trigger.restore();

		sinon.assert.calledWith(trigger, VXPayPaymentHooksConfig.ON_ANY, [msgInstance]);
		sinon.assert.calledWith(trigger, VXPayPaymentHooksConfig.ON_SUCCESS, [msgInstance]);
	});
});
