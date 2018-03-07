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

	vxpay._initPaymentFrame(true)
		.then(vxpay => {
			console.log(678987656787);
			vxpay._paymentFrame
				.sendOptions(newOpts)
				.updateUI(vxpay.config.modalConfig.getOptions())
				.sendAdditionalOptions(vxpay.config.getAdditionalOptions())
				.changeRoute(VXPayPaymentRoutes.LOGIN)
				.initSession()
		});

	return vxpay;
};

export default VXPayOpenLoginCommand;
