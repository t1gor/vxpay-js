import VXPayFlow      from './../Config/VXPayFlow'
import VXPayUrlHelper from './../VXPayUrlHelper'

/**
 * @param {VXPay} vxpay
 * @param {Window} window
 * @return {VXPay}
 * @constructor
 */
const VXPaySetPasswordResetMiddleware = (vxpay, window) => {
	const newFlow = {
		flow:             VXPayFlow.PASSWORD_LOST,
		pwdresetUserId:   VXPayUrlHelper.getQueryParam('u', window.location),
		pwdresetUserName: VXPayUrlHelper.getQueryParam('tpLoginPwdLost', window.location),
		pwdresetKey:      VXPayUrlHelper.getQueryParam('key', window.location)
	};

	// update local config
	vxpay.config.merge(newFlow);

	// send options to frame
	vxpay.frame.sendOptions(newFlow);

	return vxpay;
};

export default VXPaySetPasswordResetMiddleware;
