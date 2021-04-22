import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { Dropdown } from 'react-bootstrap';
import './header.css'

function Header() {
	const { i18n, t } = useTranslation();

	function changeLanguage(language = 'en') {
    i18n.changeLanguage(language);

		if(language === 'en') {
			localStorage.setItem('lang', 'en');
		} else {
			localStorage.setItem('lang', 'ru');
		}
  };
	
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link to="/">HOME</Link>
						</li>
						<li className="nav-item">
							<Link to="/about">About</Link>
						</li>
						<li className="nav-item">
							<Link to="/products">Products</Link>
						</li>
						<li className="nav-item">
							<Link to="/not-found">Auth</Link>
						</li>
					</ul>
					<div className="cart-count">
						<div className="d-flex flex-wrap">
							<Dropdown className="mr-4">
								<Dropdown.Toggle variant="success" id="dropdown-basic">
									{ t('key') }
								</Dropdown.Toggle>

								<Dropdown.Menu>
									<Dropdown.Item onClick={() => changeLanguage("en")}>English</Dropdown.Item>
									<Dropdown.Item onClick={() => changeLanguage("ru")}>Русский</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
							<div className="vertical-center">
								{ t('in_basket') } 0
							</div>
						</div>
					</div>
				</div>
			</nav>
		</>
	)
}
export default Header
