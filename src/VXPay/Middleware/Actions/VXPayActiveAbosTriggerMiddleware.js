import VXPayGetActiveAbosMessage from './../../Message/Actions/VXPayGetActiveAbosMessage'

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
const VXPayActiveAbosTriggerMiddleware = (vxpay) => {
	const message = new VXPayGetActiveAbosMessage;

	if (!vxpay.state.hasToken) {
		vxpay.hooks.onTransferToken(msg => vxpay.paymentFrame.postMessage(message));
	} else {
		vxpay.paymentFrame.postMessage(message);
	}

	return vxpay;
};

export default VXPayActiveAbosTriggerMiddleware;
