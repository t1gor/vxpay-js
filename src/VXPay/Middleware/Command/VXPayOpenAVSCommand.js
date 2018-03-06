import VXPayFlow          from './../../Config/VXPayFlow'
import VXPayPaymentRoutes from './../../Config/VXPayPaymentRoutes'

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
const VXPayOpenAVSCommand = (vxpay) => {
	vxpay.logger.log('VXPayOpenAVSCommand()');

	vxpay.paymentFrame
		.then(frame => frame
			.initSession()
			.updateUI(vxpay.config.modalConfig.getOptions())
			.sendOptions({'flow': VXPayFlow.AVS})
			.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
			.changeRoute(VXPayPaymentRoutes.AVS));

	return vxpay;
};

export default VXPayOpenAVSCommand;
