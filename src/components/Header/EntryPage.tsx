import React, { useState, FunctionComponent } from 'react';
import { Link } from 'react-scroll';
import bg1 from '../../assets/images/bg-1.jpg';
import './EntryPage.scss';

const EntryPage: FunctionComponent = () => {
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  return (
    <>
      <h1 className="welcome animated fadeIn slow" id="welcome-1">
        Witaj przybyszu!
      </h1>
      <h1 className="welcome snd animated fadeIn slow" id="welcome-2">
        Wejdź, rozgość się...
      </h1>

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
        <img
          src={bg1}
          id="main-bg"
          className="main-bg"
          alt="Nototrip tło"
          aria-hidden="true"
        />
        <div id="img-mobile" aria-hidden="true"></div>
      </div>
    </>
  );
};

export default EntryPage;
