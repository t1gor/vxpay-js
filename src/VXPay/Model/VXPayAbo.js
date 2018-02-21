class VXPayAbo {
	constructor() {
		this._amount = 0;
		this._endDate = {};
		this._isActive = false;
		this._isFreeAbo = false;
		this._isPaidAbo = true;
		this._isTrialAbo = true;
		this._name = '';
	}

	/**
	 * @return {Number}
	 */
	get amount() {
		return this._amount;
	}

	/**
	 * @param {Number} value
	 */
	set amount(value) {
		this._amount = value;
	}

	/**
	 * @return {{}|*}
	 */
	get endDate() {
		return this._endDate;
	}

	/**
	 * @param {{}|*} value
	 */
	set endDate(value) {
		this._endDate = value;
	}

	/**
	 * @return {Boolean}
	 */
	get isActive() {
		return this._isActive;
	}

	/**
	 * @param {Boolean} value
	 */
	set isActive(value) {
		this._isActive = value;
	}

	/**
	 * @return {Boolean}
	 */
	get isFreeAbo() {
		return this._isFreeAbo;
	}

	/**
	 * @param {Boolean} value
	 */
	set isFreeAbo(value) {
		this._isFreeAbo = value;
	}

	/**
	 * @return {Boolean}
	 */
	get isPaidAbo() {
		return this._isPaidAbo;
	}

	/**
	 * @param {Boolean} value
	 */
	set isPaidAbo(value) {
		this._isPaidAbo = value;
	}

	/**
	 * @return {Boolean}
	 */
	get isTrialAbo() {
		return this._isTrialAbo;
	}

	/**
	 * @param {Boolean} value
	 */
	set isTrialAbo(value) {
		this._isTrialAbo = value;
	}

	/**
	 * @return {String}
	 */
	get name() {
		return this._name;
	}

	/**
	 * @param {String} value
	 */
	set name(value) {
		this._name = value;
	}
}

export default VXPayAbo;
