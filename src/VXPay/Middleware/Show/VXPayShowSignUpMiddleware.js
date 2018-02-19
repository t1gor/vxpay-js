/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 */
const VXPayShowSignUpMiddleware = (vxpay) => {
	vxpay.frame.show('signup');
	return vxpay;
};

export default VXPayShowSignUpMiddleware;
