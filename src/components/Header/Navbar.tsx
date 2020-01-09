import React, { FunctionComponent } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { Link as ReachLink } from '@reach/router';
import logoMin from '../../assets/images/logo-min.png';
import TripsList from './TripsList';
import NavbarMobile from './NavbarMobile';
import './Navbar.scss';

function handleTripsList(action: string): void {
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

function handleMobileMenu(): void {
  const home = document.querySelector('#home');
  if (home) {
    home.classList.toggle('nav-opened');
  }
}

function closeMobileMenu(): void {
  const home = document.querySelector('#home');
  if (home) {
    home.classList.remove('nav-opened');
  }
}

const Navbar: FunctionComponent = () => {
  return (
    <Container className="container-wrapper container-wrapper-navbar">
      <span role="img" className="entry-page-header" />
      <Row className="justify-content-md-center animated fadeInDown">
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
                onClick={(): void => handleMobileMenu()}
              />

              <i
                className="icon-cancel"
                id="menu-cancel"
                aria-label="Anuluj"
                onClick={(): void => handleMobileMenu()}
              />
            </div>
          </div>
        </Col>

        <NavbarMobile handleMobileMenu={handleMobileMenu} />

        <Col md={8} id="main-menu">
          <nav className="navbar">
            <ul className="navbar-brand">
              <ReachLink
                className="navbar-li"
                to="/"
                aria-label="Strona główna"
              >
                <li>Strona główna</li>
              </ReachLink>
              <li
                className="navbar-li"
                aria-label="Przejdź do sekcji podróże"
                tabIndex={0}
                onMouseEnter={(): void => handleTripsList('show')}
                onFocus={(): void => handleTripsList('show')}
                onMouseLeave={(): void => handleTripsList('hide')}
                onBlur={(): void => handleTripsList('hide')}
              >
                <li className="trips-list-wrapper">
                  Podróże
                  <i className="icon-angle-right" aria-hidden="true" />
                  <TripsList
                    trips="trips-li"
                    handleMobileMenu={handleMobileMenu}
                  />
                </li>
              </li>
              <Link
                className="navbar-li"
                to="najnowsze-artykuly"
                spy={true}
                smooth={true}
                aria-label="Przejdź do sekcji najnowsze artykuły"
              >
                <ReachLink to="/">
                  <li>Najnowsze artykuły</li>
                </ReachLink>
              </Link>
              <Link
                className="navbar-li"
                style={{ display: 'none' }}
                to="autorzy"
                spy={true}
                smooth={true}
                aria-label="Przejdź do sekcji autorzy"
              ></Link>
              <Link
                className="navbar-li"
                to="autorzy"
                spy={true}
                smooth={true}
                aria-label="Przejdź do sekcji autorzy"
              >
                <ReachLink to="/">
                  <li>Autorzy</li>
                </ReachLink>
              </Link>
            </ul>
          </nav>
        </Col>
      </Row>
    </Container>
  );
};

export default Navbar;
