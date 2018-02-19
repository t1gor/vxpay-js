import VXPayFlow from '../../Config/VXPayFlow'

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 */
const VXPaySetVIPAboTrialMiddleware = (vxpay) => {
	// check not already same
	if (vxpay.config.flow === VXPayFlow.TRIAL_VIP_ABO) {
		return vxpay;
	}

	const newFlow = {
		flow: VXPayFlow.TRIAL_VIP_ABO
	};

	// update local config
	vxpay.config.merge(newFlow);

	// send options to frame
	vxpay.paymentFrame.sendOptions(newFlow);

	return vxpay;
};

export default VXPaySetVIPAboTrialMiddleware;
