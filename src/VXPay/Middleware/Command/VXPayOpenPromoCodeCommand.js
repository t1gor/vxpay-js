import VXPayFlow          from './../../Config/VXPayFlow'
import VXPayPaymentRoutes from './../../Config/VXPayPaymentRoutes'

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
const VXPayOpenPromoCodeCommand = (vxpay) => {
	vxpay.logger.log('VXPayOpenPromoCodeCommand()');

	vxpay.paymentFrame
		.then(frame => frame
			.initSession()
			.sendOptions({'flow': VXPayFlow.PROMOCODE})
			.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
			.changeRoute(VXPayPaymentRoutes.PROMOCODE));

	return vxpay;
};

export default VXPayOpenPromoCodeCommand;
