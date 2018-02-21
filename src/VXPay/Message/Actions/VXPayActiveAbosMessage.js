import VXPayMessage from './../../VXPayMessage'
import VXPayAbo     from './../../Model/VXPayAbo'

class VXPayActiveAbosMessage extends VXPayMessage {
	constructor() {
		super(VXPayMessage.TYPE_ACTIVE_ABOS);
		this.abos = [];
	}

	/**
	 * @param {VXPayAbo} abo
	 */
	add(abo) {
		this.abos.push(abo);
	}

	/**
	 * @param {Object} data
	 * @return {VXPayActiveAbosMessage}
	 */
	static fromData(data = VXPayActiveAbosMessage.SAMPLE_DATA) {
		const instance = new VXPayActiveAbosMessage;

		// instantiate models
		Object.keys(data).forEach(key => {
			const model      = new VXPayAbo();
			model.amount     = data[key].amount;
			model.endDate    = data[key].endDate;
			model.isActive   = data[key].isActive;
			model.isFreeAbo  = data[key].isFreeAbo;
			model.isPaidAbo  = data[key].isPaidAbo;
			model.isTrialAbo = data[key].isTrialAbo;
			model.name       = data[key].name;

			// append
			instance.add(model);
		});

		return instance;
	}
}

VXPayActiveAbosMessage.SAMPLE_DATA = {
	name: {
		amount:     0,
		endDate:    {},
		isActive:   true,
		isFreeAbo:  false,
		isPaidAbo:  true,
		isTrialAbo: true,
		name:       'Abo'
	}
};

export default VXPayActiveAbosMessage;
