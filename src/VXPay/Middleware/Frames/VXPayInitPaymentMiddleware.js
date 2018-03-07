import VXPayPaymentFrame       from './../../Dom/Frame/VXPayPaymentFrame'
import VXPayPaymentTab         from './../../Dom/Frame/VXPayPaymentTab'
import VXPayLogger             from './../../VXPayLogger'
import VXPayPaymentHooksConfig from "../../Config/VXPayPaymentHooksConfig";

/**
 * @todo function seems a bit too long, maybe refactor in future?
 * @param {VXPay} vxpay
 * @param {Function} resolve
 * @param {Boolean} load
 * @return {Function}
 * @constructor
 */
const VXPayInitPaymentMiddleware = (vxpay, resolve, load = true) => {
	vxpay.logger.log('VXPayInitPaymentMiddleware()', load);
	const configMatch = vxpay.state.isInitialiedWith(vxpay.config);

	// check already initialized
	if (vxpay.state.isContentLoaded && configMatch) {
		vxpay.logger.log('VXPayInitPaymentMiddleware() - already loaded, resolve ...');
		return resolve(vxpay);
	}

	// set resolve hook
	vxpay._hooks
		// state updates
		.onIframeReady(vxpay.state.markFrameReady.bind(vxpay.state))
		.onContentLoaded(vxpay.state.markContentLoaded.bind(vxpay.state))
		.onTransferToken(vxpay.state.markHasToken.bind(vxpay.state))
		// functional hooks
		.onTransferToken(vxpay.config.setTokenFromMessage.bind(vxpay.config))
		.onFlowChange(vxpay.config.updateFlow.bind(vxpay.config));

	// tab or frame?
	if (!vxpay.hasOwnProperty('_paymentFrame')) {
		vxpay._paymentFrame = vxpay.config.enableTab
			? new VXPayPaymentTab(vxpay.window.document, VXPayPaymentTab.NAME, vxpay.config, vxpay._hooks)
			: new VXPayPaymentFrame(vxpay.window.document, vxpay.config.getPaymentFrameUrl(), VXPayPaymentFrame.NAME, vxpay._hooks);

		// show frame and send isVisible
		vxpay._hooks
			.onViewReady(vxpay._paymentFrame.setVisible.bind(vxpay._paymentFrame))
			.onViewReady(vxpay._paymentFrame.show.bind(vxpay._paymentFrame))
			.onSuccess(vxpay._paymentFrame.hide.bind(vxpay._paymentFrame))
			.onClose(vxpay._paymentFrame.hide.bind(vxpay._paymentFrame))
			.onContentLoaded(() => resolve(vxpay));

	} else if (!configMatch) {
		vxpay.logger.log('Config mismatch! Re-init ...');

		// reset frame
		vxpay.state.isContentLoaded = false;
		vxpay.state.markHasToken(undefined);
		vxpay._paymentFrame.url = vxpay.config.getPaymentFrameUrl();
	}

	// remember init config
	vxpay.state.initializedWithConfig = vxpay.config;

	// trigger load if not tab
	if (load) {
		vxpay.logger.log('VXPayInitPaymentMiddleware() - not loaded yet, trigger load');
		vxpay._paymentFrame.url = vxpay.config.getPaymentFrameUrl();
		vxpay._paymentFrame.triggerLoad();
	}
};

export default VXPayInitPaymentMiddleware;
