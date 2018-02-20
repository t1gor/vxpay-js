import VXPayShowMiddleware from './VXPayShowMiddleware'

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 */
const VXPayShowAboMiddleware = (vxpay) => VXPayShowMiddleware(vxpay, 'abo');

export default VXPayShowAboMiddleware;
