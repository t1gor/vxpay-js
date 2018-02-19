import VXPayPaymentType from './../../Config/VXPayPaymentType'
import VXPayFlow        from './../../Config/VXPayFlow'

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
const VXPaySetChangeLastschriftMiddleware = (vxpay) => {
	const newFlow = {
		flow    : VXPayFlow.CHANGE_LS,
		paytype : VXPayPaymentType.LASTSCHRIFT
	};

	// update config
	vxpay.config.merge(newFlow);

	// send options to frame
	vxpay.paymentFrame.sendOptions(newFlow);

	return vxpay;
};

export default VXPaySetChangeLastschriftMiddleware;
