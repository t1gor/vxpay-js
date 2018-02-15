# Visit-X payment SDK


## Installation

@todo

## Testing

```bash
yarn test
```

## Including in your bundle (single-page-apps example)

@todo missing step here - install via npm.
After the installation, just include the code in your app's code as usual:

```javascript
// load the lib
import { VXPay, VXPayConfig } from 'vxpay';

// apply config options
const config = new VXPayConfig();

// init the payment wrapper
const vxpay = new VXPay(config);

// open the login screen
vxpay.openLogin();
```
## Example integration

- Include the script with the load handler

```html
<script type="text/javascript" src="build/vxpay.min.js" async onload="__init()"></script>
```
- In the `__init()` function, you'll have access to exported objects:

```javascript
// build the config to init the payment frame
const config = new VX.VXPayConfig();
	  config.logging = true;
	  config.language = VX.VXPayLanguage.EN;
	  /** see below for the full list of config options */

// pass the config to the payment frame
vxpay = new VX.VXPay(config);
```

Please refer to [example folder](example/index.html) for fully featured example.

## Public API

| Method | Arguments | Return value | Additional info |
| ------ | --------- | ------------ | --------------- |
| `VXPay.openLogin` | `<none>` | `void` | Opens the paytour with login flow |
| `VXPay.openSignup` | `<none>` | `void` | Opens the paytour with registration flow |
| `VXPay.openSignupOrLogin` | `<none>` | `void` | @todo |
| `VXPay.resetPassword` | `<none>` | `void` | @todo |
| `VXPay.lostPassword` | `<none>` | `void` | @todo |
| `VXPay.openPayment` | `<none>` | `void` | @todo |
| `VXPay.limitPayment` | `<none>` | `void` | @todo |
| `VXPay.changeCard` | `<none>` | `void` | @todo |
| `VXPay.vipAbo` | `<none>` | `void` | @todo |
| `VXPay.vipAboTrial` | `<none>` | `void` | @todo |
| `VXPay.premiumAbo` | `<none>` | `void` | @todo |
| `VXPay.openSettings` | `<none>` | `void` | @todo |
| `VXPay.openAVS` | `<none>` | `void` | @todo |
| `VXPay.openPromoCode` | `<none>` | `void` | @todo |
| `VXPay.openScratchCard` | `<none>` | `void` | @todo |
| `VXPay.openOneClick` | `<none>` | `void` | @todo |
| `VXPay.openAutoReCharge` | `<none>` | `void` | @todo |
| `VXPay.openBalance` | `<none>` | `void` | @todo |
| `VXPay.hooks` | `<none>` | [VXPayPaymentHooksConfig](src/VXPay/Config/VXPayPaymentHooksConfig.js) | See hooks (@todo) |

## Hooks

All hooks are basically injectable functions. You can have several handlers on the same event by just assigning more then one handler for event. See examples below.

##### `onAny`

Will be triggered on any postMessage send/received with PaymentFrame.

```javascript
/** @param {VXPayMessage} msg */
vxpay.hooks.onAny(function(msg) {/* do something */});
```

##### `onLoad`

Will be triggered when DOM triggers the onLoad handler on iframe HTML element.

```javascript
/** @note no parameter injected! */
vxpay.hooks.onLoad(function() {/* do something */});
```

##### `onContentLoaded`

Will be triggered when PaymentFrame reports `DOMContentLoaded`.

```javascript
/** @param {VXPayContentLoadedMessage} msg */
vxpay.hooks.onContentLoaded(function(msg) {/* do something */});
```

##### `onViewReady`

Will be triggered when PaymentFrame reports the UI to be ready.

```javascript
/** @param {VXPayViewReadyMessage} msg */
vxpay.hooks.onViewReady(function(msg) {/* do something */});
```

##### `onBeforeSend`

Will be triggered before the `postMessage` is being sent to PaymentFrame.

```javascript
/** @param {VXPayMessage} msg */
vxpay.hooks.onBeforeSend(function(msg) {/* do something */});
```

##### `onClose`

Will be triggered when the PaymentFrame is closed by user.

```javascript
/** @param {VXPayMessage} msg */
vxpay.hooks.onClose(function(msg) {/* do something */});
```

##### `onSuccess`

Will be triggered when user processed the payment successfully.

```javascript
/** @param {VXPayMessage} msg */
vxpay.hooks.onSuccess(function(msg) {/* do something */});
```

## Configuration options references

### Post message events reference

| Name | Class | Additional info |
| ---- | ---- | ---------------- |
| `VXPayMessage.TYPE_HAS_LOGIN_COOKIE` | [VXPayHasSessionCookieMessage](src/VXPay/Message/VXPayHasSessionCookieMessage.js) | |
| `VXPayMessage.TYPE_INIT_SESSION` | [VXPayInitSessionMessage](src/VXPay/Message/VXPayInitSessionMessage.js) | |
| `VXPayMessage.TYPE_UPDATE_PARAMS` | [VXPayUpdateParamsMessage](src/VXPay/Message/VXPayUpdateParamsMessage.js) | |
| `VXPayMessage.TYPE_IS_VISIBLE` | [VXPayIsVisibleMessage](src/VXPay/Message/VXPayIsVisibleMessage.js) | |
| `VXPayMessage.TYPE_ADDITIONAL_INFO` |  | |
| `VXPayMessage.TYPE_CHANGE_ROUTE` | [VXPayChangeRouteMessage](src/VXPay/Message/VXPayChangeRouteMessage.js) | |
| `VXPayMessage.TYPE_ACTION_GET_ACTIVE_ABOS` |  | |
| `VXPayMessage.TYPE_ACTION_LOGOUT` |  | |
| `VXPayMessage.TYPE_ACTION_GET_AVS_STATUS` |  | |

### Config options reference

| Name | Type | Sample values or constants | Additional info |
| ---- | ------------ | ----- | --------------- |
| `logging` | `{Boolean}` | `true` or `false` | If the script should log actions, requests, responses, etc. |
| `language` | `{String}` | `VXPayLanguage.DE`, `VXPayLanguage.EN`, `VXPayLanguage.NL` | Localization of the UI. |
| `env` | `{String}` | `VXPayEnvironment.DEVELOPMENT`, `VXPayEnvironment.STAGING`, `VXPayEnvironment.PRODUCTION` | Current script environment. |
| `abgUrl` | `{String}` | `<valid URL string>` | Url to the agb page |
| `pfm` | `{Number}` | `<Integer>` | Target platform, ask your sales contact |
| `host` | `{Number}` | `<Integer>` | VX hostId, which is used to find a proper teaser |
| `wmId` | `{Number}` | `<Integer>` | Affiliate id, ask your sales contact |
| `token` | `{String}` | `TT_e42fb06d-dab4-4866-891c-cfea6b3c84fe` | Access Token - token from VXPay Api to be injected to PayTour |
| `promoCode` | `{String}` | `vip18superdeal` | Promocode with bonus to be granted after payment |

### [ModalConfig](src/VXPay/Config/VXPayModalConfig.js) reference

| Name | Default value | Explanation |
| ---- | ---- | --------------- |
| `login` | `VXPayModalConfig.YES` | @todo |
| `showHeader` | `VXPayModalConfig.YES` | Specifies if header should be shown | 
| `showTeaser` | `VXPayModalConfig.YES` | Specifies if the teaser should be shown |
| `showFooter` | `VXPayModalConfig.YES` | Specifies if the footer should be shown |
| `support` | `VXPayModalConfig.YES` | @todo |
| `showOAuth` | `VXPayModalConfig.YES` | @todo |
| `showNL` | `VXPayModalConfig.YES` | @todo |
| `neutralHeader` | `VXPayModalConfig.NO` | @todo |
| `teaserBonus` | `VXPayModalConfig.NO` | @todo |
| `showThank` | `VXPayModalConfig.NO` | @todo |
| `showLogo` | `VXPayModalConfig.NO` | Specifies if VX logo should be shown |
| `showTeaserBar` | `VXPayModalConfig.NO` | @todo |

### [HooksConfig](src/VXPay/Config/VXPayPaymentHooksConfig.js) reference

**NOTE:** where possible, the message object will be injected into the handler as the first parameter.

| Name | Explanation |
| ---- | --------------- |
| `onAny` | Will be triggered on **any** received postMessage from the payment frame. | 
| `onBeforeSend` | Will be triggered __before__ sending any postMessage to payment frame |
| `onLoad` | Will be triggered on the payment frame HTMLElement load |
| `onContentLoaded` | Will be triggered when the payment frame sends the [VXPayContentLoadedMessage](src/VXPay/Message/VXPayContentLoadedMessage.js) |
| `onViewReady` | Will be triggered when the payment frame sends the [VXPayViewReadyMessage](src/VXPay/Message/VXPayViewReadyMessage.js) |
