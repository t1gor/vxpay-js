import VXPayPaymentRoutes from './../../Config/VXPayPaymentRoutes'
import VXPayFlow          from './../../Config/VXPayFlow'

const VXPayOpenOpenBalanceCommand = (vxpay) => {
	vxpay.paymentFrame
		.initSession()
		.sendOptions({'flow': VXPayFlow.OP_COMPENSATION})
		.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
		.changeRoute(VXPayPaymentRoutes.OP_COMPENSATION);

	return vxpay;
};

export default VXPayOpenOpenBalanceCommand;
