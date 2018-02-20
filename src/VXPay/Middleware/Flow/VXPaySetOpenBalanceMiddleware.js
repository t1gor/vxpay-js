import VXPayFlow              from './../../Config/VXPayFlow'
import VXPaySetFlowMiddleware from './VXPaySetFlowMiddleware'

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
const VXPaySetOpenBalanceMiddleware = (vxpay) => VXPaySetFlowMiddleware(vxpay, VXPayFlow.OP_COMPENSATION);

export default VXPaySetOpenBalanceMiddleware;
