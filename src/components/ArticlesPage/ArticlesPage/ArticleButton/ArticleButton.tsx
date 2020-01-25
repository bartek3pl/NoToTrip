import React from 'react';
import { Link } from 'react-scroll';
import './ArticleButton.scss';

const ArticleButton = () => {
  return (
    <Link
      to="navbar-top"
      smooth={true}
      spy={true}
      aria-label="Przejdź do początku artykułu"
    >
      <div className="icon-angle-right-up-wrapper">
        <i className="icon-angle-right up" />
      </div>
    </Link>
  );
};

export default ArticleButton;
