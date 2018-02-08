import {assert}         from 'chai'
import VXPayConfig      from '../src/VXPay/VXPayConfig'
import VXPayEnvironment from './../src/VXPay/VXPayEnvironment'
import VXPayLanguage    from './../src/VXPay/VXPayLanguage'
import VXPayFlow        from '../src/VXPay/Config/VXPayFlow'

describe('VXConfig', () => {
	describe('#constructor()', () => {
		it('Will set default values', () => {
			const config = new VXPayConfig(),
			      defaultLang = VXPayLanguage.getDefault();

			assert.isFalse(config.logging, 'Logging is disabled by default');
			assert.equal(config.env, VXPayEnvironment.DEVELOPMENT, 'Development by default');
			assert.equal(config.language, defaultLang, 'Default lang will be set - e.g. DE');
			assert.equal(config.flow, VXPayFlow.LOGIN, 'Login is a default flow');
			assert.equal(config.privacyUrl, VXPayConfig.PRIVACY_DEFAULT.replace('{language}', defaultLang), 'Default localized privacy URl');
			assert.equal(config.abgUrl, VXPayConfig.ABG_DEFAULT.replace('{language}', defaultLang), 'Default localized ABG URl');
		})
	});
	describe('#env()', () => {
		it('Will only accept defined environments', () => {
			const config = new VXPayConfig(),
			      newEnv = 'bgangdnad',
			      msg = 'Environment ' + newEnv + ' is not supported. Please select one of ' + VXPayEnvironment.getAvailable();

			// default is DEV
			assert.equal(VXPayEnvironment.DEVELOPMENT, config.env);

			// change to stage and confirm
			config.env = VXPayEnvironment.STAGING;
			assert.equal(VXPayEnvironment.STAGING, config.env);

			// change to production and confirm
			config.env = VXPayEnvironment.PRODUCTION;
			assert.equal(VXPayEnvironment.PRODUCTION, config.env);

			// change to dummy
			assert.throws(() => config.env = newEnv, TypeError, msg);
		});
	});
	describe('#language()', () => {
		it('Will only accept defined languages', () => {
			const config = new VXPayConfig(),
			      newLang = 'fr',
			      msg = 'Unsupported language: ' + newLang  + '. Allowed: ' + VXPayLanguage.getAvailable().join(', ');

			// default is DE
			assert.equal(VXPayLanguage.getDefault(), config.language);

			// change to EN
			config.language = VXPayLanguage.EN;
			assert.equal(VXPayLanguage.EN, config.language);

			// change to NL
			config.language = VXPayLanguage.NL;
			assert.equal(VXPayLanguage.NL, config.language);

			// change to dummy
			assert.throws(() => config.language = newLang, TypeError, msg);
		});
	});
});
