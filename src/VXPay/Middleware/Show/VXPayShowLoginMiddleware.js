import VXPayShowMiddleware from './VXPayShowMiddleware'

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 */
const VXPayShowLoginMiddleware = (vxpay) => VXPayShowMiddleware(vxpay, 'login');

export default VXPayShowLoginMiddleware;
