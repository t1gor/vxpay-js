# Visit-X payment SDK

VXPay-js is an SDK for integrating the Visit-X payment/funnel for 3rd party code.

[DEMO](https://visit-x.github.io/vxpay-js/demo.html)

## Installation

SDK is available for installation via npm/yarn:

```bash
## using yarn:
yarn add git+https://github.com/VISIT-X/vxpay-js.git
## or with npm:
npm install --save git+https://github.com/VISIT-X/vxpay-js.git
```

## Including in your bundle (single-page-apps example)

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
<script type="text/javascript" src="vxpay.min.js" async onload="__init()"></script>
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

More information on the vxpay-js:
1. [Public API description](https://github.com/VISIT-X/vxpay-js/wiki/01-Public-API)
1. [Hooks definitions & explanation](https://github.com/VISIT-X/vxpay-js/wiki/02---Hooks)
1. [Frame messages reference](https://github.com/VISIT-X/vxpay-js/wiki/04-Messages-reference)

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
| `support` | `VXPayModalConfig.YES` | Should the support chat button be shown |
| `showOAuth` | `VXPayModalConfig.YES` | If oAuth should be shown/used |
| `showNL` | `VXPayModalConfig.YES` | @todo |
| `neutralHeader` | `VXPayModalConfig.NO` | If the header should be FSK-neutral |
| `teaserBonus` | `VXPayModalConfig.NO` | @todo |
| `showThank` | `VXPayModalConfig.NO` | @todo |
| `showLogo` | `VXPayModalConfig.NO` | Specifies if VX logo should be shown |
| `showTeaserBar` | `VXPayModalConfig.NO` | @todo |
