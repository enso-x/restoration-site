import InputMask from "/js/inputmask.es6.js";

const phoneInput = document.querySelector('input[name="mobile"]');
const phoneMask = new InputMask({
	mask: '+7 (999) 999-99-99',
	showMaskOnHover: false,
});
phoneMask.mask(phoneInput);
