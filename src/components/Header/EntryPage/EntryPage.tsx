import React, { useState, FunctionComponent } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { Link } from 'react-scroll';
import './EntryPage.scss';

const EntryPage: FunctionComponent = () => {
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  const getEntryPageSection = () =>
    document.querySelector('.entry-page') as HTMLElement;

  const hideLayer = () => {
    const entryPage = getEntryPageSection();
    entryPage.style.zIndex = '0';
  };

  const showLayer = () => {
    const entryPage = getEntryPageSection();
    entryPage.style.zIndex = '1';
  };

  useScrollPosition(({ currPos }) => {
    const entryPage = getEntryPageSection();
    const entryPageHeight = entryPage.getBoundingClientRect().height;
    const minScrollPosition = -entryPageHeight;
    const currentPathName = window.location.pathname;

    if (currentPathName === '/') {
      if (currPos.y < minScrollPosition) {
        hideLayer();
      } else {
        showLayer();
      }
    }
  });

  return (
    <div className="entry-content">
      <h1 className="welcome animated fadeIn slow" id="welcome-1">
        Witaj przybyszu!
      </h1>
      <h2 className="welcome snd animated fadeIn slow" id="welcome-2">
        Wejdź, rozgość się...
      </h2>

      <Link
        to="podroze"
        spy={true}
        smooth={true}
        aria-label="Przejdź do sekcji podróże"
      >
        <button
          className="btn animated bounceInUp"
          aria-label="Przejdź do sekcji podróże"
          aria-pressed={isButtonPressed}
          onClick={(): void => setIsButtonPressed(!isButtonPressed)}
          onKeyDown={(): void => setIsButtonPressed(!isButtonPressed)}
        >
          <p>Wejdź</p>
        </button>
        <i
          className="icon-down-open animated fadeInUp delay-1s"
          aria-hidden="true"
        />
      </Link>

      <div className="main-bg-overlay">
        <div id="main-bg" className="main-bg" aria-hidden="true" />
        <div id="img-mobile" aria-hidden="true" />
      </div>
    </div>
  );
};

export default EntryPage;
