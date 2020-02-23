import React from 'react';
import Carousel from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Carousel';
import Img from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Img';
import Point from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Point';
import Header from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Header';
import Subheader from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Subheader';
import P from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/P';
import A from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/A';
import LinkToArticle from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/LinkToArticle';

import info1 from '../../assets/images/bali/info/info.1.1.jpg';
import info2 from '../../assets/images/bali/info/info.1.2.jpg';
import info3 from '../../assets/images/bali/info/info.2.1.jpg';
import info4 from '../../assets/images/bali/info/info.2.2.jpg';

import { articlesLinks } from '../../data/ArticlesData';

const Bali6 = () => {
  return (
    <>
      <Header>
        W tym wpisie przedstawię podstawowe i najważniejsze informacje dotyczące
        przygotowań do wyjazdu na Bali. Opowiem o bezpieczeństwie, zdrowiu i
        szczepieniach. Doradzę co ze sobą zabrać i co zrobić, by wyjazd minął
        przyjemnie i bezproblemowo :).
      </Header>
      <Subheader>Szczepienia na Bali</Subheader>
      <P>Zalecanymi szczepionkami przed wyjazdem na Bali są:</P>
      <Point>
        <A href="https://www.mp.pl/pacjent/leki/lek/46100,Typhim-Vi-roztwor-do-wstrzykiwan">
          przeciw durowi brzusznemu
        </A>{' '}
        - koszt ok. 200 zł.{' '}
      </Point>
      <Point>
        <A href="https://www.mp.pl/pacjent/leki/lek/54794,Havrix-Adult-zawiesina-do-wstrzykiwan">
          przeciw WZW
        </A>{' '}
        - koszt ok. 200zł.
      </Point>
      <Point>
        <A href="https://szczepieniadlapodrozujacych.pl/choroby-tropikalne/wirusowe-zapalenie-watroby-typu-b-wzw-b">
          przeciw WZW B
        </A>{' '}
        - jest obowiązkowe dla wszystkich niemowląt oraz zalecane dla osób
        dorosłych z grup ryzyka wcześniej niezaszczepionych.
      </Point>
      <Point>
        <A href="https://szczepieniadlapodrozujacych.pl/choroby-tropikalne/tezec">
          przeciw tężcowi
        </A>{' '}
        - W Polsce szczepienie przeciw tężcowi jest obowiązkowe dla dzieci i
        młodzieży do lat 19.
      </Point>
      <Point>
        <A href="https://szczepieniadlapodrozujacych.pl/choroby-tropikalne/blonica">
          przeciw błonnicy
        </A>{' '}
        - W Polsce osoby do 19. roku życia poddawane są obowiązkowo
        profilaktycznym szczepieniom ochronnym przeciw błonicy.{' '}
      </Point>

      <Carousel figcaption="W ogrodach świątyni Goa Gajah, Ubud">
        <Img src={info1} alt="Bali" />
        <Img src={info2} alt="Bali" />
      </Carousel>

      <Subheader>Malaria i denga</Subheader>

      <P>
        Na Bali nie ma malarii, ale występuje{' '}
        <A href="https://www.mp.pl/pacjent/zdrowiewpodrozy/problemy/65384,denga">
          denga
        </A>
        . Jest to choroba wirusowa przenoszona przez komary. Aby zapobiec dendze
        warto stosować środki ochronne na komary, moskitiery, siatki ochronne w
        oknach pomieszczeń, nosić długie rękawy i nogawki, zwłaszcza od
        zmierzchu do świtu.
      </P>

      <Subheader>Zdrowie</Subheader>

      <P>
        Woda z kranu nie jest zdatna do picia, dlatego by zachować ostrożność
        lepiej nie jeść surowych warzyw, myć zęby wodą butelkowaną i nie pić
        drinków z lodem, gdy nie mamy pewności, z jakiej wody jest zrobiony.
        Dodatkowo zaleca się zacząć przyjmowanie probiotyku dwa tygodnie przed
        wyjazdem, w trakcie wyjazdu i dwa tygodnie po powrocie.
      </P>

      <Subheader>Apteczka</Subheader>

      <P>
        Obowiązkowo zabierzcie ze sobą podstawową apteczkę! Jeśli będzie
        potrzeba przyjmowania antybiotyku, na Bali dostaniecie go bez recepty.
        Jednak przed odwiedzeniem apteki, sprawdźcie w internecie indonezyjskie
        nazwy leków, gdyż różnią się od nazw w Polsce, w aptece możecie również
        liczyć na pomoc farmaceuty, gdy powiecie, co wam dolega.
      </P>

      <P>Co spakować do apteczki</P>

      <Point>preparat do dezynfekcji i gojenia ran </Point>
      <Point>plastry</Point>
      <Point>lek przeciw biegunce, zaparciom, wymiotom</Point>
      <Point>lek redukujący objawy towarzyszące podróży</Point>
      <Point>lek przeciwko przeziębieniom i grypie</Point>
      <Point>lek na pęcherz</Point>
      <Point>pastylki przeciwko bólowi gardła</Point>
      <Point>
        tabletki przeciw bólowi głowy, żołądka, bólom menstruacyjnym
      </Point>
      <Point>maść z hydrokortyzonem, czyli maść na odczyny alergiczne </Point>
      <Point>
        maść o właściwościach bakteriobójczych, przeciwzapalnych, anty
        grzybiczych
      </Point>
      <Point>lek przeciw alergii</Point>
      <Point>probiotyki</Point>
      <Point>
        preparat przeciw komarom - najlepsze i najtańsze można kupić na miejscu
      </Point>
      <Point>maść na ukąszenie komara</Point>

      <Carousel figcaption="W ogrodach świątyni Goa Gajah, Ubud">
        <Img src={info3} alt="Bali" />
        <Img src={info4} alt="Bali" />
      </Carousel>

      <Subheader>Co ze sobą zabrać?</Subheader>

      <P>
        Oto lista rzeczy do zabrania, której sama używałam, pakując się na
        24-dniowy wyjazd. Ta mała ilość ciuchów wynika z tego, że korzystaliśmy
        z usługi prania na miejscu.
      </P>

      <Point>Topy/t-shirty 10 szt.</Point>
      <Point>Coś lekkiego z długim rękawem</Point>
      <Point>Krótkie spodenki 3,4 szt.</Point>
      <Point>Długie spodnie</Point>
      <Point>Bielizna 10 szt.</Point>
      <Point>Skarpeti 7 szt.</Point>
      <Point>Stroje kąpielowe 3 szt.</Point>
      <Point>Ręcznik</Point>
      <Point>Pasta do zębów i szczoteczka</Point>
      <Point>Szczotka</Point>
      <Point>Kosmetyki do makijażu</Point>
      <Point>Dezodorant</Point>
      <Point>Kremy z filtrem</Point>
      <Point>Okulary słoneczne i zwykłe</Point>
      <Point>Zestaw do nurkowania</Point>
      <Point>Klapki</Point>
      <Point>Sandały</Point>
      <Point>Adidasy / samolot</Point>
      <Point>Czapka z daszkiem</Point>
      <Point>Bluza / do samolotu</Point>
      <Point>Poduszka</Point>
      <Point>Słuchawki</Point>
      <Point>nerka/torebka</Point>
      <Point>Papierowy bilet na pociąg i samolot</Point>
      <Point>Peleryny</Point>
      <Point>Ładowarka</Point>
      <Point>Aparat i ładowarka</Point>
      <Point>Krem</Point>
      <Point>Żel pod prysznic i szampon</Point>
      <Point>Laptop</Point>
      <Point>Książki</Point>
      <Point>Plecak mały / do samolotu, na wycieczki</Point>

      <P>
        Zapraszam Cię do{' '}
        <LinkToArticle to={articlesLinks.bali.komunikacja}>
          wpisu z informacjami dotyczącymi życia na Bali
        </LinkToArticle>
        : wypożyczenie i jazda skuterem, speedboaty, kantory. W tym artykule
        dowiesz się również na co zwracać szczególną uwagę oraz jakie
        niebezpieczeństwa czyhają na turystów.
      </P>
    </>
  );
};

export default Bali6;
