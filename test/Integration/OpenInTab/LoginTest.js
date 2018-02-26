import VXPayConfig    from './../../../src/VXPay/VXPayConfig'
import VXPay          from './../../../src/VXPay'
import Browser        from 'zombie'
import URL            from 'url'
import {describe, it} from 'mocha'

describe('Integration', () => {
	describe('#openInTab', () => {

		before(done => {
			const browser = new Browser();
			browser.visit('http://localhost:8080', done);
		});

		it('openLogin - Should open login screen in new tab', () => {
			console.log(browser.window);

			const config = new VXPayConfig(browser.window);

			config.enableTab = true;

			const vxpay = new VXPay(config);

			vxpay.openLogin().then(vxpay => {
				console.log(
					vxpay.config.getPaymentFrameUrl(),
					browser.tabs
				);
			})
		})
	})
});