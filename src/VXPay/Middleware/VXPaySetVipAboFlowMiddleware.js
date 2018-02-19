import VXPayFlow from './../Config/VXPayFlow'

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 */
const VXPaySetVipAboFlowMiddleware = (vxpay) => {
	// check not already same
	if (vxpay.config.flow === VXPayFlow.VIP_ABO) {
		return vxpay;
	}

	const newFlow = {
		flow: VXPayFlow.VIP_ABO
	};

	// update local config
	vxpay.config.merge(newFlow);

	// send options to frame
	vxpay.frame.sendOptions(newFlow);

	return vxpay;
};

export default VXPaySetVipAboFlowMiddleware;
