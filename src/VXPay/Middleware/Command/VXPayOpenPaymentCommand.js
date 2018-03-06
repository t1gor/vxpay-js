import VXPayPaymentRoutes from './../../Config/VXPayPaymentRoutes'
import VXPayFlow          from './../../Config/VXPayFlow'

class VXPayOpenPaymentCommand {
	/**
	 * @param {VXPay} vxpay
	 * @return {VXPay}
	 */
	static run(vxpay) {
		vxpay.logger.log('VXPayOpenPaymentCommand()');

		vxpay.paymentFrame
			.then(frame => frame
				.updateUI(vxpay.config.modalConfig.getOptions())
				.sendOptions(VXPayOpenPaymentCommand.PARAMS)
				.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
				.changeRoute(VXPayPaymentRoutes.PAYMENT)
				.initSession());

		return vxpay;
	}
}

VXPayOpenPaymentCommand.PARAMS = {
	flow:    VXPayFlow.MONEY_CHARGE,
	paytype: '' // unset paytype
};

export default VXPayOpenPaymentCommand;
