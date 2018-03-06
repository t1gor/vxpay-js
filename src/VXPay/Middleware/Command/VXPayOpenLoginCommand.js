import VXPayFlow          from './../../Config/VXPayFlow'
import VXPayPaymentRoutes from './../../Config/VXPayPaymentRoutes'

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
const VXPayOpenLoginCommand = (vxpay) => {
	vxpay.logger.log('VXPayOpenLoginCommand()');
	const newOpts = Object.assign({}, vxpay.config.getOptions(), {'flow': VXPayFlow.LOGIN});

	vxpay.paymentFrame
		.then(frame => frame
			.sendOptions(newOpts)
			.updateUI(vxpay.config.modalConfig.getOptions())
			.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
			.changeRoute(VXPayPaymentRoutes.LOGIN)
			.initSession());

	return vxpay;
};

export default VXPayOpenLoginCommand;
