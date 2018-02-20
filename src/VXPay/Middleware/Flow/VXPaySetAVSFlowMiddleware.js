import VXPayFlow              from './../../Config/VXPayFlow'
import VXPaySetFlowMiddleware from './VXPaySetFlowMiddleware'

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
const VXPaySetAVSFlowMiddleware = (vxpay) => VXPaySetFlowMiddleware(vxpay, VXPayFlow.AVS);

export default VXPaySetAVSFlowMiddleware;
