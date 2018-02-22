import VXPayMessage from './../VXPayMessage'

export default class VXPayChangeRouteMessage extends VXPayMessage {
	/**
	 * @param {String} route
	 */
	constructor(route = '') {
		super(VXPayMessage.TYPE_CHANGE_ROUTE);

		// change route message can be empty
		if (route.length > 0) {
			this.route = route;
		}
	}
}
