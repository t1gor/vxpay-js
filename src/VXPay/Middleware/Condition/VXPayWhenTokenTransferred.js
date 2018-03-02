/**
 * @param {VXPay} vxpay
 * @return {Promise<VXPay>}
 * @constructor
 */
const VXPayWhenTokenTransferred = (vxpay) => {
	return new Promise((resolve, reject) => {
		try {
			// do we have the token already?
			if (vxpay.state.hasToken || vxpay.config.enableTab) {
				resolve(vxpay);
			} else {
				// otherwise - wait for it
				vxpay.hooks.onTransferToken(() => resolve(vxpay));
			}
		} catch (err) {
			reject(err);
		}
	});
};

export default VXPayWhenTokenTransferred;
