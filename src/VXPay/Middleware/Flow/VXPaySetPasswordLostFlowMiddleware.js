import VXPayFlow      from '../../Config/VXPayFlow'
import VXPayUrlHelper from '../../VXPayUrlHelper'

/**
 * @param {VXPay} vxpay
 * @param {Window} window
 * @return {VXPay}
 * @constructor
 */
const VXPaySetPasswordLostMiddleware = (vxpay, window) => {
	const newFlow = {
		flow:             VXPayFlow.PASSWORD_LOST,
		pwdresetUserId:   VXPayUrlHelper.getQueryParam('u', window.location.href),
		pwdresetUserName: VXPayUrlHelper.getQueryParam('tpLoginPwdLost', window.location.href),
		pwdresetEmail:    VXPayUrlHelper.getQueryParam('tpEmailPwdLost', window.location.href)
	};

	// update local config
	vxpay.config.merge(newFlow);

	// send options to frame
	vxpay.paymentFrame.sendOptions(newFlow);

	return vxpay;
};

export default VXPaySetPasswordLostMiddleware;
