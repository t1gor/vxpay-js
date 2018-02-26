import VXPayFlow               from './../../Config/VXPayFlow'
import VXPayPaymentRoutes      from './../../Config/VXPayPaymentRoutes'

class VXPayOpenLimitedPaymentCommand {
	/**
	 * @param {VXPay} vxpay
	 * @return {VXPay}
	 */
	static run(vxpay) {
		vxpay.paymentFrame
			.sendOptions(VXPayOpenLimitedPaymentCommand.PARAMS)
			.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
			.changeRoute(VXPayPaymentRoutes.LIMIT)
			.initSession();

		return vxpay;
	}
}

VXPayOpenLimitedPaymentCommand.PARAMS = {
	flow: VXPayFlow.LIMIT,
	paytype: ''
};

export default VXPayOpenLimitedPaymentCommand;
