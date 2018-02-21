import VXPayPaymentFrame   from './../../Dom/Frame/VXPayPaymentFrame'
import VXPayPaymentTab     from './../../Dom/Frame/VXPayPaymentTab'
import VXPayLogger         from './../../VXPayLogger'

/**
 * @todo function seems a bit too long, maybe refactor in future?
 * @param {VXPay} vxpay
 * @param {Function} resolve
 * @return {Function}
 * @constructor
 */
const VXPayInitPaymentMiddleware = (vxpay, resolve) => {
	// check already initialized
	if (typeof vxpay.paymentFrame !== 'undefined') {
		return resolve(vxpay);
	}

	// tab or frame?
	vxpay.paymentFrame = vxpay.config.enableTab
		? new VXPayPaymentTab(vxpay.window.document, vxpay.config.getPaymentFrameUrl(), VXPayPaymentTab.NAME)
		: new VXPayPaymentFrame(vxpay.window.document, vxpay.config.getPaymentFrameUrl(), VXPayPaymentFrame.NAME);

	// do we need logging?
	if (vxpay.config.logging) {
		vxpay.paymentFrame
			.hooks
			.onAny(msg => vxpay.logger.log(VXPayLogger.LOG_INCOMING, msg))
			.onBeforeSend(msg => vxpay.logger.log(VXPayLogger.LOG_OUTGOING, msg))
	}

	if (!vxpay.paymentFrame.loaded) {
		// set resolve hook
		vxpay.paymentFrame
			.hooks
			.onTransferToken(vxpay.config.setTokenFromMessage.bind(vxpay.config))
			.onFlowChange(vxpay.config.updateFlow.bind(vxpay.config))
			.onViewReady(vxpay.paymentFrame.setVisible.bind(vxpay.paymentFrame))
			.onSuccess(vxpay.paymentFrame.hide.bind(vxpay.paymentFrame))
			.onClose(vxpay.paymentFrame.hide.bind(vxpay.paymentFrame))
			.onContentLoaded(msg => resolve(vxpay));

		vxpay.paymentFrame.triggerLoad();
	}
};

export default VXPayInitPaymentMiddleware;
