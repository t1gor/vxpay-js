/**
 * @param {VXPay} vxpay
 * @param {Function} resolve
 * @return {VXPay}
 * @constructor
 */
const VXPayOnAVSStatusListenMiddleware = (vxpay, resolve) => {
	if (!vxpay.hooks.hasOnAVSStatus(resolve)) {
		vxpay.hooks.onAVSStatus(resolve);
	}

	return vxpay;
};

export default VXPayOnAVSStatusListenMiddleware;
