import VXPayIsLoggedInActionMessage from './../../Message/Actions/VXPayIsLoggedInActionMessage'

/**
 * @param {VXPay} vxpay
 * @param {Function} resolve
 * @param {Function} reject
 * @constructor
 */
const VXPayIsLoggedInTriggerMiddleware = (vxpay, resolve, reject) => {
	// is hook setup?
	if (!vxpay.hooks.hasOnIsLoggedIn(resolve)) {
		vxpay.hooks.onIsLoggedIn(resolve);
	}

	try {
		// trigger post message
		vxpay.paymentFrame.postMessage(new VXPayIsLoggedInActionMessage);
	} catch (err) {
		reject(err);
	}
};

export default VXPayIsLoggedInTriggerMiddleware;
