import VXPayFlow          from './../../Config/VXPayFlow'
import VXPayPaymentRoutes from './../../Config/VXPayPaymentRoutes'

class VXPayOpenSettingsCommand {
	/**
	 * @param {VXPay} vxpay
	 * @return {VXPay}
	 */
	static run(vxpay) {
		vxpay.paymentFrame
			.sendOptions(VXPayOpenSettingsCommand.PARAMS)
			.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
			.changeRoute(VXPayPaymentRoutes.SETTINGS)
			.initSession();

		return vxpay;
	}
}

VXPayOpenSettingsCommand.PARAMS = {
	flow:    VXPayFlow.SETTINGS,
	paytype: '' // reset paytype
};

export default VXPayOpenSettingsCommand;
