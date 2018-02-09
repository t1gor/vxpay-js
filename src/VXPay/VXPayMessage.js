class VXPayMessage {

	/**
	 * @param {String} type
	 */
	constructor(type) {
		this.type = type;
	}

	/**
	 * @return {string}
	 */
	toString() {
		return JSON.stringify(this);
	}

	/**
	 * @return {String[]}
	 */
	static getValidTypes() {
		return [
			VXPayMessage.TYPE_INIT_SESSION,
			VXPayMessage.TYPE_UPDATE_PARAMS,
			VXPayMessage.TYPE_IS_VISIBLE,
			VXPayMessage.TYPE_ADDITIONAL_INFO,
			VXPayMessage.TYPE_CHANGE_ROUTE,
			VXPayMessage.TYPE_ACTION_GET_ACTIVE_ABOS,
			VXPayMessage.TYPE_ACTION_LOGOUT,
			VXPayMessage.TYPE_ACTION_GET_AVS_STATUS
		];
	}
}

VXPayMessage.TYPE_INIT_SESSION           = 'modalbox-init-session';
VXPayMessage.TYPE_UPDATE_PARAMS          = 'modalbox-update-params';
VXPayMessage.TYPE_IS_VISIBLE             = 'modalbox-is-visible';
VXPayMessage.TYPE_ADDITIONAL_INFO        = 'modalbox-additional-info';
VXPayMessage.TYPE_CHANGE_ROUTE           = 'modalbox-change-route';
VXPayMessage.TYPE_ACTION_GET_ACTIVE_ABOS = 'modalbox-action-getactiveabos';
VXPayMessage.TYPE_ACTION_LOGOUT          = 'modalbox-action-logout';
VXPayMessage.TYPE_ACTION_GET_AVS_STATUS  = 'modalbox-action-getavsstatus';

export default VXPayMessage;
