import VXPayFlow          from './../../Config/VXPayFlow'
import VXPayPaymentRoutes from './../../Config/VXPayPaymentRoutes'

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
const VXPayOpenSignUpCommand = (vxpay) => {
	vxpay.logger.log('VXPayOpenSignUpCommand()');

	vxpay.paymentFrame
		.then(frame => frame
			.sendOptions({'flow': VXPayFlow.LOGIN})
			.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
			.changeRoute(VXPayPaymentRoutes.SIGN_UP)
			.initSession());

	return vxpay;
};

export default VXPayOpenSignUpCommand;
