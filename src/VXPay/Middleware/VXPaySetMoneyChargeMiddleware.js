import VXPayFlow from './../Config/VXPayFlow'

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
const VXPaySetMoneyChargeMiddleware = (vxpay) => {
	// check not already same
	if (vxpay.config.flow === VXPayFlow.MONEY_CHARGE) {
		return vxpay;
	}

	const newFlow = {
		flow: VXPayFlow.MONEY_CHARGE
	};

	// update local config
	vxpay.config.merge(newFlow);

	// send options to frame
	vxpay.frame.sendOptions(newFlow);

	return vxpay;
};

export default VXPaySetMoneyChargeMiddleware;