import Head from 'next/head';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

import ContactsModal, { CONTACTS_MODAL_KEY } from '@/components/modals/Contacts';

export default function Home({ photos }) {
	return (
		<div className="page-main">
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
				<title>Pictura - Restoration</title>
			</Head>
			<Header>
				<li>
					<a href="/">Главная</a>
				</li>
				<li>
					<a href="/gallery">Наши работы</a>
				</li>
				<li>
					<a href="#services">Услуги</a>
				</li>
			</Header>
			<main>
				<section className="banner">
					<div className="banner__title">
						<h2>Надежная реставрация и покраска различных поверхностей</h2>
						<p>Наша компания предоставляет высококачественные услуги по реставрации и покраске различных
							поверхностей и
							предметов.</p>
						<button className="btn" data-modal-open={ CONTACTS_MODAL_KEY }>Оставить заявку</button>
					</div>
					<div className="banner__img">
						<img src="/images/res.png" alt="Error"/>
					</div>
				</section>
				<section className="quote">
					<img src="/images/quotes.svg" alt="Error"/>
					<h3>"Реставратор обязан быть на высоте требований, предъявляемых к своему искусству самим
						творцом"</h3>
					<span>Лихачев Д.С.</span>
					<p>Советский филолог</p>
				</section>
				<section id="services" className="services">
					<div className="title">
						<h3>Наши услуги</h3>
					</div>
					<div className="cards container">
						<div className="cards__item card">
							<div className="card__content">
								<img src="/images/rest.svg" alt="Error"/>
								<span>Покраска и реставрация</span>
								<ul>
									<li>
										Окрашивание балконных и оконных конструкций
									</li>
									<li>
										Устранение механических повреждений и царапин
									</li>
								</ul>
								<p>От 1 200 руб. / погонный метр</p>
							</div>
						</div>
						<div className="cards__item card">
							<div className="card__content">
								<img src="/images/vost.svg" alt="Error"/>
								<span>Восстановление покрытий</span>
								<ul>
									<li>
										Удаление следов горения восстановление цвета и текстуры
									</li>
									<li>
										*дерево, металл, гранит, керамика*
									</li>
								</ul>
								<p>От 3 000 руб. / квадратный метр</p>
							</div>
						</div>
						<div className="cards__item card">
							<div className="card__content">
								<img src="/images/pog.svg" alt="Error"/>
								<span>Ремонт погонажных изделий</span>
								<ul>
									<li>
										Замена и реставрация изделий из металла, дерева, пвх, шпона, пластика
									</li>
								</ul>
								<p>От 2 000 руб. / погонный метр</p>
							</div>
						</div>
						<div className="cards__item card">
							<div className="card__content">
								<img src="/images/meb.svg" alt="Error"/>
								<span>Реставрация мебели</span>
								<ul>
									<li>
										Удаление сколов и царапин
									</li>
									<li>
										Покраска, восстановление цвета
									</li>
									<li>
										*дерево, металл, гранит, керамика*
									</li>
								</ul>
								<p>Цена: От 3 000 руб. / деталь</p>
							</div>
						</div>
						<div className="cards__item card">
							<div className="card__content">
								<img src="/images/bro.svg" alt="Error"/>
								<span>Устранение повреждений</span>
								<ul>
									<li>
										Воссоздание начального рисунка
									</li>
									<li>
										Новое насыщенное покрытие
									</li>
									<li>
										*дерево, металл, гранит, керамика*
									</li>
								</ul>
								<p>Цена: От 5 000 руб.</p>
							</div>
						</div>
						<div className="cards__item card">
							<div className="card__content">
								<img src="/images/rad.svg" alt="Error"/>
								<span>Декор радиаторов</span>
								<ul>
									<li>
										Покраска отопительных приборов под интерьер
									</li>
									<li>
										Устранение повреждений разборка, сборка, установка
									</li>
								</ul>
								<p>Цена: От 5 000 руб. / поштучно</p>
							</div>
						</div>
					</div>
				</section>
				<section className="work-plan">
					<div className="title">
						<h3>Как мы работаем</h3>
					</div>
					<div className="work-plan__container">
						<div className="work-plan__block">
							<div className="work-plan__block-img">
								<div className="work-plan__block-icon">
									<img src="/images/wp-phone.svg" alt="Error"/>
								</div>
								<div className="work-plan__block-line">
									<img src="/images/l-line.svg" alt="Error"/>
								</div>
							</div>
							<div className="work-plan__block-info">
								<div className="work-plan__block-info-container">
									<span>Вы оставляете заявку на выполнение работ</span>
									<p>в нашем Telegram канале или по номеру телефона. опишите проблему, приложите
										фото</p>
								</div>
							</div>
						</div>
						<div className="work-plan__block right">
							<div className="work-plan__block-info">
								<div className="work-plan__block-info-container">
									<span>Специалист выезжает к вам на объект</span>
									<p>для точного определения задачи мы готовы провести бесплатную диагностику</p>
								</div>
							</div>
							<div className="work-plan__block-img">
								<div className="work-plan__block-line">
									<img src="/images/r-line.svg" alt="Error"/>
								</div>
								<div className="work-plan__block-icon">
									<img src="/images/wp-geo.svg" alt="Error"/>
								</div>
							</div>
						</div>
						<div className="work-plan__block">
							<div className="work-plan__block-img">
								<div className="work-plan__block-icon">
									<img src="/images/wp-contract.svg" alt="Error"/>
								</div>
								<div className="work-plan__block-line">
									<img src="/images/l-line.svg" alt="Error"/>
								</div>
							</div>
							<div className="work-plan__block-info">
								<div className="work-plan__block-info-container">
									<span>Согласовываем задачи, подписываем договор</span>
									<p>договор с гарантией. в приложении указаны производимые работы</p>
								</div>
							</div>
						</div>
						<div className="work-plan__block right last">
							<div className="work-plan__block-info">
								<div className="work-plan__block-info-container">
									<span>Оцениваете и принимаете нашу работу</span>
									<p>вы проверяете результат, и мы подписываем акт выполненных работ. оплата согласно
										договору</p>
								</div>
							</div>
							<div className="work-plan__block-img">
								<div className="work-plan__block-line">
									<img src="/images/r-line.svg" alt="Error"/>
								</div>
								<div className="work-plan__block-icon">
									<img src="/images/wp-estimation.svg" alt="Error"/>
								</div>
							</div>
						</div>
						<div className="work-plan__block-ready">
							<img src="/images/wp-readily.svg" alt="Error"/>
						</div>
					</div>
				</section>
				<section className="advantages">
					<div className="title">
						<h3>Наши преимущества</h3>
					</div>
					<div className="cards container">
						<div className="cards__item card">
							<div className="card__content">
								<img src="/images/rab.svg" alt="Error"/>
								<span>Опытные мастера</span>
								<p>Наша компания имеет опытных и квалифицированных мастеров, которые имеют
									многолетний опыт в
									реставрации различных типов вещей. Они знают, как обращаться с различными
									материалами и
									технологиями, чтобы вернуть вашу вещь к жизни.</p>
							</div>
						</div>
						<div className="cards__item card">
							<div className="card__content">
								<img src="/images/pod.svg" alt="Error"/>
								<span>Индивидуальный подход</span>
								<p>Мы понимаем, что каждая вещь уникальна и требует индивидуального подхода. Мы
									работаем с каждым
									клиентом, чтобы понять его потребности и желания и предложить наиболее
									подходящее решение. Наша
									цель - не только восстановить вашу вещь, но и сделать ее еще более уникальной и
									привлекательной.</p>
							</div>
						</div>
						<div className="cards__item card">
							<div className="card__content">
								<img src="/images/mat.svg" alt="Error"/>
								<span>Качественные материалы</span>
								<p>Мы используем только высококачественные материалы и инструменты для реставрации
									вещей. Мы не
									экономим на материалах и гарантируем, что ваша вещь будет восстановлена с
									использованием лучших
									возможных материалов и технологий. Это позволяет нам не только добиться
									наилучшего результата,
									но и гарантировать долговечность реставрации вашей вещи.</p>
							</div>
						</div>
						<div className="cards__item card">
							<div className="card__content">
								<img src="/images/tim.svg" alt="Error"/>
								<span>Гибкий график работы</span>
								<p>Мы понимаем, что у каждого клиента свои потребности и график работы. Поэтому мы
									предлагаем гибкий
									график работы, чтобы максимально удовлетворить ваши потребности и желания. Мы
									можем работать с
									вами в удобное время, включая вечерние и выходные дни. Наша цель - сделать
									процесс реставрации
									вашей вещи максимально удобным и приятным.</p>
							</div>
						</div>
						<div className="cards__item card">
							<div className="card__content">
								<img src="/images/val.svg" alt="Error"/>
								<span>Профессиональная покраска</span>
								<p>Мы предлагаем профессиональную покраску ваших вещей, которая помогает
									восстановить изначальный
									цвет и текстуру материала. Наши мастера используют только качественные краски и
									материалы, чтобы
									обеспечить максимально реалистичный и долговечный результат. Кроме того, мы
									предлагаем широкий
									выбор цветов и оттенков, чтобы ваша вещь выглядела идеально.</p>
							</div>
						</div>
						<div className="cards__item card">
							<div className="card__content">
								<img src="/images/mon.svg" alt="Error"/>
								<span>Экономия времени и денег</span>
								<p>Реставрация вещей может быть более экономически выгодным решением, чем замена или
									покупка новой
									вещи. Наша компания предлагает доступные цены и оптимизирует процесс
									реставрации, чтобы
									сохранить ваше время и деньги.</p>
							</div>
						</div>
					</div>
				</section>
				<section id="gallery" className="gallery">
					<div className="title">
						<h3>Примеры наших работ</h3>
					</div>
					<div className="gallery__items">
						{
							photos.slice(0, 4).map(photoUrl => (
								<div key={ photoUrl } className="gallery__item">
									<img src={ photoUrl } alt="Photo"/>
								</div>
							))
						}
					</div>
					<div className="gallery__show-all">
						<a href="/gallery">
							<button className="btn">Показать все</button>
						</a>
					</div>
				</section>
			</main>
			<Footer/>
			<section className="modal-container">
				<ContactsModal/>
			</section>
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
