import VXPayGetAVSStatusMessage from './../../Message/Actions/VXPayGetAVSStatusMessage'

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
const VXPayAVSStatusTriggerMiddleware = (vxpay) => {
	const message = (frame) => frame.postMessage(new VXPayGetAVSStatusMessage);

	// is token already received?
	if (!vxpay.state.hasToken) {
		vxpay.hooks.then(hooks => {
			hooks.onTransferToken(() => vxpay.paymentFrame.then(message))
		})
	} else {
		// or trigger post message
		vxpay.paymentFrame.then(message);
	}

	return vxpay;
};

export default VXPayAVSStatusTriggerMiddleware;
