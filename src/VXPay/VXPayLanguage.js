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

VXPayLanguage.DE = 'de';
VXPayLanguage.EN = 'en';
VXPayLanguage.NL = 'nl';

export default VXPayLanguage;
