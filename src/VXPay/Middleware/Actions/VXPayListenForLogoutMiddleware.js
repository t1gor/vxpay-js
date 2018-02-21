/**
 * @param {VXPay} vxpay
 * @param {Function} resolve
 * @return {VXPay}
 * @constructor
 */
const VXPayListenForLogoutMiddleware = (vxpay, resolve) => {
	if (!vxpay.hooks.hasOnLogout(resolve)) {
		vxpay.hooks.onLogout(resolve);
	}

	return vxpay;
};

export default VXPayListenForLogoutMiddleware;
