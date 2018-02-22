import VXPayFlow          from './../../Config/VXPayFlow'
import VXPayPaymentRoutes from './../../Config/VXPayPaymentRoutes'

const VXPayOpenPremiumAboCommand = (vxpay) => {
	vxpay.paymentFrame
		.initSession()
		.sendOptions({'flow': VXPayFlow.VXTV_ABO})
		.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
		.changeRoute(VXPayPaymentRoutes.ABO);

	return vxpay;
};

export default VXPayOpenPremiumAboCommand;
