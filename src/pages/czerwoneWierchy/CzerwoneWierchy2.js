import React from 'react';
import Carousel from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Carousel';
import Img from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Img';
import Header from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Header';
import P from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/P';
import A from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/A';
import Figure from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Figure';
import LinkToArticle from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/LinkToArticle';
import '../../components/ArticlesPage/ArticlesContainer/ArticlesContainer/ArticleContainer.scss';

import mapa from '../../assets/images/wierchy/mapa.jpg';
import wierchy1 from '../../assets/images/wierchy/wierchyii.slider.1.2.jpg';
import wierchy2 from '../../assets/images/wierchy/wierchyii.slider.1.4.jpg';
import wierchy3 from '../../assets/images/wierchy/wierchyii.slider.1.5.jpg';
import wierchy4 from '../../assets/images/wierchy/wierchyii.slider.2.1.jpg';
import wierchy5 from '../../assets/images/wierchy/wierchyii.slider.2.3.jpg';
import wierchy6 from '../../assets/images/wierchy/wierchyii.slider.2.4.jpg';
import wierchy7 from '../../assets/images/wierchy/wierchyii.slider.3.1.jpg';
import wierchy8 from '../../assets/images/wierchy/wierchyii.slider.3.2.jpg';
import wierchy9 from '../../assets/images/wierchy/wierchyii.slider.3.3.jpg';
import wierchy10 from '../../assets/images/wierchy/wierchyii.slider.3.4.jpg';
import wierchy11 from '../../assets/images/wierchy/wierchyii.slider.3.5.jpg';
import wierchy12 from '../../assets/images/wierchy/wierchyii.slider.3.6.jpg';
import { articlesLinks } from '../../data/ArticlesData';

const CzerwoneWierchy2 = () => {
  return (
    <>
      <Header>
        Drugi dzień był o wiele ciekawszy i było nieco więcej natury, niż na
        Krupówkach. Wybraliśmy się w góry. Wiele osób ostrzega przed wędrówkami
        w listopadzie, bo już leży śnieg, jest zimniej, bardziej ślisko i często
        słyszy się, że już ktoś zamarzł… No cóż, Nas to nie przekonało do
        pozostania w domu… Norwegia nauczyła nas więcej pokory wobec gór. Poza
        tym przecież zawsze można jeszcze zawrócić na szlaku.. Warto chociaż
        spróbować swoich sił :).
      </Header>

      <P>
        Trasą zainspirowaliśmy się z{' '}
        <A href="http://natatry.pl/tatry-zachodnie/okolice-giewontu/czerwone-wierchy">
          tej strony
        </A>
        .
      </P>

      <Figure figcaption="Trasa przez Czerwone Wierchy">
        <Img
          src={mapa}
          style={{ width: '30%', margin: '0 auto', display: 'block' }}
          alt="czerwone wierchy mapa"
        />
      </Figure>

      <P>
        W trasę wyruszyliśmy koło 9 rano. Zaparkowaliśmy na parkingu w Groniku
        (cena 10 zł). Najpierw jakieś 20 minut szliśmy lasem do Przysłopu
        Miętusiego.
      </P>

      <P>
        Na przysłopie stoją ławki i stoliki, więc można coś zjeść i odpocząć.
        Tutaj drogi rozwidlają się na szlak czarny, niebieski i czerwony. Więc
        jest jeszcze możliwość na zmienienie zdania i pójścia na przykład na
        Giewont, jakby ktoś poczuł, że ma dość sił. Zaczyna się tu piękny
        krajobraz, widać też kawałek gór po prawej stronie, które wyglądają jak
        zniszczone przez stopę trolla, wędrującego z Norwegii aż do Tatr.
      </P>

      <Carousel figcaption="Przez las w stronę Przysłopu Miętusiego">
        <Img src={wierchy1} alt="Czerwone Wierchy" />
        <Img src={wierchy2} alt="Czerwone Wierchy" />
        <Img src={wierchy3} alt="Czerwone Wierchy" />
      </Carousel>

      <P>
        Następnie od Małołączniaka dzieliły Nas jakieś 4 kilometry dość męczącej
        drogi, w większości skalistej i mocno pod górę. Dla przeciętnych osób
        (takich jak ja) oceniłabym ten odcinek na średniozaawansowany. Ale na
        pocieszenie dodam, że na początku idzie się ładnym laskiem po płaskim
        terenie. Później jest spory odcinek dosyć stromej drogi, gdzie kawałek
        idzie się skałami, trzymając łańcucha… Jak na{' '}
        <LinkToArticle to={articlesLinks.norwegia.kjeragbolten}>
          Kjeragbolten
        </LinkToArticle>{' '}
        :).
      </P>

      <Carousel figcaption="Wspinaczka na szczyt Małołączniaka">
        <Img src={wierchy4} alt="Czerwone Wierchy" />
        <Img src={wierchy5} alt="Czerwone Wierchy" />
        <Img src={wierchy6} alt="Czerwone Wierchy Małołączniak" />
      </Carousel>

      <P>
        I wreszcie, pierwszy szczyt - Małołączniak (2 096 m.n.p.m), po jakiś
        trzech godzinach drogi zaliczony! Na ostatnim zdjęciu widać Giewont.
        Następnie na Krzesanicę (2 122 m.n.p.m) znów podchodzi się lekko pod
        górę, ale droga była łatwiejsza i o wiele krótsza.
      </P>

      <P>
        Ostatnim szczytem był Ciemniak (2 096 m). Stąd widoki podobały mi się
        najbardziej. Masywy górskie przypominały scenerię z “Władcy Pierścieni”.
        Widok jak najbardziej wart zobaczenia.
      </P>

      <P>
        Później z Ciemniaka zeszliśmy do Chudej Przełęczy i stamtąd do Kir.
        Zejście zajęło nam około 3 godziny i mieliśmy mało czasu. Niestety
        ostatnie pół godziny trasy musieliśmy pokonywać po ciemku. W Kirach
        byliśmy około 17 i tam wybraliśmy się do karczmy na obiad. Zamówiliśmy
        spagetti bolognese i ogórkową. Jedzenie było raczej przeciętne, ale w
        dobrej cenie, a poza tym po górach wszystko smakuje dobrze. Po jedzeniu
        czekała nas jeszcze godzinna droga do samochodu… A następnie 5 godzin w
        aucie w drodze do Wrocławia.
      </P>

      <Carousel figcaption="Widoki z trzech szczytów">
        <Img src={wierchy7} alt="Czerwone Wierchy" />
        <Img src={wierchy8} alt="Czerwone Wierchy Giewont" />
        <Img src={wierchy9} alt="Czerwone Wierchy Kopa Kondracka" />
        <Img src={wierchy10} alt="Czerwone Wierchy Krzesanica" />
        <Img src={wierchy11} alt="Czerwone Wierchy Krzesanica" />
        <Img src={wierchy12} alt="Czerwone Wierchy Małołączniak" />
      </Carousel>

      <P>
        Ogólnie trasa jak najbardziej warta przejścia, a widoki warte
        zobaczenia. Jedynym minusem wycieczki było to, że wyliczyliśmy sobie, że
        przejdziemy ją w 7 godzin, a przeszliśmy w ponad 8 i musieliśmy kawałek
        iść po ciemku.
      </P>
    </>
  );
};

export default CzerwoneWierchy2;
