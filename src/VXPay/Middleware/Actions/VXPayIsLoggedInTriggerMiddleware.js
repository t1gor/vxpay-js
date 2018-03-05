import VXPayIsLoggedInActionMessage from './../../Message/Actions/VXPayIsLoggedInActionMessage'

/**
 * @param {VXPay} vxpay
 * @param {Function} resolve
 * @param {Function} reject
 * @constructor
 */
const VXPayIsLoggedInTriggerMiddleware = (vxpay, resolve, reject) => {
	try {
		vxpay.hooks.then(hooks => {
			// is hook setup?
			if (!hooks.hasOnIsLoggedIn(resolve)) {
				hooks.onIsLoggedIn(resolve);
			}
		});

		// trigger post message
		vxpay.paymentFrame.then(frame => frame.postMessage(new VXPayIsLoggedInActionMessage));
	} catch (err) {
		reject(err);
	}

	return vxpay;
};

export default VXPayIsLoggedInTriggerMiddleware;
