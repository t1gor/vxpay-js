/**
 * @param {VXPay} vxpay
 * @param {Function} resolve
 * @return {VXPay}
 * @constructor
 */
const VXPayListenForActiveAbosMiddleware = (vxpay, resolve) => {
	if (!vxpay.hooks.hasOnActiveAbos(resolve)) {
		vxpay.hooks.onActiveAbos(resolve);
	}

	return vxpay;
};

export default VXPayListenForActiveAbosMiddleware;
