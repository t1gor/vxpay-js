/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 */
const VXPayShowAboMiddleware = (vxpay) => {
	vxpay.frame.show('abo');
	return vxpay;
};

export default VXPayShowAboMiddleware;
