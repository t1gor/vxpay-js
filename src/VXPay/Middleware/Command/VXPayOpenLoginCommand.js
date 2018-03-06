import VXPayFlow          from './../../Config/VXPayFlow'
import VXPayPaymentRoutes from './../../Config/VXPayPaymentRoutes'

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
const VXPayOpenLoginCommand = (vxpay) => {
	vxpay.logger.log('VXPayOpenLoginCommand()');

	vxpay.paymentFrame
		.then(frame => frame
			.sendOptions({'flow': VXPayFlow.LOGIN})
			.updateUI(vxpay.config.modalConfig.getOptions())
			.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
			.changeRoute(VXPayPaymentRoutes.LOGIN)
			.initSession());

	return vxpay;
};

export default VXPayOpenLoginCommand;
