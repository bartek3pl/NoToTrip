import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link as ReachLink } from '@reach/router';
import '../ArticleContainer.scss';

import mapa from '../../assets/images/norwegia/geiranger-mapa.jpg';
import gei1 from '../../assets/images/norwegia/geiranger.slider.1.1.jpg';
import gei2 from '../../assets/images/norwegia/geiranger.slider.3.2.jpg';
import gei3 from '../../assets/images/norwegia/geiranger.slider.2.1.jpg';
import gei4 from '../../assets/images/norwegia/geiranger.slider.2.2.jpg';
import droga1 from '../../assets/images/norwegia/drogatrolli.slider.1.2.jpg';
import droga2 from '../../assets/images/norwegia/drogatrolli.slider.1.3.jpg';

const Norway6 = () => {
  return (
    <>
      <h3>
        Geirangerfjorden leży w południowo-zachodniej Norwegii, jest wpisany na
        listę światowego dziedzictwa UNESCO. Ma długość 15 kilometrów i otoczony
        jest stromymi, skalistymi zboczami, po których spływają liczne
        wodospady. Na okolicznych wzgórzach rozsiane są dawne, opuszczone farmy.
        Między wioskami Geiranger i Hellesylt, leżącymi na przeciwległych
        krańcach wąskiej doliny fiordu, kursują promy, których można podziwiać
        fjord i De Syv Søstrene (Wodospad Siedmiu Sióstr).
      </h3>

      <h4>Nasza wyprawa</h4>

      <p>
        Po drodze do miejscowości Geiranger można zahaczyć o punkt widokowy
        Dalsnibba, który jest szczytem Gór Skandynawskich. Leży na wysokości
        1495 m n.p.m. jest tak wysoko, że często nawet latem pokryty jest
        śniegiem. Szczyt leży na wschód od położonej na wysokości 1038 m n.p.m.
        przełęczy Dalsnibba. Tam znajduje się schronisko Djupvasshytta. Zaraz
        obok mieni się szmaragdowo-błękitną wodą jezioro Djupvatnet (1016 m
        n.p.m.), przez większą część roku pokryte lodem i śniegiem. Od
        Djupvasshytta prowadzi na szczyt góry prywatna droga zwana Nibbevei,
        płatna 140 NOK.
      </p>

      <p className="link">
        <a
          href="https://www.dalsnibba.no/en/prices-and-opening-times/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ceny i godziny otwarcia
        </a>
      </p>
      <p className="link">
        <a
          href="https://pl.wikipedia.org/wiki/Dalsnibba"
          target="_blank"
          rel="noopener noreferrer"
        >
          Informacje o Dalsnibba
        </a>
      </p>

      <p>
        Do Geiranger prowadziła trasa widokowa - Droga Orłów (Ørnevegen), wijąca
        się licznymi serpentynami. Sama wioska była niezwykle malownicza.
        Odwiedziliśmy tutejsze centrum turystyczne i dowiedzieliśmy się, że są
        dwie opcje pieszych wędrówek. Pierwsza to spacer do trzech wodospadów:
        Fossevandring, Storsæterfossen i Grinddalsfossen z Geiranger (około 30
        minut na każdy z nich).
      </p>

      <p>
        A druga to około 3 - godzinna trasa do Wodospadu Siedmiu Sióstr, między
        wioskami Geiranger i Hellesylt. Z tego względu że mieliśmy więcej czasu
        wybraliśmy opcję numer 2, osobom które będą mieć więcej czasu radzę
        wybrać się trasą wodospadów również.
      </p>

      <figure className="article-figure">
        <img
          src={mapa}
          style={{ width: '60%', margin: '0 auto', display: 'block' }}
          alt="Mapa geiranger"
        />
        <figcaption className="article-figcaption">
          Mapka naszej trasy przez Homlongsaetra do Skagefla
        </figcaption>
      </figure>

      <h4>Nad fiordem</h4>

      <p>
        Pojechaliśmy do miejscowości Homlong i tam zaparkowaliśmy, żeby mieć
        bliżej do początku szlaku. Stamtąd rozpoczęliśmy wyprawę w kierunku
        wodospadu. Droga miała około 6 kilometrów i szliśmy około 3 godziny w
        jedną stronę. Sama trasa jest dosyć wymagająca, ponieważ nie szło się
        tylko lasem, ale również po stromych skałach. Sam fiord jest bardzo
        stromy i wysoki.
      </p>

      <figure className="article-figure">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={gei1} alt="Geirangerfjord" />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={gei2}
              alt="Wodospad Siedmiu Sióstr"
            />
          </Carousel.Item>
        </Carousel>
        <figcaption className="article-figcaption">
          Widoki ze szlaku i Wodospad Siedmiu Sióstr
        </figcaption>
      </figure>

      <p>
        Po drodze zwiedziliśmy opuszczoną farmę Homlongsaetra i Skageflå. Obie
        są w idealnym stanie, dzięki stałej konserwacji. Skały są strome,
        budynki są położone wysoko i daleko od miasteczka. Przed wojną mieszkały
        tu całe rodziny. Aż trudno sobie wyobrazić, że uprawiano tu warzywa i
        hodowano zwierzęta, a dzieci beztrosko bawiły się na podwórku. Poza tym,
        temperatura i klimat również nie sprzyjały uprawie warzyw.
      </p>

      <figure className="article-figure">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={gei3} alt="Homlongsaetra" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={gei4} alt="Homlongsaetra" />
          </Carousel.Item>
        </Carousel>
        <figcaption className="article-figcaption">
          Opuszczone farmy Homlongsaetra i Skageflå
        </figcaption>
      </figure>

      <p>
        Przy farmie Skageflå był przepiękny widok na rozpościerający się
        Geirangerfjord. Było widać również wijący się między jego skałami
        Wodospad Siedmiu Sióstr. Widok jest jak najbardziej warty zobaczenia i
        zabrania ze sobą drona!
      </p>

      <p>
        Na mapce widać również drugi wodospad -{' '}
        <a
          href="https://pl.tripadvisor.com/Attraction_Review-g642196-d8737673-Reviews-Friaren-Geiranger_Stranda_More_og_Romsdal_Western_Norway.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Friaren
        </a>
        , z tego co wiem nie można tam się dostać na piechotę, jedyna możliwość
        zobaczenia to podczas rejsu statkiem wycieczkowym, którego my nie
        wykupiliśmy.
      </p>

      <h3>Droga Trolli</h3>

      <h4 style={{ paddingTop: '1rem' }}>
        Droga jest jedną z największych atrakcji turystycznych Norwegii. Średnie
        nachylenie drogi wynosi 9%. Składa się z 11 serpentyn, w większości
        zakręcających pod kątem 180°, dlatego nie mogą się po niej poruszać
        pojazdy dłuższe niż 12,4m.
      </h4>

      <p>
        Z Geiranger pojechaliśmy dalej na północ do Trollstigen, po dwóch
        godzinach i przeprawie promem z Eidsdal do Linge (160 NOK) byliśmy na
        miejscu. Znajduje się tam centrum informacji turystycznej i sklep z
        pamiątkami.
      </p>

      <p>
        Z parkingu na szczycie można dojść piechotą na taras widokowy, wejście
        jest bezpłatne. Widać z niego całą drogę i wodospad. W połowie drogi
        znajduje się kamienny most przerzucony nad wodospadem Stigfossen. Drogą
        można jeździć od połowy maja do października. Przy Trollstigen znajduje
        się jedyny w Norwegii znak drogowy "Uwaga Trolle".
      </p>

      <figure className="article-figure">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={droga1} alt="Droga Trolli" />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={droga2}
              alt="Wodospad Stigfossen"
            />
          </Carousel.Item>
        </Carousel>
        <figcaption className="article-figcaption">
          Punkt widokowy na Trollstigen - Drogę Trolli i wodospad Stigfossen
        </figcaption>
      </figure>

      <p>
        Miejsce jak najbardziej warte zobaczenia i zabrania ze sobą drona. My
        mieliśmy niestety pecha, bo gdy poszliśmy do auta po drona, zaczęło
        właśnie padać. Kolejną mało pocieszającą wiadomością było to, że to już
        ostatni punkt naszej podróży. Pora wracać na prom do Langesund.
      </p>

      <p>
        <ReachLink to="/norwegia/calkowity-koszt-wyjazdu-do-norwegii-co-ze-soba-zabrac-i-trasa">
          O całościowym planie naszej trasy przeczytasz w tym wpisie. Zapraszam!
        </ReachLink>
      </p>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d480155.48840061174!2d6.9011711004136655!3d61.95687215379751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4614266d0e317cc9%3A0xee5b40919d3f7313!2s6216+Geiranger%2C+Norwegia!5e0!3m2!1spl!2spl!4v1544121889955"
        className="gmap"
        title="Geirangerfjord"
      />

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124823.84713804479!2d7.396953560354215!3d62.523188220545045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46140e70c1e7a8af%3A0xcc14b0e753396f9e!2sTrollstigen%2C+6300+%C3%85ndalsnes%2C+Norwegia!5e0!3m2!1spl!2spl!4v1544121917521"
        className="gmap"
        title="Droga Trolli"
      />
    </>
  );
};

export default Norway6;
