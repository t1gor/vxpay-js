/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 */
const VXPayShowAboMiddleware = (vxpay) => {
	vxpay.paymentFrame.show('abo');
	return vxpay;
};

export default VXPayShowAboMiddleware;
