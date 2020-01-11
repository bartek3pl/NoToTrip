import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link as ReachLink } from '@reach/router';
import '../ArticleContainer.scss';

import trasa1 from '../../assets/images/norwegia/trasa.slider.1.1.jpg';
import trasa2 from '../../assets/images/norwegia/trasa.slider.1.2.jpg';
import trasa3 from '../../assets/images/norwegia/trasa.slider.2.1.jpg';
import trasa4 from '../../assets/images/norwegia/trasa.slider.2.3.jpg';
import trasa5 from '../../assets/images/norwegia/trasa.slider.2.5.jpg';

const Norway8 = () => {
  return (
    <>
      <h3>
        W tym wpisie przedstawię Wam zbiór najbardziej praktycznych informacji
        dotyczących naszego wyjazdu. Planując naszą wyprawę szukaliśmy jak
        najtańszego sposobu dostania się do Norwegii, dlatego zbadaliśmy kilka
        opcji przeprawy, różnymi promami i do różnych portów. Przed pakowaniem
        przygotowaliśmy również szczegółową listę z rzeczami które trzeba ze
        sobą zabrać. Przez cały wyjazd spisywałam nasze wydatki na kartce oraz
        śledziłam trasę na mapie. Jeśli więc chcecie się wybrać do Norwegii,
        koniecznie musicie zapoznać się z tym wpisem{' '}
        <span role="img" aria-label="uśmiechnięta buźka">
          😉
        </span>
        .
      </h3>

      <h4>Koszt wyjazdu (na 2 osoby, chronologicznie)</h4>

      <p className="point">- Prom: 670 zł</p>
      <p className="point">- Tankowanie w Polsce: 50 zł</p>
      <p className="point">- Tankowanie w Niemczech: 271 zł</p>
      <p className="point">- Tankowanie w Danii: 216 zł</p>
      <p className="point">- Parking Kjeragbolten: 88 zł</p>
      <p className="point">- Parking Preikestolen: 88 zł</p>
      <p className="point">- Prom z Lauvik do Oanes: 51 zł</p>
      <p className="point">- Prom z Hjelmeland do Nesvik: 51 zł</p>
      <p className="point">- Parking Trolltunga: 88 zł</p>
      <p className="point">- Tankowanie Norwegia: 300 zł</p>
      <p className="point">- Tankowanie Norwegia: 279 zł</p>
      <p className="point">- Prom z Eidsdal do Linge: 60 zł</p>
      <p className="point">- Camping: 45 zł</p>
      <p className="point">- Tankowanie w Danii: 86 zł</p>
      <p className="point">- Tankowanie w Niemczech: 307 zł</p>

      <p>
        <b>Suma wynosi 2651 zł, czyli 1325,5 zł na osobę</b>
      </p>

      <h4>Co zabrać ze sobą?</h4>

      <p className="point">- bielizna termiczna</p>
      <p className="point">
        - namiot dwuwarstwowy lub jednowarstwowy z plandeką lub folią malarską
      </p>
      <p className="point">- śpiwór</p>
      <p className="point">- poduszki, koce, ręczniki</p>
      <p className="point">- karimata lub dmuchany materac i pompka</p>
      <p className="point">- ekologiczne mydło</p>
      <p className="point">- nawigacja (offline)</p>
      <p className="point">
        - <b>palnik gazowy</b>
      </p>
      <p className="point">- czołówka</p>
      <p className="point">- spodnie trekkingowe</p>
      <p className="point">- ciepłe spodnie polarowe</p>
      <p className="point">- kurtka przeciwdeszczowa</p>
      <p className="point">- t-shirty, bluzki z długim rękawem</p>
      <p className="point">- czapka i rękawiczki</p>
      <p className="point">- buty trekkingowe (jakieś za kostkę, 2 pary)</p>
      <p className="point">- menażka, naczynia, sztućce, patelnia, garnek</p>
      <p className="point">- deska do krojenia</p>
      <p className="point">- porządny nóż</p>
      <p className="point">- kubek termiczny</p>
      <p className="point">- spray na komary</p>
      <p className="point">- przewodnik z mapami</p>
      <p className="point">- ładowarka samochodowa, powerbank</p>
      <p className="point">
        - płyn antybakteryjny, chusteczki (mokre też), papier toaletowy
      </p>
      <p className="point">- apteczka, lekarstwa</p>
      <p className="point">- hamak, krzesła plażowe</p>
      <p className="point">- baterie</p>
      <p className="point">- zapalniczki, zapałki</p>
      <p className="point">- okulary przeciwsłoneczne</p>
      <p className="point">- krem do opalania</p>
      <p className="point">- strój kąpielowy</p>

      <h4>Jedzenie</h4>

      <p className="point">- herbata, kawa</p>
      <p className="point">- alkohol</p>
      <p className="point">- masło / margaryna</p>
      <p className="point">- kasza, ryż, makarony</p>
      <p className="point">- owsianki, płatki</p>
      <p className="point">- słoiki z gotowym jedzeniem</p>
      <p className="point">- konserwy</p>
      <p className="point">- kabanosy, sucha kiełbasa</p>
      <p className="point">- wędliny (nie za dużo), sery</p>
      <p className="point">- przyprawy (sól, pieprz)</p>
      <p className="point">- zupki błyskawiczne</p>
      <p className="point">- napoje</p>
      <p className="point">- chleb tostowy, bułki do hot dogów</p>
      <p className="point">- sosy: paczki, koncentraty</p>
      <p className="point">- oliwa</p>
      <p className="point">- jaja</p>
      <p className="point">- mleko</p>
      <p className="point">
        - warzywa: sałata, pomidory, ogórki, papryka, kukurydza, groszek,
        oliwki, fasola, marchewka
      </p>
      <p className="point">
        - słodycze: żelki, czekolada, ciastka, orzeszki, chipsy
      </p>

      <h4>Trasa z Polski do Norwegii</h4>

      <p>
        My wybraliśmy opcję wypłynięcia z Danii, a dokładnie z Hirtshals do
        Langesund. Rozważaliśmy też możliwości: z Hirtshals do Kristiansand, z
        Niemiec z Rostocka do Hirtshals i z Świnoujścia do Trelleborg. Jednak
        wybraliśmy ostatecznie z Hirtshals do Langesund, ponieważ wyszła
        najtaniej. Opcji jest wiele. Jest możliwość ominięcia promu - mostami z
        Danii do Szwecji, albo z Polski przez Szwecję. My zapłaciliśmy za prom w
        dwie strony za dwie osoby z Hirtshals do langesund 637 zł. Bilety
        kupowaliśmy na stronie{' '}
        <a
          href="https://www.aferry.pl"
          target="_blank"
          rel="noopener noreferrer"
        >
          aferry
        </a>
        . Polecam kupować z miesięcznym wyprzedzeniem, lub szybciej, bo wtedy
        jest jeszcze tanio, a im bliżej daty, tym drożej. Jakbyście mieli
        wątpliwości - biletów nie trzeba mieć w pdfie, wystarczy numer który
        dostaniecie na maila.
      </p>

      <p className="link">
        <a
          href="https://www.aferry.pl/prom-do-norwegia.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Możliwe opcje promów do Norwegii
        </a>
      </p>

      <figure className="article-figure">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={trasa1}
              alt="Prom z danii do norwegii"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={trasa2} alt="Langesund" />
          </Carousel.Item>
        </Carousel>
        <figcaption className="article-figcaption">
          Przeprawa z Danii do Norwegii i widoki z promu
        </figcaption>
      </figure>

      <h4>Kontrola graniczna</h4>

      <p>
        Wyglądała tak, że Pan z służby celnej zapytał nas gdzie jedziemy, na ile
        dni i ile mamy alkoholu. Jednak nikt tego nie zweryfikował... może
        uwierzyli nam na słowo? Jednak, to że nam się tak trafiło, nie znaczy,
        że jest tak zawsze. Dlatego radzę dokładnie zapoznać się z limitami
        celnymi przed wyjazdem. Osobiście miałam mały problem ze zrozumieniem.
        Te przepisy to niezłe zadanie matematyczne, ale da się rozgryźć, po
        kilku kalkulacjach{' '}
        <span role="img" aria-label="uśmiechnięta buźka">
          😉
        </span>
        .
      </p>

      <p className="link">
        <a
          href="https://www.toll.no/en/l/languages/pl/przepisy-celne-dla-osob-podroujcych-do-i-z-norwegii1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Limity celne dla osób podróżujących do i z Norwegii
        </a>
      </p>

      <h4>Trasa w Norwegii - jak jechaliśmy?</h4>

      <p>
        Gdy wyjechaliśmy z Langesund, od razu kierowaliśmy się w stronę
        Kjeragbolten. Po drodze rozbiliśmy się przy małym jeziorze, którego
        nazwy niestety nie mogę sobie przypomnieć. (Dodam zdjęcia z tego dnia..
        Może ktoś kojarzy to miejsce?) Rano wyjechaliśmy dalej na zachód.
      </p>

      <figure className="article-figure">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={trasa3}
              alt="norwegia jezioro"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={trasa4} alt="norwegia domek" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={trasa5} alt="norwegia namiot" />
          </Carousel.Item>
        </Carousel>
        <figcaption className="article-figcaption">
          Pierwsza noc nad norweskim jeziorem, drewniana chatka dla gości i
          miejsce rozbicia namiotu
        </figcaption>
      </figure>

      <h4>Plan naszej całej wycieczki</h4>

      <p style={{ textAlign: 'center', marginTop: '5rem', marginBottom: '0' }}>
        Przeprawiliśmy się promem z Lauvik do Oanes i już drugiego dnia
        wspinaliśmy się na{' '}
        <ReachLink to="/norwegia/golden-hour-na-kjeragbolten">
          Kjeragbolten
        </ReachLink>
        .
      </p>

      <div className="angle-down-box">
        <i className="icon-angle-right angle-down"></i>
      </div>

      <p style={{ textAlign: 'center', marginTop: '0' }}>
        Kolejnego dnia czekała nas deszczowa wspinaczka do{' '}
        <ReachLink to="/norwegia/preikestolen">Preikesttolen</ReachLink>.
      </p>

      <div className="angle-down-box">
        <i className="icon-angle-right angle-down"></i>
      </div>

      <p style={{ textAlign: 'center', marginTop: '0' }}>
        Stamtąd pojechaliśmy na południe{' '}
        <ReachLink to="/norwegia/hardangervidda-i-jotunheimen">
          Parku Narodowego Hardangervidda
        </ReachLink>
        .
      </p>

      <div className="angle-down-box">
        <i className="icon-angle-right angle-down"></i>
      </div>

      <p style={{ textAlign: 'center', marginTop: '0' }}>
        A następnego dnia pojechaliśmy na północ Hardangervidda w okolice
        Kinsarvik. Potem dalej na północ w stronę{' '}
        <ReachLink to="/norwegia/trolltunga-spotkanie-z-trollem">
          Trolltungi
        </ReachLink>
        , tu również musieliśmy wziąć prom z Hjelmeland do Nesvik.
      </p>

      <div className="angle-down-box">
        <i className="icon-angle-right angle-down"></i>
      </div>

      <p style={{ textAlign: 'center', marginTop: '0' }}>
        Następnego dnia zwiedzaliśmy{' '}
        <ReachLink to="/norwegia/urocze-portowe-miasteczka">
          Flam, Aurland i Aerdal
        </ReachLink>
        .
      </p>

      <div className="angle-down-box">
        <i className="icon-angle-right angle-down"></i>
      </div>

      <p style={{ textAlign: 'center', marginTop: '0' }}>
        Ósmego dnia spacerowaliśmy po{' '}
        <ReachLink to="/norwegia/hardangervidda-i-jotunheimen">
          Jotunheimen
        </ReachLink>
        .
      </p>

      <div className="angle-down-box">
        <i className="icon-angle-right angle-down"></i>
      </div>

      <p style={{ textAlign: 'center', marginTop: '0' }}>
        Dziewiątego{' '}
        <ReachLink to="/norwegia/jostedalsbreen">Briksdalsbreen</ReachLink>.
      </p>

      <div className="angle-down-box">
        <i className="icon-angle-right angle-down"></i>
      </div>

      <p style={{ textAlign: 'center', marginTop: '0' }}>
        Dziesiątego{' '}
        <ReachLink to="/norwegia/geirangerfjord-i-droga-trolli">
          Geiranger
        </ReachLink>
        .
      </p>

      <div className="angle-down-box">
        <i className="icon-angle-right angle-down"></i>
      </div>

      <p style={{ textAlign: 'center', marginTop: '0' }}>
        A jedenastego jechaliśmy na{' '}
        <ReachLink to="/norwegia/geirangerfjord-i-droga-trolli">
          Drogę Trolli
        </ReachLink>
        , aby się tam dostać wzięliśmy prom z Eidsdal do Linge.
      </p>

      <div className="angle-down-box">
        <i className="icon-angle-right angle-down"></i>
      </div>

      <p style={{ textAlign: 'center', marginTop: '0' }}>
        Później już głównie autostradą do Langesund na prom powrotny (niestety).
      </p>

      <p style={{ marginTop: '5rem' }}>
        <b>
          Łącznie zrobiliśmy około 1347 km w jedną stronę i około 548 km z
          Trollstigen do Langesund. Czyli w sumie przejechaliśmy w samej
          norwegii 1895 km.
        </b>
      </p>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d4776661.923966108!2d8.697170151585922!3d54.22691515363242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x470fe9c2d4b58abf%3A0xb70956aec205e0f5!2zV3JvY8WCYXc!3m2!1d51.1078852!2d17.038537599999998!4m5!1s0x4648c84950fc8e4d%3A0x139a906a2601e4a9!2sHirtshals%2C+9850%2C+Dania!3m2!1d57.586952999999994!2d9.9668379!5e0!3m2!1spl!2spl!4v1544103507410"
        className="gmap"
        title="Trasa z Wrocławia do Danii"
      />
      <figcaption className="article-figcaption">
        Nasza trasa samochodem z Wrocławia do Danii
      </figcaption>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m76!1m12!1m3!1d1993904.0811046294!2d6.124147637818169!3d60.78847458410598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m61!3e0!4m5!1s0x4646e3f181f11df7%3A0x236dcb6fc446d9f!2sLangesund%2C+Norwegia!3m2!1d59.0004978!2d9.7447181!4m5!1s0x4614266d0e317cc9%3A0xee5b40919d3f7313!2sGeiranger%2C+Norwegia!3m2!1d62.100844099999996!2d7.2058941!4m5!1s0x463bd51bf654eb09%3A0x4a83e6bdbfa3b78b!2sPreikestolen%2C+Songesand%2C+Norwegia!3m2!1d58.98641!2d6.1904395999999995!4m5!1s0x463ee4512cafa9d1%3A0xbd0bc34b78d87122!2sHardangervidda%2C+Norwegia!3m2!1d60.1542843!2d7.443046099999999!4m5!1s0x463e997b1b732151%3A0x9b7c92bfdc268ed8!2sTrolltunga%2C+R%C3%B8ldal%2C+Norwegia!3m2!1d60.124167!2d6.739999999999999!4m5!1s0x463e13cfcfc357c3%3A0x33286ff6aad510c5!2zRmzDpW0sIE5vcndlZ2lh!3m2!1d60.8607716!2d7.1117849!4m5!1s0x4615089faa9f7feb%3A0x9597d528e5c72f00!2sJotunheimen%2C+B%C3%B8verdalen%2C+Norwegia!3m2!1d61.6333333!2d8.2999999!4m5!1s0x461676ffb975e46f%3A0xefa50c02477ead19!2sBriksdalsbreen%2C+Briksdalsbre%2C+Norwegia!3m2!1d61.666018199999996!2d6.890201599999999!4m5!1s0x4614266d0e317cc9%3A0xee5b40919d3f7313!2sGeiranger%2C+6216%2C+Norwegia!3m2!1d62.100844099999996!2d7.2058941!4m5!1s0x46140e70c1e7a8af%3A0xcc14b0e753396f9e!2sDroga+Trolli%2C+6300+%C3%85ndalsnes%2C+Norwegia!3m2!1d62.4599516!2d7.670378599999999!5e0!3m2!1spl!2spl!4v1544103343934"
        className="gmap"
        title="Trasa po Norwegii"
      />
      <figcaption className="article-figcaption">Trasa po Norwegii</figcaption>
    </>
  );
};

export default Norway8;
