import React from 'react';
import Carousel from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Carousel';
import Img from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Img';
import Header from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Header';
import P from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/P';
import PointLink from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/PointLink';
import Subheader from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Subheader';
import Figcaption from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Figcaption';
import A from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/A';
import Iframe from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Iframe';
import Point from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Point';
import LinkToArticle from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/LinkToArticle';
import ArrowDown from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/ArrowDown';
import '../../components/ArticlesPage/ArticlesContainer/ArticlesContainer/ArticleContainer.scss';

import trasa1 from '../../assets/images/norwegia/trasa.slider.1.1.jpg';
import trasa2 from '../../assets/images/norwegia/trasa.slider.1.2.jpg';
import trasa3 from '../../assets/images/norwegia/trasa.slider.2.1.jpg';
import trasa4 from '../../assets/images/norwegia/trasa.slider.2.3.jpg';
import trasa5 from '../../assets/images/norwegia/trasa.slider.2.5.jpg';
import { articlesLinks } from '../../data/ArticlesData';

const Norway8 = () => {
  return (
    <>
      <Header>
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
      </Header>

      <Subheader>Koszt wyjazdu (na 2 osoby, chronologicznie)</Subheader>

      <Point>Prom: 670 zł</Point>
      <Point>Tankowanie w Polsce: 50 zł</Point>
      <Point>Tankowanie w Niemczech: 271 zł</Point>
      <Point>Tankowanie w Danii: 216 zł</Point>
      <Point>Parking Kjeragbolten: 88 zł</Point>
      <Point>Parking Preikestolen: 88 zł</Point>
      <Point>Prom z Lauvik do Oanes: 51 zł</Point>
      <Point>Prom z Hjelmeland do Nesvik: 51 zł</Point>
      <Point>Parking Trolltunga: 88 zł</Point>
      <Point>Tankowanie Norwegia: 300 zł</Point>
      <Point>Tankowanie Norwegia: 279 zł</Point>
      <Point>Prom z Eidsdal do Linge: 60 zł</Point>
      <Point>Camping: 45 zł</Point>
      <Point>Tankowanie w Danii: 86 zł</Point>
      <Point>Tankowanie w Niemczech: 307 zł</Point>

      <P>
        <b>Suma wynosi 2651 zł, czyli 1325,5 zł na osobę</b>
      </P>

      <Subheader>Co zabrać ze sobą?</Subheader>

      <Point>bielizna termiczna</Point>
      <Point>
        namiot dwuwarstwowy lub jednowarstwowy z plandeką lub folią malarską
      </Point>
      <Point>śpiwór</Point>
      <Point>poduszki, koce, ręczniki</Point>
      <Point>karimata lub dmuchany materac i pompka</Point>
      <Point>ekologiczne mydło</Point>
      <Point>nawigacja (offline)</Point>
      <Point>
        <b>palnik gazowy</b>
      </Point>
      <Point>czołówka</Point>
      <Point>spodnie trekkingowe</Point>
      <Point>ciepłe spodnie polarowe</Point>
      <Point>kurtka przeciwdeszczowa</Point>
      <Point>t-shirty, bluzki z długim rękawem</Point>
      <Point>czapka i rękawiczki</Point>
      <Point>buty trekkingowe (jakieś za kostkę, 2 pary)</Point>
      <Point>menażka, naczynia, sztućce, patelnia, garnek</Point>
      <Point>deska do krojenia</Point>
      <Point>porządny nóż</Point>
      <Point>kubek termiczny</Point>
      <Point>spray na komary</Point>
      <Point>przewodnik z mapami</Point>
      <Point>ładowarka samochodowa, powerbank</Point>
      <Point>
        płyn antybakteryjny, chusteczki (mokre też), papier toaletowy
      </Point>
      <Point>apteczka, lekarstwa</Point>
      <Point>hamak, krzesła plażowe</Point>
      <Point>baterie</Point>
      <Point>zapalniczki, zapałki</Point>
      <Point>okulary przeciwsłoneczne</Point>
      <Point>krem do opalania</Point>
      <Point>strój kąpielowy</Point>

      <Subheader>Jedzenie</Subheader>

      <Point>herbata, kawa</Point>
      <Point>alkohol</Point>
      <Point>masło / margaryna</Point>
      <Point>kasza, ryż, makarony</Point>
      <Point>owsianki, płatki</Point>
      <Point>słoiki z gotowym jedzeniem</Point>
      <Point>konserwy</Point>
      <Point>kabanosy, sucha kiełbasa</Point>
      <Point>wędliny (nie za dużo), sery</Point>
      <Point>przyprawy (sól, pieprz)</Point>
      <Point>zupki błyskawiczne</Point>
      <Point>napoje</Point>
      <Point>chleb tostowy, bułki do hot dogów</Point>
      <Point>sosy: paczki, koncentraty</Point>
      <Point>oliwa</Point>
      <Point>jaja</Point>
      <Point>mleko</Point>
      <Point>
        warzywa: sałata, pomidory, ogórki, papryka, kukurydza, groszek, oliwki,
        fasola, marchewka
      </Point>
      <Point>słodycze: żelki, czekolada, ciastka, orzeszki, chipsy</Point>

      <Subheader>Trasa z Polski do Norwegii</Subheader>

      <P>
        My wybraliśmy opcję wypłynięcia z Danii, a dokładnie z Hirtshals do
        Langesund. Rozważaliśmy też możliwości: z Hirtshals do Kristiansand, z
        Niemiec z Rostocka do Hirtshals i z Świnoujścia do Trelleborg. Jednak
        wybraliśmy ostatecznie z Hirtshals do Langesund, ponieważ wyszła
        najtaniej. Opcji jest wiele. Jest możliwość ominięcia promu - mostami z
        Danii do Szwecji, albo z Polski przez Szwecję. My zapłaciliśmy za prom w
        dwie strony za dwie osoby z Hirtshals do langesund 637 zł. Bilety
        kupowaliśmy na stronie <A href="https://www.aferry.pl">aferry</A>.
        Polecam kupować z miesięcznym wyprzedzeniem, lub szybciej, bo wtedy jest
        jeszcze tanio, a im bliżej daty, tym drożej. Jakbyście mieli wątpliwości
        - biletów nie trzeba mieć w pdfie, wystarczy numer który dostaniecie na
        maila.
      </P>

      <PointLink href="https://www.aferry.pl/prom-do-norwegia.html">
        Możliwe opcje promów do Norwegii
      </PointLink>

      <Carousel figcaption="Przeprawa z Danii do Norwegii i widoki z promu">
        <Img src={trasa1} alt="Prom z danii do norwegii" />
        <Img src={trasa2} alt="Langesund" />
      </Carousel>

      <Subheader>Kontrola graniczna</Subheader>

      <P>
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
      </P>

      <PointLink href="https://www.toll.no/en/l/languages/pl/przepisy-celne-dla-osob-podroujcych-do-i-z-norwegii1/">
        Limity celne dla osób podróżujących do i z Norwegii
      </PointLink>

      <Subheader>Trasa w Norwegii - jak jechaliśmy?</Subheader>

      <P>
        Gdy wyjechaliśmy z Langesund, od razu kierowaliśmy się w stronę
        Kjeragbolten. Po drodze rozbiliśmy się przy małym jeziorze, którego
        nazwy niestety nie mogę sobie przypomnieć. (Dodam zdjęcia z tego dnia..
        Może ktoś kojarzy to miejsce?) Rano wyjechaliśmy dalej na zachód.
      </P>

      <Carousel
        figcaption="Pierwsza noc nad norweskim jeziorem, drewniana chatka dla gości i
          miejsce rozbicia namiotu"
      >
        <Img src={trasa3} alt="norwegia jezioro" />
        <Img src={trasa4} alt="norwegia domek" />
        <Img src={trasa5} alt="norwegia namiot" />
      </Carousel>

      <Subheader>Plan naszej całej wycieczki</Subheader>

      <P style={{ textAlign: 'center', marginTop: '5rem', marginBottom: '0' }}>
        Przeprawiliśmy się promem z Lauvik do Oanes i już drugiego dnia
        wspinaliśmy się na{' '}
        <LinkToArticle to={articlesLinks.norwegia.kjeragbolten}>
          Kjeragbolten
        </LinkToArticle>
        .
      </P>

      <ArrowDown />

      <P style={{ textAlign: 'center', marginTop: '0' }}>
        Kolejnego dnia czekała nas deszczowa wspinaczka do{' '}
        <LinkToArticle to={articlesLinks.norwegia.preikestolen}>
          Preikestolen
        </LinkToArticle>
        .
      </P>

      <ArrowDown />

      <P style={{ textAlign: 'center', marginTop: '0' }}>
        Stamtąd pojechaliśmy na południe{' '}
        <LinkToArticle to={articlesLinks.norwegia.jotunheimen}>
          Parku Narodowego Hardangervidda
        </LinkToArticle>
        .
      </P>

      <ArrowDown />

      <P style={{ textAlign: 'center', marginTop: '0' }}>
        A następnego dnia pojechaliśmy na północ Hardangervidda w okolice
        Kinsarvik. Potem dalej na północ w stronę{' '}
        <LinkToArticle to={articlesLinks.norwegia.trolltunga}>
          Trolltungi
        </LinkToArticle>
        , tu również musieliśmy wziąć prom z Hjelmeland do Nesvik.
      </P>

      <ArrowDown />

      <P style={{ textAlign: 'center', marginTop: '0' }}>
        Następnego dnia zwiedzaliśmy{' '}
        <LinkToArticle to={articlesLinks.norwegia.aurland}>
          Flam, Aurland i Aerdal
        </LinkToArticle>
        .
      </P>

      <ArrowDown />

      <P style={{ textAlign: 'center', marginTop: '0' }}>
        Ósmego dnia spacerowaliśmy po{' '}
        <LinkToArticle to={articlesLinks.norwegia.jotunheimen}>
          Jotunheimen
        </LinkToArticle>
        .
      </P>

      <ArrowDown />

      <P style={{ textAlign: 'center', marginTop: '0' }}>
        Dziewiątego{' '}
        <LinkToArticle to={articlesLinks.norwegia.jostedalsbreen}>
          Briksdalsbreen
        </LinkToArticle>
        .
      </P>

      <ArrowDown />

      <P style={{ textAlign: 'center', marginTop: '0' }}>
        Dziesiątego{' '}
        <LinkToArticle to={articlesLinks.norwegia.geirangerfjord}>
          Geiranger
        </LinkToArticle>
        .
      </P>

      <ArrowDown />

      <P style={{ textAlign: 'center', marginTop: '0' }}>
        A jedenastego jechaliśmy na{' '}
        <LinkToArticle to={articlesLinks.norwegia.geirangerfjord}>
          Drogę Trolli
        </LinkToArticle>
        , aby się tam dostać wzięliśmy prom z Eidsdal do Linge.
      </P>

      <ArrowDown />

      <P style={{ textAlign: 'center', marginTop: '0' }}>
        Później już głównie autostradą do Langesund na prom powrotny (niestety).
      </P>

      <P style={{ marginTop: '5rem' }}>
        <b>
          Łącznie zrobiliśmy około 1347 km w jedną stronę i około 548 km z
          Trollstigen do Langesund. Czyli w sumie przejechaliśmy w samej
          norwegii 1895 km.
        </b>
      </P>

      <Iframe
        src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d4776661.923966108!2d8.697170151585922!3d54.22691515363242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x470fe9c2d4b58abf%3A0xb70956aec205e0f5!2zV3JvY8WCYXc!3m2!1d51.1078852!2d17.038537599999998!4m5!1s0x4648c84950fc8e4d%3A0x139a906a2601e4a9!2sHirtshals%2C+9850%2C+Dania!3m2!1d57.586952999999994!2d9.9668379!5e0!3m2!1spl!2spl!4v1544103507410"
        title="Trasa z Wrocławia do Danii"
      />

      <Figcaption>Nasza trasa samochodem z Wrocławia do Danii</Figcaption>

      <Iframe
        src="https://www.google.com/maps/embed?pb=!1m76!1m12!1m3!1d1993904.0811046294!2d6.124147637818169!3d60.78847458410598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m61!3e0!4m5!1s0x4646e3f181f11df7%3A0x236dcb6fc446d9f!2sLangesund%2C+Norwegia!3m2!1d59.0004978!2d9.7447181!4m5!1s0x4614266d0e317cc9%3A0xee5b40919d3f7313!2sGeiranger%2C+Norwegia!3m2!1d62.100844099999996!2d7.2058941!4m5!1s0x463bd51bf654eb09%3A0x4a83e6bdbfa3b78b!2sPreikestolen%2C+Songesand%2C+Norwegia!3m2!1d58.98641!2d6.1904395999999995!4m5!1s0x463ee4512cafa9d1%3A0xbd0bc34b78d87122!2sHardangervidda%2C+Norwegia!3m2!1d60.1542843!2d7.443046099999999!4m5!1s0x463e997b1b732151%3A0x9b7c92bfdc268ed8!2sTrolltunga%2C+R%C3%B8ldal%2C+Norwegia!3m2!1d60.124167!2d6.739999999999999!4m5!1s0x463e13cfcfc357c3%3A0x33286ff6aad510c5!2zRmzDpW0sIE5vcndlZ2lh!3m2!1d60.8607716!2d7.1117849!4m5!1s0x4615089faa9f7feb%3A0x9597d528e5c72f00!2sJotunheimen%2C+B%C3%B8verdalen%2C+Norwegia!3m2!1d61.6333333!2d8.2999999!4m5!1s0x461676ffb975e46f%3A0xefa50c02477ead19!2sBriksdalsbreen%2C+Briksdalsbre%2C+Norwegia!3m2!1d61.666018199999996!2d6.890201599999999!4m5!1s0x4614266d0e317cc9%3A0xee5b40919d3f7313!2sGeiranger%2C+6216%2C+Norwegia!3m2!1d62.100844099999996!2d7.2058941!4m5!1s0x46140e70c1e7a8af%3A0xcc14b0e753396f9e!2sDroga+Trolli%2C+6300+%C3%85ndalsnes%2C+Norwegia!3m2!1d62.4599516!2d7.670378599999999!5e0!3m2!1spl!2spl!4v1544103343934"
        title="Trasa po Norwegii"
      />

      <Figcaption>Trasa po Norwegii</Figcaption>
    </>
  );
};

export default Norway8;
