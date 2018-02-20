import VXPayFlow              from './../../Config/VXPayFlow'
import VXPaySetFlowMiddleware from './VXPaySetFlowMiddleware'

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
const VXPaySetScratchCardMiddleware = (vxpay) => VXPaySetFlowMiddleware(vxpay, VXPayFlow.SCRATCH_CARD);

export default VXPaySetScratchCardMiddleware;
