/**
 * @param {VXPay} vxpay
 * @param {Function} resolve
 * @param {Function} reject
 * @return {VXPay}
 * @constructor
 */
const VXPayOnAVSStatusListenMiddleware = (vxpay, resolve, reject) => {
	try {
		vxpay.hooks.then(hooks => {
			if (!hooks.hasOnAVSStatus(resolve)) {
				hooks.onAVSStatus(resolve);
			}
		});

		return vxpay;
	} catch (err) {
		reject(err);
	}
};

export default VXPayOnAVSStatusListenMiddleware;
