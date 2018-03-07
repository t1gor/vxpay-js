import VXPayConfig                         from './VXPay/VXPayConfig'
import VXPayLogger                         from './VXPay/VXPayLogger'
import VXPayHelperFrame                    from './VXPay/Dom/Frame/VXPayHelperFrame'
import VXPayPaymentFrame                   from './VXPay/Dom/Frame/VXPayPaymentFrame'
import VXPayPaymentTab                     from './VXPay/Dom/Frame/VXPayPaymentTab'
import VXPayInitPaymentMiddleware          from './VXPay/Middleware/Frames/VXPayInitPaymentMiddleware'
import VXPayInitHelperMiddleware           from './VXPay/Middleware/Frames/VXPayInitHelperMiddleware'
import VXPayListenOrCallLoggedInMiddleware from './VXPay/Middleware/Actions/VXPayListenOrCallLoggedInMiddleware'
import VXPayOnAVSStatusListenMiddleware    from './VXPay/Middleware/Actions/VXPayOnAVSStatusListenMiddleware'
import VXPayAVSStatusTriggerMiddleware     from './VXPay/Middleware/Actions/VXPayAVSStatusTriggerMiddleware'
import VXPayListenForBalanceMiddleware     from './VXPay/Middleware/Actions/VXPayListenForBalanceMiddleware'
import VXPayBalanceTriggerMiddleware       from './VXPay/Middleware/Actions/VXPayBalanceTriggerMiddleware'
import VXPayListenForActiveAbosMiddleware  from './VXPay/Middleware/Actions/VXPayListenForActiveAbosMiddleware'
import VXPayActiveAbosTriggerMiddleware    from './VXPay/Middleware/Actions/VXPayActiveAbosTriggerMiddleware'
import VXPayListenForLogoutMiddleware      from './VXPay/Middleware/Actions/VXPayListenForLogoutMiddleware'
import VXPayLogoutTriggerMiddleware        from './VXPay/Middleware/Actions/VXPayLogoutTriggerMiddleware'
import VXPayState                          from './VXPay/Model/VXPayState'
import VXPayWhenTokenTransferred           from './VXPay/Middleware/Condition/VXPayWhenTokenTransferred'
import VXPayOpenLoginCommand               from './VXPay/Middleware/Command/VXPayOpenLoginCommand'
import VXPayOpenSignUpCommand              from './VXPay/Middleware/Command/VXPayOpenSignUpCommand'
import VXPayOpenVoiceCallCommand           from './VXPay/Middleware/Command/VXPayOpenVoiceCallCommand'
import VXPayOpenPaymentCommand             from './VXPay/Middleware/Command/VXPayOpenPaymentCommand'
import VXPayOpenSettingsCommand            from './VXPay/Middleware/Command/VXPayOpenSettingsCommand'
import VXPayOpenAboCommand                 from './VXPay/Middleware/Command/VXPayOpenAboCommand'
import VXPayResetPasswordCommand           from './VXPay/Middleware/Command/VXPayResetPasswordCommand'
import VXPayLostPasswordCommand            from './VXPay/Middleware/Command/VXPayLostPasswordCommand'
import VXPayOpenLimitedPaymentCommand      from './VXPay/Middleware/Command/VXPayOpenLimitedPaymentCommand'
import VXPayOpenVipAboTrialCommand         from './VXPay/Middleware/Command/VXPayOpenVipAboTrialCommand'
import VXPayOpenPremiumAboCommand          from './VXPay/Middleware/Command/VXPayOpenPremiumAboCommand'
import VXPayOpenAVSCommand                 from './VXPay/Middleware/Command/VXPayOpenAVSCommand'
import VXPayOpenPromoCodeCommand           from './VXPay/Middleware/Command/VXPayOpenPromoCodeCommand'
import VXPayOpenOneClickCommand     from './VXPay/Middleware/Command/VXPayOpenOneClickCommand'
import VXPayOpenAutoRechargeCommand from './VXPay/Middleware/Command/VXPayOpenAutoRechargeCommand'
import VXPayOpenOpenBalanceCommand  from './VXPay/Middleware/Command/VXPayOpenOpenBalanceCommand'
import VXPayTriggerShowForTab       from './VXPay/Middleware/Frames/VXPayTriggerShowForTab'
import VXPayPaymentHooksConfig      from './VXPay/Config/VXPayPaymentHooksConfig'
import VXPayEventListener           from './VXPay/Event/VXPayEventListener'
import VXPayHookRouter              from './VXPay/Message/Hooks/VXPayHookRouter'
import VXPayIframe from './VXPay/Dom/VXPayIframe'

export default class VXPay {
	/**
	 * @param {VXPayConfig} config
	 */
	constructor(config) {
		this._state = new VXPayState();
		this.logger = new VXPayLogger(config.logging, config.window);
		this.config = config;
		this._hooks = new VXPayPaymentHooksConfig(config.getCurrentOrigin());
		this._hooksRouter = new VXPayHookRouter(this._hooks);
		this.logger.log('VXPay::constructor');
		this.startListening();
	}

	/**
	 * @return {VXPayState}
	 */
	get state() {
		return this._state;
	}

	/**
	 * @return {Promise<VXPay>}
	 * @private
	 */
	_initHelperFrame() {
		return new Promise(resolve => VXPayInitHelperMiddleware(this, resolve))
	}

	/**
	 * @param {Boolean} triggerLoad
	 * @return {Promise<VXPay>}
	 * @private
	 */
	_initPaymentFrame(triggerLoad = true) {
		this.logger.log('VXPay::_initPaymentFrame');
		return new Promise(resolve => VXPayInitPaymentMiddleware(this, resolve, triggerLoad));
	}

	/**
	 * @return {Promise<VXPay>}
	 */
	openLogin() {
		this.logger.log('VXPay::openLogin');

		return new Promise((resolve, reject) => {
			return this._initPaymentFrame()
				.then(VXPayWhenTokenTransferred)
				.then(VXPayOpenLoginCommand)
				.then(VXPayTriggerShowForTab)
				.then(resolve)
				.catch(reject)
		});
	}

	/**
	 * @return {Promise<VXPay>}
	 */
	openSignUp() {
		return new Promise((resolve, reject) => {
			return this._initPaymentFrame()
				.then(VXPayWhenTokenTransferred)
				.then(VXPayOpenSignUpCommand)
				.then(VXPayTriggerShowForTab)
				.then(resolve)
				.catch(reject)
		});
	}

	/**
	 * @return {Promise<VXPay>}
	 */
	openVoiceCall() {
		return new Promise((resolve, reject) => {
			this._initPaymentFrame()
				.then(VXPayWhenTokenTransferred)
				.then(VXPayOpenVoiceCallCommand.run)
				.then(VXPayTriggerShowForTab)
				.then(resolve)
				.catch(reject)
		})
	}

	/**
	 * @return {Promise<VXPay>}
	 */
	openSignUpOrLogin() {
		return this._initHelperFrame()
			.then(vxpay => vxpay.helperFrame.getLoginCookie())
			.then(msg => msg.hasCookie ? this.openLogin() : this.openSignUp())
	}

	/**
	 * @return {Promise<VXPay>}
	 */
	openPayment() {
		return new Promise((resolve, reject) => {
			this._initPaymentFrame()
				.then(VXPayWhenTokenTransferred)
				.then(VXPayOpenPaymentCommand.run)
				.then(VXPayTriggerShowForTab)
				.then(resolve)
				.catch(reject)
		})
	}

	/**
	 * @return {Promise<VXPay>}
	 */
	openAbo() {
		return new Promise((resolve, reject) => {
			this._initPaymentFrame()
				.then(VXPayWhenTokenTransferred)
				.then(VXPayOpenAboCommand)
				.then(VXPayTriggerShowForTab)
				.then(resolve)
				.catch(reject)
		})
	}

	/**
	 * @return {Promise<VXPay>}
	 */
	openSettings() {
		return new Promise((resolve, reject) => {
			this._initPaymentFrame()
				.then(VXPayWhenTokenTransferred)
				.then(VXPayOpenSettingsCommand.run)
				.then(VXPayTriggerShowForTab)
				.then(resolve)
				.catch(reject)
		})
	}

	/**
	 * @note most times opens registration?
	 * @note some times view-ready is not fired?
	 *
	 * @return {Promise<VXPay>}
	 */
	resetPassword() {
		return new Promise((resolve, reject) => {
			this._initPaymentFrame()
				.then(VXPayWhenTokenTransferred)
				.then(VXPayResetPasswordCommand.run)
				.then(VXPayTriggerShowForTab)
				.then(resolve)
				.catch(reject)
		})
	}

	/**
	 * @return {Promise<VXPay>}
	 */
	lostPassword() {
		return new Promise((resolve, reject) => {
			this._initPaymentFrame()
				.then(VXPayWhenTokenTransferred)
				.then(VXPayLostPasswordCommand.run)
				.then(VXPayTriggerShowForTab)
				.then(resolve)
				.catch(reject)
		})
	}

	/**
	 * @return {Promise<VXPay>}
	 */
	limitPayment() {
		return new Promise((resolve, reject) => {
			this._initPaymentFrame()
				.then(VXPayWhenTokenTransferred)
				.then(VXPayOpenLimitedPaymentCommand.run)
				.then(VXPayTriggerShowForTab)
				.then(resolve)
				.catch(reject)
		})
	}

	/**
	 * @return {Promise<VXPay>}
	 */
	vipAboTrial() {
		return new Promise((resolve, reject) => {
			this._initPaymentFrame()
				.then(VXPayWhenTokenTransferred)
				.then(VXPayOpenVipAboTrialCommand)
				.then(VXPayTriggerShowForTab)
				.then(resolve)
				.catch(reject)
		})
	}

	/**
	 * @return {Promise<VXPay>}
	 */
	premiumAbo() {
		return new Promise((resolve, reject) => {
			this._initPaymentFrame()
				.then(VXPayWhenTokenTransferred)
				.then(VXPayOpenPremiumAboCommand)
				.then(VXPayTriggerShowForTab)
				.then(resolve)
				.catch(reject)
		})
	}

	/**
	 * @return {Promise<VXPay>}
	 */
	openAVS() {
		return new Promise((resolve, reject) => {
			this._initPaymentFrame()
				.then(VXPayWhenTokenTransferred)
				.then(VXPayOpenAVSCommand)
				.then(VXPayTriggerShowForTab)
				.then(resolve)
				.catch(reject)
		})
	}

	/**
	 * @return {Promise<VXPay>}
	 */
	openPromoCode() {
		return new Promise((resolve, reject) => {
			this._initPaymentFrame()
				.then(VXPayWhenTokenTransferred)
				.then(VXPayOpenPromoCodeCommand)
				.then(VXPayTriggerShowForTab)
				.then(resolve)
				.catch(reject)
		})
	}

	/**
	 * @return {Promise<VXPay>}
	 */
	openScratchCard() {
		return new Promise((resolve, reject) => {
			this._initPaymentFrame()
				.then(VXPayWhenTokenTransferred)
				.then(VXPayOpenPromoCodeCommand)
				.then(VXPayTriggerShowForTab)
				.then(resolve)
				.catch(reject)
		})
	}

	/**
	 * @return {Promise<VXPay>}
	 */
	openOneClick() {
		return new Promise((resolve, reject) => {
			this._initPaymentFrame()
				.then(VXPayWhenTokenTransferred)
				.then(VXPayOpenOneClickCommand.run)
				.then(VXPayTriggerShowForTab)
				.then(resolve)
				.catch(reject)
		})
	}

	/**
	 * @return {Promise<VXPay>}
	 */
	openAutoReCharge() {
		return new Promise((resolve, reject) => {
			this._initPaymentFrame()
				.then(VXPayWhenTokenTransferred)
				.then(VXPayOpenAutoRechargeCommand.run)
				.then(VXPayTriggerShowForTab)
				.then(resolve)
				.catch(reject)
		})
	}

	/**
	 * @return {Promise<VXPay>}
	 */
	openBalance() {
		return new Promise((resolve, reject) => {
			this._initPaymentFrame()
				.then(VXPayWhenTokenTransferred)
				.then(VXPayOpenOpenBalanceCommand)
				.then(VXPayTriggerShowForTab)
				.then(resolve)
				.catch(reject)
		})
	}

	/**
	 * @return {Promise<VXPayIsLoggedInResponseMessage>}
	 */
	isLoggedIn() {
		return new Promise((resolve, reject) => {
			this._initPaymentFrame()
				.then(vxpay => (new VXPayListenOrCallLoggedInMiddleware(vxpay, resolve, reject)).run())
				.catch(reject)
		});
	}

	/**
	 * @return {Promise<VXPayAVSStatusMessage>}
	 */
	getAVSStatus() {
		return new Promise((resolve, reject) => {
			return this._initPaymentFrame()
				.then(vxpay => VXPayOnAVSStatusListenMiddleware(vxpay, resolve, reject))
				.then(VXPayAVSStatusTriggerMiddleware)
				.catch(reject)
		})
	}

	/**
	 * @return {Promise<VXPayBalanceMessage>}
	 */
	getBalance() {
		return new Promise((resolve, reject) => {
			this._initPaymentFrame()
				.then(vxpay => VXPayListenForBalanceMiddleware(vxpay, resolve, reject))
				.then(VXPayBalanceTriggerMiddleware)
				.catch(reject)
		});
	}

	/**
	 * @return {Promise<VXPayActiveAbosMessage>}
	 */
	getActiveAbos() {
		return new Promise((resolve, reject) => {
			this._initPaymentFrame()
				.then(vxpay => VXPayListenForActiveAbosMiddleware(vxpay, resolve, reject))
				.then(VXPayActiveAbosTriggerMiddleware)
				.catch(reject)
		})
	}

	/**
	 * @return {Promise<VXPayLoggedOutMessage>}
	 */
	logout() {
		return new Promise((resolve, reject) => {
			this._initPaymentFrame()
				.then(vxpay => VXPayListenForLogoutMiddleware(vxpay, resolve, reject))
				.then(VXPayLogoutTriggerMiddleware)
				.catch(reject)
		})
	}

	/**
	 * @return {VXPayConfig}
	 */
	get config() {
		return this._config;
	}

	/**
	 * @param {VXPayConfig} value
	 */
	set config(value) {
		if (!(value instanceof VXPayConfig)) {
			throw new TypeError('Please provide an instance of VXPayConfig!');
		}

		if (typeof this._logger !== 'undefined') {
			this._logger.log('VXPay::config -> ', value);
		}

		this._config = value;
	}

	/**
	 * @return {VXPayLogger}
	 */
	get logger() {
		return this._logger;
	}

	/**
	 * @param {VXPayLogger} value
	 */
	set logger(value) {
		if (!(value instanceof VXPayLogger)) {
			throw new TypeError('Please provide an instance of VXPayLogger!');
		}

		this._logger = value;
	}

	/**
	 * @return {Number}
	 */
	get apiVersion() {
		return this.config.apiVersion;
	}

	/**
	 * @param {Number} value
	 */
	set apiVersion(value) {
		this.config.apiVersion = value;
	}

	/**
	 * @return {Promise<VXPayPaymentHooksConfig>}
	 */
	get hooks() {
		return new Promise(resolve => resolve(this._hooks));
	}

	/**
	 * @return {Promise<VXPayPaymentFrame|VXPayPaymentTab>}
	 */
	get paymentFrame() {
		return new Promise((resolve, reject) => {
			this._initPaymentFrame(true)
				.then(vxpay => resolve(vxpay._paymentFrame))
				.catch(reject)
		});
	}

	/**
	 * @param {VXPayPaymentFrame|VXPayPaymentTab} value
	 */
	set paymentFrame(value) {
		if (!(value instanceof VXPayPaymentFrame) && !(value instanceof VXPayPaymentTab)) {
			throw new TypeError('Payment frame should be an instance of VXPayPaymentFrame or VXPayPaymentTab');
		}

		this._paymentFrame = value;
	}

	/**
	 * @return {VXPayHelperFrame}
	 */
	get helperFrame() {
		return this._helperFrame;
	}

	/**
	 * @param {VXPayHelperFrame} value
	 */
	set helperFrame(value) {
		if (!(value instanceof VXPayHelperFrame)) {
			throw new TypeError('Helper frame should be an instance of VXPayHelperFrame');
		}

		this._helperFrame = value;
	}

	/**
	 * @return {Window|undefined}
	 */
	get window() {
		return this.config.window;
	}

	routeHooks() {

	}

	/**
	 * listen for incoming messages
	 */
	startListening() {
		this.logger.log('VXPay::startListening()');
		const that = this;

		// listen for config changes
		this._hooks.onConfigChanged(msg => {
			that.config.merge(msg.hydrateConfig());
			that._initPaymentFrame(that.state.isFrameReady);
		});

		// do we need logging?
		this._hooks
			.onAny(msg => that.logger.log(VXPayLogger.LOG_INCOMING, msg))
			.onBeforeSend(msg => that.logger.log(VXPayLogger.LOG_OUTGOING, msg));

		VXPayEventListener.addEvent(
			VXPayIframe.EVENT_MESSAGE,
			this.config.window,
			this._hooksRouter.route.bind(this._hooksRouter)
		);

		VXPayEventListener.addEvent(
			VXPayIframe.EVENT_UNLOAD,
			this.config.window,
			this.stopListening.bind(this)
		);
	}

	/**
	 * Remove listeners
	 */
	stopListening() {
		this.logger.log('VXPay::stopListening()');

		VXPayEventListener.removeEvent(
			VXPayIframe.EVENT_MESSAGE,
			this.config.window,
			this._hooksRouter.route.bind(this._hooksRouter)
		);

		VXPayEventListener.removeEvent(
			VXPayIframe.EVENT_UNLOAD,
			this.config.window,
			this.stopListening.bind(this)
		);
	}
}
