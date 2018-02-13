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

| Name | Type | Values | Additional info |
| ---- | ------------ | ----- | --------------- |
| `logging` | `{Boolean}` | `true` or `false` | If the script should log actions, requests, responses, etc. |
| `language` | `{String}` | `VXPayLanguage.DE`, `VXPayLanguage.EN`, `VXPayLanguage.NL` | Localization of the UI. |
| `env` | `{String}` | `VXPayEnvironment.DEVELOPMENT`, `VXPayEnvironment.STAGING`, `VXPayEnvironment.PRODUCTION` | Current script environment. |

### [ModalConfig](src/VXPay/Config/VXPayModalConfig.js) options reference

| Name | Additional info |
| ---- | --------------- |
| `logging` | If the script should log actions, requests, responses, etc. |
| `language` | Localization of the UI. |
| `env` | Current script environment. | 
