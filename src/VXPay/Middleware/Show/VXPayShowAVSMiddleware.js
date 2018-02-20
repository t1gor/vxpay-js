import VXPayShowMiddleware from './VXPayShowMiddleware'

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 */
const VXPayShowAVSMiddleware = (vxpay) => VXPayShowMiddleware(vxpay, 'avs');

export default VXPayShowAVSMiddleware;
