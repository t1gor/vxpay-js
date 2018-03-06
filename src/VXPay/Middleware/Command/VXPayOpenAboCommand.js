import VXPayFlow          from './../../Config/VXPayFlow'
import VXPayPaymentRoutes from './../../Config/VXPayPaymentRoutes'

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
const VXPayOpenAboCommand = (vxpay) => {
	vxpay.logger.log('VXPayOpenAboCommand()');

	vxpay.paymentFrame
		.then(frame => frame
			.updateUI(vxpay.config.modalConfig.getOptions())
			.sendOptions({'flow': VXPayFlow.VIP_ABO})
			.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
			.changeRoute(VXPayPaymentRoutes.ABO)
			.initSession());

	return vxpay;
};

export default VXPayOpenAboCommand;
