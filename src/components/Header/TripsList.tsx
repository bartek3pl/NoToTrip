import React, { FunctionComponent } from 'react';
import { Link as ReachLink } from '@reach/router';
import { articlesData } from '../../data/ArticlesData';
import { convertToUrl } from '../../utils/jsUtils';
import './Navbar/Navbar.scss';

interface IProps {
  trips: string;
  handleMobileMenu: () => void;
}

const TripsList: FunctionComponent<IProps> = ({ trips, handleMobileMenu }) => {
  const allElements = articlesData.map((element) => (
    <ReachLink
      to={`/${convertToUrl(element.title)}`}
      className={trips}
      key={element.title}
      onClick={() => handleMobileMenu()}
    >
      {element.title}
    </ReachLink>
  ));
  return <ul className="trips-list">{allElements}</ul>;
};

export default TripsList;
