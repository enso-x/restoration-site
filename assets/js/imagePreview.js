document.addEventListener('DOMContentLoaded', () => {
	const imgs = document.querySelectorAll('.gallery-main__item');
	const modalContent = document.querySelector('.modal\\:image');
	const modalImg = modalContent.querySelector('#img01');

	imgs.forEach(img => {
		img.addEventListener('click', (e) => {
			const imgSrc = e.currentTarget.querySelector('img').src;
			modalImg.src = imgSrc;
		});
	});
});
