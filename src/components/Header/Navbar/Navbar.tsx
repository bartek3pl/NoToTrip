import React, { FunctionComponent } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { Link as ReachLink } from '@reach/router';
import logoMin from '../../../assets/images/logo-min.png';
import TripsList from '../TripsList';
import NavbarMobile from '../NavbarMobile/NavbarMobile';
import './Navbar.scss';

function handleTripsList(action: string) {
  const tripsListWrapper = document.querySelector(
    '.navbar-brand .navbar-li .trips-list-wrapper'
  ) as HTMLElement;

  const tripsList = document.querySelector(
    '.navbar-brand .trips-list'
  ) as HTMLElement;

  if (tripsListWrapper && tripsList) {
    if (action === 'show') {
      tripsListWrapper.style.pointerEvents = 'auto';
      tripsList.style.opacity = '0.95';
    } else if (action === 'hide') {
      tripsListWrapper.style.pointerEvents = 'none';
      tripsList.style.opacity = '0';
    }
  }
}

function handleMobileMenu() {
  const home = document.querySelector('#home');
  if (home) {
    home.classList.toggle('nav-opened');
  }
}

function closeMobileMenu() {
  const home = document.querySelector('#home');
  if (home) {
    home.classList.remove('nav-opened');
  }
}

const Navbar: FunctionComponent = () => {
  return (
    <Container
      className="container-wrapper container-wrapper-navbar"
      id="navbar-top"
    >
      <span role="img" className="entry-page-header" />
      <Row className="justify-content-md-center navbar-row animated fadeInDown">
        <Col lg={4} sm={12}>
          <div className="navbar-flex-wrapper">
            <ReachLink to="/" aria-label="Logo">
              <div className="logo" onClick={(): void => closeMobileMenu()}>
                <img className="logo-img" src={logoMin} alt="Nototrip logo" />
              </div>
            </ReachLink>
            <div id="mobile-main-menu">
              <i
                className="icon-menu"
                aria-label="Menu"
                onClick={() => handleMobileMenu()}
              />

              <i
                className="icon-cancel"
                id="menu-cancel"
                aria-label="Anuluj"
                onClick={() => handleMobileMenu()}
              />
            </div>
          </div>
        </Col>

        <NavbarMobile handleMobileMenu={handleMobileMenu} />

        <Col md={8} id="main-menu">
          <nav className="navbar">
            <ul className="navbar-brand">
              <li className="navbar-li">
                <ReachLink to="/" aria-label="Strona główna">
                  <p className="navbar-li-block">Strona główna</p>
                </ReachLink>
              </li>
              <li
                className="navbar-li"
                aria-label="Przejdź do sekcji podróże"
                tabIndex={0}
                onMouseEnter={() => handleTripsList('show')}
                onFocus={() => handleTripsList('show')}
                onMouseLeave={() => handleTripsList('hide')}
                onBlur={() => handleTripsList('hide')}
              >
                <ul className="trips-list-wrapper">
                  Podróże
                  <i className="icon-angle-right" aria-hidden="true" />
                  <TripsList
                    trips="trips-li"
                    handleMobileMenu={handleMobileMenu}
                  />
                </ul>
              </li>
              <li className="navbar-li">
                <Link
                  to="najnowsze-artykuly"
                  spy={true}
                  smooth={true}
                  aria-label="Przejdź do sekcji najnowsze artykuły"
                >
                  <ReachLink to="/">
                    <p className="navbar-li-block">Najnowsze artykuły</p>
                  </ReachLink>
                </Link>
              </li>
              <li className="navbar-li">
                <Link
                  to="autorzy"
                  spy={true}
                  smooth={true}
                  aria-label="Przejdź do sekcji autorzy"
                >
                  <ReachLink to="/">
                    <p className="navbar-li-block">Autorzy</p>
                  </ReachLink>
                </Link>
              </li>
            </ul>
          </nav>
        </Col>
      </Row>
    </Container>
  );
};

export default Navbar;
