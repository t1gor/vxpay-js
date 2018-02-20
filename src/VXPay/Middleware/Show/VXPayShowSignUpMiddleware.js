import VXPayShowMiddleware from './VXPayShowMiddleware'

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 */
const VXPayShowSignUpMiddleware = (vxpay) => VXPayShowMiddleware(vxpay, 'signup');

export default VXPayShowSignUpMiddleware;
