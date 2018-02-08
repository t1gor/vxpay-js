class VXPayFlow {
	/**
	 * @return {String[]}
	 */
	static getAllowed() {
		return [
			VXPayFlow.AVS,
			VXPayFlow.LIMIT,
			VXPayFlow.LOGIN,
			VXPayFlow.MONEY_CHARGE,
			VXPayFlow.OP_COMPENSATION,
			VXPayFlow.PASSWORD_RESET,
			VXPayFlow.PROMOCODE,
			VXPayFlow.SCRATCH_CARD,
			VXPayFlow.TRIAL_VIP_ABO,
			VXPayFlow.VIP_ABO,
			VXPayFlow.VXTV_ABO,
		];
	}
}

VXPayFlow.AVS             = 'avs';
VXPayFlow.LIMIT           = 'limit';
VXPayFlow.LOGIN           = 'login';
VXPayFlow.MONEY_CHARGE    = 'moneycharge';
VXPayFlow.OP_COMPENSATION = 'opcompensation';
VXPayFlow.PASSWORD_RESET  = 'pwdreset';
VXPayFlow.PROMOCODE       = 'promocode';
VXPayFlow.SCRATCH_CARD    = 'scratchcard';
VXPayFlow.TRIAL_VIP_ABO   = 'trialvipabo';
VXPayFlow.VIP_ABO         = 'vipabo';
VXPayFlow.VXTV_ABO        = 'vxtvabo';

export default VXPayFlow;