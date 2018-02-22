import VXPayFlow          from './../../Config/VXPayFlow'
import VXPayPaymentRoutes from './../../Config/VXPayPaymentRoutes'

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
const VXPayOpenPromoCodeCommand = (vxpay) => {
	vxpay.paymentFrame
		.initSession()
		.sendOptions({'flow': VXPayFlow.PROMOCODE})
		.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
		.changeRoute(VXPayPaymentRoutes.PROMOCODE);

	return vxpay;
};

export default VXPayOpenPromoCodeCommand;
