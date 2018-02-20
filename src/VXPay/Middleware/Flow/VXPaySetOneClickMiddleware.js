import VXPayFlow              from './../../Config/VXPayFlow'
import VXPaySetFlowMiddleware from './VXPaySetFlowMiddleware'

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
const VXPaySetOneClickMiddleware = (vxpay) => VXPaySetFlowMiddleware(vxpay, VXPayFlow.ONE_CLICK);

export default VXPaySetOneClickMiddleware;
