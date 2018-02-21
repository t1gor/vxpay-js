import VXPayCurrency from './../Config/VXPayCurrency'

class VXPayBalance {
	/**
	 * @param {Number} amount
	 * @param {String} currency
	 */
	constructor(amount = 0, currency = VXPayCurrency.EUR) {
		this._amount = amount;
		this._currency = currency;
	}

	/**
	 * @return {number}
	 */
	get amount() {
		return this._amount;
	}

	/**
	 * @return {string}
	 */
	get currency() {
		return this._currency;
	}

	/**
	 * @return {string}
	 */
	toString() {
		return this._amount + ' ' + this._currency;
	}
}

export default VXPayBalance;
