import VXPayShowMiddleware from './VXPayShowMiddleware'

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 */
const VXPayShowOpenBalanceMiddleware = (vxpay) => VXPayShowMiddleware(vxpay, 'opcompensation');

export default VXPayShowOpenBalanceMiddleware;
