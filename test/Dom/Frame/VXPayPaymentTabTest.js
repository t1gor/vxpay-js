import {assert}                from 'chai'
import sinon                   from 'sinon'
import {describe, it}          from 'mocha'
import {given}                 from 'mocha-testdata'
import VXPayPaymentTab         from './../../../src/VXPay/Dom/Frame/VXPayPaymentTab'
import VXPayTestFx             from './../../Fixtures/VXPayTestFx'
import VXPayConfig             from './../../../src/VXPay/VXPayConfig'
import VXPayPaymentHooksConfig from './../../../src/VXPay/Config/VXPayPaymentHooksConfig'
import VXPayLanguage           from './../../../src/VXPay/VXPayLanguage'
import VXPayFlow               from './../../../src/VXPay/Config/VXPayFlow'
import VXPayPaymentRoutes      from "../../../src/VXPay/Config/VXPayPaymentRoutes";

describe('VXPayPaymentTab', () => {

	/** @var {VXPayPaymentTab} */
	let tab,
	    /** @var {VXPayConfig} */
	    config,
	    /** @var {Document} */
	    doc;

	beforeEach(done => {
		doc    = VXPayTestFx.getDocument();
		config = new VXPayConfig(doc.defaultView);

		tab = new VXPayPaymentTab(doc, 'test', config);
		done();
	});

	describe('#constructor()', () => {
		it('Should construct a valid object', () => {
			assert.instanceOf(tab, VXPayPaymentTab);
			assert.instanceOf(tab.hooks, VXPayPaymentHooksConfig);
			assert.equal(tab.route, VXPayPaymentTab.DEFAULT_ROUTE);
			assert.equal(tab.config, config);
			assert.equal(tab.document, doc);
			assert.equal(tab.name, 'test');
			assert.isFalse(tab.loaded);
		})
	});
	describe('#sendOptions()', () => {
		it('Should update the config', () => {
			const options = {
				flow:     VXPayFlow.CHANGE_LS,
				language: VXPayLanguage.NL
			};

			// set mock
			sinon.spy(tab._config, 'merge');

			// call
			tab.sendOptions(options);

			// check merge called with correct params
			assert.isTrue(tab._config.merge.called);
			assert.equal(tab._config.merge.getCall(0).args[0], options);

			// cleanup
			tab._config.merge.restore();
		})
	});
	describe('#changeRoute', () => {
		it('Changes route to default with no param', () => {
			tab.changeRoute(VXPayPaymentRoutes.AUTO_RECHARGE);
			tab.changeRoute();
			assert.equal(tab.route, VXPayPaymentTab.DEFAULT_ROUTE);
		});
		given(VXPayPaymentRoutes.getAllowed())
			.test('Stores the changed route', route => {
				tab.changeRoute(route);
				assert.equal(tab.route, route);
			});
	})
});