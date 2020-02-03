import React from 'react';
import Carousel from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Carousel';
import Img from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Img';
import Header from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Header';
import P from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/P';
import Subheader from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Subheader';
import Figure from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Figure';
import LinkToArticle from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/LinkToArticle';
import Iframe from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Iframe';
import '../../components/ArticlesPage/ArticlesContainer/ArticlesContainer/ArticleContainer.scss';

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
      <Header>
        Preikestolen to słynny klif w Norwegii o wysokości 604 m, położony nad
        Lysefjordem. Powstał najprawdopodobniej ok. 10 tysięcy lat temu w wyniku
        pęknięcia skał pod wpływem mrozu. Płaska powierzchnia wierzchołka ma
        wymiary 25 na 25 metrów. Po drugiej stronie Lysefjordu znajduje się
        Kjeragbolten, który jest również bardzo chętnie odwiedzany przez
        turystów.
      </Header>

      <Subheader>Dojazd i promy na Preikestolen z Kjeragbolten</Subheader>

      <P>
        Pokażę możliwe trasy z{' '}
        <LinkToArticle to="/norwegia/golden-hour-na-kjeragbolten">
          Kjeragbolten
        </LinkToArticle>
        . Każda opcja dotarcia do celu wiążę się z zakupem biletu na prom,
        niestety nie ma dobrej alternatywy z pominięciem przeprawy promem. My
        jechaliśmy z Lysebotn do Lauvvik i stamtąd promem do Oanes. Za przeprawę
        z samochodem zapłaciliśmy 116 NOK za 2 osoby z autem do 6 m. Drugą opcją
        był prom do Forsand z Lysebotn, a trzecią była przeprawa z Songesand do
        Lysebotn. Cennik z cenami za promy z opcji, z których nie korzystaliśmy
        możecie zobaczyć poniżej:
      </P>

      <Figure figcaption="Rozkład godzinowy promu z Lauvik do Lysebotn">
        <Img
          src={prom}
          style={{ width: '30%', margin: '0 auto', display: 'block' }}
          alt="Prom z lauvik do lysebotn"
        />
      </Figure>

      <Subheader>Szczegóły naszej wyprawy</Subheader>

      <P>
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
      </P>

      <P>
        Po około 1,8 kilometra weszliśmy na tereny skalne. Tam ulewa z mocnym
        wiatrem już tak dawała w kość, że zaczęłam rozważać opcję zejścia w dół.
        Już od ponad godziny nie widzieliśmy innych turystów. Pomyślałam, że w
        takim razie może inni już zrezygnowali z dalszej wędrówki podczas takich
        warunków pogodowych. Strach wygrał. Zaczęliśmy, więc schodzić ze skał i
        powoli zmierzać na dół w smutnym nastroju. Szkoda, że musieliśmy
        zrezygnować na samej końcówce…
      </P>

      <Carousel figcaption="Warunki pogodowe i droga na Preikestolen">
        <Img src={preikestolen1} alt="Preikestolen" />
        <Img src={preikestolen2} alt="Preikestolen" />
        <Img src={preikestolen3} alt="Preikestolen" />
      </Carousel>

      <P>
        Jednak nagle zza mgły wyłoniły się dwie turystki. Zapytałam je, czy
        zamierzają iść dalej I nie uważają tego za niebezpieczne. Powiedziały,
        że tak czy inaczej będą szły. Poczułam się pewniej i bezpieczniej,
        wróciliśmy na szlak z nimi, pełni nadziei, że jednak się uda nam dotrzeć
        do celu. Na 2,2 kilometrze zobaczyliśmy drewniany domek z dachem i tam
        zrobiliśmy sobie krótką przerwę. Według nas najlepszy był ostatni
        kilometr, całe szczęście że nie zrezygnowaliśmy. Widoki były
        niesamowite. Mgła i monstrualność skały, nadawała dodatkowo mrocznego
        klimatu.
      </P>

      <Carousel figcaption="Wreszcie udało nam się osiągnąć szczyt">
        <Img src={preikestolen4} alt="Preikestolen" />
        <Img src={preikestolen5} alt="Preikestolen" />
        <Img src={preikestolen6} alt="Preikestolen" />
      </Carousel>

      <Subheader>Praktyczne wskazówki</Subheader>

      <P>
        Trasę w przeciwieństwie do{' '}
        <LinkToArticle to="/norwegia/golden-hour-na-kjeragbolten">
          Kjeragbolten
        </LinkToArticle>{' '}
        dało się bez problemu przejść w ulewę, wiatr i mgłę. Strome skały
        stanowiły mniejszość. Można zabrać ze sobą kijki. Nie było żadnych na
        tyle skomplikowanych podejść, aby było konieczne umieszczenie łańcuchów
        do trzymania przy wchodzeniu. Zakaz dronów oraz rozbijania namiotów był
        powieszony dopiero przy samym Preikestolen. Jednak z filmików, które
        oglądałam w internecie, widzę że ludzi zbytnio ten znak nie obchodził.
      </P>

      <P>
        Po Preikestolen zrobiliśmy sobie przerwę i odpoczęliśmy spacerując po
        łagodnych trasach w{' '}
        <LinkToArticle to="/norwegia/hardangervidda-i-jotunheimen">
          Parku Narodowym Hardangervidda
        </LinkToArticle>
        . Zapraszam po więcej informacji dotyczących parku.
      </P>

      <P>
        Wspinaczka na Preikestolen była dosyć ekstremalna, ale nie pod względem
        samej trasy, lecz pod względem pogody. Jeśli chcecie zapoznać się z
        kolejną ekstremalną trasą to zapraszam na wpis dotyczący on naszej{' '}
        <LinkToArticle to="/norwegia/trolltunga-spotkanie-z-trollem">
          wyprawy na Trolltungę
        </LinkToArticle>
        . Jest to słynny Język trolla, czyli najpopularniejszy punkt turystyczny
        w Norwegii.
      </P>

      <Iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1027.8226117873965!2d6.186510126774705!3d58.987653984560296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463bd51bf654eb09%3A0x4a83e6bdbfa3b78b!2sPreikestolen!5e0!3m2!1spl!2spl!4v1544095748879"
        title="Preikestolen"
      />
    </>
  );
};

export default Norway2;
