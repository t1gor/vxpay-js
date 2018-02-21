class VXPayCurrency {
	/**
	 * @return {string}
	 */
	static getDefault() {
		return VXPayCurrency.EUR;
	}

	/**
	 * @return {String[]}
	 */
	static getAllowed() {
		return [
			VXPayCurrency.EUR,
			VXPayCurrency.USD,
			VXPayCurrency.CHF,
		];
	}
}

VXPayCurrency.EUR = 'EUR';
VXPayCurrency.USD = 'USD';
VXPayCurrency.CHF = 'CHF';

export default VXPayCurrency;
