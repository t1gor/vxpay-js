class VXPayLanguage {

	/**
	 * @return {string}
	 */
	static getDefault() {
		return VXPayLanguage.DE;
	}

	/**
	 * @return {String[]}
	 */
	static getAvailable() {
		return [
			VXPayLanguage.DE,
			VXPayLanguage.EN,
			VXPayLanguage.NL,
		];
	}
}

VXPayLanguage.DE = 'DE';
VXPayLanguage.EN = 'EN';
VXPayLanguage.NL = 'NL';

export default VXPayLanguage;
