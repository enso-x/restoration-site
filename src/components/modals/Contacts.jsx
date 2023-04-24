export const CONTACTS_MODAL_KEY = 'feedback';

export default function ContactsModal() {
	return (
		<div className="modal-background" data-modal={ CONTACTS_MODAL_KEY }>
			<form className="modal" id="contact-form">
				<button className="modal__close" data-modal-close={ CONTACTS_MODAL_KEY }>
					<img src="/images/close.svg" alt="Close icon"/>
				</button>
				<div className="modal__content-block gap:xs">
					<img src="/images/logo.svg" style={{
						marginBottom: '20px'
					}} alt="Error"/>
					<h3>Свяжитесь с нами</h3>
					<p>Заполните форму или позвоните по телефону на сайте</p>
				</div>
				<div className="modal__content-block">
					<input name="name" type="text" placeholder="Имя*"/>
					<input name="mobile" type="text" placeholder="Телефон*"/>
					<textarea name="comment" placeholder="Комментарий"></textarea>
					<input name="photo" type="file"/>
				</div>
				<button type="button" className="btn" id="send-button">Оставить заявку</button>
				<span className="modal__terms">Нажимая на кнопку вы даёте согласие на обработку персональных данных и соглашаетесь с политикой конфиденциальности</span>
			</form>
		</div>
	);
};
