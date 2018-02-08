class VXPayEnvironment {
	/**
	 * @return {String[]}
	 */
	static getAvailable() {
		return [
			VXPayEnvironment.DEVELOPMENT,
			VXPayEnvironment.STAGING,
			VXPayEnvironment.PRODUCTION
		]
	}
}

VXPayEnvironment.DEVELOPMENT = 'development';
VXPayEnvironment.STAGING = 'staging';
VXPayEnvironment.PRODUCTION = 'production';

export default VXPayEnvironment;
