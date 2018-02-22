import VXPayFlow from './../../Config/VXPayFlow'

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
			.changeRoute();

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
