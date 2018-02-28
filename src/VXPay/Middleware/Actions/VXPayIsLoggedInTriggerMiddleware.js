import VXPayIsLoggedInActionMessage from './../../Message/Actions/VXPayIsLoggedInActionMessage'

/**
 * @param {VXPay} vxpay
 * @param {Function} resolve
 * @param {Function} reject
 * @constructor
 */
const VXPayIsLoggedInTriggerMiddleware = (vxpay, resolve, reject) => {
	try {
		// is hook setup?
		if (!vxpay.hooks.hasOnIsLoggedIn(resolve)) {
			vxpay.hooks.onIsLoggedIn(resolve);
		}

		// trigger post message
		vxpay.paymentFrame.postMessage(new VXPayIsLoggedInActionMessage);
	} catch (err) {
		reject(err);
	}

	return vxpay;
};

export default VXPayIsLoggedInTriggerMiddleware;
