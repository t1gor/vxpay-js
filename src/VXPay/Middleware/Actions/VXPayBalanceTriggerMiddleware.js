import VXPayGetBalanceMessage from './../../Message/Actions/VXPayGetBalanceMessage'

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
const VXPayBalanceTriggerMiddleware = (vxpay) => {
	const message = new VXPayGetBalanceMessage;

	if (vxpay.config.token === '') {
		vxpay.hooks.onTransferToken(msg => vxpay.paymentFrame.postMessage(message));
	} else {
		vxpay.paymentFrame.postMessage(message);
	}

	return vxpay;
};

export default VXPayBalanceTriggerMiddleware;
