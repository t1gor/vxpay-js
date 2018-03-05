/**
 * @param {VXPay} vxpay
 * @param {Function} resolve
 * @param {Function} reject
 * @return {VXPay}
 * @constructor
 */
const VXPayListenForLogoutMiddleware = (vxpay, resolve, reject) => {
	try {
		vxpay.hooks.then(hooks => {
			if (!hooks.hasOnLogout(resolve)) {
				hooks.onLogout(resolve);
			}
		});

		return vxpay;
	} catch (err) {
		reject(err);
	}
};

export default VXPayListenForLogoutMiddleware;
