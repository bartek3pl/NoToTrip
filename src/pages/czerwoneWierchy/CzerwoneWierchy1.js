import React from 'react';
import Carousel from '../../components/ArticlesPage/ArticlesContainer/Carousel';
import Img from '../../components/ArticlesPage/ArticlesContainer/Img';
import { Link as ReachLink } from '@reach/router';
import '../../components/ArticlesPage/ArticlesContainer/ArticlesContainer/ArticleContainer.scss';

import wierchy1 from '../../assets/images/wierchy/wierchy.1.jpg';
import wierchy2 from '../../assets/images/wierchy/wierchy.slider.1.1.jpg';
import wierchy3 from '../../assets/images/wierchy/wierchy.slider.1.2.jpg';
import wierchy4 from '../../assets/images/wierchy/wierchy.slider.1.3.jpg';
import wierchy5 from '../../assets/images/wierchy/wierchy.slider.1.4.jpg';
import wierchy6 from '../../assets/images/wierchy/wierchy.slider.1.5.jpg';
import wierchy7 from '../../assets/images/wierchy/wierchy.1b.1.jpg';
import wierchy8 from '../../assets/images/wierchy/wierchy.1b.2.jpg';
import wierchy9 from '../../assets/images/wierchy/wierchy.1b.3.jpg';
import wierchy10 from '../../assets/images/wierchy/wierchy.1b.4.jpg';
import wierchy11 from '../../assets/images/wierchy/wierchy.1b.5.jpg';
import piwo1 from '../../assets/images/wierchy/piwo2.jpg';
import piwo2 from '../../assets/images/wierchy/piwo3.jpg';
import piwo3 from '../../assets/images/wierchy/piwo1.jpg';
import piwo4 from '../../assets/images/wierchy/piwo4.jpg';

const CzerwoneWierchy1 = () => {
  return (
    <>
      <h3>
        Piszę prosto z zimowej stolicy Polski, otoczonej Tatrami. W tym wpisie
        dowiecie się gdzie nocowaliśmy, czy Krupówki są przereklamowane, czy
        jednak warte odwiedzenia, co warto tu zjeść i jakie piwo wypić :).
      </h3>

      <h4>Gdzie się zatrzymaliśmy</h4>

      <p>
        Z Wrocławia wyjechaliśmy około godziny 8. Po pięciu godzinach
        dojechaliśmy do Zakopanego. Zatrzymaliśmy się w znalezionej na bookingu{' '}
        <a
          href="https://uperelki.nocowanie.pl/"
          target="_blank"
          rel="noopener noreferrer"
        >
          „Willi u Perełki”
        </a>
        .
      </p>

      <p>
        Byłam zadowolona z tego miejsca, mogę je szczerze polecić innym.
        Gospodarze byli bardzo uprzejmi i pomocni. Mieszkaliśmy w przytulnym,
        dobrze wyposażonym pokoju z łazienką i TV. Na korytarzu był aneks
        kuchenny dostępny dla wszystkich gości. Cena również była bardzo
        przyjazna ☺.
      </p>

      <figure className="article-figure">
        <Img src={wierchy1} alt="Willa u Perełki" />
        <figcaption className="article-figcaption">
          Tutaj nocowaliśmy - Willa u Perełki
        </figcaption>
      </figure>

      <h4>Co robiliśmy na Krupówkach</h4>

      <p>
        Po południu, gdy odpoczęliśmy po drodze, wybraliśmy się na spacer po
        Krupówkach. Zwiedziliśmy Kościół Świętej Rodziny – najstarsza murowana
        świątynia w Zakopanem. Jest to rzymskokatolicki kościół parafialny,
        znajdujący się przy ul. Krupówki 1A.
      </p>

      <p>
        Podczas pobytu na Krupówkach nie mogło się obejść bez smażonego oscypka
        z żurawiną. Odwiedziliśmy sklep z regionalnym alkoholem, w celu
        znalezienia Zakopiańskich nowości. A po zmroku udaliśmy się do karczmy
        na kolację. Chcieliśmy spróbować pierogów z bryndzą, bo nigdy wcześniej
        takich nie jedliśmy. Naszym zdaniem były smaczne. Grzaniec również
        bardzo dobry! Natomiast flaki, które również zamówiliśmy, jedliśmy
        gdzieś indziej o wiele lepsze.
      </p>

      <Carousel figcaption="Spacer po Krupówkach">
        <Img src={wierchy2} alt="Zakopane Krupówki" />
        <Img src={wierchy3} alt="Zakopane Krupówki" />
        <Img src={wierchy4} alt="Zakopane Krupówki" />
        <Img src={wierchy5} alt="Zakopane Krupówki" />
        <Img src={wierchy6} alt="Zakopane Krupówki" />
      </Carousel>

      <h4>Gdzie tradycja?</h4>

      <p>
        Generalnie był to krótki spacer, wyruszyliśmy około 15, a już koło 17
        było ciemno.. Podsumowując same Krupówki jako atrakcję turystyczną, mogę
        powiedzieć, że jest… coraz gorzej! Mimo, że nie byliśmy w sezonie
        największego zatłoczenia, to i tak było bardzo dużo ludzi. Góralskiej
        tradycji trzeba szukać, bo jej nie widać wśród straganów z ciupagami
        made In China i oscypkami z mleka krowiego. Góralskie jedzenie zastąpiły
        kebaby, pizza i hamburgery. Dookoła sieciówki (Mc Donald’s, Costa Cafe,
        Sinsay, Diverse, Armani…) jak w jakimś centrum handlowym! Aaa,
        zapomniałam, przecież stoi tu już prawie ukończona szklana galeria
        handlowa{' '}
        <a
          href="http://krakow.wyborcza.pl/krakow/7,44425,21526000,zaskoczeni-szklana-galeria-na-krupowkach-wsrod-10-makabryl.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          uznana za jedną z dziesięciu makabrył 2016-go roku
        </a>
        .
      </p>

      <Carousel figcaption=" Spacer po Krupówkach, ciąg dalszy">
        <Img src={wierchy7} alt="Zakopane Krupówki" />
        <Img src={wierchy8} alt="Zakopane Krupówki" />
        <Img src={wierchy9} alt="Zakopane Krupówki" />
        <Img src={wierchy10} alt="Zakopane Krupówki" />
        <Img src={wierchy11} alt="Zakopane Krupówki" />
      </Carousel>

      <h4>Recenzja regionalnych piw</h4>

      <p>
        Jak już wspomniałam, odwiedziliśmy sklep z regionalnym alkoholem.
        Postanowiłam więc napisać mini-recenzję dla miłośników piwa.
        Kierowaliśmy się tym, by były to tylko piwa regionalne. Pierwsze -
        Świstok, z uroczym obrazkiem na etykiecie i fajną nazwą, przez co od
        razu rzuciło mi się w oczy. Delikatne pszeniczne, z otwartej
        fermentacji. W sumie dosyć lekkie, czyli właściwie jak standardowe jasne
        piwo.
      </p>

      <p>
        Drugie - Ryży Dżon, także z interesującym obrazkiem z góralem i równie
        ciekawą nazwą. American IPA, gorzkie z aromatem cytrusowym ( mi
        przypominało grapefruita). Ładny zapach, smak dobry (ale ja generalnie
        lubię IPY☺).
      </p>

      <p>
        Jako trzecie wybraliśmy Zakopiańskie, z góralskim wzorem. Było to piwo
        pasteryzowane i niefiltrowane, miało mętny kolor. W smaku było
        mocniejsze niż Świstok, ale słabsze od Ryżego Dżona. Lecz smaczniejsze
        od nich obydwóch.
      </p>

      <p>
        Czwarte, również z obrazkiem górala, a właściwie to bacy - Hruby Baca -
        jase, mocno podchmielone, ale delikatne. Podobało mi się to, że można
        było wyczuć ziołowy aromat, ale nie każdy takowy lubi. Na etykiecie
        wiadomość od samego bacy: „Hruby Baca zwalca kaca, kiej piknom kozicke
        Baca po główce maca!”
      </p>

      <figure className="article-figure">
        <div className="four-img">
          <Img src={piwo1} alt="Ryży Dżon" />
        </div>
        <div className="four-img">
          <Img src={piwo2} alt="Zakopiańskie" />
        </div>
        <div className="four-img">
          <Img src={piwo3} alt="Świstok" />
        </div>
        <div className="four-img">
          <Img src={piwo4} alt="Hruby Baca" />
        </div>
        <figcaption className="article-figcaption">
          Regionalne piwa podhalańskie
        </figcaption>
      </figure>

      <p
        className="link-to-article"
        style={{ marginTop: '3rem', textAlign: 'right' }}
      >
        <ReachLink to="/czerwone-wierchy/wyzej-niz-giewont">
          Zapraszam do kolejnego wpisu z górskiego szlaku. Opisuję w nim naszą
          trasę po tatrzańskich Czerwonych Wierchach
          <i class="icon-angle-right"></i>
        </ReachLink>
      </p>
    </>
  );
};

export default CzerwoneWierchy1;
