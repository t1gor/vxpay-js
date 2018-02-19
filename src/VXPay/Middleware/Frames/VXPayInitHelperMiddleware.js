import VXPayHelperFrame from './../../Dom/Frame/VXPayHelperFrame'
import VXPayLogger      from './../../VXPayLogger'
import VXPayIframe      from './../../Dom/VXPayIframe'

/**
 * @param {VXPay} vxpay
 * @param {Function} resolve
 * @return {Function}
 * @constructor
 */
const VXPayInitHelperMiddleware = (vxpay, resolve) => {
	// check already initialized
	if (typeof vxpay.helperFrame !== 'undefined') {
		return resolve(vxpay);
	}

	vxpay.helperFrame = new VXPayHelperFrame(
		vxpay.window.document,
		VXPayIframe.ORIGIN + '/VXPAY-V' + vxpay._apiVersion + '/helper'
	);

	if (vxpay.config.logging) {
		vxpay.helperFrame
			.hooks
			.onAny(msg => vxpay.logger.log(VXPayLogger.LOG_INCOMING, msg))
			.onBeforeSend(msg => vxpay.logger.log(VXPayLogger.LOG_OUTGOING, msg));
	}

	vxpay.helperFrame.triggerLoad();
	return resolve(vxpay);
};

export default VXPayInitHelperMiddleware;
