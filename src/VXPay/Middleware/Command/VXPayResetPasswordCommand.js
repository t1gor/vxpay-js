import VXPayUrlHelper from '../../VXPayUrlHelper'
import VXPayFlow      from '../../Config/VXPayFlow'

export default class VXPayResetPasswordCommand {
	/**
	 * @param {VXPay} vxpay
	 * @return {VXPay}
	 */
	static run(vxpay) {
		vxpay.paymentFrame
			.initSession()
			.sendOptions(VXPayResetPasswordCommand.getParams(vxpay.config))
			.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
			.changeRoute();

		return vxpay;
	}

	/**
	 * @param config
	 * @return {{flow: string, pwdresetUserId: String, pwdresetUserName: String, pwdresetKey: String}}
	 */
	static getParams(config) {
		const helper = new VXPayUrlHelper(config.window.URL);

		return {
			flow:             VXPayFlow.PASSWORD_RESET,
			pwdresetUserId:   helper.getQueryParam('u', config.window.location.href),
			pwdresetUserName: helper.getQueryParam('tpLoginPwdLost', config.window.location.href),
			pwdresetKey:      helper.getQueryParam('key', config.window.location.href)
		};
	}
}