import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link as ReachLink } from '@reach/router';
import '../ArticleContainer.scss';

import prom from '../../assets/images/norwegia/prom.png';
import preikestolen1 from '../../assets/images/norwegia/preikestolen1.jpg';
import preikestolen2 from '../../assets/images/norwegia/preikestolen2.jpg';
import preikestolen3 from '../../assets/images/norwegia/preikestolen3.jpg';
import preikestolen4 from '../../assets/images/norwegia/preikestolen4.jpg';
import preikestolen5 from '../../assets/images/norwegia/preikestolen5.jpg';
import preikestolen6 from '../../assets/images/norwegia/preikestolen6.jpg';

const Norway2 = () => {
  return (
    <>
      <h3>
        Preikestolen to słynny klif w Norwegii o wysokości 604 m, położony nad
        Lysefjordem. Powstał najprawdopodobniej ok. 10 tysięcy lat temu w wyniku
        pęknięcia skał pod wpływem mrozu. Płaska powierzchnia wierzchołka ma
        wymiary 25 na 25 metrów. Po drugiej stronie Lysefjordu znajduje się
        Kjeragbolten, który jest również bardzo chętnie odwiedzany przez
        turystów.
      </h3>

      <h4>Dojazd i promy na Preikestolen z Kjeragbolten</h4>

      <p>
        Pokażę możliwe trasy z{' '}
        <ReachLink to="/norwegia/golden-hour-na-kjeragbolten">
          Kjeragbolten
        </ReachLink>
        . Każda opcja dotarcia do celu wiążę się z zakupem biletu na prom,
        niestety nie ma dobrej alternatywy z pominięciem przeprawy promem. My
        jechaliśmy z Lysebotn do Lauvvik i stamtąd promem do Oanes. Za przeprawę
        z samochodem zapłaciliśmy 116 NOK za 2 osoby z autem do 6 m. Drugą opcją
        był prom do Forsand z Lysebotn, a trzecią była przeprawa z Songesand do
        Lysebotn. Cennik z cenami za promy z opcji, z których nie korzystaliśmy
        możecie zobaczyć poniżej:
      </p>

      <figure className="article-figure">
        <img
          src={prom}
          style={{ width: '30%', margin: '0 auto', display: 'block' }}
          alt="Prom z lauvik do lysebotn"
        />
        <figcaption className="article-figcaption">
          Rozkład godzinowy promu z Lauvik do Lysebotn
        </figcaption>
      </figure>

      <h4>Szczegóły naszej wyprawy</h4>

      <p>
        Od rana padało. Prognoza pogody pokazywała, że niestety podczas takiej
        pogody czeka nas trasa na Preikestolen. Trudno, plan to plan!
        Zaparkowaliśmy na Pulpit Rock Parking, czyli parkingu najbliższym do
        wejścia na Preikestolen. Jego cena wynosiła 200 NOK. Spakowaliśmy
        plecaki, wzięliśmy drona, w razie gdyby pogoda zmieniła zdanie i około
        godziny 13 wyruszyliśmy. Długość trasy to 3,8 kilometry i zajmuje jakieś
        2 godziny w jedną stronę. Pierwszym etapem był las, w którym szło się
        pod górę, a następnie po kamiennych schodach. Kilka razy drogę leśną
        przerywała przeprawa przez mocno podmokłe tereny. Tam trzeba było
        przeprawić się drewnianymi mostami. Chociaż kilka razy zdarzyło się, że
        i one były zalane wodą.
      </p>

      <p>
        Po około 1,8 kilometra weszliśmy na tereny skalne. Tam ulewa z mocnym
        wiatrem już tak dawała w kość, że zaczęłam rozważać opcję zejścia w dół.
        Już od ponad godziny nie widzieliśmy innych turystów. Pomyślałam, że w
        takim razie może inni już zrezygnowali z dalszej wędrówki podczas takich
        warunków pogodowych. Strach wygrał. Zaczęliśmy, więc schodzić ze skał i
        powoli zmierzać na dół w smutnym nastroju. Szkoda, że musieliśmy
        zrezygnować na samej końcówce…
      </p>

      <figure className="article-figure">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={preikestolen1}
              alt="Preikestolen"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={preikestolen2}
              alt="Preikestolen"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={preikestolen3}
              alt="Preikestolen"
            />
          </Carousel.Item>
        </Carousel>
        <figcaption className="article-figcaption">
          Warunki pogodowe i droga na Preikestolen
        </figcaption>
      </figure>

      <p>
        Jednak nagle zza mgły wyłoniły się dwie turystki. Zapytałam je, czy
        zamierzają iść dalej I nie uważają tego za niebezpieczne. Powiedziały,
        że tak czy inaczej będą szły. Poczułam się pewniej i bezpieczniej,
        wróciliśmy na szlak z nimi, pełni nadziei, że jednak się uda nam dotrzeć
        do celu. Na 2,2 kilometrze zobaczyliśmy drewniany domek z dachem i tam
        zrobiliśmy sobie krótką przerwę. Według nas najlepszy był ostatni
        kilometr, całe szczęście że nie zrezygnowaliśmy. Widoki były
        niesamowite. Mgła i monstrualność skały, nadawała dodatkowo mrocznego
        klimatu.
      </p>

      <figure className="article-figure">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={preikestolen4}
              alt="Preikestolen"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={preikestolen5}
              alt="Preikestolen"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={preikestolen6}
              alt="Preikestolen"
            />
          </Carousel.Item>
        </Carousel>
        <figcaption className="article-figcaption">
          Wreszcie udało nam się osiągnąć szczyt
        </figcaption>
      </figure>

      <h4>Praktyczne wskazówki</h4>

      <p>
        Trasę w przeciwieństwie do{' '}
        <ReachLink to="/norwegia/golden-hour-na-kjeragbolten">
          Kjeragbolten
        </ReachLink>{' '}
        dało się bez problemu przejść w ulewę, wiatr i mgłę. Strome skały
        stanowiły mniejszość. Można zabrać ze sobą kijki. Nie było żadnych na
        tyle skomplikowanych podejść, aby było konieczne umieszczenie łańcuchów
        do trzymania przy wchodzeniu. Zakaz dronów oraz rozbijania namiotów był
        powieszony dopiero przy samym Preikestolen. Jednak z filmików, które
        oglądałam w internecie, widzę że ludzi zbytnio ten znak nie obchodził.
      </p>

      <p>
        Po Preikestolen zrobiliśmy sobie przerwę i odpoczęliśmy spacerując po
        łagodnych trasach w{' '}
        <ReachLink to="/norwegia/hardangervidda-i-jotunheimen">
          Parku Narodowym Hardangervidda
        </ReachLink>
        . Zapraszam po więcej informacji dotyczących parku.
      </p>

      <p>
        Wspinaczka na Preikestolen była dosyć ekstremalna, ale nie pod względem
        samej trasy, lecz pod względem pogody. Jeśli chcecie zapoznać się z
        kolejną ekstremalną trasą to zapraszam na wpis dotyczący on naszej{' '}
        <ReachLink to="/norwegia/trolltunga">wyprawy na Trolltungę</ReachLink>.
        Jest to słynny Język trolla, czyli najpopularniejszy punkt turystyczny w
        Norwegii.
      </p>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1027.8226117873965!2d6.186510126774705!3d58.987653984560296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463bd51bf654eb09%3A0x4a83e6bdbfa3b78b!2sPreikestolen!5e0!3m2!1spl!2spl!4v1544095748879"
        className="gmap"
        title="Preikestolen"
      />
    </>
  );
};

export default Norway2;
