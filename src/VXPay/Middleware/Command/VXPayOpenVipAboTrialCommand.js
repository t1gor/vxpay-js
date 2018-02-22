import VXPayFlow          from './../../Config/VXPayFlow'
import VXPayPaymentRoutes from './../../Config/VXPayPaymentRoutes'

const VXPayOpenVipAboTrialCommand = (vxpay) => {
	vxpay.paymentFrame
		.initSession()
		.sendOptions({'flow': VXPayFlow.TRIAL_VIP_ABO})
		.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
		.changeRoute(VXPayPaymentRoutes.ABO);

	return vxpay;
};

export default VXPayOpenVipAboTrialCommand;
