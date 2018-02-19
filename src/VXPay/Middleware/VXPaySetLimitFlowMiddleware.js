import VXPayFlow from './../Config/VXPayFlow'

const VXPaySetLimitFlowMiddleware = (vxpay) => {
	// check not already same
	if (vxpay.config.flow === VXPayFlow.LIMIT) {
		return vxpay;
	}

	const newFlow = {
		flow: VXPayFlow.LIMIT,
		paytype: ''
	};

	// update local config
	vxpay.config.merge(newFlow);

	// send options to frame
	vxpay.frame.sendOptions(newFlow);

	return vxpay;
};

export default VXPaySetLimitFlowMiddleware;
