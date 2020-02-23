import React from 'react';
import Carousel from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Carousel';
import Img from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Img';
import Header from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Header';
import Subheader from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Subheader';
import P from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/P';
import A from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/A';
import LinkToArticle from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/LinkToArticle';
import Iframe from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Iframe';
import { articlesLinks } from '../../data/ArticlesData';

import munduk1 from '../../assets/images/bali/munduk/munduk.1.1.jpg';
import munduk2 from '../../assets/images/bali/munduk/munduk.1.2.jpg';
import munduk3 from '../../assets/images/bali/munduk/munduk.1.3.jpg';
import munduk4 from '../../assets/images/bali/munduk/munduk.1.4.jpg';
import munduk5 from '../../assets/images/bali/munduk/munduk.2.1.jpg';
import munduk6 from '../../assets/images/bali/munduk/munduk.2.2.jpg';
import munduk8 from '../../assets/images/bali/munduk/munduk.3.1.jpg';
import munduk9 from '../../assets/images/bali/munduk/munduk.3.2.jpg';
import munduk10 from '../../assets/images/bali/munduk/munduk.3.3.jpg';
import munduk11 from '../../assets/images/bali/munduk/munduk.3.4.jpg';
import munduk12 from '../../assets/images/bali/munduk/munduk.3.5.jpg';
import munduk13 from '../../assets/images/bali/munduk/munduk.4.1.jpg';
import munduk14 from '../../assets/images/bali/munduk/munduk.4.2.jpg';
import munduk15 from '../../assets/images/bali/munduk/munduk.4.3.jpg';
import munduk16 from '../../assets/images/bali/munduk/munduk.4.4.jpg';
import munduk17 from '../../assets/images/bali/munduk/munduk.4.5.jpg';
import munduk18 from '../../assets/images/bali/munduk/munduk.5.2.jpg';
import munduk19 from '../../assets/images/bali/munduk/munduk.5.3.jpg';

const Bali3 = () => {
  return (
    <>
      <Header>
        Munduk to miejsce położone nad jeziorem Tamblingan, w górach na
        północnym zachodzie wyspy Bali. Jego krajobraz i klimat wyróżnia się od
        innych miejsc, które zwiedziliśmy na Bali.
      </Header>

      <Subheader>Pierwsze wrażenia i nasz hotel</Subheader>

      <P>
        Z Ubud pojechaliśmy hotelowym shuttle busem do Munduk, czyli na północ
        wyspy. Munduk leży w górach nad jeziorem Tamblingan. Tutaj temperatury
        są niższe niż w innych częściach Bali, np. wieczorem konieczna jest
        ciepła bluza, co w innych miastach, które odwiedziliśmy byłoby nie do
        pomyślenia. Nocowaliśmy w hotelu{' '}
        <A href="https://pl.tripadvisor.com/Hotel_Review-g608490-d10025697-Reviews-Made_Oka_Homestay_and_Warung-Munduk_Bali.html">
          Made Oka Homestay
        </A>
        . Za cztery noce zapłaciliśmy 1 520K IDR. Cena wyższa od poprzednich
        hoteli, ale ten był zdecydowanie lepszy jakościowo, a widok na góry z
        naszego pokoju - zjawiskowy. Na śniadanie był do wyboru: omlet z
        pomidorami i tosty, lub klasycznie bananowy pancake z sosem czekoladowym
        albo miodem, kawa/herbata/sok i świeże, lokalne owoce (arbuz, ananas,
        papaja). Wypożyczenie skutera kosztowało 60K za dzień, czyli tyle samo
        ile w <LinkToArticle to={articlesLinks.bali.ubud}>Ubud</LinkToArticle>.
      </P>

      <Carousel figcaption="Widoki z naszego balkonu i śniadanie w Munduk">
        <Img src={munduk1} alt="Munduk" />
        <Img src={munduk2} alt="Munduk" />
        <Img src={munduk3} alt="Munduk" />
        <Img src={munduk4} alt="Munduk" />
      </Carousel>

      <Subheader>Munduk - dzień 1</Subheader>

      <P>
        <b>Wodospad Air Terjun Labuhan i Air Terjun Melanting</b> - Pierwszego
        dnia nie mieliśmy dużo czasu, więc wyruszyliśmy na trekking. Poszliśmy z
        hotelu główną drogą w górę i przy drogowskazie do Melanting skręciliśmy
        w lewo. Później trasa do samego końca prowadziła przez las. Wodospady są
        położone obok siebie i do każdego wejście kosztuje 10K. Do Air Terjun
        Melanting zejście jest dosyć męczące, ponieważ jest sporo schodów do
        pokonania. Natomiast Air Terjun Labuhan miało ich mniej.
      </P>

      <Carousel figcaption="Wodospady Air Terjun Labuhan i Melanting, Munduk">
        <Img src={munduk5} alt="Munduk Wodospad Air Terjun Labuhan" />
        <Img src={munduk6} alt="Munduk Wodospad Air Terjun Labuhan" />
      </Carousel>

      <Subheader>Munduk - dzień 2</Subheader>

      <P>
        <b>Świątynia Hulun Danu Tamblingan</b> - Stara, klimatyczna świątynia,
        położona przy jeziorze Tamblingan. Można w tym miejscu wykupić rejs
        kajakiem za 200K. Akurat, gdy dojechaliśmy na miejsce było zachmurzenie,
        stąd taka mroczna sceneria na zdjęciu.
      </P>

      <P>
        <b>Świątynia Ulun Danu Buyan</b> - Gdy dojechaliśmy na miejsce obok
        świątyni była jakaś budowa/remont i miejsce nie wyglądało na odwiedzane
        przez turystów. My jednak otworzyliśmy drzwi i się trochę po niej
        rozejrzeliśmy. Jeżeli się już widziało balijskie świątynie, to ta
        właściwie niczym się nie wyróżniała. Można odpuścić przy zwiedzaniu
        okolic.
      </P>

      <P>
        <b>Świątynia Ulun Danu Beratan</b> - To jedna z najbardziej popularnych
        świątyń na Bali. Wejście kosztowało 50 K IDR. Świątynia została
        wybudowana w XVII wieku na brzegu jeziora Bratan. Jest otoczona
        ogrodami, po których warto się przespacerować. Nie wiem czy to wina
        dużej liczby turystów, czy tego że zdjęcia tego miejsca w internecie w
        większości są obrobione, ale jak dla mnie sama budowla nie była niczym
        specjalnym. Widziałam lepsze świątynie np. Goa Gajah, Saraswati, Tirta
        Empul w <LinkToArticle to={articlesLinks.bali.ubud}>Ubud</LinkToArticle>
        .
      </P>

      <P>
        <b>Wodospad Nungnung</b> - Do zejścia prowadzi dużo schodów, ale dla
        takich widoków warto zejść. Wodospad znajduje się w bardzo klimatycznym
        miejscu, porośniętym bujną roślinnością. Jest możliwość kąpieli w
        wodzie, jak i również pod strumieniem wodospadu.
      </P>

      <Carousel figcaption="Świątynie Hulun Danu Tamblingan, Ulun Danu Buyan, Ulun Danu Beratan oraz wodospad Nungnung">
        <Img src={munduk8} alt="Munduk Świątynia Hulun Danu Tamblingan" />
        <Img src={munduk9} alt="Munduk Świątynia Ulun Danu Buyan" />
        <Img src={munduk10} alt="Munduk Świątynia Ulun Danu Beratan" />
        <Img src={munduk11} alt="Munduk Wodospad Nungnung" />
        <Img src={munduk12} alt="Munduk Wodospad Nungnung" />
      </Carousel>

      <Subheader>Munduk - dzień 3</Subheader>

      <P>
        <b>Wodospad Golden Valley</b> - Jest położony obok{' '}
        <A href=" https://pl.tripadvisor.com/Restaurant_Review-g608490-d2469622-Reviews-Waterfall_breeze_ECO_CAfe_1-Munduk_Bali.html">
          kawiarni Eco Cafe
        </A>
        . Warto do niej pójść, bo widok ze stolika jest niesamowity, a lekka
        bryza gwarantuje dobre schłodzenie :) W lokalu napijemy się słynnej{' '}
        <A href="https://www.coffeedesk.pl/blog/kopi-luwak-cena-najdrozsza-kawa/">
          kawy kopi luwak
        </A>
        . Jest to kawa pozyskiwana z odchodów cywet, a jej ziarno są najdroższe
        na świecie. Czy warto pić taką kawę? Tego nie powiem, bo nie uważam się
        za znawcę kawy, ale na pewno warto odwiedzić tą kawiarnię dla samego
        krajobrazu.
      </P>

      <P>
        <b>Wodospad Banyumala</b> - Wejście kosztowało 30 K, a zejście było
        proste. Wodospad warty zobaczenia, i kąpieli w wodzie. Odradzam
        restaurację Palm Resto Bali obok parkingu, jedzenie było tak niedobre,
        że aż musiałam to tutaj napisać.
      </P>

      <Carousel figcaption="Wodospad Golden Valley oraz Banyumala">
        <Img src={munduk13} alt="Munduk Wodospad Golden Valle" />
        <Img src={munduk14} alt="Munduk Wodospad Golden Valle" />
        <Img src={munduk15} alt="Munduk Wodospad Golden Valle" />
        <Img src={munduk16} alt="Munduk Wodospad Banyumala" />
        <Img src={munduk17} alt="Munduk Wodospad Banyumala" />
      </Carousel>

      <Subheader>Munduk - dzień 4</Subheader>

      <P>
        <b>Hot Spring Holy Water</b> - Są to baseny ze świętą i gorącą wodą o
        metalowym posmaku. Wstęp kosztował 20K. Na terenie kompleksu są dwa
        płytsze baseny (1 m) i jeden głęboki (2 m). Każdy ma fontannę, pod którą
        można się obmyć. Moim zdaniem to miejsce było po prostu nudne, a woda
        tak gorąca, że kąpiel w niej nie sprawiała przyjemności.W takim klimacie
        raczej szuka się zbiorników z bardziej orzeźwiającą wodą, a nie zupą ;).
      </P>

      <P>
        <b>Lovina Beach</b> - Zwana również Plażą Delfinów. My żadnego nie
        widzieliśmy, oprócz wielkiego posągu przy brzegu. Ale jeśli ktoś ma
        ochotę to lokalni przewodnicy organizują rejsy do siedlisk delfinów.
        Sama plaża jest rozległa, jej piasek jest czarny i nie było aż tak wielu
        ludzi jak na Kuta Beach,a restauracje przy plaży miały rozsądne ceny.
      </P>

      <Carousel figcaption="Hot Spring Holy Water oraz Lovina Beach">
        <Img src={munduk18} alt="Munduk Hot Spring Holy Water" />
        <Img src={munduk19} alt="Munduk Lovina Beach" />
      </Carousel>

      <P>
        Z Munduk dojechaliśmy do portu Padang Bai i stamtąd popłynęliśmy na
        <LinkToArticle to={articlesLinks.bali.gili}>
          wyspę Gili Meno
        </LinkToArticle>
        . Koniecznie zobacz wpis z tej zjawiskowej wyspy!
      </P>

      <Iframe
        title="Munduk"
        src="https://www.google.com/maps/embed?pb=!1m76!1m12!1m3!1d505393.64852913655!2d114.8157097670366!3d-8.264134519774878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m61!3e2!4m5!1s0x2dd1867422c3494f%3A0x3bbb539b947103fb!2sAir%20Terjun%20Labuhan%20Kebo!3m2!1d-8.260326!2d115.06505949999999!4m5!1s0x2dd18676eca4cc9f%3A0x47c8266929e46d1c!2sMelanting%20waterfall!3m2!1d-8.2545136!2d115.06292599999999!4m5!1s0x2dd18602d916fff5%3A0x5d6f4102fbdb557a!2sPura%20Ulun%20Danu%20Tamblingan!3m2!1d-8.2637219!2d115.0912365!4m5!1s0x2dd18ed8227b5df3%3A0x86eaab972d530ba0!2sPura%20Ulun%20Danu%20Buyan!3m2!1d-8.2409687!2d115.14300709999999!4m5!1s0x2dd189975fb40301%3A0xb319d07df8fbff21!2sUlun%20Danu%20Beratan!3m2!1d-8.2751576!2d115.1669572!4m5!1s0x2dd22083c3c810e3%3A0x8ad87885a422e318!2sNungnung%20Waterfall!3m2!1d-8.3297697!2d115.2293907!4m5!1s0x2dd185e1b2983903%3A0x81c3824e0980094a!2sGolden%20Valley%20Waterfalls!3m2!1d-8.2543204!2d115.07358389999999!4m5!1s0x2dd18f9d7a04e875%3A0x4eccd9e08e4d2397!2sBanyumala%20Twin%20Waterfalls!3m2!1d-8.2169809!2d115.1019553!4m5!1s0x2e6f62183e68d4d7%3A0xd6004ccdd7930d5e!2sAir%20Panas%20Banjar%20Hot%20Spring!3m2!1d-8.210536!2d114.96705299999999!4m5!1s0x2dd19b40a35dbf07%3A0x7500ee0f7e30527c!2sLovina%2C%20Bali%2C%20Indonezja!3m2!1d-8.161140999999999!2d115.02435659999999!5e0!3m2!1spl!2spl!4v1582399070208!5m2!1spl!2spl"
      />
    </>
  );
};

export default Bali3;
