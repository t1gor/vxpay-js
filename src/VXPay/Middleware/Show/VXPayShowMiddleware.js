/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 */
const VXPayShowMiddleware = (vxpay) => {
	vxpay.paymentFrame.show();
	return vxpay;
};

export default VXPayShowMiddleware;
