import VXPayIsVisibleMessage from './../Message/VXPayIsVisibleMessage'

/**
 * @note the event to show should be view-ready, but somehow it's not triggered ...
 *
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
const VXPaySetVisibleOnViewReadyMiddleware = (vxpay) => {
	vxpay.frame.hooks.onIframeReady(() => vxpay.frame.postMessage(new VXPayIsVisibleMessage()));
	return vxpay;
};

export default VXPaySetVisibleOnViewReadyMiddleware;
