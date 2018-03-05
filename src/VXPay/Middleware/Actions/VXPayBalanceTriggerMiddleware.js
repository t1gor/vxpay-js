import VXPayGetBalanceMessage from './../../Message/Actions/VXPayGetBalanceMessage'

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
const VXPayBalanceTriggerMiddleware = (vxpay) => {
	const message = frame => frame.postMessage(new VXPayGetBalanceMessage);

	if (!vxpay.state.hasToken) {
		vxpay.hooks.then(hooks => {
			hooks.onTransferToken(() => vxpay.paymentFrame.then(message))
		})
	} else {
		vxpay.paymentFrame.then(message);
	}

	return vxpay;
};

export default VXPayBalanceTriggerMiddleware;
