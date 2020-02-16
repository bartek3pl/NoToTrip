import React from 'react';
import Carousel from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Carousel';
import Img from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Img';
import Header from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Header';
import P from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/P';
import PointLink from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/PointLink';
import Subheader from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Subheader';
import Figure from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Figure';
import A from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/A';
import LinkToArticle from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/LinkToArticle';
import Iframe from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Iframe';
import '../../components/ArticlesPage/ArticlesContainer/ArticlesContainer/ArticleContainer.scss';

import mapa from '../../assets/images/norwegia/geiranger-mapa.jpg';
import gei1 from '../../assets/images/norwegia/geiranger.slider.1.1.jpg';
import gei2 from '../../assets/images/norwegia/geiranger.slider.3.2.jpg';
import gei3 from '../../assets/images/norwegia/geiranger.slider.2.1.jpg';
import gei4 from '../../assets/images/norwegia/geiranger.slider.2.2.jpg';
import droga1 from '../../assets/images/norwegia/drogatrolli.slider.1.2.jpg';
import droga2 from '../../assets/images/norwegia/drogatrolli.slider.1.3.jpg';

import { articlesLinks } from '../../data/ArticlesData';

const Norway6 = () => {
  return (
    <>
      <Header>
        Geirangerfjorden leży w południowo-zachodniej Norwegii, jest wpisany na
        listę światowego dziedzictwa UNESCO. Ma długość 15 kilometrów i otoczony
        jest stromymi, skalistymi zboczami, po których spływają liczne
        wodospady. Na okolicznych wzgórzach rozsiane są dawne, opuszczone farmy.
        Między wioskami Geiranger i Hellesylt, leżącymi na przeciwległych
        krańcach wąskiej doliny fiordu, kursują promy, których można podziwiać
        fjord i De Syv Søstrene (Wodospad Siedmiu Sióstr).
      </Header>

      <Subheader>Nasza wyprawa</Subheader>

      <P>
        Po drodze do miejscowości Geiranger można zahaczyć o punkt widokowy
        Dalsnibba, który jest szczytem Gór Skandynawskich. Leży na wysokości
        1495 m n.p.m. jest tak wysoko, że często nawet latem pokryty jest
        śniegiem. Szczyt leży na wschód od położonej na wysokości 1038 m n.p.m.
        przełęczy Dalsnibba. Tam znajduje się schronisko Djupvasshytta. Zaraz
        obok mieni się szmaragdowo-błękitną wodą jezioro Djupvatnet (1016 m
        n.p.m.), przez większą część roku pokryte lodem i śniegiem. Od
        Djupvasshytta prowadzi na szczyt góry prywatna droga zwana Nibbevei,
        płatna 140 NOK.
      </P>

      <PointLink href="https://www.dalsnibba.no/en/prices-and-opening-times/">
        Ceny i godziny otwarcia
      </PointLink>
      <PointLink href="https://pl.wikipedia.org/wiki/Dalsnibba">
        Informacje o Dalsnibba
      </PointLink>

      <P>
        Do Geiranger prowadziła trasa widokowa - Droga Orłów (Ørnevegen), wijąca
        się licznymi serpentynami. Sama wioska była niezwykle malownicza.
        Odwiedziliśmy tutejsze centrum turystyczne i dowiedzieliśmy się, że są
        dwie opcje pieszych wędrówek. Pierwsza to spacer do trzech wodospadów:
        Fossevandring, Storsæterfossen i Grinddalsfossen z Geiranger (około 30
        minut na każdy z nich).
      </P>

      <P>
        A druga to około 3 - godzinna trasa do Wodospadu Siedmiu Sióstr, między
        wioskami Geiranger i Hellesylt. Z tego względu że mieliśmy więcej czasu
        wybraliśmy opcję numer 2, osobom które będą mieć więcej czasu radzę
        wybrać się trasą wodospadów również.
      </P>

      <Figure figcaption="Mapka naszej trasy przez Homlongsaetra do Skagefla">
        <Img
          src={mapa}
          style={{ width: '60%', margin: '0 auto', display: 'block' }}
          alt="Mapa geiranger"
        />
      </Figure>

      <Subheader>Nad fiordem</Subheader>

      <P>
        Pojechaliśmy do miejscowości Homlong i tam zaparkowaliśmy, żeby mieć
        bliżej do początku szlaku. Stamtąd rozpoczęliśmy wyprawę w kierunku
        wodospadu. Droga miała około 6 kilometrów i szliśmy około 3 godziny w
        jedną stronę. Sama trasa jest dosyć wymagająca, ponieważ nie szło się
        tylko lasem, ale również po stromych skałach. Sam fiord jest bardzo
        stromy i wysoki.
      </P>

      <Carousel figcaption="Widoki ze szlaku i Wodospad Siedmiu Sióstr">
        <Img src={gei1} alt="Geirangerfjord" />
        <Img src={gei2} alt="Wodospad Siedmiu Sióstr" />
      </Carousel>

      <P>
        Po drodze zwiedziliśmy opuszczoną farmę Homlongsaetra i Skageflå. Obie
        są w idealnym stanie, dzięki stałej konserwacji. Skały są strome,
        budynki są położone wysoko i daleko od miasteczka. Przed wojną mieszkały
        tu całe rodziny. Aż trudno sobie wyobrazić, że uprawiano tu warzywa i
        hodowano zwierzęta, a dzieci beztrosko bawiły się na podwórku. Poza tym,
        temperatura i klimat również nie sprzyjały uprawie warzyw.
      </P>

      <Carousel figcaption="Opuszczone farmy Homlongsaetra i Skageflå">
        <Img src={gei3} alt="Homlongsaetra" />
        <Img src={gei4} alt="Homlongsaetra" />
      </Carousel>

      <P>
        Przy farmie Skageflå był przepiękny widok na rozpościerający się
        Geirangerfjord. Było widać również wijący się między jego skałami
        Wodospad Siedmiu Sióstr. Widok jest jak najbardziej warty zobaczenia i
        zabrania ze sobą drona!
      </P>

      <P>
        Na mapce widać również drugi wodospad -{' '}
        <A href="https://pl.tripadvisor.com/Attraction_Review-g642196-d8737673-Reviews-Friaren-Geiranger_Stranda_More_og_Romsdal_Western_Norway.html">
          Friaren
        </A>
        , z tego co wiem nie można tam się dostać na piechotę, jedyna możliwość
        zobaczenia to podczas rejsu statkiem wycieczkowym, którego my nie
        wykupiliśmy.
      </P>

      <Header>Droga Trolli</Header>

      <Subheader>
        Droga jest jedną z największych atrakcji turystycznych Norwegii. Średnie
        nachylenie drogi wynosi 9%. Składa się z 11 serpentyn, w większości
        zakręcających pod kątem 180°, dlatego nie mogą się po niej poruszać
        pojazdy dłuższe niż 12,4m.
      </Subheader>

      <P>
        Z Geiranger pojechaliśmy dalej na północ do Trollstigen, po dwóch
        godzinach i przeprawie promem z Eidsdal do Linge (160 NOK) byliśmy na
        miejscu. Znajduje się tam centrum informacji turystycznej i sklep z
        pamiątkami.
      </P>

      <P>
        Z parkingu na szczycie można dojść piechotą na taras widokowy, wejście
        jest bezpłatne. Widać z niego całą drogę i wodospad. W połowie drogi
        znajduje się kamienny most przerzucony nad wodospadem Stigfossen. Drogą
        można jeździć od połowy maja do października. Przy Trollstigen znajduje
        się jedyny w Norwegii znak drogowy "Uwaga Trolle".
      </P>

      <Carousel figcaption="Punkt widokowy na Trollstigen - Drogę Trolli i wodospad Stigfossen">
        <Img src={droga1} alt="Droga Trolli" />
        <Img src={droga2} alt="Wodospad Stigfossen" />
      </Carousel>

      <P>
        Miejsce jak najbardziej warte zobaczenia i zabrania ze sobą drona. My
        mieliśmy niestety pecha, bo gdy poszliśmy do auta po drona, zaczęło
        właśnie padać. Kolejną mało pocieszającą wiadomością było to, że to już
        ostatni punkt naszej podróży. Pora wracać na prom do Langesund.
      </P>

      <P>
        <LinkToArticle to={articlesLinks.norwegia.trasa}>
          O całościowym planie naszej trasy przeczytasz w tym wpisie. Zapraszam!
        </LinkToArticle>
      </P>

      <Iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d480155.48840061174!2d6.9011711004136655!3d61.95687215379751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4614266d0e317cc9%3A0xee5b40919d3f7313!2s6216+Geiranger%2C+Norwegia!5e0!3m2!1spl!2spl!4v1544121889955"
        title="Geirangerfjord"
      />

      <Iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124823.84713804479!2d7.396953560354215!3d62.523188220545045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46140e70c1e7a8af%3A0xcc14b0e753396f9e!2sTrollstigen%2C+6300+%C3%85ndalsnes%2C+Norwegia!5e0!3m2!1spl!2spl!4v1544121917521"
        title="Droga Trolli"
      />
    </>
  );
};

export default Norway6;
