import VXPayPaymentType from './../../Config/VXPayPaymentType'
import VXPayFlow        from './../../Config/VXPayFlow'

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
const VXPaySetChangeCardMiddleware = (vxpay) => {
	const newFlow = {
		flow    : VXPayFlow.CHANGE_CARD,
		paytype : VXPayPaymentType.CREDIT_CARD
	};

	// update config
	vxpay.config.merge(newFlow);

	// send options to frame
	vxpay.frame.sendOptions(newFlow);

	return vxpay;
};

export default VXPaySetChangeCardMiddleware;