import VXPayFlow              from './../../Config/VXPayFlow'
import VXPaySetFlowMiddleware from './VXPaySetFlowMiddleware'

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
const VXPaySetMoneyChargeMiddleware = (vxpay) => VXPaySetFlowMiddleware(vxpay, VXPayFlow.MONEY_CHARGE);

export default VXPaySetMoneyChargeMiddleware;
