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

import ubud1 from '../../assets/images/bali/ubud/ubud.1.jpg';
import ubud2 from '../../assets/images/bali/ubud/ubud.2.1.jpg';
import ubud3 from '../../assets/images/bali/ubud/ubud.2.2.jpg';
import ubud4 from '../../assets/images/bali/ubud/ubud.2.3.jpg';
import ubud5 from '../../assets/images/bali/ubud/ubud.2.4.jpg';
import ubud6 from '../../assets/images/bali/ubud/ubud.3.1.jpg';
import ubud7 from '../../assets/images/bali/ubud/ubud.3.2.jpg';
import ubud8 from '../../assets/images/bali/ubud/ubud.3.3.jpg';
import ubud9 from '../../assets/images/bali/ubud/ubud.3.5.jpg';
import ubud10 from '../../assets/images/bali/ubud/ubud.3.6.jpg';
import ubud11 from '../../assets/images/bali/ubud/ubud.4.1.jpg';
import ubud12 from '../../assets/images/bali/ubud/ubud.4.2.jpg';
import ubud13 from '../../assets/images/bali/ubud/ubud.4.3.jpg';
import ubud14 from '../../assets/images/bali/ubud/ubud.4.4.jpg';
import ubud15 from '../../assets/images/bali/ubud/ubud.4.5.jpg';
import ubud16 from '../../assets/images/bali/ubud/ubud.4.6.jpg';
import ubud17 from '../../assets/images/bali/ubud/ubud.4.7.jpg';
import ubud18 from '../../assets/images/bali/ubud/ubud.4.8.jpg';
import ubud19 from '../../assets/images/bali/ubud/ubud.5.1.jpg';
import ubud20 from '../../assets/images/bali/ubud/ubud.5.2.jpg';
import ubud21 from '../../assets/images/bali/ubud/ubud.5.3.jpg';
import ubud22 from '../../assets/images/bali/ubud/ubud.5.4.jpg';
import ubud23 from '../../assets/images/bali/ubud/ubud.5.5.jpg';
import { articlesLinks } from '../../data/ArticlesData';

const Bali2 = () => {
  return (
    <>
      <Header>
        Ubud - to tutaj nasze wycieczki były najbardziej urozmaicone. Blisko
        tego miasta znajduje się: najbardziej malownicze pola ryżowe, wiele
        przepięknych i bardzo starych świątyń, wodospady i święty las małp. Ubud
        zdecydowanie zachwyca i można się w nim zakochać.
      </Header>

      <Subheader>Pierwsze wrażenia z hotelu</Subheader>

      <P>
        Z Kuty wzięliśmy Graba do Ubud (204K IDR) i wysiedliśmy przy naszym
        hotelu{' '}
        <A href="https://www.booking.com/hotel/id/soca-house.html?aid=1595957&label=postbooking_confemail;pbsource=conf_email_hotel_name">
          Soca House
        </A>
        . Za 4 noce zapłaciliśmy 500K IDR. Z racji, że hotel nie oferował
        śniadań, jedynie darmową kawę i herbatę, to codziennie rano szliśmy po
        owoce i jakieś ciastka, by zjeść je przy kawie na tarasie. Obiad i
        kolację jedliśmy w lokalnych restauracjach (przykładowo kurczak z ryżem
        i mohito kosztował 40K IDR). Z hotelu mieliśmy około 10 minut pieszo od
        centrum. W ubud pierwsze co się wyróżniało to więcej zieleni, mniej
        turystów i mniejszy hałas od samochodów. Z pewnością był do duży
        kontrast w stosunku do Kuty. W hotel wypożyczyliśmy skuter (60K IDR za
        dzień) i nim zwiedzaliśmy dalsze zakątki miasta.
      </P>

      <Figure figcaption="Ulica w Ubud">
        <Img src={ubud1} alt="Ubud" />
      </Figure>

      <Subheader>Ubud - dzień 1</Subheader>

      <P>
        <b>Sacred Monkey Forest Sanctuary</b> - Położony w zamieszkałej przez
        liczne małpy bujnej dżungli kompleks hinduistycznych świątyń. Miejsce
        bardzo popularne wśród turystów, niemniej jednak warto odwiedzić. (Do
        Ubud dotarliśmy po południu, więc zdążyliśmy odwiedzić tylko to
        miejsce.) Bilet kosztował 80K IDR za osobę.{' '}
      </P>

      <Carousel figcaption="Świątynia małp - Sacred Monkey Forest Sanctuary, Ubud">
        <Img src={ubud2} alt="Ubud Monkey Forest" />
        <Img src={ubud3} alt="Ubud Monkey Forest" />
        <Img src={ubud4} alt="Ubud Monkey Forest" />
        <Img src={ubud5} alt="Ubud Monkey Forest" />
      </Carousel>

      <Subheader>Ubud - dzień 2</Subheader>

      <P>
        <b>Świątynia Goa Gajah</b> - Jaskinia Słonia, powstała prawdopodobnie w
        IX wieku. Znana z kamiennych rzeźb przedstawiających hinduistyczne
        bóstwa. Cały teren do zwiedzania zajmuje około godziny. Obok jaskini
        znajdują się inne świątynie i przepiękny duży ogród z kolorową i bujną
        roślinnością. Przy wejściu dostajemy sarong w cenie biletu (50 K IDR za
        osobę). Przy kasie była tablica z zakazem wstępu dla kobiet z
        menstruacją. W hinduizmie miesiączkująca kobieta uznawana jest za
        nieczystą i ma zakaz wstępu do niektórych ważniejszych świątyń.
      </P>

      <P>
        <b>Wodospad Tegenungan</b> - Jest to popularne miejsce wśród turystów,
        więc na całej trasie i pod wodospadem mnóstwo ludzi. Zejście do
        wodospadu urozmaicają różnorodne instalacje np.: gniazda, skrzydełka
        anioła, serca, huśtawki do instagramowych fotek.
      </P>

      <P>
        <b>
          Świątynia Saraswati, Pura Desa i Puri Saren Agung (Ubud Royal Palace)
        </b>{' '}
        - Są to umiejscowione obok siebie świątynie do których wejście jest
        darmowe i nie trzeba mieć sarongu. W Ubud Palace prawie codziennie są
        występy tradycyjnego balijskiego tańca. Artyści mają na sobie bardzo
        kolorowe i ozdobne stroje, a muzyka jest grana na żywo.
      </P>

      <P>
        <b>Campuhan Ridge Walk</b> - Pola ryżowe po których można udać się na
        godzinny spacer. Z racji tego, że jak wyruszyliśmy na niego już
        zmierzchało, to nie doświadczyliśmy jakiegoś niezwykłego widoku.
      </P>

      <Carousel figcaption="Świątynia Goa Gajah, wodospad Tegenungan oraz Świątyni Saraswati">
        <Img src={ubud6} alt="Ubud Goa Gajah" />
        <Img src={ubud7} alt="Ubud Goa Gajah" />
        <Img src={ubud8} alt="Ubud Goa Gajah" />
        <Img src={ubud9} alt="Ubud Wodospad Tegenungan" />
        <Img src={ubud10} alt="Ubud Świątynia Saraswati" />
      </Carousel>

      <Subheader>Ubud - dzień 3</Subheader>

      <P>
        <b>Tarasy ryżowe Tegalalang</b> - Wielostopniowe uprawy ryżu w prowincji
        Tegalalang stanowią niezwykle malowniczy krajobraz i zajmują rozległy
        teren. Nic zresztą dziwnego, dla wielu osób to miejsce pracy, sposób
        utrzymania rodzin i gastronomii. Spacer po tarasach jak najbardziej
        godny polecenia, nam zajął 2,5 godziny.
      </P>

      <P>
        <b>Świątynia Tirta Empul</b> - Jest zwana świątynią świętej wody,
        została wybudowana około X. wieku przy świętym źródle. Pielgrzymi z
        całej wyspy przyjeżdżają tu oczyścić ciało i duszę w kamiennym basenie z
        fontannami. Składają bóstwom dary w koszyczkach dziękczynnych i palą
        kadzidła, modląc się.
      </P>

      <P>
        <b>Świątynia Gunung Kawi</b> - Jest położona blisko świątyni Tirta Empul
        i charakterystycznym dla niej zabytkiem są ogromnych rozmiarów rzeźby
        wykute w skale. Do świątyni schodziliśmy stromymi kamiennymi schodami. A
        z nami wielu mieszkańców wyspy, ponieważ załapaliśmy się na jakieś
        obrzędy. Całe rodziny zmierzali do świątyni, wszyscy odświętnie ubrani w
        tradycyjne stroje, a kobiety przynosiły na głowach kosze z darami dla
        bóstw.
      </P>

      <Carousel figcaption="Tarasy ryżowe Tegalalang, Świątynie Tirta Empul i Gunung Kawi">
        <Img src={ubud11} alt="Ubud Tegalalang" />
        <Img src={ubud12} alt="Ubud Tegalalang" />
        <Img src={ubud13} alt="Ubud Tegalalang" />
        <Img src={ubud14} alt="Ubud Tegalalang" />
        <Img src={ubud15} alt="Ubud Świątynia Tirta Empul" />
        <Img src={ubud16} alt="Ubud Świątynia Gunung Kawi" />
        <Img src={ubud17} alt="Ubud Świątynia Gunung Kawi" />
        <Img src={ubud18} alt="Ubud Świątynia Gunung Kawi" />
      </Carousel>

      <Subheader>Ubud - dzień 4</Subheader>

      <P>
        <b>Wodospad Kampa Lampo</b> - W rzece pod wodospadem było bardzo dużo
        turystów, ustawiających się w kolejce do zdjęcia pod strumieniem. Można
        zrobić sobie wyprawę i pójść nieco dalej z nurtem wody do miejsc równie
        malowniczych, ale nie obleganych przez innych ludzi.
      </P>

      <P>
        <b>Wodospad Goa Rang Rang</b> - Ten wodospad moim zdaniem o wiele lepszy
        od Kampa Lampo. Obok niego stoi drewniana chatka, gdzie można się
        przebrać i zostawić ubrania. Największą zaletą jest wejście na górę do
        źródła. Kąpiel w nim jest dozwolona i jak najbardziej bezpieczna. Choć
        nurt był wartki nie ma takiej możliwości by popłynąć w dół wodospadu. Za
        to można w przesmyku strumienia popłynąć z prądem, jak na zjeżdżalni w
        aquaparku ;) Ludzie, którzy są zaznajomieni i wiedzą, gdzie jest głęboki
        punkt źródełka skaczą do niego na główkę. Ale wy tego lepiej nie róbcie.
      </P>

      <Carousel figcaption="Wodospady Kampa Lampo i Goa Rang Rang">
        <Img src={ubud19} alt="Ubud Wodospad Kampa Lampo" />
        <Img src={ubud20} alt="Ubud Wodospad Kampa Lampo" />
        <Img src={ubud21} alt="Ubud Wodospad Goa Rang Rang" />
        <Img src={ubud22} alt="Ubud Wodospad Goa Rang Rang" />
        <Img src={ubud23} alt="Ubud Wodospad Goa Rang Rang" />
      </Carousel>

      <P>
        Z Ubud pojechaliśmy do{' '}
        <LinkToArticle to={articlesLinks.bali.munduk}>Munduk</LinkToArticle>.
        Zajrzyj do tego wpisu i przeczytaj o naszym pobycie w górzystej części
        Bali.
      </P>

      <Iframe
        title="Ubud"
        src="https://www.google.com/maps/embed?pb=!1m76!1m12!1m3!1d126273.27624172886!2d115.1994247937794!3d-8.495503258804684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m61!3e0!4m5!1s0x2dd223492c21e6a3%3A0xb715386c995db0c2!2sSangeh%20Monkey%20Forest!3m2!1d-8.481788!2d115.206738!4m5!1s0x2dd216319e3e8cbb%3A0xcf6f85fcf798a545!2sGoa%20Gajah!3m2!1d-8.5234378!2d115.28715679999999!4m5!1s0x2dd2161beebd0c61%3A0xc1ae79ddb8410c5e!2sTegenungan%20Waterfall!3m2!1d-8.5752391!2d115.2902829!4m5!1s0x2dd23d6a992a2b07%3A0xe028854c14cbced9!2sSaraswati%20Temple!3m2!1d-8.5057197!2d115.26154129999999!4m5!1s0x2dd23d6bcaf473f5%3A0x7c13fd74aa1bc49f!2sCampuhan%20Ridge%20Walk!3m2!1d-8.503617199999999!2d115.2547038!4m5!1s0x2dd2220b23f900e3%3A0x8d1a8969386c04ed!2sTarasy%20ry%C5%BCowe!3m2!1d-8.4340403!2d115.2792569!4m5!1s0x2dd2186852078dab%3A0x9bd8c4c4ff8190dc!2sTirta%20Empul%20Temple!3m2!1d-8.4157624!2d115.3151566!4m5!1s0x2dd218ea5597859b%3A0x7aaf9b3f4e5de4f1!2sPura%20Gunung%20Kawi!3m2!1d-8.4236735!2d115.3105611!4m5!1s0x2dd21787f5d8beaf%3A0xe6ae8cf5c2ede416!2swisata%20air%20terjun%20kanto%20lampo!3m2!1d-8.5320769!2d115.332194!4m5!1s0x2dd21700ab338d81%3A0xddcb7fa4117838d3!2sGoa%20Rang%20Reng%20Waterfall%2C%20Bakbakan%2C%20Gianyar%2C%20Bali%2C%20Indonezja!3m2!1d-8.5155304!2d115.3314293!5e0!3m2!1spl!2spl!4v1582393695522!5m2!1spl!2spl"
      />
    </>
  );
};

export default Bali2;
