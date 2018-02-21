import VXPayIsLoggedInTriggerMiddleware from './VXPayIsLoggedInTriggerMiddleware'

/**
 * @param {VXPay} vxpay
 * @param {Function} resolve
 * @param {Function} reject
 * @return {VXPay}
 * @constructor
 */
const VXPayListenOrCallLoggedInMiddleware = (vxpay, resolve, reject) => {
	// is token already received?
	if (vxpay.config.token === '') {
		vxpay.hooks.onTransferToken(msg => VXPayIsLoggedInTriggerMiddleware(vxpay, resolve, reject));
	} else {
		VXPayIsLoggedInTriggerMiddleware(vxpay, resolve, reject);
	}

	return vxpay;
};

export default VXPayListenOrCallLoggedInMiddleware;
