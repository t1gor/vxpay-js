class VXPayPaymentRoutes {
	/**
	 * @return {String[]}
	 */
	static getAllowed() {
		return [
			VXPayPaymentRoutes.LOGIN,
			VXPayPaymentRoutes.SIGN_UP,
			VXPayPaymentRoutes.PAYMENT,
			VXPayPaymentRoutes.ABO,
			VXPayPaymentRoutes.AVS,
			VXPayPaymentRoutes.PROMOCODE,
			VXPayPaymentRoutes.OP_COMPENSATION,
			VXPayPaymentRoutes.PASSWORD,
			VXPayPaymentRoutes.PASSWORD_RESET,
			VXPayPaymentRoutes.AUTO_RECHARGE,
			VXPayPaymentRoutes.ONE_CLICK,
			VXPayPaymentRoutes.SETTINGS,
			VXPayPaymentRoutes.VOICE_CALL,
			VXPayPaymentRoutes.LIMIT,
		];
	}
}

VXPayPaymentRoutes.LOGIN           = '/login';
VXPayPaymentRoutes.SIGN_UP         = '/signup';
VXPayPaymentRoutes.PAYMENT         = '/payment';
VXPayPaymentRoutes.ABO             = '/abo';
VXPayPaymentRoutes.AVS             = '/avs';
VXPayPaymentRoutes.PROMOCODE       = '/promocode';
VXPayPaymentRoutes.OP_COMPENSATION = '/opcompensation';
VXPayPaymentRoutes.PASSWORD        = '/password';
VXPayPaymentRoutes.PASSWORD_RESET  = '/passwordreset';
VXPayPaymentRoutes.AUTO_RECHARGE   = '/autorecharge';
VXPayPaymentRoutes.ONE_CLICK       = '/comfort';
VXPayPaymentRoutes.SETTINGS        = '/user/settings';
VXPayPaymentRoutes.VOICE_CALL      = '/voicecall';
VXPayPaymentRoutes.LIMIT           = '/limit';

export default VXPayPaymentRoutes;
