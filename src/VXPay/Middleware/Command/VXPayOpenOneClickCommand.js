import VXPayFlow          from './../../Config/VXPayFlow'
import VXPayPaymentRoutes from './../../Config/VXPayPaymentRoutes'

class VXPayOpenOneClickCommand {
	/**
	 * @param {VXPay} vxpay
	 * @return {VXPay}
	 */
	static run(vxpay) {
		vxpay.paymentFrame
			.initSession()
			.sendOptions(VXPayOpenOneClickCommand.PARAMS)
			.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
			.changeRoute(VXPayPaymentRoutes.ONE_CLICK);

		return vxpay;
	}
}

VXPayOpenOneClickCommand.PARAMS = {
	flow: VXPayFlow.ONE_CLICK,
	paytype: '',
	oneClickData: {
		data: null
	}
};

export default VXPayOpenOneClickCommand;
