export default function Header({ children }) {
	return (
		<header className="header">
			<div className="header__inner">
				<a href="/" className="logo">
					<img src="/images/logo.svg" alt="Error"/>
					<span>Комфорт</span>
					<span>Эстетика</span>
					<span>Надёжность</span>
				</a>
				<div className="header__content">
					<div className="header__mobile-menu-button">
						<button className="menu-button">
							<span></span>
						</button>
					</div>
					<nav className="nav">
						<ul className="nav__blocks">
							{ children }
						</ul>
					</nav>
					<div className="contact"><a href="tel:+74998421212">+7 (499) 842 12 12</a></div>
				</div>
			</div>
		</header>
	);
};
