import VXPayFlow          from './../../Config/VXPayFlow'
import VXPayPaymentRoutes from './../../Config/VXPayPaymentRoutes'

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
const VXPayOpenLoginCommand = (vxpay) => {
	vxpay.paymentFrame
		.sendOptions({'flow': VXPayFlow.LOGIN})
		.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
		.changeRoute(VXPayPaymentRoutes.LOGIN)
		.initSession();

	return vxpay;
};

export default VXPayOpenLoginCommand;
