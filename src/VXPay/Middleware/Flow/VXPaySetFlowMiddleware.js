/**
 * @param {VXPay} vxpay
 * @param {String} flow
 * @return {VXPay}
 */
const VXPaySetFlowMiddleware = (vxpay, flow) => {
	// check not already same
	if (vxpay.config.flow === flow) {
		return vxpay;
	}

	const newFlow = {
		flow: flow
	};

	// update local config
	vxpay.config.merge(newFlow);

	// send options to frame
	vxpay.paymentFrame.sendOptions(newFlow);

	return vxpay;
};

export default VXPaySetFlowMiddleware;
