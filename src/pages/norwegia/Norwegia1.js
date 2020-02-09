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

import kjerag1 from '../../assets/images/norwegia/kjerag.slajder.1.1.jpg';
import kjerag2 from '../../assets/images/norwegia/kjerag.slajder.1.2.jpg';
import kjerag3 from '../../assets/images/norwegia/kjerag.slajder.1.3.jpg';
import kjerag4 from '../../assets/images/norwegia/kjerag.slajder.1.4.jpg';
import kjerag5 from '../../assets/images/norwegia/kjerag.slajder.2.1.jpg';
import kjerag6 from '../../assets/images/norwegia/kjerag.slajder.2.2.jpg';
import kjerag7 from '../../assets/images/norwegia/kjerag.slajder.2.3.jpg';
import kjerag8 from '../../assets/images/norwegia/kjerag.slajder.3.2.jpg';
import kjerag9 from '../../assets/images/norwegia/kjerag.slajder.3.3.jpg';
import kjerag10 from '../../assets/images/norwegia/kjerag.slajder.3.4.jpg';
import kjerag11 from '../../assets/images/norwegia/kjerag.slajder.3.5.jpg';
import kjerag12 from '../../assets/images/norwegia/kjerag.uklad.1.jpg';

const Norway1 = () => {
  return (
    <>
      <Header>
        Na górze Kjerag położonej nad Lysefjordem, nieopodal miasta Forsand w
        okręgu Rogaland znajduje się głaz Kjeragbolten, zaklinowany pomiędzy
        dwiema skałami. Z tego miejsca rozciąga się piękny widok na Lysefjorden.
        Najwyższy punkt góry wznosi się na wysokość 1100 metrów nad poziomem
        morza. Po drugiej stronie znajduje się{' '}
        <LinkToArticle to="/norwegia/preikestolen-najslynniejsza-polka-skalna-w-norwegii">
          Preikestolen
        </LinkToArticle>
        .
      </Header>

      <Subheader>Praktyczne informacje</Subheader>

      <P>
        Warto wiedzieć, że na przełomie października i listopada, wyprawa jest
        możliwa tylko ze specjalnym wyposażeniem oraz z przewodnikiem. Wtedy
        śnieg jest głęboki, a narty lub śniegowce są niezbędne. Nam pod koniec
        sierpnia trafiła się ładna pogoda. Drogę zaczęliśmy o godzinie 16,
        ponieważ zależało nam na spacerze podczas "golden hour". Dla osób które
        o tym nie słyszały - jest to godzina po wschodzie Słońca i godzina przed
        zachodem Słońca, podczas której emitowane jest światło o złotym kolorze.
      </P>

      <Carousel figcaption="Droga przez skały Kjeragu">
        <Img src={kjerag1} alt="Kjeragbolten" />
        <Img src={kjerag2} alt="Kjeragbolten" />
        <Img src={kjerag3} alt="Kjeragbolten" />
        <Img src={kjerag4} alt="Kjeragbolten" />
      </Carousel>

      <P>
        Trasa zajęła nam około 4h 15 min (w dwie strony), szlak do Kjeragbolten
        miał 4,6 kilometra długości. Nie widzieliśmy zakazu latania dronem.
      </P>

      <Subheader>Nasza wyprawa</Subheader>

      <P>
        Zanim przyjechaliśmy na miejsce, musieliśmy pokonać samochodem drogę
        prowadzącą z Lysebotn przez 27 serpentyn. Trasę rozpoczęliśmy od
        parkingu przy restauracji Øygardstølen. Stanowi ona centrum turystyczne
        i jest położonej 640 metrów poniżej wioski Lysebotn. Koszt parkingu
        wynosił 200 NOK. Na szczyt góry wiodła skalna, stroma droga. Trasa była
        wymagająca, szczególnie na samym początku, gdzie na ostrzejszych
        podejściach były łańcuchy. Dlatego bardzo odradzam wyprawę w deszcz, lub
        z kijkami. Pomimo trudnej drogi mijaliśmy sporo rodzin z dziećmi, a
        nawet rodziców niosących maluchy w chuście.
      </P>

      <P>
        Po około kilometrze wspinaczki zeszliśmy do trawiastej doliny,
        odwiedzanej przez liczne stada owiec. Jest tam również położone jezioro,
        którego tafla odbijała niebo jak lustro.
      </P>

      <Carousel figcaption="Malownicze góry i ich mieszkańcy">
        <Img src={kjerag5} alt="Kjeragbolten owce" />
        <Img src={kjerag6} alt="Kjeragbolten" />
        <Img src={kjerag7} alt="Kjeragbolten" />
      </Carousel>

      <P>
        Później wchodzi się po schodach i idzie skalną drogą w kierunku
        Kjeragbolten. Po 3 km drogi znaleźliśmy się na skalnym pustkowiu i nie
        wiedzieliśmy jak dalej podążać, musieliśmy zapytać innych turystów.
        Szlak przez całą drogę był oznaczony literką T, jednak w tym miejscu
        gdzieś nam się urwał.. Więc przez pewien czas szukaliśmy właściwej
        drogi. Widoki są niesamowite!
      </P>

      <Carousel figcaption="Czarujący krajobraz rozpościerający się po całym paśmie gór">
        <Img src={kjerag8} alt="Kjeragbolten" />
        <Img src={kjerag9} alt="Kjeragbolten" />
        <Img src={kjerag10} alt="Kjeragbolten" />
        <Img src={kjerag11} alt="Kjeragbolten" />
      </Carousel>

      <P>
        Pod koniec, na sam punkt widokowy - Kjeragbolten, idzie się dosyć wąskim
        przesmykiem, którym płynie rzeczka. Trzeba więc być uważnym, aby nie
        zamoczyć butów. Gwarantuję, że po przejściu tego kawałka, widoki oraz
        zam głaz zrobią z pewnością na Was ogromne wrażenie!
      </P>

      <Figure figcaption="Kjeragbolten zdobyty!">
        <Img src={kjerag12} alt="Kjeragbolten" />
      </Figure>

      <P>
        Następnego dnia w planach mieliśmy{' '}
        <LinkToArticle to="/norwegia/preikestolen-najslynniejsza-polka-skalna-w-norwegii">
          Preikestolen
        </LinkToArticle>
        . Zapraszam do wpisu z tej wyprawy, gdzie opisuję szczegółowo możliwości
        dojazdu z Kjeragbolten do Preikestolen oraz całą naszą wyprawę.
      </P>

      <Iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d393200.5516582081!2d5.84519308554446!3d59.08105045296021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463976bf7ab2505d%3A0x976d2a12b25abbc2!2sKjeragbolten!5e0!3m2!1spl!2spl!4v1544122081532"
        title="Kjeragbolten"
      />
    </>
  );
};

export default Norway1;
