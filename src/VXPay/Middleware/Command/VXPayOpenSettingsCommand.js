import VXPayFlow from './../../Config/VXPayFlow'

class VXPayOpenSettingsCommand {
	/**
	 * @param {VXPay} vxpay
	 * @return {VXPay}
	 */
	static run(vxpay) {
		vxpay.paymentFrame
			.sendOptions(VXPayOpenSettingsCommand.PARAMS)
			.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
			.changeRoute()
			.initSession();

		return vxpay;
	}
}

VXPayOpenSettingsCommand.PARAMS = {
	flow:    VXPayFlow.SETTINGS,
	paytype: '' // reset paytype
};

export default VXPayOpenSettingsCommand;
