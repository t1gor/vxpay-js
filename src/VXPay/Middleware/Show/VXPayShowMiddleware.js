/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 */
const VXPayShowMiddleware = (vxpay) => {
	vxpay.frame.show();
	return vxpay;
};

export default VXPayShowMiddleware;
