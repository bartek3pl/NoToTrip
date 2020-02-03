import React from 'react';
import Carousel from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Carousel';
import Img from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Img';
import Header from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Header';
import Subheader from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Subheader';
import P from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/P';
import A from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/A';

import benecko1 from '../../assets/images/harrachov/benecko1.1.jpg';
import benecko2 from '../../assets/images/harrachov/benecko1.3.jpg';
import benecko3 from '../../assets/images/harrachov/benecko2.1.jpg';
import benecko4 from '../../assets/images/harrachov/benecko2.4.jpg';
import benecko5 from '../../assets/images/harrachov/benecko3.1.jpg';
import benecko6 from '../../assets/images/harrachov/benecko3.5.jpg';

const Czechy1 = () => {
  return (
    <>
      <Header>
        W tym wpisie opiszę trzy stoki narciarskie w Czechach (Harrachov,
        Benecko i Vrchlabi) oraz nasz spacer Szlakiem Walońskim w Szklarskiej
        Porębie Dolnej, na który udaliśmy się w drodze powrotnej.
      </Header>

      <Subheader>Czechy</Subheader>

      <P>
        Podczas pobytu w Czechach nocowaliśmy w pensjonacie Motorest Jizerský
        ráj. Cena noclegu była bardzo niska, wykupiliśmy sobie śniadania za 17
        zł, co również uważam za dobrą cenę. Posiłki typu obiad/kolacja
        kosztowały około 270 KC i były bardzo smaczne, za czeskie piwo Konrad
        płaciliśmy 24 KC, a za grzane wino 38 KC. W samej miejscowości Smržovka
        nie znaleźliśmy innych restauracji, natomiast w sąsiednich nieco
        większych miastach jest ich sporo. A pensjonat jest idealny dla osób,
        które przyjeżdżają do Czech głównie w celu spędzania całych dni na stoku
        narciarskim i nie przykładają zbytnio wagi do estetyki. Warto dodać, że
        obsługa była bardzo miła i pomocna.
      </P>

      <Carousel figcaption="Pobliskie stoki narciarskie">
        <Img src={benecko1} alt="Czechy Benecko" />
        <Img src={benecko2} alt="Czechy Benecko" />
      </Carousel>

      <P>Przedstawię Wam trzy stoki blisko naszego pensjonatu:</P>

      <Subheader>
        Benecko (
        <A href="http://www.benecko.info/pl/zima/skiareal-benecko/interaktivni-mapa/">
          Mapa
        </A>
        )
      </Subheader>

      <P>
        Za skipass popołudniowy zapłaciliśmy 400 KC. Na szczyt kursuje jedna
        czteroosobowa kanapa, a na boczne trasy dojedziemy czternastoma
        orczykami. Jednak główna trasa może się szybko znudzić, nie było tam
        jakiś bocznych dróg, więc Benecko polecam na jeden dzień, gdyż zjazdy są
        monotonne.
      </P>

      <Subheader>
        Harrachov (
        <A href="https://www.skiareal.com/zima/index.php?lang=7">Mapa</A>)
      </Subheader>

      <P>
        4-godzinny skipass kosztował 560 KC. Na szczyt Czarciej Góry kursują
        dwie czteroosobowe kanapy. W zależności od specyfiki terenu można
        wybierać spośród czterech tras zjazdowych o różnej długości i różnym
        stopniu trudności. Jako ciekawostkę dodam, że tutaj stoki są
        przygotowane do jazdy również w sezonie letnim.
      </P>

      <Subheader>
        Herlikovice (
        <A href="https://www.herlikovice.cz/zima/mapa-arealu/">Mapa</A>)
      </Subheader>

      <P>
        Ten stok narciarski przypadł nam najbardziej do gustu, był duży wybór
        tras, z różnymi stopniami zaawansowania, od trudnych i stromych, do
        bardzo prostych. Ośrodek narciarski posiada dwa wyciągi z
        czteroosobowymi kanapami i bardzo dużo orczyków. Właściwie można spędzić
        tu kilka dni, bo z mapką na stoku nie ma nudy. Tutaj za 4 godziny
        wychodzi 420 KC, jednak znaleźliśmy opcję jak zaoszczędzić. Za skipass
        od godziny 13 do 16 płaci się już tylko 360 KC.
      </P>

      <Carousel
        figcaption="Ośrodek narciarski Herlikovice był zdecydowanie najlepszy spośród
          trzech tutaj wymienionych :)"
      >
        <Img src={benecko3} alt="Czechy Herlikovice" />
        <Img src={benecko4} alt="Czechy Herlikovice" />
      </Carousel>

      <Subheader>Szklarska Poręba Dolna - Szlak Waloński</Subheader>

      <P>
        Walończycy byli ludem romańskim, który przybył w Karkonosze i Góry
        Izerskie. Uznawani za fachowców od wydobywania i przetwarzania bogactw
        naturalnych, od eksploatacji srebra i złota rodzimego oraz kamieni
        szlachetnych. Posiadali wiedzę tajemną podobnie jak alchemicy, czy
        astrologowie. Mieli duży wpływ na ówczesnych władców i byli wśród nich
        bardzo cenieni. WAlończyków nazywano inżynierami, pobierali próbki i
        oceniali zawartość złoża. Walońską “stolicą” była Stara Wieś Szklarska -
        dziś część Szklarskiej Poręby Dolnej.
      </P>

      <P>
        <b>Szlak Waloński</b> prowadzi ze Szklarskiej Poręby Dolnej spod
        kościoła cmentarnego Matki Boskiej Różańcowej i składa się z dwóch
        pętli.
      </P>

      <Subheader>Nasza trasa</Subheader>

      <P>
        Gdy rano mieliśmy wracać z Czech wpadłam na pomysł, by zahaczyć w drodze
        powrotnej o Szklarską Porębę. Szukaliśmy jakiś łatwych i przyjemnych
        tras spacerowych i tak właśnie trafiliśmy na ten szlak. Wybraliśmy pętlę
        I. Trasę rozpoczęliśmy od pierwszego punktu, czyli Kościoła Matki
        Boskiej Różańcowej. Jest to najstarszy zachowany kościół w Szklarskiej
        Porębie pochodzący z około 1650 r. Na jego południowej i zachodniej
        ścianie znajdują się nagrobki rodziny Preusslerów - założycieli i
        właścicieli tutejszych hut szkła. Drugim punktem na mapie była Lipa
        sądowa - miejsce, gdzie wójt stanowił lokalne prawo.
      </P>

      <P>
        Gdy poszliśmy dalej nad Szklarskim Potokiem ukazała nam się najstarsza
        huta szkła. Jest ona wzmiankowana w dokumencie z dnia 7.08.1366 r. jako
        "od dawna już znajdująca się w Szklarskiej Porębie”. Walończycy
        wskazywali miejscowym hutnikom złoża kwarcu, które były podstawowym
        surowcem do wytopu szkła. Czwartym punktem na mapie była Stróżna, czyli
        granitowa skała. Jest ona związana z buntem chłopskim w latach
        1587-1589, który objął także dobra Schaffgotschów w okolicach Jeleniej
        Góry. Z tego miejsca przez prawie 2 lata chłopi bronili dostępu
        zamykając drogę do Szklarskiej Poręby Dolnej. Skała była do 1945 r.
        pomnikiem przyrody.
      </P>

      <Carousel figcaption="Szlak Waloński w Szklarskiej Porębie">
        <Img src={benecko5} alt="Szklarska Poręba" />
        <Img src={benecko6} alt="Szklarska Poręba" />
      </Carousel>

      <P>
        Następnie Witriolejnia, czyli zakład wytwarzający z łupków pirytu kwas
        siarkowy. Piryt, zwany też „złotem głupców”, wydobywany był w pobliskich
        sztolniach położonych koło Zbójeckich Skał. Gdy Potem rozpoczęliśmy
        spacer przez las, idąc lekko pod górę, niestety im wyżej się
        wspinaliśmy, tym więcej było na drodze lodu, w pewnym momencie było już
        tak ślisko, że rozważaliśmy powrót.{' '}
      </P>

      <P>
        Jednak doszliśmy do Rzeki Kamiennej. W niej i jej dopływach Walończycy
        wydobywali złoto i kamienie szlachetne. Świadczą o tym nazwy strumieni
        „Czarna Płóczka”, „Półcznik”, „Złoty Potok”, „Szafirowa Struga”,
        „Rudnik”.
      </P>

      <P>
        Dopiero, gdy doszliśmy do „Wodospadu Szklarki” zdecydowaliśmy się wracać
        do samochodu, gdyż lód na trasie wcale się nie zmniejszał. Poza tym
        naszym zmęczonym po nartach nogom należał się jakiś odpoczynek ;) W
        okolicy wodospadu Szklarka wydobywany był przez walońskich poszukiwaczy
        minerałów i kamieni szlachetnych rzadki, wysoko ceniony w średniowieczu
        kwarc dymny.
      </P>
    </>
  );
};

export default Czechy1;
