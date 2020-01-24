import React, { FunctionComponent } from 'react';
import { Accordion } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { Link as ReachLink } from '@reach/router';
import TripsList from '../TripsList';
import './NavbarMobile.scss';

interface IProps {
  handleMobileMenu: () => void;
}

const NavbarMobile: FunctionComponent<IProps> = ({ handleMobileMenu }) => {
  return (
    <div className="nav-opened-bg w-100">
      <div className="nav-opened-overlay">
        <ul className="navbar-mobile">
          <ReachLink to="/" aria-label="Strona główna">
            <li onClick={() => handleMobileMenu()}>Strona główna</li>
          </ReachLink>
          <li className="mobile-trips-ul" aria-label="Podróże">
            <Accordion defaultActiveKey="1">
              <Accordion.Toggle eventKey="0" className="accordion-button">
                Podróże
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <TripsList
                  trips="mobile-trips-li"
                  handleMobileMenu={handleMobileMenu}
                />
              </Accordion.Collapse>
            </Accordion>
          </li>
          <Link
            className="navbar-li"
            to="najnowsze-artykuly"
            spy={true}
            smooth={true}
            aria-label="Przejdź do sekcji najnowsze artykuły"
          >
            <ReachLink to="/">
              <li onClick={() => handleMobileMenu()}>Najnowsze artykuły</li>
            </ReachLink>
          </Link>
          <Link
            className="navbar-li"
            to="autorzy"
            spy={true}
            smooth={true}
            aria-label="Przejdź do sekcji autorzy"
          >
            <ReachLink to="/">
              <li onClick={() => handleMobileMenu()}>Autorzy</li>
            </ReachLink>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default NavbarMobile;
