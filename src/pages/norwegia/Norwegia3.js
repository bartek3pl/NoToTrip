import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link as ReachLink } from '@reach/router';
import '../../components/ArticlesPage/ArticlesContainer/ArticleContainer.scss';

import harden1 from '../../assets/images/norwegia/hardangervidda.slider.1.1.jpg';
import harden2 from '../../assets/images/norwegia/hardangervidda.slider.1.3.jpg';
import harden3 from '../../assets/images/norwegia/hardangervidda.slider.1.4.jpg';
import harden4 from '../../assets/images/norwegia/hardangervidda.slider.1.6.jpg';
import harden5 from '../../assets/images/norwegia/hardangervidda.slider.1.7.jpg';
import harden6 from '../../assets/images/norwegia/hardengervidda.slider.2.0.jpg';
import harden7 from '../../assets/images/norwegia/hardangervidda.slider.2.1.jpg';
import harden8 from '../../assets/images/norwegia/hardangervidda.slider.2.3.jpg';
import harden9 from '../../assets/images/norwegia/hardangervidda.slider.2.8.jpg';
import harden10 from '../../assets/images/norwegia/hardangervidda.slider.2.6.jpg';
import harden11 from '../../assets/images/norwegia/hardangervidda.1.jpg';
import jotun1 from '../../assets/images/norwegia/jotun-1.jpg';
import jotun2 from '../../assets/images/norwegia/jotun-2.jpg';
import jotun3 from '../../assets/images/norwegia/jotun-3.jpg';
import jotun4 from '../../assets/images/norwegia/jotun-4.jpg';
import jotun5 from '../../assets/images/norwegia/jotun-5.jpg';

const Norway3 = () => {
  return (
    <>
      <h3>
        Park Narodowy Hardangervidda zajmuje 342200 ha, utworzony został w 1970.
        Jest to otwarty, bezleśny teren płaskowyżu utworzonego przez lodowiec,
        poprzecinany pasmami niewysokich gór. W parku chroniony jest głównie
        unikatowy krajobraz i elementy przyrody nieożywionej.
      </h3>

      <h4>Spokojny płaskowyż</h4>

      <p>
        W parku Hardangervidda spędziliśmy dwa dni. Pierwszy, po wyprawie na
        Preikestolen - na południowym zachodzie, spacerując z owcami po
        płaskowyżu. Tam również rozbiliśmy namiot i przenocowaliśmy, by móc
        następnego dnia w pełni sił wyjechać w kierunku Trolltungi. Jednak ze
        względu na to, że ta część parku w dużej mierze należała do owiec,
        mieliśmy mały problem ze znalezieniem miejsca na rozbicie namiotu.
        Chociażby z tego powodu, że park był również ich toaletą ;)
      </p>

      <figure className="article-figure">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={harden1} alt="Hardengervidda" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={harden2} alt="Hardengervidda" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={harden3} alt="Hardengervidda" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={harden4} alt="Hardengervidda" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={harden5} alt="Hardengervidda" />
          </Carousel.Item>
        </Carousel>
        <figcaption className="article-figcaption">
          Spacer wzdłuż rzeki
        </figcaption>
      </figure>

      <h4>Trasa trzech wodospadów</h4>

      <p>
        Dzień po Wspinaczce na Trolltungę spędziliśmy w Kinsarvik, podążając
        Husedalen Valley, czyli trasą wzdłuż trzech wodospadów - Hardanger
        fossasti (waterfall path). Trasa miała 5 kilometrów. Szliśmy około 2,5
        godziny pod górę w jedną stronę. Trasa zaczyna się przy parkingu, który
        był darmowy. Gdzieś w pobliżu było lotnisko śmigłowców, ponieważ wiele
        latało nad naszymi głowami. Pierwszym wodospadem, do którego doszliśmy
        był Tveitafossen, po jakiejś godzinie ukazał się nam następny -
        Nyastolfossen. A ostatni i moim zdaniem najpiękniejszy -
        Nykkjesøyfossen, położony na zielonej polanie, która idealnie nadaje się
        na piknik,a nawet na camping wśród uspokajającego dźwięku szumu
        wodospadu. Trasa jak najbardziej godna polecenia, gdyż widoki były
        niesamowite, a każdy wodospad zjawiskowy.
      </p>

      <figure className="article-figure">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={harden6} alt="Hardengervidda" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={harden7} alt="Hardengervidda" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={harden8} alt="Hardengervidda" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={harden9} alt="Hardengervidda" />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={harden10}
              alt="Hardengervidda"
            />
          </Carousel.Item>
        </Carousel>
        <figcaption className="article-figcaption">
          Tveitafossen, Nyastolfossen oraz Nykkjesøyfossen
        </figcaption>
      </figure>

      <p class="link">
        <a
          href="
                https://en.hardangerfjord.com/dbimgs/Hardangerfjord/PDF/HARDANGERFJORD%20HIKING%20HIGHLIGHTS/32%20HUSEDALEN%20VALLEY.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Więcej informacji
        </a>
      </p>

      <p>
        Ten dzień zakończyliśmy rozbijając namiot w lesie, który napotkaliśmy po
        drodze jadąc w kierunku Języka Trolla. Był to kolejny punkt naszej
        wycieczki. Jeżeli jesteście ciekawi naszej wspinaczki na{' '}
        <ReachLink to="/norwegia/trolltunga-spotkanie-z-trollem">
          Trolltungę
        </ReachLink>
        , to zapraszam do wpisu.
      </p>

      <figure className="article-figure">
        <img src={harden11} alt="Hardangervidda" />
        <figcaption className="article-figcaption">
          Pierwszy nocleg w lesie
        </figcaption>
      </figure>

      <h3>Jotunheimen</h3>

      <h4 style={{ paddingTop: '1rem' }}>
        W Parku Narodowym Jotunheimen dominuje krajobraz wysokogórski. Jego
        najwyższymi szczytami są Galdhøpiggen (2469 m n.p.m.) - najwyższy szczyt
        w Norwegii, położony w pobliżu miejscowości Lom oraz Glittertind (2452 m
        n.p.m.) - drugi najwyższy szczyt w regionie Oppland. Tworzą one masyw
        Jotunheimen, który jest jednocześnie najwyższą grupą Gór Skandynawskich.
        Na terenie parku występują liczne górskie jeziora oraz lodowce.
      </h4>

      <figure className="article-figure">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={jotun1} alt="Jotunheimen" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={jotun2} alt="Jotunheimen" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={jotun3} alt="Jotunheimen" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={jotun4} alt="Jotunheimen" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={jotun5} alt="Jotunheimen" />
          </Carousel.Item>
        </Carousel>
        <figcaption className="article-figcaption">
          Mroźny Dom Gigantów (Jotunheimen)
        </figcaption>
      </figure>

      <h4>Nasza wyprawa</h4>

      <p>
        Z Parku Narodowego Hardengervidda wyruszyliśmy dalej na północ.
        Jechaliśmy w kierunk masywu górskiego Jotunheimen, gdzie znajduje się
        również park narodowy. Gdy zbliżaliśmy się do Jotunheimen temperatura
        stopniowo spadała. W pewnym momencie zaczął padać śnieg, a termometr
        pokazywał już -1 stopni. Było bardzo zimno i ledwo widzieliśmy drogę
        przez gęstą mgłę.
      </p>

      <p>
        Gdy dojechaliśmy na miejsce zaparkowaliśmy przy schronisku turystycznym
        Gjendesheim i wyruszyliśmy na Besseggen. Jest to wąski grzbiet górski
        znajdujący się pomiędzy jeziorami Bessvatnet i Gjende. Widoki były
        zjawiskowe, dookoła gołe skały, pod nogami kamienie zarośnięte zielonymi
        porostami, a w oddali szmaragdowe jeziora. Klimat jak na innej planecie.
        Wycieczkę zakończyliśmy przy małym jeziorze Bjørnbøltjønne. Trasa była
        krótka, lecz spacer bardzo udany. Szliśmy około 2 godziny w jedną
        stronę.
      </p>

      <p>
        Myślę, że następnym razem w Jotunheinem zdecydujemy się na coś bardziej
        ekstremalnego, jak na przykład wyprawa na Galdhøpiggen lub Glittertind.
        Na taką wspinaczkę można wybrać się tylko w określonym porach w roku i z
        przewodnikiem oraz odpowiednim sprzętem do wspinaczki na lodowiec.
      </p>

      <p>
        A skoro o lodowcach mowa, to koniecznie zobaczcie wpis o{' '}
        <ReachLink to="/norwegia/jostedalsbreen">
          Jostedalsbreen - największym lodowcu w Europie
        </ReachLink>{' '}
        i o naszej wycieczce pod jedno z jego ramion - Briksdalsbreen.
      </p>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d509196.88768119283!2d6.2046884534377975!3d60.09710389440765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m5!1s0x463e80d764612175%3A0x5d4fb742cd55c63b!2sKinsarvik!3m2!1d60.3756766!2d6.722479099999999!4m3!3m2!1d59.965386099999996!2d6.9865518!5e0!3m2!1spl!2spl!4v1544121738710"
        className="gmap"
        title="Hardangervidda"
      />

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d865625.7988233261!2d6.362744766047497!3d61.60759507820726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4615089faa9f7feb%3A0x9597d528e5c72f00!2sJotunheimen!5e0!3m2!1spl!2spl!4v1544121797993"
        className="gmap"
        title="Jotunheimen"
      />
    </>
  );
};

export default Norway3;
