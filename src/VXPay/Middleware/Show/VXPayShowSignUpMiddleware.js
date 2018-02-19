/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 */
const VXPayShowSignUpMiddleware = (vxpay) => {
	vxpay.paymentFrame.show('signup');
	return vxpay;
};

export default VXPayShowSignUpMiddleware;
