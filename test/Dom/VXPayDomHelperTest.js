import {assert}       from 'chai'
import sinon          from 'sinon'
import {describe, it} from 'mocha'
import {URL}          from 'url'
import VXPayDomHelper from './../../src/VXPay/Dom/VXPayDomHelper'
import VXPayTestFx    from './../Fixtures/VXPayTestFx'

describe('VXPayDomHelper', () => {
	describe('#constructor()', () => {
		it('Should construct a valid object', () => {
			// build with dummy objects to compare
			const jquery = {j: 'query'},
			      fx     = {f: 'x'},
			      window = VXPayTestFx.getWindow(),
			      helper = new VXPayDomHelper(window, jquery, fx);

			assert.instanceOf(helper, VXPayDomHelper);
			assert.equal(jquery, helper.jQuery);
			assert.equal(fx, helper.fx);
			assert.equal(window, helper.window);
		});
	});
	describe('#getClientHeight()', () => {
		it('Should be able to retrieve client height by window inner height', () => {
			const window = VXPayTestFx.getWindow();

			// set expected height
			window.innerHeight = 123;

			// check via helper
			assert.equal(VXPayDomHelper.getClientHeight(window), 123);
		});
		it('Should be able to retrieve client height by document element client height', () => {
			const window = VXPayTestFx.getWindow();

			// unset for test purposes
			window.innerHeight = false;

			// check via helper - 0 by default
			assert.equal(VXPayDomHelper.getClientHeight(window), 0);

			// stub the getter
			const stub = sinon
				.stub(window.document.documentElement, 'clientHeight')
				.get(() => 333);

			// call helper
			assert.equal(VXPayDomHelper.getClientHeight(window), 333);

			// restore
			stub.restore();
		});
		it('Should be able to retrieve client height by document body client height', () => {
			const window = VXPayTestFx.getWindow();

			// unset for test purposes
			window.innerHeight = false;

			// check via helper - 0 by default
			assert.equal(VXPayDomHelper.getClientHeight(window), 0);

			// stub the getter for document element
			const docElementStub = sinon
				.stub(window.document.documentElement, 'clientHeight')
				.get(() => false);

			// stub the getter body client height
			const bodyElementStub = sinon
				.stub(window.document.body, 'clientHeight')
				.get(() => 555);

			// call helper
			assert.equal(VXPayDomHelper.getClientHeight(window), 555);

			// restore
			docElementStub.restore();
			bodyElementStub.restore();
		})
	});
	describe('#scrollTo()', () => {
		it('Should call jQuery first', done => {
			// stub jquery
			const jQuery = () => {
				      return {
					      animate: (opts, duration) => {
						      const options     = VXPayDomHelper.OPTIONS_JQUERY;
						      options.scrollTop = 120;
						      assert.equal(opts, options);
						      assert.equal(duration, VXPayDomHelper.ANIMATION_DURATION);
						      done();
					      }
				      }
			      },
			      helper = new VXPayDomHelper(VXPayTestFx.getWindow(), jQuery, {});

			jQuery.Animation = true;

			helper.scrollTo(120);
		});
		it('Should then try MooTools', done => {
			// stub jquery
			const window = VXPayTestFx.getWindow(),
			      fx = {},
			      helper = new VXPayDomHelper(window, {}, fx);

			fx.Scroll = (win, opts) => {
				assert.equal(opts, VXPayDomHelper.OPTIONS_MTOOLS);
				assert.equal(win, window);
				return {
					start: (from, to) => {
						assert.equal(0, from);
						assert.equal(666, to);
						done();
					}
				};
			};

			helper.scrollTo(666);
		});
		it('Should fallback to window if none is available', done => {
			// stub jquery
			const window = VXPayTestFx.getWindow(),
			      helper = new VXPayDomHelper(window);

			window.scrollTo = (from, to) => {
				assert.equal(0, from);
				assert.equal(167, to);
				done();
			};

			helper.scrollTo(167);
		});
	});
});