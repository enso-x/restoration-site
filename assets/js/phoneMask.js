const phoneInput = document.querySelector('input[name="mobile"]');
Inputmask({
	mask: '+7 (999) 999-99-99',
	showMaskOnHover: false,
}).mask(phoneInput);
