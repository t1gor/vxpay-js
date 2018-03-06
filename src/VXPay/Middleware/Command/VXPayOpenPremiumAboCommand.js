import VXPayFlow          from './../../Config/VXPayFlow'
import VXPayPaymentRoutes from './../../Config/VXPayPaymentRoutes'

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 */
const VXPayOpenPremiumAboCommand = (vxpay) => {
	vxpay.logger.log('VXPayOpenPaymentCommand()');

	vxpay.paymentFrame
		.then(frame => frame
			.initSession()
			.updateUI(vxpay.config.modalConfig.getOptions())
			.sendOptions({'flow': VXPayFlow.VXTV_ABO})
			.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
			.changeRoute(VXPayPaymentRoutes.ABO));

	return vxpay;
};

export default VXPayOpenPremiumAboCommand;
