"use strict";

import VXPay                              from './VXPay'
import VXPayConfig                        from './VXPay/VXPayConfig'
import VXPayEnvironment                   from './VXPay/VXPayEnvironment'
import VXPayLanguage                      from './VXPay/VXPayLanguage'
import VXPayNotifications                 from './VXPay/VXPayNotifications'
import VXPayFlow                          from './VXPay/Config/VXPayFlow'
import VXPayModalConfig                   from './VXPay/Config/VXPayModalConfig'
import VXPayPaymentHooksConfig            from './VXPay/Config/VXPayPaymentHooksConfig'
import {polyfill as objectAssignPolyfill} from 'es6-object-assign'

// before any
objectAssignPolyfill();

export {
	VXPay,
	VXPayConfig,
	VXPayEnvironment,
	VXPayLanguage,
	VXPayNotifications,
	VXPayModalConfig,
	VXPayPaymentHooksConfig,
	VXPayFlow,
};
