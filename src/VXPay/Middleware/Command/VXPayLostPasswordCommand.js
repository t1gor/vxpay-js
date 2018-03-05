import VXPayUrlHelper     from './../../VXPayUrlHelper'
import VXPayFlow          from './../../Config/VXPayFlow'
import VXPayPaymentRoutes from './../../Config/VXPayPaymentRoutes'

export default class VXPayLostPasswordCommand {
	/**
	 * @param {VXPay} vxpay
	 * @return {VXPay}
	 */
	static run(vxpay) {
		vxpay.logger.log('VXPayLostPasswordCommand()');

		vxpay.paymentFrame
			.then(frame => frame
				.initSession()
				.sendOptions(VXPayLostPasswordCommand.getParams(vxpay.config))
				.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
				.changeRoute(VXPayPaymentRoutes.PASSWORD));

		return vxpay;
	}

	/**
	 * @param config
	 * @return {{flow: string, pwdresetUserId: String, pwdresetUserName: String, pwdresetEmail: String}}
	 */
	static getParams(config) {
		const helper = new VXPayUrlHelper(config.window.URL);

		return {
			flow:             VXPayFlow.PASSWORD_LOST,
			pwdresetUserId:   helper.getQueryParam('u', config.window.location.href),
			pwdresetUserName: helper.getQueryParam('tpLoginPwdLost', config.window.location.href),
			pwdresetEmail:    helper.getQueryParam('tpEmailPwdLost', config.window.location.href)
		};
	}
}