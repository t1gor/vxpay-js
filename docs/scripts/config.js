document.addEventListener('DOMContentLoaded', function() {
	// on enable tab
	document.getElementById('use-tab').addEventListener('change', function() {
		vxpay.config.enableTab = this.checked;
	});
	// on language
	document.getElementById('language').addEventListener('change', function(e) {
		vxpay.config.language = e.target.value;
	});
	// on env
	document.getElementById('env').addEventListener('change', function(e) {
		vxpay.config.env = e.target.value;
	});
	// on pfm
	document.getElementById('pfm').addEventListener('change', function(e) {
		vxpay.config.pfm = e.target.value;
	});
	// on host
	document.getElementById('host').addEventListener('change', function(e) {
		vxpay.config.host = e.target.value;
	});
});

var configEnableAll = function() {
	document
		.querySelectorAll('#primary-config input, #primary-config select')
		.forEach(function(el) {
			el.removeAttribute('disabled');
		})
}

var configDisableAll = function() {
	document
		.querySelectorAll('#primary-config input, #primary-config select')
		.forEach(function(el) {
			el.setAttribute('disabled', 'disabled');
		})
}

/**
 * @param {VXPayConfig} config
 */
var configPopulateAllFrom = function(config) {
	document.getElementById('use-tab').checked = config.enableTab;
	document.querySelector('#language option[value="' + config.language + '"]').setAttribute('selected', 'selected');
	document.querySelector('#env option[value="' + config.env + '"]').setAttribute('selected', 'selected');
	document.getElementById('pfm').value = config.pfm;
	document.getElementById('abg-url').value = config.abgUrl;
	document.getElementById('privacy-url').value = config.privacyUrl;
	document.getElementById('host').value = config.host;
	document.getElementById('wmid').value = config.wmId;
	document.getElementById('token').value = config.token;
	document.getElementById('promoCode').value = config.promoCode;
	document.getElementById('wmSubRef').value = config.wmSubRef;
	document.getElementById('wmToken').value = config.wmToken;
	document.getElementById('adtv').value = config.adtv;
	document.getElementById('ruri').value = config.ruri;
	document.getElementById('suri').value = config.suri;
	document.getElementById('purl').value = config.purl;
}