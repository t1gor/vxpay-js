/**
 * @param {VXPay} vxpay
 * @param {Function} resolve
 * @param {Function} reject
 * @return {VXPay}
 * @constructor
 */
const VXPayListenForActiveAbosMiddleware = (vxpay, resolve, reject) => {
	try {
		vxpay.hooks.then(hooks => {
			if (!hooks.hasOnActiveAbos(resolve)) {
				hooks.onActiveAbos(resolve);
			}
		})
	} catch (err) {
		reject(err);
	}

	return vxpay;
};

export default VXPayListenForActiveAbosMiddleware;
