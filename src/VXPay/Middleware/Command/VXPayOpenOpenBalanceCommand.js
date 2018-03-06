import VXPayPaymentRoutes from './../../Config/VXPayPaymentRoutes'
import VXPayFlow          from './../../Config/VXPayFlow'

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
const VXPayOpenOpenBalanceCommand = (vxpay) => {
	vxpay.logger.log('VXPayOpenOneClickCommand()');

	vxpay.paymentFrame
		.then(frame => frame
			.initSession()
			.updateUI(vxpay.config.modalConfig.getOptions())
			.sendOptions({'flow': VXPayFlow.OP_COMPENSATION})
			.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
			.changeRoute(VXPayPaymentRoutes.OP_COMPENSATION));

	return vxpay;
};

export default VXPayOpenOpenBalanceCommand;
