import VXPayShowMiddleware from './VXPayShowMiddleware'

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 */
const VXPayShowPromoCodeMiddleware = (vxpay) => VXPayShowMiddleware(vxpay, 'promocode');

export default VXPayShowPromoCodeMiddleware;
