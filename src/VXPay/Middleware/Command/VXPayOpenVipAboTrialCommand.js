import VXPayFlow          from './../../Config/VXPayFlow'
import VXPayPaymentRoutes from './../../Config/VXPayPaymentRoutes'

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
const VXPayOpenVipAboTrialCommand = (vxpay) => {
	vxpay.logger.log('VXPayOpenVipAboTrialCommand()');

	vxpay.paymentFrame
		.then(frame => frame
			.initSession()
			.updateUI(vxpay.config.modalConfig.getOptions())
			.sendOptions({'flow': VXPayFlow.TRIAL_VIP_ABO})
			.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
			.changeRoute(VXPayPaymentRoutes.ABO));

	return vxpay;
};

export default VXPayOpenVipAboTrialCommand;
