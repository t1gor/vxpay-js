/**
 * @param {VXPay} vxpay
 * @param {String} show
 * @return {VXPay}
 */
const VXPayShowMiddleware = (vxpay, show = '') => {
	vxpay.paymentFrame.show(show);
	return vxpay;
};

export default VXPayShowMiddleware;
