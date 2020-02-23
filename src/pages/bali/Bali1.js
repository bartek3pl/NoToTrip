import React from 'react';
import Carousel from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Carousel';
import Img from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Img';
import Figure from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Figure';
import Header from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Header';
import Subheader from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Subheader';
import P from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/P';
import A from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/A';
import Iframe from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Iframe';

import kuta1 from '../../assets/images/bali/kuta/kuta.1.jpg';
import kuta2 from '../../assets/images/bali/kuta/kuta.2.1.jpg';
import kuta3 from '../../assets/images/bali/kuta/kuta.3.1.jpg';
import kuta4 from '../../assets/images/bali/kuta/kuta.3.2.jpg';
import kuta5 from '../../assets/images/bali/kuta/kuta.4.1.jpg';
import kuta6 from '../../assets/images/bali/kuta/kuta.4.2.jpg';
import kuta7 from '../../assets/images/bali/kuta/kuta.4.3.jpg';
import kuta8 from '../../assets/images/bali/kuta/kuta.4.4.jpg';
import LinkToArticle from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/LinkToArticleFooter';
import { articlesLinks } from '../../data/ArticlesData';

const Bali1 = () => {
  return (
    <>
      <Header>
        Kuta to jedna z najbardziej znanych miejscowości na Bali, położona na
        południowym zachodzie wyspy. Plaże Kuty uznane są za jedne z lepszych
        terenów do surfowania. Wielu turystów przyjeżdża tu również bawić się
        klubach, barach. Zatem czy warto zatrzymać się w Kucie? Jakie są moje
        wrażenia? Na te i wiele innych pytań odpowiem w tym wpisie.
      </Header>

      <Subheader>Kuta</Subheader>

      <P>
        Zacznę mało zachęcającym stwierdzeniem, że samo miasto mi nie przypadło
        do gustu. W Kucie na każdym kroku napotykamy sklepiki, naciągaczy z
        ulicznych straganów, sprzedających tandetę, a na chodnikach przeciskają
        się codziennie tłumy turystów. W sklepikach można było kupić chyba
        wszystko: otwieracz do piwa, figurkę buddy, kartę SIM. W Kucie znajduje
        się również kilka dużych galerii handlowych ze znanymi sieciówkami typu:
        H&M, Zara, Pull and Bear, Victoria’s Secret. My odwiedziliśmy Beachwalk
        Shopping Centre. Ciekawym faktem jest to, że przed wejściem do budynku
        trzeba było umyć stopy wodą, co w praktyce jest dobrym rozwiązaniem, bo
        po spacerze w Kucie wasze stopy mogą przybrać szarych kolorów.
      </P>

      <P>
        Zanieczyszczenie miasta jest moim zdaniem wysokie. Również powietrze nie
        należy do najczystszych. Wynika to z tego, że Balijczycy dużo
        przemieszczają się skuterami. Więc na drogach jest duży ruch, korki i
        unoszący się smród spalin. W centrum uliczki były bardzo wąskie (na
        szerokość jednego samochodu), jednak mieszkańcom Bali nie przeszkadzało
        to na skuterach przeciskać się przez szczeliny i wymijać ludzi.
        Osobiście pominęłabym nocleg tutaj, bo po prostu nie warto. Chyba, że
        ktoś lubi spędzać wakacje w barze, czy na zakupach. Jeśli jednak
        jesteście ciekawi Kuty, to wybierzcie nocleg oddalony od zgiełku miasta
        (np. W Uluwatu), a na samo jego zwiedzanie wybierzcie się skuterem.
      </P>

      <Figure figcaption="Ground Zero Memorial - pomnik upamiętnijący ofiary zamachów na Bali, Kuta">
        <Img src={kuta1} alt="Bali Kuta" />
      </Figure>

      <Subheader>Nocleg, jedzenie, skuter</Subheader>

      <P>
        Z lotniska w Denpasar wzięliśmy Graba (za 108K IDR) do naszego hotelu{' '}
        <A href="https://www.booking.com/hotel/id/bali-manik-beach-inn.pl.html?aid=304142;label=postbooking_confemail;sid=0ad61f47b4ee3e79061dcbf6b5f2606f;dist=0&keep_landing=1&sb_price_type=total&type=total&">
          Bali Manik Beach Inn
        </A>
        . Był to nasz najtańszy nocleg (220K IDR za dwie noce dla dwóch osób) i
        myślę, że jak za taką cenę był w porządku. Na śniadanie dostawaliśmy
        zawsze bananowy pancake z czekoladą i kawę. Naprzeciwko hotelu znajdował
        się tani lokalny bar z dobrym jedzeniem (krewetki z ryżem za 55K IDR,
        zupa 20K IDR). A kilka minut pieszo od hotelu droższa restauracja{' '}
        <A href="https://www.tripadvisor.com/Restaurant_Review-g297697-d1595642-Reviews-Seafood_House-Kuta_Kuta_District_Bali.html">
          Seafood House
        </A>
        , gdzie za zupę zapłaciliśmy 20K IDR a za drugie danie -
        krewetki/kalmary 75K IDR. Ostatnią noc, przed odlotem również
        spędziliśmy w Kucie w hotelu{' '}
        <A href="https://www.booking.com/hotel/id/bali-shandy-resort.pl.html?aid=304142;label=postbooking_confemail;sid=092def8fe25b608aa1005a5361ccbf7f;dist=0&keep_landing=1&sb_price_type=total&type=total&">
          Bali Sandy Resort
        </A>
        , gdzie noc kosztowała 280K IDR. Na śniadanie był szwedzki bufet. A z
        racji tego, że był już październik na posiłku były trzy osoby. Z tego
        powodu, również hotelowy basen mieliśmy cały dla siebie :). Wynajęcie
        skutera z hotelu kosztowało 50K IDR za dzień, a benzyna 10K za litrową
        butelkę.
      </P>
      <P>
        {' '}
        W poprzednim akapicie pisałam już jak wygląda ruch w Kucie, ale dodam
        jeszcze informacje dla kierowców. Ruch na Bali jest lewostronny,
        kierowcy używają tutaj klaksonów jako komunikaty typu: ”Będę
        wyprzedzał”, a zasady ruchu drogowego nie są przestrzegane w ogóle,
        raczej panuje zasada: kto pierwszy ten lepszy.
      </P>

      <Figure figcaption="ogród w naszym hotelu, Kuta">
        <Img src={kuta2} alt="Bali Kuta" />
      </Figure>

      <Subheader>Kuta Beach</Subheader>

      <P>
        Mieszkaliśmy blisko Kuta Beach, więc pieszo udaliśmy się tam pierwszego
        dnia. Za leżaki i parasol dla dwóch osób zapłaciliśmy 130K IDR, a za
        piwo Bintang 330ml na plaży 30K IDR, czyli mniej więcej tyle ile w
        sklepie. Plaża jest rozległa, ze złotym piaskiem i obfitymi falami. Jej
        wielkim minusem jest to, że wypoczywa tam zawsze mnóstwo ludzi, przez co
        mnóstwo na niej naciągaczy i sprzedawców, wciskających dosłownie
        wszystko (od kapeluszy i usług pedicure po sprzedawców marihuany).
        Natomiast plusem jest widowiskowy zachód słońca, który naprawdę warto
        zobaczyć.
      </P>

      <Carousel figcaption="Kuta Beach - zachód słońca i odpływ morski">
        <Img src={kuta3} alt="Kuta Beach" />
        <Img src={kuta4} alt="Kuta Beach" />
      </Carousel>

      <Subheader>Green Bowl Beach</Subheader>

      <P>
        Green Bowl Beach jest umiejscowiona na południe od Kuty w pobliżu
        Uluwatu, moim zdaniem warto się tam wybrać, jeżeli będziecie niedaleko.
        Z Kuty jedzie się do niej około 40 minut skuterem. Gdy dojechaliśmy na
        miejsce, zaparkowaliśmy skuter na klifie, obok hinduskiej świątyni Pura
        Batu Pageh i dwóch lokalnych barów z bardzo tanim jedzeniem (20K IDR za
        kurczaka z ryżem). Do plaży prowadzą kamienne schodki. Nie jest to
        miejsce popularne wśród turystów, a bardziej dla mieszkańców, ze względu
        na świątynię i jaskinie, w których znajdują się skalne kapliczki. Plaża
        ma swój urok, woda jest przejrzysta i wyłożona skałami porośniętymi
        mchem, po których chodzą rybacy i zbierają małże. Następnie pewnie
        sprzedają je do restauracji.
      </P>

      <Carousel figcaption="Green Bowl Beach, Kuta">
        <Img src={kuta5} alt="Uluwatu Green Bowl Beach" />
        <Img src={kuta6} alt="Uluwatu Green Bowl Beach" />
        <Img src={kuta7} alt="Uluwatu Green Bowl Beach" />
        <Img src={kuta8} alt="Uluwatu Green Bowl Beach" />
      </Carousel>

      <P>
        Kolejnym miastem, do którego udaliśmy się na Bali było{' '}
        <LinkToArticle to={articlesLinks.bali.ubud}>Ubud</LinkToArticle>.
        Zajrzyj do kolejnego wpisu i dowiedz się co zwiedziliśmy, gdzie
        nocowaliśmy i jak wspominamy to miejsce.
      </P>

      <Iframe
        title="Kuta i Uluwatu"
        src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d357001.0827038283!2d115.16264786364084!3d-8.658989608530648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x2dd246bc2ab70d43%3A0x82feaae12f4ab48e!2sKuta%20Beach%2C%20Kuta%2C%20Badung%20Regency%2C%20Bali%2C%20Indonezja!3m2!1d-8.7184926!2d115.16863219999999!4m5!1s0x2dd25b73d7aa2a3f%3A0x715aafb7e76c4e!2sGreen%20Bowl%20Beach%2C%20Ungasan%2C%20Badung%20Regency%2C%20Bali%2C%20Indonezja!3m2!1d-8.848670799999999!2d115.1710301!5e0!3m2!1spl!2spl!4v1582395851263!5m2!1spl!2spl"
      />
    </>
  );
};

export default Bali1;
