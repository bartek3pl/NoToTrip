import React from 'react';
import Carousel from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Carousel';
import Img from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Img';
import Figure from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Figure';
import Header from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Header';
import Subheader from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Subheader';
import P from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/P';
import A from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/A';
import Iframe from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Iframe';
import LinkToArticle from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/LinkToArticle';

import gili1 from '../../assets/images/bali/gili/gili.1.1.jpg';
import gili2 from '../../assets/images/bali/gili/gili.1.2.jpg';
import gili3 from '../../assets/images/bali/gili/gili.1.3.jpg';
import gili4 from '../../assets/images/bali/gili/gili.2.1.jpg';
import gili5 from '../../assets/images/bali/gili/gili.2.2.jpg';
import gili6 from '../../assets/images/bali/gili/gili.2.3.jpg';
import gili7 from '../../assets/images/bali/gili/gili.2.4.jpg';
import gili8 from '../../assets/images/bali/gili/gili.3.1.jpg';
import gili9 from '../../assets/images/bali/gili/gili.3.2.jpg';
import gili10 from '../../assets/images/bali/gili/gili.3.3.jpg';
import gili11 from '../../assets/images/bali/gili/gili.3.4.jpg';

import { articlesLinks } from '../../data/ArticlesData';

const Bali4 = () => {
  return (
    <>
      <Header>
        Wyspy Gili to archipelag trzech wysp: Gili Trawangan, Gili Meno i Gili
        Air. Są one położone przy północno-wschodnim brzegu wyspy Lombok. Gili
        Trawangan przy porcie nazywano “Party Island”, Gili Meno ma
        najpiękniejsze plaże i jest najmniej zaludniona, a Gili Air jest podobno
        mieszanką tych dwóch wysp. My wybraliśmy oczywiście opcję z ciszą,
        spokojem i najlepszymi widokami, czyli Gili Meno :).
      </Header>

      <Subheader>Jak się dostaliśmy na Gili Meno?</Subheader>

      <P>
        Płynęliśmy z portu Padang Bai, a speed boata musieliśmy załatwiać na
        ostatnią chwilę przy porcie (zajrzyjcie do wpisu o naciągaczach). Pan
        sprzedał nam bilet na Gili Trawangan, bo podobno na Gili Meno już w tym
        dniu nic nie odpływało. Jednak nie zwiedziliśmy Gili Trawangan, tylko od
        razu wzięliśmy łódkę na Gili Meno, ponieważ mieliśmy ciężkie plecaki.
      </P>

      <Carousel figcaption="Port na wyspie Gili Meno">
        <Img src={gili1} alt="Gili Meno" />
        <Img src={gili2} alt="Gili Meno" />
        <Img src={gili3} alt="Gili Meno" />
      </Carousel>

      <Subheader>Nocleg i ceny na wyspie</Subheader>

      <P>
        Nocowaliśmy w{' '}
        <A href="https://www.booking.com/hotel/id/rapa-lumbung-homestay.pl.html?aid=304142;label=postbooking_confemail;sid=ee7f84254efc979ed227e8c1a53b418a;dist=0&keep_landing=1&sb_price_type=total&type=total&">
          bungalowach Rapa Lumbung
        </A>{' '}
        i zapłaciliśmy 925K IDR za pięć nocy. Na śniadanie był do wyboru: omlet
        z pomidorami lub naleśnik z bananem i sosem czekoladowym. Restauracje na
        wyspie były droższe niż na Bali (około 80K IDR za obiad, mniej więcej
        tyle samo za drinka i 20K IDR za świeżo wyciskany sok). Wyspy Gili
        należą do wyspy Lombok, na której głównym wyznaniem jest Islam. Dlatego
        już o samym świcie muezzin wołał wiernych do modlitwy. Jako, że
        mieszkaliśmy obok meczetu, to niestety często nas to budziło.
      </P>

      <Carousel figcaption="Całodniowy relaks na plażach Gili Meno 🌴">
        <Img src={gili4} alt="Gili Meno" />
        <Img src={gili5} alt="Gili Meno" />
        <Img src={gili6} alt="Gili Meno" />
        <Img src={gili7} alt="Gili Meno" />
      </Carousel>

      <Subheader>Plaże i nurkowanie</Subheader>

      <P>
        Jak już wspominałam na początku wpisu Gili Meno ma podobno piękniejsze
        plaże niż jej siostry. My plażowaliśmy tylko na tej wyspie. Woda była
        lazurowa i przejrzysta, piasek czysty, biały, pełen muszelek i
        pokruszonych raf. Smutnym faktem jest to, że rafy koralowe giną w
        zastraszająco szybkim tempie. Niestety przez to jest też coraz mniej
        życia pod wodą. Oczywiście ryby nadal występują pod wodą w dużej ilości,
        ale wyobrażam sobie, że kilkanaście lat temu widoki byłyby o niebo
        lepsze. Na szczęście udało nam się na drugim nurkowaniu zobaczyć dużego
        żółwia. Ich też jest na wyspie coraz mniej. Z tego powodu przy plaży
        mieści się domek, w którym są hodowane małe żółwie i turyści mogą
        wesprzeć zajmującą się tym organizację wpłacając pieniądze. Jeszcze ze
        zwierzęcych ciekawostek dodam, że pierwszego dnia spotkaliśmy
        przechadzającego się po piasku małego warana.{' '}
      </P>

      <Carousel figcaption="A tak nam mijał czas na Gili Meno (wraz z mieszkańcami wyspy)🐢">
        <Img src={gili8} alt="Gili Meno" />
        <Img src={gili9} alt="Gili Meno" />
        <Img src={gili11} alt="Gili Meno" />
      </Carousel>

      <Subheader>Trzęsienie ziemi</Subheader>

      <P>
        W sierpniu 2018 miało miejsce{' '}
        <A href="https://www.rmf24.pl/fakty/swiat/news-trzesienie-ziemi-w-indonezji-setki-przerazonych-turystow-cze,nId,2615451">
          trzęsienie ziemi w rejonie wyspy Lombok
        </A>
        . Nietrudno było zauważyć na wyspie skutki tragedii. Mnóstwo
        rozsypujących się ruin domów, barów i hoteli. Trochę jakby połowa wyspy
        była wyspą widmo. Meble, które niegdyś stały w tych domach teraz
        porozrzucane są po różnych zakamarkach wyspy. Widok ten był dosyć
        smutny, lecz niesamowite jest również to, jak szybko mieszkańcy
        przywrócili swoją wyspę do porządku i życia codziennego.
      </P>

      <Figure figcaption="Podwodna rzeźba Nest, Gili Meno">
        <Img src={gili10} alt="Gili Meno" />
      </Figure>

      <P>
        Po relaksie na Gili Meno przyszła pora na bardziej aktywne spędzanie
        czasu. Popłynęliśmy na{' '}
        <LinkToArticle to={articlesLinks.bali.nusa}>Nusa Penida</LinkToArticle>,
        zobacz co zwiedzaliśmy i jak spędzaliśmy czas na wyspie.
      </P>

      <Iframe
        title="Gili Meno"
        src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d505166.2358291583!2d115.50263194133736!3d-8.439784377513693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x2dd20e65faecb639%3A0xe58ac241c09d351!2sPadang%20Bai%20Port%2C%20Bali%2C%20Indonezja!3m2!1d-8.5340796!2d115.5095106!4m5!1s0x2dcddde26639cc7d%3A0x7037d63fdbef1e44!2sGili%20Meno%2C%20Gili%20Indah%2C%20Pemenang%2C%20North%20Lombok%20Regency%2C%20Ma%C5%82e%20Wyspy%20Sundajskie%20Zachodnie%2C%20Indonezja!3m2!1d-8.3470468!2d116.05616529999999!5e0!3m2!1spl!2spl!4v1582395789601!5m2!1spl!2spl"
      />
    </>
  );
};

export default Bali4;
