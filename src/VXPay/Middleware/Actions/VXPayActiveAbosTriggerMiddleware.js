import VXPayGetActiveAbosMessage from './../../Message/Actions/VXPayGetActiveAbosMessage'

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
const VXPayActiveAbosTriggerMiddleware = (vxpay) => {
	const send = (frame) => {
		frame.postMessage(new VXPayGetActiveAbosMessage);
	};

	if (!vxpay.state.hasToken) {
		vxpay.hooks.then(hooks => {
			hooks.onTransferToken(() => vxpay.paymentFrame.then(send));
		})
	} else {
		vxpay.paymentFrame.then(send);
	}

	return vxpay;
};

export default VXPayActiveAbosTriggerMiddleware;
