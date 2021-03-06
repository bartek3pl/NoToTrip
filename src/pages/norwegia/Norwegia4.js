import React from 'react';
import Carousel from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Carousel';
import Img from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Img';
import Header from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Header';
import P from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/P';
import PointLink from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/PointLink';
import Subheader from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Subheader';
import A from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/A';
import LinkToArticle from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/LinkToArticle';
import Iframe from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Iframe';
import '../../components/ArticlesPage/ArticlesContainer/ArticlesContainer/ArticleContainer.scss';

import troll1 from '../../assets/images/norwegia/trolltunga.slider.1.1.jpg';
import troll2 from '../../assets/images/norwegia/trolltunga.slider.1.3.jpg';
import troll3 from '../../assets/images/norwegia/trolltunga.slider.1.4.jpg';
import troll4 from '../../assets/images/norwegia/trolltunga.slider.2.1.jpg';
import troll5 from '../../assets/images/norwegia/trolltunga.slider.2.3.jpg';
import troll6 from '../../assets/images/norwegia/trolltunga.slider.2.6.jpg';
import troll7 from '../../assets/images/norwegia/trolltunga.slider.3.1.jpg';
import troll8 from '../../assets/images/norwegia/trolltunga.slider.3.2.jpg';
import troll9 from '../../assets/images/norwegia/trolltunga.slider.3.3.jpg';
import { articlesLinks } from '../../data/ArticlesData';

const Norway4 = () => {
  return (
    <>
      <Header>
        Język Trolla ma 10 metrów długości, 5 metrów grubości przy nasadzie,
        natomiast na samym czubku jej grubość zwęża się do kilkudziesięciu
        centymetrów. Skała znajduje się na pograniczu płaskowyżu{' '}
        <LinkToArticle to={articlesLinks.norwegia.jotunheimen}>
          Hardangervidda
        </LinkToArticle>
        , około 1100 metrów nad poziomem morza i 700 metrów nad jeziorem
        Ringedalsvatnet.
      </Header>

      <PointLink href="https://www.pandotrip.com/top-10-hiking-trails-in-the-world-2411/">
        Ranking top 10 tras górskich
      </PointLink>

      <PointLink href="https://www.huffingtonpost.com/2013/11/16/trolltunga_n_4267263.html?guccounter=1">
        Jedno z lepszych miejsc do zdjęcia na instagrama
      </PointLink>

      <Subheader>Nasza wyprawa</Subheader>

      <P>
        Po rozgrzewce na{' '}
        <LinkToArticle to={articlesLinks.norwegia.kjeragbolten}>
          Kjeragbolten
        </LinkToArticle>{' '}
        i{' '}
        <LinkToArticle to={articlesLinks.norwegia.preikestolen}>
          Preikestolen
        </LinkToArticle>{' '}
        wybraliśmy się na Trolltungę. Przyznam, że bałam się, czy sobie poradzę
        na tak długiej trasie (14 km w jedną stronę). Dodatkowo, na ten dzień
        zapowiadali opady, co oznaczało dla nas kolejne utrudnienie. Mimo to
        spróbowałam moich sił, by osiągnąć cel wyprawy i zobaczyć w końcu ten
        słynny Język Trolla. Jechaliśmy z południa{' '}
        <LinkToArticle to={articlesLinks.norwegia.jotunheimen}>
          Parku Narodowego Hardangervidda
        </LinkToArticle>{' '}
        do miejscowości Tyssedal. Na dolnym parkingu w Tyssedal byliśmy około
        godziny 10 (jednak radzę Wam przyjechać wcześniej i zacząć wędrówkę
        około 8 rano, jeżeli chcecie na spokojnie iść i nie wracać po ciemku).
      </P>

      <P>
        Za pozostawienie samochodu na 12 godzin na parkingu zapłaciliśmy 300
        NOK, a za 24 godziny 600 NOK. My zaparkowaliśmy pod hostelem obok i
        zapłaciliśmy właścicielce za parking 200 NOK. Radzę się targować. Nie ma
        też problemu z noclegiem, jeśli ktoś chce wyruszyć w trasę np. z samego
        rana. Gospodarze hosteli obok parkingu pozwalali ludziom rozbić namiot
        na dworze, można też wykupić nocleg w pokoju.
      </P>

      <P>
        Za pozostawienie samochodu na 12 godzin na parkingu zapłaciliśmy 300
        NOK, a za 24 godziny 600 NOK. My zaparkowaliśmy pod hostelem obok i
        zapłaciliśmy właścicielce za parking 200 NOK. Radzę się targować. Nie ma
        też problemu z noclegiem, jeśli ktoś chce wyruszyć w trasę np. z samego
        rana. Gospodarze hosteli obok parkingu pozwalali ludziom rozbić namiot
        na dworze, można też wykupić nocleg w pokoju.
      </P>

      <Carousel figcaption="Po krętym podejściu, doszliśmy do torfowiska">
        <Img src={troll1} alt="Trolltunga" />
        <Img src={troll2} alt="Trolltunga" />
        <Img src={troll3} alt="Trolltunga" />
      </Carousel>

      <P>
        Następnie droga prowadziła przez torfowisko. Tego dnia tereny były
        bardzo podmokłe i błotniste. Na szczęście drewniane mosty umożliwiały
        przejście na drugą stronę rzek. A deski pomagały nam przejście w suchych
        butach przez drogę. Dookoła rozpościerał się widok na góry i malowniczy
        krajobraz z drewnianymi chatami w tle.
      </P>

      <P>
        Później było podejście około 400 metrów po kamiennych schodkach.
        Następnie szliśmy około 8 kilometrów po skalnym terenie, w miarę
        płaskim, lecz momentami bywało trudno i ślisko. Jak widać na zdjęciach
        mgła była wyjątkowo gęsta.
      </P>

      <Carousel
        figcaption="Niektórzy rozbijają tu namioty, a podczas drogi mija się dwa domki -
          schroniska"
      >
        <Img src={troll4} alt="Trolltunga" />
        <Img src={troll5} alt="Trolltunga" />
        <Img src={troll6} alt="Trolltunga" />
      </Carousel>

      <P>
        Po przebytych następnych trzech kilometrach zobaczyliśmy chatkę - schron
        dla turystów oraz ratownika górskiego zmierzającego w naszym kierunku.
        Poinformował nas, że “The weather is crazy and it’s getting dark very
        early” i zalecił zejść na dół. Jednak stwierdziliśmy, że “We will go,
        anyway”. No, w końcu od Języka dzieliło nas już tylko 5 kilometrów!
        Deszcz nam nie przeszkadzał, aż tak bardzo, szkoda tylko, że nie
        mogliśmy przez niego latać dronem. Żałowaliśmy też, że przez mgłę nie
        widzieliśmy jeziora Ringedalsvatnet oraz klifów w całej okazałości.
        Następnie jakieś 3 kilometry od celu stał kolejny drewniany domek –
        schron dla turystów. Widzieliśmy też kilka namiotów rozbitych w górskiej
        dziczy, pomimo warunków pogodowych.
      </P>

      <P>
        Gdy dotarliśmy do Trolltungi, była z nami tylko trójka Azjatów w
        kolorowych pelerynach i nie było kolejki ludzi do zdjęć (o której na
        większości portali można przeczytać). Jednak “crazy weather” zrobiła
        swoje. Poprosiliśmy więc jedną osobę, aby zrobiła nam zdjęcie.
        Podziwialiśmy widoki zza mgły, jednocześnie ubolewając nad tym, że nie
        widzieliśmy krajobrazu w całej okazałości. Wrócimy tu jeszcze kiedyś,
        jak będzie słonecznie... Z drugiej strony taka pogoda też ma swój
        mroczny klimat... Przygoda była z pewnością przez nią niezapomniana!
      </P>

      <Carousel figcaption="W końcu zawitaliśmy u Trolla.. a właściwie na jego języku ;)">
        <Img src={troll7} alt="Trolltunga" />
        <Img src={troll8} alt="Trolltunga" />
        <Img src={troll9} alt="Trolltunga" />
      </Carousel>

      <Subheader>Praktyczne informacje</Subheader>

      <P>
        Na szlak można się wybrać bez przewodnika od 15 czerwca do 15 września,
        z przewodnikiem w rakietach śnieżnych lub nartach od 19 marca do 15
        czerwca i od 15 września do 15 października. Od 16 października do 18
        marca chodzenie po górach jest zbyt niebezpieczne ze względu na ilość
        śniegu. Trasa jest oznaczona czerwoną literką T (jak widać na
        zdjęciuach).
      </P>

      <P>
        Przejście zajmuje od 10 do 12 godzin, trasa należy do trudnych i
        wymagających. Możecie iść z kijkami, zabrać psy i latać dronem. Na
        początku drogi można znaleźć mapkę z zaznaczonym terenem, gdzie można
        rozbić namioty. Osobiście naliczyłam pięć na końcówce drogi, już blisko
        Trolltungi. Widocznie są ludzie, których nie martwią niesprzyjające
        warunki pogodowe…
      </P>

      <P>
        A dla tych, którym zależy na pięknej pogodzie podczas wyprawy,{' '}
        <A href="https://www.yr.no/place/Norway/Hordaland/Odda/Trolltunga/">
          aktualna pogoda
        </A>
        .
      </P>

      <Iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d310653.9614548858!2d6.535580252536846!3d60.205541150261695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463e997b1b732151%3A0x9b7c92bfdc268ed8!2sJ%C4%99zyk+trolla!5e0!3m2!1spl!2spl!4v1544121961705"
        title="Trolltunga"
      />
    </>
  );
};

export default Norway4;
