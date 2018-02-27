import VXPayGetAVSStatusMessage from './../../Message/Actions/VXPayGetAVSStatusMessage'

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
const VXPayAVSStatusTriggerMiddleware = (vxpay) => {
	const message = new VXPayGetAVSStatusMessage;

	// is token already received?
	if (!vxpay.state.hasToken) {
		vxpay.hooks.onTransferToken(msg => vxpay.paymentFrame.postMessage(message));
	} else {
		// or trigger post message
		vxpay.paymentFrame.postMessage(message);
	}

	return vxpay;
};

export default VXPayAVSStatusTriggerMiddleware;
