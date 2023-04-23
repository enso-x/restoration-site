import Head from 'next/head';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

import ContactsModal from '@/components/modals/Contacts';
import ImagePreviewModal, { IMAGE_PREVIEW_MODAL_KEY } from '@/components/modals/ImagePreview';

export default function Gallery({ photos }) {
	return (
		<div className="page-gallery">
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
					<div className="title">
						<h3>Галерея</h3>
					</div>
					<div className="gallery-main__container">
						{
							photos.map(photoUrl => (
								<div key={ photoUrl } className="gallery-main__item" data-modal-open={ IMAGE_PREVIEW_MODAL_KEY }>
									<img src={ photoUrl } alt="Photo"/>
								</div>
							))
						}
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

export const getServerSideProps = async (context) => {
	const proto = context.req.headers['x-forwarded-proto'] ? 'https' : 'http';
	const photos = await fetch(`${ proto }://${ context.req.headers.host }/api/getPhotos`).then(res => res.json());

	return ({
		props: {
			photos
		}
	});
};
