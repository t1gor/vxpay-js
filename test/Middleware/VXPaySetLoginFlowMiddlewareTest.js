import sinon                       from 'sinon'
import VXPay                       from './../../src/VXPay'
import VXPayConfig                 from './../../src/VXPay/VXPayConfig'
import VXPaySetLoginFlowMiddleware from './../../src/VXPay/Middleware/Flow/VXPaySetLoginFlowMiddleware'
import VXPayFlow                   from './../../src/VXPay/Config/VXPayFlow'
import VXPayPaymentFrame           from './../../src/VXPay/Dom/Frame/VXPayPaymentFrame'
import VXPayTestFx                 from './../Fixtures/VXPayTestFx'

describe('VXPaySetLoginFlowMiddleware()', () => {
	it('Should change the flow to login', () => {
		const config = new VXPayConfig(VXPayTestFx.getWindow()),
			  vxpay = new VXPay(config),
			  mock = sinon.mock(VXPayPaymentFrame);

		// set dummy frame
		mock.expects('sendOptions').once();
		vxpay.paymentFrame = mock;

		let augmented = VXPaySetLoginFlowMiddleware(vxpay);

		assert.notEqual(vxpay, augmented);
		assert.equal(VXPayFlow.LOGIN, augmented.config.flow);
	})
});