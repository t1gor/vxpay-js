| Method | Arguments | Return value | Additional info |
| ------ | --------- | ------------ | --------------- |
| `VXPay.openLogin` | `<none>` | `Promise<`[VXPay](https://github.com/VISIT-X/vxpay-js/blob/master/src/VXPay.js)`>` | Opens the paytour with login flow |
| `VXPay.openSignup` | `<none>` | `Promise<`[VXPay](https://github.com/VISIT-X/vxpay-js/blob/master/src/VXPay.js)`>` | Opens the paytour with registration flow |
| `VXPay.openSignupOrLogin` | `<none>` | `Promise<`[VXPay](https://github.com/VISIT-X/vxpay-js/blob/master/src/VXPay.js)`>` | Let the library decide if login or signup should be opened |
| `VXPay.resetPassword` | `<none>` | `Promise<`[VXPay](https://github.com/VISIT-X/vxpay-js/blob/master/src/VXPay.js)`>` | Open reset password UI |
| `VXPay.lostPassword` | `<none>` | `Promise<`[VXPay](https://github.com/VISIT-X/vxpay-js/blob/master/src/VXPay.js)`>` | Open lost password UI |
| `VXPay.openPayment` | `<none>` | `Promise<`[VXPay](https://github.com/VISIT-X/vxpay-js/blob/master/src/VXPay.js)`>` | Open general payment UI |
| `VXPay.limitPayment` | `<none>` | `Promise<`[VXPay](https://github.com/VISIT-X/vxpay-js/blob/master/src/VXPay.js)`>` | Open payment with limited options and a warning |
| `VXPay.changeCard` | `<none>` | `Promise<`[VXPay](https://github.com/VISIT-X/vxpay-js/blob/master/src/VXPay.js)`>` | **Deprecated** |
| `VXPay.vipAbo` | `<none>` | `Promise<`[VXPay](https://github.com/VISIT-X/vxpay-js/blob/master/src/VXPay.js)`>` | Open VIP Abo signup UI |
| `VXPay.vipAboTrial` | `<none>` | `Promise<`[VXPay](https://github.com/VISIT-X/vxpay-js/blob/master/src/VXPay.js)`>` | Open VIP abo trial signup UI |
| `VXPay.premiumAbo` | `<none>` | `Promise<`[VXPay](https://github.com/VISIT-X/vxpay-js/blob/master/src/VXPay.js)`>` | Open premium ABO (VX-TV) signup UI |
| `VXPay.openSettings` | `<none>` | `Promise<`[VXPay](https://github.com/VISIT-X/vxpay-js/blob/master/src/VXPay.js)`>` | Open user account settings |
| `VXPay.openAVS` | `<none>` | `Promise<`[VXPay](https://github.com/VISIT-X/vxpay-js/blob/master/src/VXPay.js)`>` | Open age verification UI |
| `VXPay.openPromoCode` | `<none>` | `Promise<`[VXPay](https://github.com/VISIT-X/vxpay-js/blob/master/src/VXPay.js)`>` | Open _Enter promo code_ UI |
| `VXPay.openScratchCard` | `<none>` | `Promise<`[VXPay](https://github.com/VISIT-X/vxpay-js/blob/master/src/VXPay.js)`>` | Open _Enter scratch card code_ UI |
| `VXPay.openOneClick` | `<none>` | `Promise<`[VXPay](https://github.com/VISIT-X/vxpay-js/blob/master/src/VXPay.js)`>` | Open quick payment UI |
| `VXPay.openAutoReCharge` | `<none>` | `Promise<`[VXPay](https://github.com/VISIT-X/vxpay-js/blob/master/src/VXPay.js)`>` | Open auto-recharge UI |
| `VXPay.openBalance` | `<none>` | `Promise<`[VXPay](https://github.com/VISIT-X/vxpay-js/blob/master/src/VXPay.js)`>` | Open _Pay open balance_ UI |
| `VXPay.hooks` | `<none>` | [VXPayPaymentHooksConfig](https://github.com/VISIT-X/vxpay-js/blob/master/src/VXPay/Config/VXPayPaymentHooksConfig.js) | See [hooks section](https://github.com/VISIT-X/vxpay-js/wiki/02---Hooks) |A