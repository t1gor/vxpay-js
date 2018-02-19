import VXPayFlow from '../../Config/VXPayFlow'

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 */
const VXPaySetLoginFlowMiddleware = (vxpay) => {
	// check not already same
	if (vxpay.config.flow === VXPayFlow.LOGIN) {
		return vxpay;
	}

	const newFlow = {
		flow: VXPayFlow.LOGIN
	};

	// update local config
	vxpay.config.merge(newFlow);

	// send options to frame
	vxpay.frame.sendOptions(newFlow);

	return vxpay;
};

export default VXPaySetLoginFlowMiddleware;
