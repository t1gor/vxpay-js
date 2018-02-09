class VXPayEnvironment {
	/**
	 * @return {String[]}
	 */
	static getAvailable() {
		return [
			VXPayEnvironment.DEVELOPMENT,
			VXPayEnvironment.STAGING,
			VXPayEnvironment.PRODUCTION,
			VXPayEnvironment.VXONE
		]
	}
}

VXPayEnvironment.DEVELOPMENT = 'development';
VXPayEnvironment.STAGING     = 'staging';
VXPayEnvironment.PRODUCTION  = 'production';
VXPayEnvironment.VXONE       = 'vxone';

export default VXPayEnvironment;
