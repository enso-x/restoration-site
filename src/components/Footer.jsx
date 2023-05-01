import { CONTACTS_MODAL_KEY } from '@/components/modals/Contacts';

export default function Footer() {
	return (
		<footer className="footer">
			<div className="footer__logo">
				<div className="logo">
					<img src="/images/logo.svg" alt="Error"/>
				</div>
			</div>
			<div className="footer__contacts">
				<div className="footer__contacts-info">
					<div className="footer__contacts-item">
						<span>Telegram</span>
						<a href="http://t.me/pictura_moscow">http://t.me/pictura_moscow</a>
					</div>
					<div className="footer__contacts-item">
						<span>Контакты</span>
						<a href="tel:+79774070396">+7 (977) 407 03 96</a>
					</div>
				</div>
				<div className="footer__contacts-feedback">
					<button className="btn" data-modal-open={ CONTACTS_MODAL_KEY }>Связаться с нами</button>
				</div>
			</div>
			<div className="footer__info">
				<div className="footer__info-blocks">
					<div className="footer__info-block">
						<span>Режим работы :</span>
						<p>Понедельник - Пятница</p>
						<span>09:00 - 18:00</span>
					</div>
					<div className="footer__info-block">
						<span>Регион:</span>
						<div>
							<p>Москва</p>
							<p>Московская обл.</p>
						</div>
					</div>
				</div>
				<div className="footer__info-address">
					<span>
						© 2019-2023 Реставрация мебели г. Москва.
					</span>
				</div>
			</div>
		</footer>
	);
};
