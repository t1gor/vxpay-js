import VXPayFlow from './../../Config/VXPayFlow'

class VXPayOpenAutoRechargeCommand {
	/**
	 * @param {VXPay} vxpay
	 * @return {VXPay}
	 */
	static run(vxpay) {
		vxpay.paymentFrame
			.initSession()
			.sendOptions(VXPayOpenAutoRechargeCommand.PARAMS)
			.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
			.changeRoute();

		return vxpay;
	}
}

VXPayOpenAutoRechargeCommand.PARAMS = {
	flow: VXPayFlow.AUTO_RECHARGE,
	autoRechargeData: {
		data: null
	}
};

export default VXPayOpenAutoRechargeCommand;
