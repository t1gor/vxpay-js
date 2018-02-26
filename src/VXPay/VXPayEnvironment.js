class VXPayEnvironment {
	/**
	 * @return {String[]}
	 */
	static getAvailable() {
		return [
			VXPayEnvironment.LANDING_PAGE,
			VXPayEnvironment.CULT_BABES,
			VXPayEnvironment.TV_CHAT,
			VXPayEnvironment.SLP,
			VXPayEnvironment.VXONE_LP,
			VXPayEnvironment.VXONE,
		]
	}

	/**
	 * @return {string}
	 */
	static getDefault() {
		return VXPayEnvironment.VXONE;
	}
}

VXPayEnvironment.LANDING_PAGE = 'lp';
VXPayEnvironment.CULT_BABES   = 'cultbabes';
VXPayEnvironment.TV_CHAT      = 'tvchat';
VXPayEnvironment.SLP          = 'slp';
VXPayEnvironment.VXONE_LP     = 'vxonelp';
VXPayEnvironment.VXONE        = 'vxone';

export default VXPayEnvironment;
