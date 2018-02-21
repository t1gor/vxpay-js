/**
 * @param {VXPay} vxpay
 * @param {Function} resolve
 * @return {VXPay}
 * @constructor
 */
const VXPayListenForBalanceMiddleware = (vxpay, resolve) => {
	if (!vxpay.hooks.hasOnBalance(resolve)) {
		vxpay.hooks.onBalance(resolve);
	}

	return vxpay;
};

export default VXPayListenForBalanceMiddleware;
