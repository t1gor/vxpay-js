import {assert}                from 'chai'
import VXPayChangeRouteMessage from "../../src/VXPay/Message/VXPayChangeRouteMessage";
import VXPayMessage            from "../../src/VXPay/VXPayMessage";

describe('VXPayChangeRouteMessage', () => {
	describe('#constructor()', () => {
		it('Should build a correct object', () => {
			const route = 'new-route',
				  msg = new VXPayChangeRouteMessage(route);

			assert.equal(msg.type, VXPayMessage.TYPE_CHANGE_ROUTE);
			assert.equal(msg.route, route);
		});
		it('Should convert to JSON when toString is called', () => {
			const msg = new VXPayChangeRouteMessage('new-route');

			assert.equal(msg.toString(), '{"type":"modalbox-change-route","route":"new-route"}');
		})
	})
});
