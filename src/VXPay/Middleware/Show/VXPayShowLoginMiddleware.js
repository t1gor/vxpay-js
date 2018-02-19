/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 */
const VXPayShowLoginMiddleware = (vxpay) => {
	vxpay.frame.show('login');
	return vxpay;
};

export default VXPayShowLoginMiddleware;
