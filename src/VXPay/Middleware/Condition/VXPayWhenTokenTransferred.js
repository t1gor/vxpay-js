/**
 * @param {VXPay} vxpay
 * @return {Promise<VXPay>}
 * @constructor
 */
const VXPayWhenTokenTransferred = (vxpay) => {
	return new Promise(resolve => {
		// do we have the token already?
		if (vxpay.state.hasToken || vxpay.config.enableTab) {
			resolve(vxpay);
		} else {
			// otherwise - wait for it
			vxpay.hooks.onTransferToken(msg => resolve(vxpay));
		}

		return vxpay;
	});
};

export default VXPayWhenTokenTransferred;
