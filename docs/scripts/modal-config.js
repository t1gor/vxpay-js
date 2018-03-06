document.addEventListener('DOMContentLoaded', function() {
	// on login
	document.getElementById('modal-login').addEventListener('change', function() {
		vxpay.config.modalConfig.login = this.checked ? VX.VXPayModalConfig.YES : VX.VXPayModalConfig.NO;
	});
	document.getElementById('modal-showHeader').addEventListener('change', function() {
		vxpay.config.modalConfig.showHeader = this.checked ? VX.VXPayModalConfig.YES : VX.VXPayModalConfig.NO;
	});
	document.getElementById('modal-showTeaser').addEventListener('change', function() {
		vxpay.config.modalConfig.showTeaser = this.checked ? VX.VXPayModalConfig.YES : VX.VXPayModalConfig.NO;
	});
	document.getElementById('modal-showFooter').addEventListener('change', function() {
		config.modalConfig.showFooter = this.checked ? VX.VXPayModalConfig.YES : VX.VXPayModalConfig.NO;
	});
	document.getElementById('modal-showOAuth').addEventListener('change', function() {
		vxpay.config.modalConfig.showOAuth = this.checked ? VX.VXPayModalConfig.YES : VX.VXPayModalConfig.NO;
	});
	document.getElementById('modal-showNL').addEventListener('change', function() {
		vxpay.config.modalConfig.showNL = this.checked ? VX.VXPayModalConfig.YES : VX.VXPayModalConfig.NO;
	});
	document.getElementById('modal-neutralHeader').addEventListener('change', function() {
		vxpay.config.modalConfig.neutralHeader = this.checked ? VX.VXPayModalConfig.YES : VX.VXPayModalConfig.NO;
	});
	document.getElementById('modal-teaserBonus').addEventListener('change', function() {
		vxpay.config.modalConfig.teaserBonus = this.checked ? VX.VXPayModalConfig.YES : VX.VXPayModalConfig.NO;
	});
	document.getElementById('modal-showThank').addEventListener('change', function() {
		vxpay.config.modalConfig.showThank = this.checked ? VX.VXPayModalConfig.YES : VX.VXPayModalConfig.NO;
	});
	document.getElementById('modal-showLogo').addEventListener('change', function() {
		vxpay.config.modalConfig.showLogo = this.checked ? VX.VXPayModalConfig.YES : VX.VXPayModalConfig.NO;
	});
	document.getElementById('modal-showTeaserBar').addEventListener('change', function() {
		vxpay.config.modalConfig.showTeaserBar = this.checked ? VX.VXPayModalConfig.YES : VX.VXPayModalConfig.NO;
	});
	document.getElementById('modal-support').addEventListener('change', function() {
		vxpay.config.modalConfig.support = this.checked ? VX.VXPayModalConfig.YES : VX.VXPayModalConfig.NO;
	});
});

var modalConfigEnableAll = function() {
	document
		.querySelectorAll('#modal-config input')
		.forEach(function(el) {
			el.removeAttribute('disabled');
		})
}

var modalConfigDisableAll = function() {
	document
		.querySelectorAll('#modal-config input')
		.forEach(function(el) {
			el.setAttribute('disabled', 'disabled');
		})
}

/**
 * @param {VXPayConfig} config
 */
var modalConfigPopulateAllFrom = function(config) {
	document.getElementById('modal-login').checked = config.modalConfig.login;
	document.getElementById('modal-showHeader').checked = config.modalConfig.showHeader;
	document.getElementById('modal-showTeaser').checked = config.modalConfig.showTeaser;
	document.getElementById('modal-showFooter').checked = config.modalConfig.showFooter;
	document.getElementById('modal-showOAuth').checked = config.modalConfig.showOAuth;
	document.getElementById('modal-showNL').checked = config.modalConfig.showNL;
	document.getElementById('modal-support').checked = config.modalConfig.support;
	document.getElementById('modal-neutralHeader').checked = config.modalConfig.neutralHeader;
	document.getElementById('modal-teaserBonus').checked = config.modalConfig.teaserBonus;
	document.getElementById('modal-showThank').checked = config.modalConfig.showThank;
	document.getElementById('modal-showLogo').checked = config.modalConfig.showLogo;
	document.getElementById('modal-showTeaserBar').checked = config.modalConfig.showTeaserBar;
}