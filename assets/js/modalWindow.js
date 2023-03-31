document.addEventListener('DOMContentLoaded', () => {
	const openButtons = document.querySelectorAll('[data-modal-open]');
	const closeButtons = document.querySelectorAll('[data-modal-close]');
	const modals = document.querySelectorAll('[data-modal]');

	const showModal = (modal) => {
		modal.style.display = 'flex';
		setTimeout(() => {
			modal.style.opacity = '1';
		}, 0);
	};

	const closeModal = (modal) => {
		modal.style.opacity = '0';
		setTimeout(() => {
			modal.style.display = 'none';
		}, 200);
	};

	openButtons.forEach(button => {
		button.addEventListener('click', (e) => {
			const modalName = e.currentTarget.getAttribute('data-modal-open');
			modals.forEach(modal => {
				if (modal.getAttribute('data-modal') === modalName) {
					showModal(modal);
				}
			});
		});
	});

	closeButtons.forEach(button => {
		button.addEventListener('click', (e) => {
			const modalName = e.currentTarget.getAttribute('data-modal-close');
			modals.forEach(modal => {
				if (modal.getAttribute('data-modal') === modalName) {
					closeModal(modal);
				}
			});
		});
	});
});
