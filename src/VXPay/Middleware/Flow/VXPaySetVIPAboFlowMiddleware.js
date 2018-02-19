import VXPayFlow from '../../Config/VXPayFlow'

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 */
const VXPaySetVIPAboFlowMiddleware = (vxpay) => {
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
	vxpay.paymentFrame.sendOptions(newFlow);

	return vxpay;
};

export default VXPaySetVIPAboFlowMiddleware;
