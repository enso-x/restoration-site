import Head from 'next/head';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

import ContactsModal from '@/components/modals/Contacts';
import ImagePreviewModal, { IMAGE_PREVIEW_MODAL_KEY } from '@/components/modals/ImagePreview';

export default function Gallery() {
	return (
		<div className="page-main">
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
				<title>Pictura - Restoration gallery</title>
			</Head>
			<Header>
				<li>
					<a href="/">Главная</a>
				</li>
			</Header>
			<main>
				<section className="gallery-main">
					<div className="block-title">
						<h3>Галерея</h3>
					</div>
					<div className="gallery-main__container">
						<div className="gallery-main__item" data-modal-open={ IMAGE_PREVIEW_MODAL_KEY }>
							<img src="/images/gallery/gallery.jpg"/>
							<div className="gallery-main__description">
								<span>Загаловок</span>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur deserunt,
									ducimus eligendi
									ipsam laboriosam libero magni nisi non qui tempora! A architecto assumenda atque
									esse eveniet,
									harum hic itaque iure laboriosam magnam molestiae natus nesciunt officia, quae
									qui reiciendis,
									sint.</p>
							</div>
						</div>
						<div className="gallery-main__item" data-modal-open={ IMAGE_PREVIEW_MODAL_KEY }>
							<img src="/images/gallery/gallery2.webp"/>
							<div className="gallery-main__description">
								<span>Загаловок</span>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur deserunt,
									ducimus eligendi
									ipsam laboriosam libero magni nisi non qui tempora! A architecto assumenda atque
									esse eveniet,
									harum hic itaque iure laboriosam magnam molestiae natus nesciunt officia, quae
									qui reiciendis,
									sint.</p>
							</div>
						</div>
						<div className="gallery-main__item" data-modal-open={ IMAGE_PREVIEW_MODAL_KEY }>
							<img src="/images/gallery/gallery3.jpg"/>
							<div className="gallery-main__description">
								<span>Загаловок</span>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur deserunt,
									ducimus eligendi
									ipsam laboriosam libero magni nisi non qui tempora! A architecto assumenda atque
									esse eveniet,
									harum hic itaque iure laboriosam magnam molestiae natus nesciunt officia, quae
									qui reiciendis,
									sint.</p>
							</div>
						</div>
						<div className="gallery-main__item" data-modal-open={ IMAGE_PREVIEW_MODAL_KEY }>
							<img src="/images/gallery/gallery4.jpg"/>
							<div className="gallery-main__description">
								<span>Загаловок</span>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur deserunt,
									ducimus eligendi
									ipsam laboriosam libero magni nisi non qui tempora! A architecto assumenda atque
									esse eveniet,
									harum hic itaque iure laboriosam magnam molestiae natus nesciunt officia, quae
									qui reiciendis,
									sint.</p>
							</div>
						</div>
						<div className="gallery-main__item" data-modal-open={ IMAGE_PREVIEW_MODAL_KEY }>
							<img src="/images/gallery/gallery.jpg"/>
							<div className="gallery-main__description">
								<span>Загаловок</span>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur deserunt,
									ducimus eligendi
									ipsam laboriosam libero magni nisi non qui tempora! A architecto assumenda atque
									esse eveniet,
									harum hic itaque iure laboriosam magnam molestiae natus nesciunt officia, quae
									qui reiciendis,
									sint.</p>
							</div>
						</div>
						<div className="gallery-main__item" data-modal-open={ IMAGE_PREVIEW_MODAL_KEY }>
							<img src="/images/gallery/gallery2.webp"/>
							<div className="gallery-main__description">
								<span>Загаловок</span>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur deserunt,
									ducimus eligendi
									ipsam laboriosam libero magni nisi non qui tempora! A architecto assumenda atque
									esse eveniet,
									harum hic itaque iure laboriosam magnam molestiae natus nesciunt officia, quae
									qui reiciendis,
									sint.</p>
							</div>
						</div>
						<div className="gallery-main__item" data-modal-open={ IMAGE_PREVIEW_MODAL_KEY }>
							<img src="/images/gallery/gallery3.jpg"/>
							<div className="gallery-main__description">
								<span>Загаловок</span>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur deserunt,
									ducimus eligendi
									ipsam laboriosam libero magni nisi non qui tempora! A architecto assumenda atque
									esse eveniet,
									harum hic itaque iure laboriosam magnam molestiae natus nesciunt officia, quae
									qui reiciendis,
									sint.</p>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer/>
			<section className="modal-container">
				<ContactsModal/>
				<ImagePreviewModal/>
			</section>
			<script type="text/javascript" src="/js/imagePreview.js"/>
		</div>
	);
}
