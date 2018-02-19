/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 */
const VXPayShowLoginMiddleware = (vxpay) => {
	vxpay.paymentFrame.show('login');
	return vxpay;
};

export default VXPayShowLoginMiddleware;
