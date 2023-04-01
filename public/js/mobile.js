document.addEventListener('DOMContentLoaded', () => {
	const mobileMenuButton = document.querySelector('.header__mobile-menu-button');
	const mobileMenuContainer = document.querySelector('.header__content');

	mobileMenuButton.addEventListener('click', () => {
		mobileMenuContainer.classList.toggle('header__content:active');
	});
});
