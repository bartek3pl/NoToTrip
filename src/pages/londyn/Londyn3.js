import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../../components/ArticlesPage/ArticlesContainer/ArticleContainer.scss';

import cyberdog1 from '../../assets/images/londyn/art3slider1.2.jpg';
import cyberdog2 from '../../assets/images/londyn/art3slider1.3.jpg';
import cyberdog3 from '../../assets/images/londyn/art3slider1.4.jpg';
import camden1 from '../../assets/images/londyn/art3slider1.5.jpg';
import camden2 from '../../assets/images/londyn/art3slider1.6.jpg';
import sklep from '../../assets/images/londyn/art3slider2.2.jpg';
import bluza from '../../assets/images/londyn/art3slider2.3.jpg';
import harry from '../../assets/images/londyn/art3slider2.4.jpg';
import crossrail from '../../assets/images/londyn/art3slider3.1.jpg';
import canary from '../../assets/images/londyn/art3slider3.2.jpg';
import peron from '../../assets/images/londyn/peron.jpg';
import traffic from '../../assets/images/londyn/traffic.jpg';
import biurowiec from '../../assets/images/londyn/canary.jpg';
import tunel from '../../assets/images/londyn/tunel.jpg';

const London3 = () => {
  return (
    <>
      <h3>
        Tego dnia poszliśmy na spacer do malowniczego Regent’s Park. Po południu
        udaliśmy się na zakupy w Camden Town. A później odwiedziliśmy King’s
        Cross Station, by zobaczyć Peron 9 i ¾. Następnie przeszliśmy się
        tunelem do Greenwich, w poszukiwaniu południka zerowego.
      </h3>

      <h4>English breakfast</h4>

      <p>
        Dziś rano czekała na nas bardzo miła niespodzianka, a mianowicie
        brytyjskie śniadanko. Zaserwowano nam grillowany bekon, jajka w
        koszulce, smażone pieczarki i pomidorki oraz grillowane kiełbaski. Było
        bardzo smaczne, mimo że nie jestem fanką kiełbas ani boczków,a na co
        dzień jem raczej małe śniadania. Jak dla mnie, po takim śniadaniu, to
        można i do kolacji wytrzymać! Co nie zmienia faktu, że warto w Wielkiej
        Brytanii go spróbować.
      </p>

      <h4>Regent’s Park i okolice</h4>

      <p>
        Dojechaliśmy metrem do Baker Street Station i rozpoczęliśmy dzisiejszą
        trasę od pomnika Sherlock’a Holmes’a. Niedaleko znajduje się również
        muzeum poświęcone jego postaci oraz całej epoce wiktoriańskiej. Niestety
        kolejki do niego w sezonie są ogromne, więc odpuściliśmy sobie czekanie.
      </p>

      <p>
        Przeszliśmy dwie ulice dalej do Regent’s Park. Jest to jeden z
        królewskich parków.
      </p>
      <p className="link">
        <a
          href="https://www.royalparks.org.uk/parks/the-regents-park"
          target="_blank"
          rel="noopener noreferrer"
        >
          Oficjalna strona parku
        </a>
      </p>
      <p className="link">
        <a
          href="https://www.royalparks.org.uk/parks/the-regents-park/map-of-regents-park"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mapa parku
        </a>
      </p>

      <p>
        Polecam go odwiedzić, ponieważ poza piękną roślinnością i różnorodnymi
        ptakami. <b>Znajdziemy tu takie atrakcje jak:</b>
      </p>
      <p className="point">
        -{' '}
        <a
          href="https://openairtheatre.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Air Theatre
        </a>{' '}
        - Teatr znajdujący się w samym sercu parku, oferuje sztukę na łonie
        natury i pod gołym niebem.
      </p>
      <p className="point">
        -{' '}
        <a
          href="https://regents.ac.uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Regent’s University
        </a>{' '}
        - Prywatny uniwersytet, który został założony w 1984 roku.
      </p>
      <p className="point">
        -{' '}
        <a
          href="https://www.zsl.org/zsl-london-zoo"
          target="_blank"
          rel="noopener noreferrer"
        >
          ZSL London Zoo
        </a>{' '}
        - Otwarte w 1848 roku, początkowo miało służyć tylko naukowcom do badań,
        jednak rok później udostępniono je dla każdego. W zoo znajduje się 650
        gatunków zwierząt, z czego 112 jest wpisana do Czerwonej księgi gatunków
        zagrożonych.
      </p>
      <p className="point">
        -{' '}
        <a
          href="https://uk.usembassy.gov/our-relationship/our-ambassador/ambassadors-residence/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Winfield House Grounds
        </a>
        .
      </p>
      <p className="point">
        -{' '}
        <a
          href="https://www.royalparks.org.uk/parks/the-regents-park/things-to-see-and-do/gardens-and-landscapes/queen-marys-gardens"
          target="_blank"
          rel="noopener noreferrer"
        >
          Queen Mary's Gardens
        </a>{' '}
        - Przepiękne kolorowe ogrody pełne kwiatów, z największą ilością róż w
        Londynie.
      </p>
      <p className="point">
        -{' '}
        <a
          href="https://www.royalparks.org.uk/parks/the-regents-park/things-to-see-and-do/gardens-and-landscapes/regents-park-allotment-garden"
          target="_blank"
          rel="noopener noreferrer"
        >
          Park Allotment Garden
        </a>{' '}
        - Społeczny ogródek działkowy, w którym odbywają się warszaty z sadzenia
        i pielęgnowania warzyw oraz owoców.
      </p>
      <p className="point">
        -{' '}
        <a
          href="https://www.royalparks.org.uk/parks/the-regents-park/things-to-see-and-do/gardens-and-landscapes/the-avenue-gardens"
          target="_blank"
          rel="noopener noreferrer"
        >
          The Avenue Gardens
        </a>{' '}
        - Aleja otoczona wiecznie zielonym trawnikiem, ornamentowymi fontannami
        i donicami wypełionymi kwiatami.
      </p>
      <p className="point">
        -{' '}
        <a
          href="http://www.iccuk.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          London Central Mosque
        </a>{' '}
        - Jest to jeden z londyńskich meczetów.
      </p>
      <p className="point">
        -{' '}
        <a
          href="https://www.lords.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lord’s Cricket Ground
        </a>{' '}
        - Stadion krykietowy, stanowiący własność Marylebone Cricket Club. Jeden
        z najbardziej renomowanych obiektów tej dyscypliny sportu na świecie.
      </p>
      <p className="point">
        -{' '}
        <a
          href="https://www.cepc.org.uk/gardens/park-square-and-park-crescent-gardens/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Park Square i Park Crescent
        </a>{' '}
        - ulica zabudowana ogromnymi eleganckimi szeregowcami, otynkowanymi
        stiukiem.
      </p>
      <p className="point">
        - Niedaleko znajduje się Primrose Hill - zielone wzgórze, z którego jest
        piękny widok. Rewelacyjne miejsce na odpoczynek, lub piknik. Niestety
        konieczna jest dobra pogoda.
      </p>

      <h4>Miejsca na nietypowe zakupy</h4>

      <p>
        Po spacerze w parku wyruszyliśmy do Camden Town. Znajdujący się tam{' '}
        <a
          href="https://www.camdenmarket.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Camden Market
        </a>{' '}
        to niezwykle oryginalny targ z nietypowymi ciuchami, biżuterią,
        gadżetami, akcesoriami do domu i jedzeniem. Można tu znaleźć sklepy w
        stylu vintage, goth, dla fanów kultury japońskiej, mangi, muzyki
        elektronicznej, tatuażu, piercingu.
      </p>

      <figure className="article-figure">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={cyberdog1} alt="Cyberdog" />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={cyberdog2}
              alt="Cyberdog w środku"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={cyberdog3}
              alt="Cyberdog na zewnątrz"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={camden1} alt="Camden Market" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={camden2} alt="Camden Market" />
          </Carousel.Item>
        </Carousel>
        <figcaption className="article-figcaption">
          Camden Market i Cyberdog
        </figcaption>
      </figure>

      <p>
        Warto zajrzeć do sklepu{' '}
        <a
          href="https://www.cyberdog.net"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cyberdog
        </a>
        . Lokal w środku wygląda jak techno-dyskoteka. Ma trzy piętra, dj-a i
        mnóstwo fluorescencyjnych kreacji idealnych na festiwal muzyki
        elektronicznej.
      </p>

      <p>
        Po zakupach poszliśmy na King’s Cross Station zobaczyć Peron 9 i ¾,
        jeżeli zależy Wam na zdjęciu z peronu to radzę zarezerwować około 30
        minut do godziny na stanie w kolejce. Przed wejściem do sklepu Harrego
        Pottera również jest spora kolejka, ale na szczęście przesuwa się dosyć
        szybko.
      </p>

      <figure className="article-figure">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={sklep}
              alt="Sklep Harry Potter"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={bluza}
              alt="Bluza peron 9 i 3/4"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={harry}
              alt="Harry Potter różdżki"
            />
          </Carousel.Item>
        </Carousel>
        <figcaption className="article-figcaption">
          Sklep Harrego Pottera
        </figcaption>
      </figure>

      <p>
        Po południu pojechaliśmy do Canary Wharf, czyli nowoczesnego kompleksu
        biurowego, będącego jednym z centrum biznesowych Londynu. Minęliśmy
        rzeźbę Traffic Light Tree i stamtąd szliśmy w kierunku tunelu pieszego w
        Greenwich.
      </p>

      <figure className="article-figure">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={crossrail} alt="Crossrail" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={canary} alt="Canary Wharf" />
          </Carousel.Item>
        </Carousel>
        <figcaption className="article-figcaption">
          Okolice Canary Wharf
        </figcaption>
      </figure>

      <h4>Greenwich po zmroku</h4>

      <p>
        Po przejściu tunelu poszliśmy w stronę Królewskiego Obserwatorium
        Astronomicznego w Greenwich. Po drodze widzieliśmy SV Cutty Sark (jedyny
        zachowany XIX-wieczny kliper herbaciany na świecie) i National Martime
        Museum.
      </p>

      <p className="link">
        <a
          href="https://www.rmg.co.uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Królewskie Muzea w Greenwich
        </a>
      </p>

      <p>
        Do parku, na terenie którego znajduje się obserwatorium weszliśmy koło
        godziny 20. Nie było więc możliwości zwiedzenia budynku. Jednak
        weszliśmy na wzgórze, by zobaczyć widok na Londyn nocą. Z okna
        obserwatorium biegła wiązka zielonego światła lasera, która obrazuje
        przebieg{' '}
        <a
          href="http://www.thegreenwichmeridian.org/tgm/articles.php?article=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          południka zerowego
        </a>
        . Gdy podziwialiśmy widoki i robiliśmy zdjęcia, zapomnieliśmy o tym, że
        już dawno wybiła godzina zamknięcia parku. Przypomniał nam o tym dopiero
        strażnik, który przyjechał po nas autem i kazał wsiąść, aby móc nas
        odwieźć do bramy i wypuścić na zewnątrz. Przynajmniej mieliśmy darmową
        podwózkę ;).
      </p>

      <p className="link">
        <a
          href="https://www.royalparks.org.uk/__data/assets/pdf_file/0003/41637/greenwichpark_english_map.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mapa Greenwich Park
        </a>
      </p>

      <figure className="article-figure">
        <div className="four-img">
          <img src={peron} alt="Peron 9 i 3/4" />
        </div>
        <div className="four-img">
          <img src={traffic} alt="Traffic light tree" />
        </div>
        <div className="four-img">
          <img src={biurowiec} alt="Biurowiec canary wharf" />
        </div>
        <div className="four-img">
          <img src={tunel} alt="tunel do greenwich" />
        </div>
        <figcaption>
          Peron 9¾, Traffic Light Tree, Biurowiec Canary Wharf i tunel w stronę
          Greenwich
        </figcaption>
      </figure>

      <h4>Dzień 4 - Muzeum Historii Naturalnej oraz w Muzeum Nauki</h4>

      <p>
        Do tych dni nie będzie osobnych postów, więc na zakończenie streszczę,
        co robiliśmy dalej. Czwarty dzień spędziliśmy w Muzeum Historii
        Naturalnej oraz w Muzeum Nauki. Do każdego wstęp jest bezpłatny. Obydwa
        znajdują się w pięknych gmachach, przy Exhibition Road.
      </p>

      <p>
        W Muzeum Historii Naturalnej, były wystawy dotyczące między innymi:
        ewolucji, dinozaurów, ptaków, prehistorycznych gadów morskich,
        bezkręgowców, ryb, płazów, gadów, ssaków, rozwoju człowieka, ludzkich
        zmysłów i geologii. Muzeum jest czynne codziennie od 10 do 17:30. Jeśli
        chce się je zwiedzić dokładnie, to gwarantuje, że może to zająć cały
        dzień.
      </p>

      <p>
        W pierwszym muzeum zasiedzieliśmy się tak długo, że w drugim pozostało
        nam o wiele mniej czasu. W Muzeum Nauki zdążyliśmy odwiedzić wystawy,
        które dotyczyły: wytwarzania energii, kosmosu, postępu technicznego,
        ludzkich zmysłów i medycyny. Obiekt jest otwarty od 10 do 18. Niestety
        całego muzeum już się nam nie udało obejść, bo o 18 nas z niego
        wyproszono.
      </p>

      <p>
        Uzbrójcie się w cierpliwość, bo oba muzea są przepełnione zwiedzającymi.
        Jednak jak najbardziej warto je zobaczyć! Jeżeli podróżujecie z dziećmi,
        to uważam że Muzeum Historii Naturalnej spodoba się tym w wieku
        przedszkolnym, lub wczesnoszkolnym, miłośnikom dinozaurów i zwierząt.
        Natomiast Muzeum Nauki będzie lepsze do zabrania trochę starszych, które
        bardziej zrozumieją te techniczno-naukowe sprawy, chociaż uważam, że
        młodsze również znajdą coś dla siebie, na przykład samochody, samoloty,
        czy wystawę o kosmosie.
      </p>

      <p>
        Wieczorem udaliśmy się jeszcze na spacer pod Stamford Bridge - czyli
        stadion angielskiej drużyny Chelsea. A po powrocie do domu przyszedł
        czas na pakowanie, bo następnego dnia wracaliśmy już do Polski. Te 4 dni
        w Londynie były bardzo udane. Miasto ma wiele do zaoferowania, z
        pewnością do niego wrócę!
      </p>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m40!1m12!1m3!1d14040.481394990831!2d-0.15672486910568006!3d51.53101139568518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m25!3e2!4m5!1s0x487604d59ecdd3e1%3A0x900c16ed42e497a1!2sPomnik+Sherlock&#39;a+Holmes&#39;a%2C+4+Marylebone+Rd%2C+Marylebone%2C+London+NW1+5LD%2C+Wielka+Brytania!3m2!1d51.5225308!2d-0.15664229999999998!4m5!1s0x48761ac3b0b3be07%3A0x8983e0fbb6a18be!2sThe+Regent&#39;s+Park!3m2!1d51.5312705!2d-0.15696939999999998!4m5!1s0x48761ae41244f149%3A0x47659eff1785ef08!2sCamden+Market!3m2!1d51.5415108!2d-0.1457108!4m5!1s0x48761b3bf94081c7%3A0x7c612b5a92c7a2d0!2sKing&#39;s+Cross+St.+Pancras+Underground!3m2!1d51.5304414!2d-0.1239754!5e0!3m2!1spl!2spl!4v1538149224449"
        className="gmap"
        title="Mapa trasy zwiedzania, dzień 3, część 1"
      />

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m64!1m12!1m3!1d28106.470283090235!2d-0.00850307601372693!3d51.489647095790396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m49!3e2!4m5!1s0x487602ba7a12992f%3A0x4d821857a5e4a41!2sCanary+Wharf%2C+Londyn%2C+Wielka+Brytania!3m2!1d51.5054306!2d-0.0235333!4m5!1s0x487602afcbe72875%3A0xdc0cfa29ef152bd8!2sTraffic+Light+Tree%2C+Trafalgar+Way%2C+Londyn%2C+Wielka+Brytania!3m2!1d51.5068188!2d-0.010574799999999999!4m5!1s0x4876029ae91af2af%3A0x3939afd4f588d55e!2sGreenwich+Foot+Tunnel%2C+London%2C+UK!3m2!1d51.485002699999995!2d-0.0097444!4m5!1s0x4876028530615901%3A0xae4ec8561d209108!2sCutty+Sark!3m2!1d51.4828646!2d-0.0095917!4m5!1s0x48760284223d699d%3A0x65108fa624def5db!2sThe+Fan+Museum!3m2!1d51.4791354!2d-0.0080515!4m5!1s0x486b1647af26fcb3%3A0xcad4273caab4be1e!2sNational+Maritime+Museum!3m2!1d51.480875!2d-0.005288999999999999!4m5!1s0x486b1647af26fcb3%3A0x74795114112a9166!2sQueen&#39;s+House!3m2!1d51.4810945!2d-0.0037413999999999998!4m5!1s0x47d8a82a8ca9dca7%3A0x31abb25f451c8402!2sRoyal+Observatory+Greenwich!3m2!1d51.476853!2d-0.0005002!5e0!3m2!1spl!2spl!4v1538149426817"
        className="gmap"
        title="Mapa trasy zwiedzania, dzień 3, część 2"
      />
    </>
  );
};

export default London3;
