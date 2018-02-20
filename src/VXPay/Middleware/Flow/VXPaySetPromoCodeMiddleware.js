import VXPayFlow              from './../../Config/VXPayFlow'
import VXPaySetFlowMiddleware from './VXPaySetFlowMiddleware'

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
const VXPaySetPromoCodeMiddleware = (vxpay) => VXPaySetFlowMiddleware(vxpay, VXPayFlow.PROMOCODE);

export default VXPaySetPromoCodeMiddleware;
