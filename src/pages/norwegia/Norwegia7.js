import React from 'react';
import Carousel from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Carousel';
import Img from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Img';
import Header from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Header';
import P from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/P';
import Subheader from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Subheader';
import LinkToArticle from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/LinkToArticle';
import Iframe from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Iframe';
import '../../components/ArticlesPage/ArticlesContainer/ArticlesContainer/ArticleContainer.scss';

import aurland1 from '../../assets/images/norwegia/aurland.slider.1.1.jpg';
import aurland2 from '../../assets/images/norwegia/aurland.slider.1.4.jpg';
import aurland3 from '../../assets/images/norwegia/aurland.slider.2.1.jpg';
import aurland4 from '../../assets/images/norwegia/aurland.slider.2.2.jpg';
import aurland5 from '../../assets/images/norwegia/aurland.slider.2.3.jpg';
import aurland6 from '../../assets/images/norwegia/aurland.slider.2.8.jpg';
import aurland7 from '../../assets/images/norwegia/aurland.slider.3.5.jpg';
import aurland8 from '../../assets/images/norwegia/aurland.slider.3.6.jpg';
import aurland9 from '../../assets/images/norwegia/aurland.slider.3.1.jpg';
import { articlesLinks } from '../../data/ArticlesData';

const Norway7 = () => {
  return (
    <>
      <Header>
        Te trzy miasta leżą w okręgu Sogn Og Fjordane. Klimat nadają im strome
        górskie zbocza, otaczające je z każdej strony. Platforma Stegestein w
        Aurland gwarantuje niesamowity widok. Zabytkowe drewniane domy i kościół
        w Laerdal tworzą niesamowity klimat, który zapamiętacie na długo. A
        Flåmsbana umożliwi wygodną podróż wzdłuż fiordu, pełna pięknych widoków.
      </Header>

      <Subheader>Aurland</Subheader>

      <P>
        Główną atrakcją turystyczną w tym mieście jest punkt widokowy -
        Stegestein. Platforma jest umieszczona 650 metrów nad wodą, wystaje 30
        nad fiordem. Jest zbudowana z klejonego drewna i stali. Widok z tego
        miejsca naprawdę zapiera dech w piersiach. Na tzw. Śnieżnej Drodze
        łączącej miasta Aurland i Laerdal znajduje się Narodowy Szlak
        Turystyczny Aurlandsfjellet. Jest on położony na ośnieżonym grzbiecie
        górskim, a jego łączna długość to 47 km.
      </P>

      <Carousel figcaption="Widok na fiord z platformy Stegestein w Aurland">
        <Img src={aurland1} alt="Stegestein" />
        <Img src={aurland2} alt="Stegestein" />
      </Carousel>

      <P>
        Jest to miejscowość, a zarazem gmina, leżąca nad Aurlansfjordem. To
        portowe miasteczko jest bardzo zadbane i malownicze. Zamieszkałabym
        tutaj, nie tylko dlatego, że domki tutaj były takie ładne, ale ze
        względu na ich umiejscowienie. W mieście znajduje się zabytkowy kamienny
        Kościół luteriański - Vangen kyrkje. Wzniesiony w 1202 roku, w stylu
        gotyckim.
      </P>

      <Carousel figcaption="Portowe miasteczko Aurland">
        <Img src={aurland3} alt="Aurland port" />
        <Img src={aurland4} alt="Aurland norwegia" />
        <Img src={aurland5} alt="Aurland norweiga" />
        <Img src={aurland6} alt="Aurland norwegia" />
      </Carousel>

      <Subheader>Lærdal</Subheader>

      <P>
        W Laerdal znajduje się najdłuższy, w całości oświetlony tunel drogowy w
        Europie. Na rondzie są kolorowe światła i wygląda to naprawdę magicznie.
        Ma on 24 510 m długości, więc jadąc po pewnym czasie trzeba uważać, aby
        nie zasnąć z tej monotonii i ciemności ;).
      </P>

      <P>
        Centrum miasta w Lærdalsøyri jest popularnym obiektem turystycznym, z
        ponad 150 drewnianymi domami pochodzącymi z XVI i XVII wieku. Drugą
        atrakcją turystyczną w Gminie Laerdal jest kościół w Borgund. Jest to
        kościół klepkowy - zbudowany z samego drewna, styl charakterystyczny dla
        Norwegii. Powstał w 1150 roku i został dedykowany apostołowi Andrzejowi.
        Przed wejściem znajduje się mały cmentarz, nagrobki składają się tylko z
        kamiennych tablic, nie zajmują więc dużo miejsca. Jest to kościół
        luterański. Luteranie nie uznają kultu świętych, obrazów i relikwii,
        dlatego ich kościoły są skromnie wyposażone. Panuje minimalizm
        dekoracyjny, jak i również samych obrzędów religijnych. Osoby duchowne
        nie muszą żyć w celibacie, a msze mogą odprawiać również kobiety.
        Chociaż około 73% jest wiary luterańskiej, frekwencja w świątyniach
        wynosi tylko 10%. Członkami innych wspólnot religijnych jest około 10%
        ludności.{' '}
        <b>
          Największymi mniejszościami religijnymi w Norwegii są: muzułmanie,
          katolicy i zielonoświątkowcy, a 17% ludności jest niewierząca.
        </b>
      </P>

      <Carousel figcaption="Drewniane domy i zabytkowy kościół w Lærdal">
        <Img src={aurland7} alt="Lærdal norwegia" />
        <Img src={aurland8} alt="Lærdal norwegia" />
        <Img src={aurland9} alt="Lærdal norweiga" />
      </Carousel>

      <Subheader>Flåm</Subheader>

      <P>
        Na zakończenie dodam jeszcze ważną informację. Około 9 kilometrów na
        południe od Aurland mieści się piękne miasteczko Flåm. Żałuję, że tylko
        przez nie przejechaliśmy i nie zdążyliśmy zagościć tam na dłużej. We
        Flåm znajduje się końcowa stacja zelektryfikowanej kolejki Flåmsbana
        biegnąca do Myrdal gdzie łączy się z główną trasą Bergensbanen. Czyli
        linią kolejową łączącą dwa największe miasta w Norwegii, Oslo i Bergen.
      </P>

      <P>
        Linia Flåmsbana jest jednym z najwyżej położonych szlaków kolejowych w
        Europie. Przebiega ona wzdłuż Sognefjordu. To jedna z najbardziej
        stromych linii kolejowych na normalnym torze na świecie. Następnym
        razem, gdy tu wrócimy koniecznie przejedziemy się koleją i zawitamy we
        Flåm na dłużej.
      </P>

      <P>
        Kolejnego dnia spacerowaliśmy po{' '}
        <LinkToArticle to={articlesLinks.norwegia.jotunheimen}>
          Jotunheimen
        </LinkToArticle>
        . Udając się na północ, znowu pogoda i temperatura dały nam o sobie
        znać. Po więcej szczegółów zapraszam do wpisu!
      </P>

      <Iframe
        src="https://www.google.com/maps/embed?pb=!1m34!1m12!1m3!1d2385499.950378353!2d6.053180739234141!3d61.95315113288129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m19!3e0!4m5!1s0x463e16c6300416d9%3A0xdbf113d4d3f4ad23!2sAurland%2C+Norwegia!3m2!1d60.9068343!2d7.190534899999999!4m5!1s0x463e266a30594dbf%3A0x58659fc36e552ac3!2sL%C3%A6rdal%2C+Norwegia!3m2!1d61.0992726!2d7.4925994!4m5!1s0x463e13cfcfc357c3%3A0x33286ff6aad510c5!2zRmzDpW0sIE5vcndlZ2lh!3m2!1d60.8607716!2d7.1117849!5e0!3m2!1spl!2spl!4v1544309484494"
        title="Aurland"
      />
    </>
  );
};

export default Norway7;
