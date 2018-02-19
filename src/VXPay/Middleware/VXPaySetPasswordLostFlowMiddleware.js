import VXPayFlow      from './../Config/VXPayFlow'
import VXPayUrlHelper from './../VXPayUrlHelper'

/**
 * @param {VXPay} vxpay
 * @param {Window} window
 * @return {VXPay}
 * @constructor
 */
const VXPaySetPasswordLostMiddleware = (vxpay, window) => {
	const newFlow = {
		flow:             VXPayFlow.PASSWORD_LOST,
		pwdresetUserId:   VXPayUrlHelper.getQueryParam('u', window.location),
		pwdresetUserName: VXPayUrlHelper.getQueryParam('tpLoginPwdLost', window.location),
		pwdresetEmail:    VXPayUrlHelper.getQueryParam('tpEmailPwdLost', window.location)
	};

	// update local config
	vxpay.config.merge(newFlow);

	// send options to frame
	vxpay.frame.sendOptions(newFlow);

	return vxpay;
};

export default VXPaySetPasswordLostMiddleware;
