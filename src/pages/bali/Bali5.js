import React from 'react';
import Carousel from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Carousel';
import Img from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Img';
import Figure from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Figure';
import Header from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Header';
import Subheader from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Subheader';
import P from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/P';
import A from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/A';
import Iframe from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Iframe';

import nusa1 from '../../assets/images/bali/nusa/penida.1.1.jpg';
import nusa2 from '../../assets/images/bali/nusa/penida.1.2.jpg';
import nusa3 from '../../assets/images/bali/nusa/penida.1.3.jpg';
import nusa4 from '../../assets/images/bali/nusa/penida.1.4.jpg';
import nusa6 from '../../assets/images/bali/nusa/penida.1.6.jpg';
import nusa7 from '../../assets/images/bali/nusa/penida.2.1.jpg';
import nusa8 from '../../assets/images/bali/nusa/penida.2.2.jpg';
import nusa9 from '../../assets/images/bali/nusa/penida.2.3.jpg';
import nusa10 from '../../assets/images/bali/nusa/penida.2.4.jpg';
import nusa11 from '../../assets/images/bali/nusa/penida.3.jpg';
import nusa12 from '../../assets/images/bali/nusa/penida.4.1.jpg';
import nusa13 from '../../assets/images/bali/nusa/penida.4.2.jpg';
import nusa14 from '../../assets/images/bali/nusa/penida.4.3.jpg';
import nusa15 from '../../assets/images/bali/nusa/penida.4.4.jpg';
import LinkToArticle from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/LinkToArticleFooter';
import { articlesLinks } from '../../data/ArticlesData';

const Bali5 = () => {
  return (
    <>
      <Header>
        Zjawiskowa wyspa Nusa Penida zachwyca klifowymi wybrzeżami i widokami.
        Jej dziurawe drogi mogą odstraszyć niejednego kierowcę… Mimo tego
        przypływa tu mnóstwo turystów. Bezsprzecznie jest to miejsce, które
        trzeba odwiedzić będąc na Bali! Zapraszam do wpisu o wyspie pełnej
        niespodzianek.
      </Header>

      <Subheader>Nocleg, jedzenie, transport</Subheader>

      <P>
        Do portu w Toyapakeh na Nusa Penida przypłynęliśmy speedboatem firmy
        Ekajaya. Bilety kupiliśmy na wyspie Gili Meno za 450 K IDR za osobę, w
        biurze podróży <A href="https://attastravel.net">Atta’s travel</A>{' '}
        blisko portu. Jeśli jesteście ciekawi informacji o speedboatach, to po
        więcej informacji zapraszam tutaj.{' '}
      </P>

      <P>
        Hotel był oddalony od portu o jakieś 9 kilometrów. Mieszkaliśmy na
        północnym-wschodzie wyspy w
        <A href="https://www.booking.com/hotel/id/agung-pring-homestay.pl.html?aid=304142;label=postbooking_confemail;sid=d4c1d8dc936b9915b2ca2bfdb0f96eac;dist=0&keep_landing=1&sb_price_type=total&type=total&">
          Agung Pring Homestay
        </A>
        . Za pięć nocy zapłaciliśmy 550 K IDR. Hotel oceniam jako bardzo dobry
        (nie tak bardzo jak w Munduk, ale umiejscowałabym go na drugim miejscu w
        rankingu odwiedzonych przez nas hoteli). Codziennie mieliśmy cztery
        pozycje do wyboru na śniadanie: smażone jajka i bekon, omlet z
        warzywami, tosty z dżemem i owocami, oraz nieśmiertelny omlet bananowy z
        sosem czekoladowym lub miodem.
      </P>

      <P>
        Drugiego dnia wypożyczyliśmy skuter (60 K IDR za dzień) i rozpoczęliśmy
        objazd wyspy. Na wschodzie znajduje się więcej domów i hoteli (w tym
        nasz). Plaże w tej części wyspy są płaskie, tafla wody spokojna, a przy
        brzegach często znajdują się hodowle alg. Zachodnie wybrzeże wyspy jest
        natomiast bardziej turystyczne, z tego względu że to właśnie na nim
        znajdują się popularne klify ze wspaniałymi widokami i zejściami do
        niezwykłych plaż. Z racji, że mieszkaliśmy po drugiej stronie wyspy
        codziennie musieliśmy dojeżdżać skuterem minimum 30 minut w jedną
        stronę.
      </P>

      <Subheader>Nusa Penida - dzień 1</Subheader>

      <P>
        <b>Banah Cliff</b> - Z hotelu mieliśmy jakieś 50 minut do tego punktu
        widokowego. Z racji, że był to nasz pierwszy klif na wyspie, to zrobił
        wrażenie. Jak przyjechaliśmy, miejsce było zupełnie puste. Można udać
        się na mały spacer wzdłuż urwiska.
      </P>

      <P>
        <b>Mata Air Tembeling</b> - Miejsce inne niż wszystkie, ma swój urok.
        Przeźroczyste źródełka i skalna jaskinia naprawdę wyglądały jak nie z
        tej ziemi. Mam nadzieję, że trasa na Google Maps jest już
        zaktualizowana, bo jak już pisałam we wpisie o przewodnikach
        naciągaczach, można sobie sporo nadłożyć trasy, gdy się za bardzo wierzy
        mapom z telefonu, zamiast obserwować drogowskazy na drodze...
      </P>

      <Carousel figcaption="Banah Cliff oraz Mata Air Temeling">
        <Img src={nusa1} alt="Nusa Penida Banah Cliff" />
        <Img src={nusa2} alt="Nusa Penida Banah Cliff" />
        <Img src={nusa3} alt="Nusa Penida Mata Air Tembeling" />
        <Img src={nusa4} alt="Nusa Penida Mata Air Tembeling" />
        <Img src={nusa6} alt="Nusa Penida Mata Air Tembeling" />
      </Carousel>

      <Subheader>Nusa Penida - dzień 2</Subheader>

      <P>
        <b>Kelingking Viewpoint/Beach</b> - Do tego miejsca z hotelu jechaliśmy
        skuterem 50 minut. Bardzo popularny punkt widokowy, w kolejce do zdjęć
        były tłumy. Nic dziwnego. Jest to to bez wątpienia najbardziej
        instagramowe miejsce na wyspie! Po zejściu na dół do plaży było już o
        wiele mniej turystów. Nie każdy pewnie był gotów na takie strome i
        momentami skomplikowane zejście. Jednak warto to zrobić, bo plaża jest
        niesamowita! Już z góry wygląda świetnie. Wzburzone fale mocno obijające
        się o brzeg, co chwile zabierały ze sobą ludzi (w tym nas, ale nie
        martwcie się, jesteśmy cali i zdrowi).
      </P>

      <P>
        Niestety byliśmy świadkami akcji ratunkowej kobiety, którą woda naprawdę
        porwała na głębiny. Na szczęście nic się nie stało, ale nie ukrywam, że
        na moment zamroziła mi się krew w żyłach. Także uważajcie na siebie,
        podczas zabawy w falach!
      </P>

      <P>
        <b>Pasih Uug (Broken Beach)</b> - Z Kelingking do tego miejsca było
        jakieś 35 minut skuterem. Broken Beach stanowi skalny okrąg, w środku
        którego znajduje się zbiornik wodny. W jednym miejscu skały tworzą
        kamienny portal na lazurowy, bezkresny ocean. A na drugim końcu średnicy
        wodnego okręgu jest popularny punkt widokowy, z którego jest zrobiona
        większość internetowy zdjęć.
      </P>

      <P>
        <b>Angel’s Billabong</b> - 2 minuty spacerem od Broken Beach znajduje
        się Angel’s Billabong. Jest to półka skalna zbierająca wodę z
        uderzających o nią fal. Niegdyś można było się tam kąpać. Gdy my tam
        byliśmy wchodzenie do wody było zabronione, chyba ze względów
        bezpieczeństwa i z powodu wysokiego poziomu wody.
      </P>

      <Carousel figcaption="Kelingking, Broken Beach oraz Angel's Billabong">
        <Img src={nusa7} alt="Nusa Penida Kelingking Viewpoint" />
        <Img src={nusa8} alt="Nusa Penida Kelingking Beach" />
        <Img src={nusa9} alt="Nusa Penida Pasih Uug (Broken Beach)" />
        <Img src={nusa10} alt="Nusa Penida Angel’s Billabong" />
      </Carousel>

      <Subheader>Nusa Penida - dzień 3</Subheader>

      <P>
        Trzeciego dnia chillowaliśmy przy hotelowym basenie z sokiem ze świeżych
        bananów. :) Na Bali co prawda alkohol jest dosyć drogi, natomiast soki
        ze świeżych owoców kosztują bardzo mało. Koniecznie spróbujcie różnych
        smoków! My piliśmy: arbuzowy, z mango, z marakuii, z dragon fruit’a,
        ananasowy, bananowy, kokosowy, pomarończowy, a w niektórych menu
        widziałam jeszcze z awokado i salaka (niestety nigdy nie mieli z salaka,
        gdy pytałam).
      </P>

      <Figure figcaption="Dzień na basenie 💧, Nusa Penida">
        <Img src={nusa11} alt="Nusa Penida basen" />
      </Figure>

      <Subheader>Nusa Penida - dzień 4</Subheader>

      <P>
        <b>Bukit Teletubbies</b> - Wzgórza, które kształtem przypominają te
        Teletubisiowe, stąd nazwa. Miejsce dobre do sesji zdjęciowych. Jednak
        gdy my tam byliśmy trawa była wysuszona i zżółkła, co mijało się ze
        zdjęciami zielonych pagórków, jakie widzieliśmy w internecie. Może to
        kwestia pory roku i okresu suszy (na Bali pora deszczowa przypada od
        października do kwietnia).
      </P>

      <P>
        <b>Diamond Beach</b> - Plaża trochę przypomina Kelingking Beach. Zejście
        do niej również stanowi wąska i stroma ścieżka, która wymaga zręczności
        i ostrożności. Sama plaża leży przy półokrągłym wybrzeżu klifowym, gdzie
        dopływająca woda wzburza się i tworzy silne fale. Charakterystyczne dla
        tego miejsca są stojące na wodzie skały o kształcie ostrosłupa. To chyba
        stąd właśnie nazwa “Diamond Beach”? To miejsce również stanowi popularny
        instagramowy krajobraz.
      </P>

      <P>
        <b>Jogglo Viewpoint</b> - To klif mocno wysunięty w głąb wody,
        stanowiący punkt widokowy. Oddziela on od siebie dwie plaże: Atuh Beach
        i Diamond Beach. Warto wspiąć się na niego, gdyż widoki robią wrażenie,
        a samo wejście jest szybkie i łatwe.
      </P>

      <Carousel figcaption="Bukit Teletubbies oraz Diamond Beach z punktu widokowego Jogglo">
        <Img src={nusa12} alt="Nusa Penida Bukit Teletubbies" />
        <Img src={nusa13} alt="Nusa Penida Bukit Teletubbies" />
        <Img src={nusa14} alt="Nusa Penida Diamond Beach" />
        <Img src={nusa15} alt="Nusa Penida Diamond Beach" />
      </Carousel>

      <P>
        Z Nusa Penida wróciliśmy do{' '}
        <LinkToArticle to={articlesLinks.bali.kuta}>Kuty</LinkToArticle>. Jeśli
        jeszcze nie czytaliście o tym mieście, to musicie nadrobić zaległości!
      </P>

      <Iframe
        title="Nusa Penida"
        src="https://www.google.com/maps/embed?pb=!1m52!1m12!1m3!1d504745.52407478215!2d115.25578297900081!3d-8.755516422722886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m37!3e0!4m5!1s0x2dd2703c9e92668b%3A0xebfda3dd934d2028!2sBanah%20Cliff%20Point%2C%20Unnamed%20Road%2C%20Batumadeg%2C%20Nusapenida%2C%20Klungkung%20Regency%2C%20Bali%2080771%2C%20Indonezja!3m2!1d-8.7670731!2d115.48690359999999!4m5!1s0x2dd27a78c4f85747%3A0x5a24fa6829eb4397!2sTembeling%20Beach%20and%20Forest%2C%20Batumadeg%2C%20Nusapenida%2C%20Kabupaten%20Klungkung%2C%20Bali%2080771%2C%20Indonezja!3m2!1d-8.7706991!2d115.49695559999999!4m5!1s0x2dd239159121b79d%3A0xb21ffd3390b25ca0!2sKelingking%20Beach%2C%20Bunga%20Mekar%2C%20Klungkung%20Regency%2C%20Bali%2C%20Indonezja!3m2!1d-8.7517696!2d115.47301279999999!4m5!1s0x2dd2458e444acccb%3A0xca6101ed9954d2ea!2sBroken%20Beach%20(Pasih%20Uug)%2C%20Bunga%20Mekar%2C%20Nusapenida%2C%20Kabupaten%20Klungkung%2C%20Bali%2080771%2C%20Indonezja!3m2!1d-8.7328577!2d115.45090499999999!4m5!1s0x2dd277452427f161%3A0x863beecfe238ff57!2sBukit%20Teletubbies%20on%20Nusa%20Penida%2C%20Tanglad%2C%20Klungkung%20Regency%2C%20Bali%2C%20Indonezja!3m2!1d-8.7853669!2d115.5747892!4m5!1s0x2dd23f21f533af45%3A0x1f570ab3845ccbff!2sDiamond%20Beach%2C%20Pejukutan%2C%20Klungkung%20Regency%2C%20Bali%2C%20Indonezja!3m2!1d-8.7756964!2d115.61928499999999!5e0!3m2!1spl!2spl!4v1582402658194!5m2!1spl!2spl"
      />
    </>
  );
};

export default Bali5;
