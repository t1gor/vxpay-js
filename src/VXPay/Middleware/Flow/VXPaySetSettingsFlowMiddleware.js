import VXPayFlow from '../../Config/VXPayFlow'

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 */
const VXPaySetSettingsFlowMiddleware = (vxpay) => {
	// check not already same
	if (vxpay.config.flow === VXPayFlow.SETTINGS) {
		return vxpay;
	}

	const newFlow = {
		flow: VXPayFlow.SETTINGS,
		paytype: ''
	};

	// update local config
	vxpay.config.merge(newFlow);

	// send options to frame
	vxpay.paymentFrame.sendOptions(newFlow);

	return vxpay;
};

export default VXPaySetSettingsFlowMiddleware;
