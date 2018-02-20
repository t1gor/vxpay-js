import VXPayFlow              from '../../Config/VXPayFlow'
import VXPaySetFlowMiddleware from './VXPaySetFlowMiddleware'

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 */
const VXPaySetVIPAboFlowMiddleware = (vxpay) => VXPaySetFlowMiddleware(vxpay, VXPayFlow.VIP_ABO);

export default VXPaySetVIPAboFlowMiddleware;
