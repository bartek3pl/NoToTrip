import React from 'react';
import Carousel from '../../components/ArticlesPage/ArticlesContainer/Carousel';
import Img from '../../components/ArticlesPage/ArticlesContainer/Img';
import '../../components/ArticlesPage/ArticlesContainer/ArticlesContainer/ArticleContainer.scss';

import joste1 from '../../assets/images/norwegia/jostedalsbreen-mapa.jpg';
import joste2 from '../../assets/images/norwegia/jestedals.slider.1.1.jpg';
import joste3 from '../../assets/images/norwegia/jostedals.slider.2.1.jpg';
import joste4 from '../../assets/images/norwegia/jostedals.slider.3.2.jpg';
import joste5 from '../../assets/images/norwegia/jostedals.slider.3.1.jpg';
import joste6 from '../../assets/images/norwegia/jostedals.slider.3.3.jpg';
import joste7 from '../../assets/images/norwegia/jostedals.slider.4.1.jpg';
import joste8 from '../../assets/images/norwegia/jostedals.slider.4.5.jpg';
import joste9 from '../../assets/images/norwegia/jostedals.slider.4.3.jpg';
import joste10 from '../../assets/images/norwegia/jostedals.slider.5.1.jpg';
import joste11 from '../../assets/images/norwegia/jostedals.slider.5.2.jpg';

const Norway5 = () => {
  return (
    <>
      <h3>
        W południowo-zachodniej części Norwegii, pomiędzy Sognefjordem a
        Nordfjordem rozciąga się największy lodowiec w kontynentalnej Europie.
        Leży w południowo-zachodniej części Norwegii, w okręgu Sogn og Fjordane.
        Jego najwyższym szczytem jest Lodalskåpa – nunatak mający wysokość 2083
        m. Ogólna powierzchnia lodowca wynosi 487 km². Najwyższy punkt, Høgste
        Breakulen, sięga 1957 m n.p.m.
      </h3>

      <figure className="article-figure">
        <img
          src={joste1}
          style={{ width: '30%', margin: '0 auto', display: 'block' }}
          alt="briksdalsbreen mapa"
        />
        <figcaption className="article-figcaption">Mapa lodowca</figcaption>
      </figure>

      <p>
        Grubość Jostedalsbreen sięga w niektórych miejscach 600 m, długość –
        nieco ponad 60 km. Istnienie Jostedalsbreen, mimo niesprzyjających
        (dodatnich) temperatur, umożliwiają stałe i obfite opady śniegu. Jednak
        z tego powodu części lodowca leżące niżej są narażone na wysokie
        topnienie.
      </p>

      <figure className="article-figure">
        <img
          src={joste2}
          style={{ borderRight: '1px #fff solid' }}
          alt="briksdalsbreen"
        />
        <figcaption className="article-figcaption">
          Lodowcowe przebłyski z samochodu
        </figcaption>
      </figure>

      <h4>Briksdalsbreen</h4>

      <p>
        Do Briksdalsbreen łatwo się dostać, dlatego jest najbardziej znanym
        ramieniem lodowca Jostedalsbreen. Dojedziemy z miejscowości Olden,
        brzegiem jeziora Oldevatnet. Niedaleko Briksdalsbreen znajduje się
        również jęzor Melkovollbreen. Kolejne ramiona to Kjenndalsbreen i
        Bødalsbreen leżą nad jeziorem Lovatnet, około 21 km od Olden. Warto
        również wspomnieć o tym, że z powodu zawartości drobnych cząstek lodu
        zawieszonych w wodach, jeziora mają niesamowity turkusowy kolor.
      </p>

      <figure className="article-figure">
        <Img src={joste3} alt="Jostedalsbreen" />
        <figcaption className="article-figcaption">
          Z powodu zawartości drobnych cząstek lodu zawieszonych w wodach,
          jeziora mają niesamowity turkusowy kolor
        </figcaption>
      </figure>

      <p>
        Briksdalsbreen w ciągu kilku miesięcy straciło 50 m lodu. W tym samym
        roku lodowiec zmniejszył się tam aż o 146 m. Wobec tego istnieje
        niebezpieczeństwo oderwania się całego ramienia od trzonu lodowca.
        Dlatego też na Briksdalsbreen zakazano uprawiania wspinaczki lodowej. W
        ciągu ostatnich 30 lat całkowita powierzchnia lodowców zmniejszyła się o
        11 procent. Od lat 80. zniknęło ich aż 362 kilometry kwadratowe. Cofanie
        się lodowców postępuje najszybciej w północnej części kraju.
      </p>

      <h4>Nasza wyprawa</h4>

      <p>
        Od parkingu prowadziła pod górę leśna droga. Już na samym początku
        trasy, dołączyły do nas owcze towarzyszki. Po około kilometrze
        zatrzymaliśmy się na polanie, która wyglądem przypominała Wioskę
        Hobbitów. Wśród trawy i skał stał maleńki, stary, drewniany domek z
        trawiastym dachem. W środku w pełni umeblowany i dobrze wyposażony. W
        środku znajdowało wszystko czego potrzeba, tzn.: naczynia, przenośny
        grill, świeczki, komiksy, mały piecyk, stolik, krzesła, pościelone łóżko
        i mini strych z drugim miejscem do spania. Nic, tylko brać śpiwór i
        nocować.
      </p>

      <Carousel figcaption="Drewniana chatka na wzgórzu, pytanie brzmi kto tu mieszka?">
        <Img src={joste4} alt="Jostedalsbreen" />

        <Img src={joste5} alt="Jostedalsbreen" />

        <Img src={joste6} alt="Jostedalsbreen" />
      </Carousel>

      <p>
        Dalsza droga prowadziła około kilometr przez las, później zaczął się
        kamienisty teren Następnie doszliśmy do wodospadu i wysokich skał, tam
        musieliśmy już zakończyć wędrówkę, ponieważ nie dało się go przejść.
        Usiedliśmy więc i oglądaliśmy lodowcowy wodospad.
      </p>

      <Carousel figcaption="Czubek jęzora lodowca Briksdalsbreen">
        <Img src={joste7} alt="Jostedalsbreen" />

        <Img src={joste8} alt="Jostedalsbreen" />

        <Img src={joste9} alt="Jostedalsbreen" />
      </Carousel>

      <p>
        Wieczorem, ogromnym problemem okazało się znalezienie miejsca
        noclegowego pod namiot. Objechaliśmy jezioro Lovatnet, ponieważ zależało
        nam na tym, aby tam się rozbić, ze względu na piękne widoki. Jednak
        wszędzie wisiały zakazy campingu. Koniec końców noc spędziliśmy na
        parkingu przy Innvikfjorden, a rano przywitał nas niesamowity widok
        jeziora o lustrzanej tafli.
      </p>

      <Carousel
        figcaption="Rano przywitał nas czarujący krajobraz. Śniadanie z takim widokiem to
          idealny początek dnia!"
      >
        <Img src={joste10} alt="Jostedalsbreen" />

        <Img src={joste11} alt="Jostedalsbreen" />
      </Carousel>

      <h4>Informacje praktyczne</h4>

      <p>
        Jeżeli chcecie wyruszyć na pełną wycieczkę na lodowiec, nigdy nie róbcie
        tego na własną rękę. Najpopularniejsze wycieczki to od strony wschodniej
        - lodowiec Nigardsbreen oraz od zachodniej strony - Tystigbreen.
        Wycieczki organizowane są w sezonie letnim od początku lipca do końca
        sierpnia i obowiązkowy jest specjalistyczny sprzęt.
      </p>

      <p>
        Tutaj znajdziecie{' '}
        <a
          href="https://www.briksdaladventure.com/aktiviteter/glacier-guiding-in-stryn"
          target="_blank"
          rel="noopener noreferrer"
        >
          oferty
        </a>{' '}
        i{' '}
        <a
          href="https://www.bfl.no/en/nigardsbreen-en/nigardsbreen-information"
          target="_blank"
          rel="noopener noreferrer"
        >
          informacje o wycieczkach
        </a>
        .
      </p>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d663918.9130229328!2d7.3292789816788835!3d61.76450423440927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x461676d6a67b0bb1%3A0xf55e00ebc6de90c7!2s6792+Briksdalsbre%2C+Norwegia!5e0!3m2!1spl!2spl!4v1544126300769"
        className="gmap"
        title="Jostedalsbreen"
      />
    </>
  );
};

export default Norway5;
