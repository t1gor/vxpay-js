import {assert}                  from 'chai'
import {describe, it}            from 'mocha'
import VXPayState                from './../../src/VXPay/Model/VXPayState'
import VXPayTransferTokenMessage from './../../src/VXPay/Message/VXPayTransferTokenMessage'

describe('VXPayState', () => {
	describe('#constructor', () => {
		const state = new VXPayState;
		assert.isFalse(state.isFrameReady);
		assert.isFalse(state.isContentLoaded);
		assert.isFalse(state.isSessionInitialized);
		assert.equal(undefined, state.transferToken);
	});
	describe('#isFrameReady', () => {
		const state = new VXPayState();
		assert.isFalse(state.isFrameReady);
		state.isFrameReady = true;
		assert.isTrue(state.isFrameReady);
	});
	describe('#isContentLoaded', () => {
		const state = new VXPayState();
		assert.isFalse(state.isContentLoaded);
		state.isContentLoaded = true;
		assert.isTrue(state.isContentLoaded);
	});
	describe('#isSessionInitialized', () => {
		const state = new VXPayState();
		assert.isFalse(state.isSessionInitialized);
		state.isSessionInitialized = true;
		assert.isTrue(state.isSessionInitialized);
	});
	describe('#isSessionInitialized', () => {
		const state = new VXPayState();
		assert.isFalse(state.isSessionInitialized);
		state.isSessionInitialized = true;
		assert.isTrue(state.isSessionInitialized);
	});
	describe('#markFrameReady()', () => {
		const state = new VXPayState();
		assert.isFalse(state.isFrameReady);
		state.markFrameReady();
		assert.isTrue(state.isFrameReady);
	});
	describe('#markContentLoaded()', () => {
		const state = new VXPayState();
		assert.isFalse(state.isContentLoaded);
		state.markContentLoaded();
		assert.isTrue(state.isContentLoaded);
	});
	describe('#markSessionInitialized()', () => {
		const state = new VXPayState();
		assert.isFalse(state.isSessionInitialized);
		state.markSessionInitialized();
		assert.isTrue(state.isSessionInitialized);
	});
	describe('#markHasToken()', () => {
		const token = 'test-token',
		      msg = new VXPayTransferTokenMessage(token),
		      state = new VXPayState();

		assert.isFalse(state.hasToken);
		state.markHasToken(msg);
		assert.isTrue(state.hasToken);
		assert.equal(token, state.transferToken.token);
	});
});
