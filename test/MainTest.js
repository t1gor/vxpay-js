import * as VX from './../src/main'
import {expect} from 'chai'

describe('main', () => {
	it('Should allow access to all classes with constants', () => {
		expect(VX).to.have.property('VXPay');
		expect(VX).to.have.property('VXPayConfig');
		expect(VX).to.have.property('VXPayLanguage');
		expect(VX).to.have.property('VXPayEnvironment');
		expect(VX).to.have.property('VXPayNotifications');
		expect(VX).to.have.property('VXPayFlow');
		expect(VX).to.have.property('VXPayModalConfig');
		expect(VX).to.have.property('VXPayPaymentHooksConfig');
		expect(VX).to.have.property('VXPayCurrency');
	});
});
