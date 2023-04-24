document.addEventListener('DOMContentLoaded', () => {
	const contactForm = document.querySelector('#contact-form');

	if (!contactForm) {
		return;
	}

	const sendButton = contactForm.querySelector('#send-button');
	const closeButton = contactForm.querySelector('[data-modal-close]');

	sendButton.addEventListener('click', async () => {
		const formData = new FormData(contactForm);

		const result = await fetch('/api/contact', {
			method: 'POST',
			body: formData
		});

		if (result.ok) {
			closeButton.dispatchEvent(new Event('click'));
		}
	});
});