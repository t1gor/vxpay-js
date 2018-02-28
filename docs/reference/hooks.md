All hooks are basically injectable functions. You can have several handlers on the same event by just assigning more then one handler for event. See examples below.

### `onAny`

Will be triggered on any postMessage send/received with PaymentFrame.

```javascript
/** @param {VXPayMessage} msg */
vxpay.hooks.onAny(function(msg) {/* do something */});
```

### `onLoad`

Will be triggered when DOM triggers the onLoad handler on iframe HTML element.

```javascript
/** @note no parameter injected! */
vxpay.hooks.onLoad(function() {/* do something */});
```

### `onContentLoaded`

Will be triggered when PaymentFrame reports `DOMContentLoaded`.

```javascript
/** 
 * @param {VXPayContentLoadedMessage} msg
 * @link https://github.com/VISIT-X/vxpay-js/blob/master/src/VXPay/Message/VXPayContentLoadedMessage.js
 */
vxpay.hooks.onContentLoaded(function(msg) {/* do something */});
```

### `onViewReady`

Will be triggered when PaymentFrame reports the UI to be ready.

```javascript
/** 
 * @param {VXPayViewReadyMessage} msg 
 * @link https://github.com/VISIT-X/vxpay-js/blob/master/src/VXPay/Message/VXPayViewReadyMessage.js
 */
vxpay.hooks.onViewReady(function(msg) {/* do something */});
```

### `onBeforeSend`

Will be triggered before the `postMessage` is being sent to PaymentFrame.

```javascript
/** @param {VXPayMessage} msg */
vxpay.hooks.onBeforeSend(function(msg) {/* do something */});
```

### `onClose`

Will be triggered when the PaymentFrame is closed by user.

```javascript
/** 
 * @param {VXPayIframeCloseMessage} msg
 * @link https://github.com/VISIT-X/vxpay-js/blob/master/src/VXPay/Message/VXPayIframeCloseMessage.js
 */
vxpay.hooks.onClose(function(msg) {/* do something */});
```

### `onSuccess`

Will be triggered when user processed the payment successfully.

```javascript
/**
 * @param {VXPaySuccessMessage} msg
 * @link https://github.com/VISIT-X/vxpay-js/blob/master/src/VXPay/Message/VXPaySuccessMessage.js
 */
vxpay.hooks.onSuccess(function(msg) {/* do something */});
```

### `onLogin`

Will be triggered when user loggs in successfully.

```javascript
/**
 * @param {VXPayLoggedInMessage} msg
 * @link https://github.com/VISIT-X/vxpay-js/blob/master/src/VXPay/Message/Hooks/VXPayLoggedInMessage.js
 */
vxpay.hooks.onLogin(function(msg) {/* do something */});
```

### `onLogout`

Will be triggered when user loggs out successfully.

```javascript
/**
 * @param {VXPayLoggedOutMessage} msg
 * @link https://github.com/VISIT-X/vxpay-js/blob/master/src/VXPay/Message/VXPayLoggedOutMessage.js
 */
vxpay.hooks.onLogout(function(msg) {/* do something */});
```

### `onFlowChange`

Will be triggered when the VXPay UI flow is being changed. Usually happens when some `openBlah` functions are triggered, e.g. `openLogin` or `openVoiceCall`, etc.

```javascript
/**
 * @param {VXPayFlowChangedHookMessage} msg
 * @link https://github.com/VISIT-X/vxpay-js/blob/master/src/VXPay/Message/Hooks/VXPayFlowChangedMessage.js
 */
vxpay.hooks.onFlowChange(function(msg) {/* do something */});
```

### `onIsLoggedIn`

Will be triggered when the response from `isLoggedIn` action is received from VXPay UI.

```javascript
/**
 * @param {VXPayIsLoggedInResponseMessage} msg
 * @link https://github.com/VISIT-X/vxpay-js/blob/master/src/VXPay/Message/VXPayIsLoggedInResponseMessage.js
 */
vxpay.hooks.onIsLoggedIn(function(msg) {/* do something */});
```

### `onTransferToken`
### `onAVSStatus`
### `onBalance`
### `onActiveAbos`