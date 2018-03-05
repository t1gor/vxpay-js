/**
 * @param {VXPay} vxpay
 * @param {Function} resolve
 * @param {Function} reject
 * @return {VXPay}
 * @constructor
 */
const VXPayListenForBalanceMiddleware = (vxpay, resolve, reject) => {
	try {
		vxpay.hooks.then(hooks => {
			if (!hooks.hasOnBalance(resolve)) {
				hooks.onBalance(resolve);
			}
		});

		return vxpay;
	} catch (err) {
		reject(err);
	}
};

export default VXPayListenForBalanceMiddleware;
