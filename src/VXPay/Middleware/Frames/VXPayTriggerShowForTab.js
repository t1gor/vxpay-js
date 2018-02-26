/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
const VXPayTriggerShowForTab = (vxpay) => {
	// ony for tab config - trigger show manually
	if (vxpay.config.enableTab) {
		vxpay.paymentFrame.show();
	}

	return vxpay;
};

export default VXPayTriggerShowForTab;
