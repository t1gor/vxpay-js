import VXPayMessage from './../VXPayMessage';

export default class VXPayChangeRouteMessage extends VXPayMessage {
	/**
	 * @param {String} route
	 */
	constructor(route = '') {
		super(VXPayMessage.TYPE_CHANGE_ROUTE);
		this.route = route;
	}
}
