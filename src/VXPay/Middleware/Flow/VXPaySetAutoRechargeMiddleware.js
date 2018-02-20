import VXPayFlow              from './../../Config/VXPayFlow'
import VXPaySetFlowMiddleware from './VXPaySetFlowMiddleware'

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
const VXPaySetAutoRechargeMiddleware = (vxpay) => VXPaySetFlowMiddleware(vxpay, VXPayFlow.AUTO_RECHARGE);

export default VXPaySetAutoRechargeMiddleware;
