import VXPayFlow      from '../../Config/VXPayFlow'
import VXPayUrlHelper from '../../VXPayUrlHelper'

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
const VXPaySetPasswordLostMiddleware = (vxpay) => {
	const href    = vxpay.config.window.location.href,
	      newFlow = {
		      flow:             VXPayFlow.PASSWORD_LOST,
		      pwdresetUserId:   VXPayUrlHelper.getQueryParam('u', href),
		      pwdresetUserName: VXPayUrlHelper.getQueryParam('tpLoginPwdLost', href),
		      pwdresetEmail:    VXPayUrlHelper.getQueryParam('tpEmailPwdLost', href)
	      };

	// update local config
	vxpay.config.merge(newFlow);

	// send options to frame
	vxpay.paymentFrame.sendOptions(newFlow);

	return vxpay;
};

export default VXPaySetPasswordLostMiddleware;
