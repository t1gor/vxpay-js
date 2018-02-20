import VXPayFlow              from '../../Config/VXPayFlow'
import VXPaySetFlowMiddleware from './VXPaySetFlowMiddleware'

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 */
const VXPaySetVIPAboTrialMiddleware = (vxpay) => VXPaySetFlowMiddleware(vxpay, VXPayFlow.TRIAL_VIP_ABO);

export default VXPaySetVIPAboTrialMiddleware;
