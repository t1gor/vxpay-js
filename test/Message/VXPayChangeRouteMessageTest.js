import {assert}                from 'chai'
import VXPayChangeRouteMessage from './../../src/VXPay/Message/VXPayChangeRouteMessage'
import VXPayMessage            from './../../src/VXPay/VXPayMessage'
import VXPayTestFx             from './../Fixtures/VXPayTestFx'

describe('VXPayChangeRouteMessage', () => {
	describe('#constructor()', () => {
		it('Should build a correct object', () => {
			const route = 'new-route',
				  msg = new VXPayChangeRouteMessage(route);

			assert.equal(msg.type, VXPayMessage.TYPE_CHANGE_ROUTE);
			assert.equal(msg.route, route);
		});
		it('Should convert to JSON when toString is called', () => {
			assert.equal(
				(new VXPayChangeRouteMessage('new-route')).toString(),
				VXPayTestFx.json(VXPayTestFx.getMessage('change-route-new-route'))
			);
		})
	})
});
