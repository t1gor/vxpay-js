import {JSDOM}        from 'jsdom';
import VXPayDomHelper from './../src/VXPay/Dom/VXPayDomHelper';
import {assert}       from 'chai';
import sinon          from 'sinon';

const testDocument = "<!DOCTYPE html><html><body id='body'>test</body></html>";

describe('VXPayDomHelper', () => {
	describe('#getClientHeight()', () => {
		it('Should be able to retrieve client height by window inner height', () => {
			const dom = new JSDOM(testDocument);

			// set expected height
			dom.window.innerHeight = 123;

			// check via helper
			assert.equal(VXPayDomHelper.getClientHeight(dom.window), 123);
		});
		it('Should be able to retrieve client height by document element client height', () => {
			const dom = new JSDOM(testDocument);

			// unset for test purposes
			dom.window.innerHeight = false;

			// check via helper - 0 by default
			assert.equal(VXPayDomHelper.getClientHeight(dom.window), 0);

			// stub the getter
			const stub = sinon
				.stub(dom.window.document.documentElement, 'clientHeight')
				.get(() => 333);

			// call helper
			assert.equal(VXPayDomHelper.getClientHeight(dom.window), 333);

			// restore
			stub.restore();
		});
		it('Should be able to retrieve client height by document body client height', () => {
			const dom = new JSDOM(testDocument);

			// unset for test purposes
			dom.window.innerHeight = false;

			// check via helper - 0 by default
			assert.equal(VXPayDomHelper.getClientHeight(dom.window), 0);

			// stub the getter for document element
			const docElementStub = sinon
				.stub(dom.window.document.documentElement, 'clientHeight')
				.get(() => false);

			// stub the getter body client height
			const bodyElementStub = sinon
				.stub(dom.window.document.body, 'clientHeight')
				.get(() => 555);

			// call helper
			assert.equal(VXPayDomHelper.getClientHeight(dom.window), 555);

			// restore
			docElementStub.restore();
			bodyElementStub.restore();
		})
	})
});