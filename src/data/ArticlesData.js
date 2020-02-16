import londyn from '../assets/images/londyn/min/rsz_westminster.jpg';
import londyn1 from '../assets/images/londyn/min/rsz_london-img-1.jpg';
import londyn2 from '../assets/images/londyn/min/rsz_london-img-2.jpg';
import londyn3 from '../assets/images/londyn/min/rsz_london-img-3.jpg';

import norwegia from '../assets/images/norwegia/min/rsz_aurlandslider14.jpg';
import norwegia1 from '../assets/images/norwegia/min/rsz_kjeragmin.jpg';
import norwegia2 from '../assets/images/norwegia/min/rsz_preikestolenmin.jpg';
import norwegia3 from '../assets/images/norwegia/min/rsz_hardengerviddamin.jpg';
import norwegia4 from '../assets/images/norwegia/min/rsz_trolltungamin.jpg';
import norwegia5 from '../assets/images/norwegia/min/rsz_lodowiecmin.jpg';
import norwegia6 from '../assets/images/norwegia/min/rsz_drogatrollimin.jpg';
import norwegia7 from '../assets/images/norwegia/min/rsz_aurlandmin.jpg';
import norwegia8 from '../assets/images/norwegia/min/rsz_jostedalsmin.jpg';

import wierchy from '../assets/images/wierchy/min/rsz_czerwone-wierchy.jpg';
import wierchy1 from '../assets/images/wierchy/min/rsz_krupówki-pupa.jpg';
import wierchy2 from '../assets/images/wierchy/min/rsz_wierchy-szlak.jpg';

import czechy from '../assets/images/harrachov/min/rsz_benecko31.jpg';

import { convertToUrl } from '../utils/jsUtils';

export const articlesData = [
  {
    title: 'Londyn',
    subtitle: 'Londyn w 3 dni',
    desc:
      'Sprawdź najlepsze trasy po Londynie i dowiedz się co trzeba w nim zobaczyć',
    img: londyn,
    caption: 'Londyn w 3 dni',
    articles: [
      {
        subtitle: 'Co warto zobaczyć w Londynie pierwszego dnia?',
        caption: 'Trasa zwiedzania - Dzień 1',
        desc: `Po porannym przylocie samolotem, nie marnowaliśmy czasu. Wybraliśmy się
        na całodniowy spacer, trasą z kategorii “must see in London”. Trasa nie
        męczy, myślę, że każdy da radę przejść, bo w jej czas wliczone jest
        sporo postojów na ciekawe zabytki, sklepy i jedzonko!`,
        img: londyn1,
      },
      {
        subtitle: 'Całodniowy spacer wzdłuż Tamizy',
        caption: 'Trasa zwiedzania - Dzień 2',
        desc: `To był spacer pełen mostów i łodzi. Trasa zahaczała o wiele ciekawych
        punktów kulturalnych i zabytkowych oraz zapewniła nam piękne widoki!
        Tamiza jest jedną z najdłuższych rzek Wysp Brytyjskich, ma 346
        kilometrów długości...`,
        img: londyn2,
      },
      {
        subtitle:
          'Peron 9 i 3/4, Sherlock Holmes i Greenwich na południku zerowym',
        caption: 'Trasa zwiedzaina - Dzień 3',
        desc: `Tego dnia poszliśmy na spacer do malowniczego Regent’s Park. Po południu
        udaliśmy się na zakupy w Camden Town. A później odwiedziliśmy King’s
        Cross Station, by zobaczyć Peron 9 i ¾. Następnie przeszliśmy się
        tunelem do Greenwich, w poszukiwaniu południka zerowego.`,
        img: londyn3,
      },
    ],
    numbers: {
      location: 'Londyn',
      distance: '1500 km',
      fly: '2 godz. 25 min',
      drive: '16 godz. 50 min',
    },
  },
  {
    title: 'Norwegia',
    subtitle: 'Samochodem w dwa tygodnie',
    desc: 'Zobacz naszą wyprawę nad morzem północnym i zainspiruj się',
    img: norwegia,
    caption: 'Norwegia samochodem w dwa tygodnie',
    articles: [
      {
        subtitle: 'Masz lęk wysokości? Lepiej nie wchodź na Kjeragbolten',
        caption: 'Kjeragbolten',
        desc: `Na górze Kjerag położonej nad Lysefjordem, nieopodal miasta Forsand w
        okręgu Rogaland znajduje się głaz Kjeragbolten, zaklinowany pomiędzy
        dwiema skałami. Z tego miejsca rozciąga się piękny widok na Lysefjorden.
        Najwyższy punkt góry wznosi się na wysokość 1100 metrów nad poziomem
        morza. Po drugiej stronie znajduje się Preikestolen.`,
        img: norwegia1,
      },
      {
        subtitle: 'Preikestolen - najsłynniejsza półka skalna w Norwegii',
        caption: 'Preikestolen',
        desc: `Preikestolen to słynny klif w Norwegii o wysokości 604 m, położony nad
        Lysefjordem. Powstał najprawdopodobniej ok. 10 tysięcy lat temu w wyniku
        pęknięcia skał pod wpływem mrozu. Płaska powierzchnia wierzchołka ma
        wymiary 25 na 25 metrów. Po drugiej stronie Lysefjordu znajduje się
        Kjeragbolten, który jest również bardzo chętnie odwiedzany przez
        turystów.`,
        img: norwegia2,
      },
      {
        subtitle:
          'Mroźny Dom Gigantów Jotunheimen i Kraina Hobbitów Hardangervidda',
        caption: 'Jotunheimen i Hardangervidda',
        desc: `Park Narodowy Hardangervidda zajmuje 342200 ha, utworzony został w 1970.
        Jest to otwarty, bezleśny teren płaskowyżu utworzonego przez lodowiec,
        poprzecinany pasmami niewysokich gór. W parku chroniony jest głównie
        unikatowy krajobraz i elementy przyrody nieożywionej.`,
        img: norwegia3,
      },
      {
        subtitle: 'Trolltunga - spotkanie z Trollem',
        caption: 'Trolltunga',
        desc: `Język Trolla ma 10 metrów długości, 5 metrów grubości przy nasadzie,
        natomiast na samym czubku jej grubość zwęża się do kilkudziesięciu
        centymetrów. Skała znajduje się na pograniczu płaskowyżu Hardangervidda, około
        1100 metrów nad poziomem morza i 700 metrów nad jeziorem Ringedalsvatnet.`,
        img: norwegia4,
      },
      {
        subtitle: 'Lodowa kraina - Jostedalsbreen i jego ramię Briksdalsbreen',
        caption: 'Jostedalsbreen i jego ramię Briksdalsbreen',
        desc: `W południowo-zachodniej części Norwegii, pomiędzy Sognefjordem a
        Nordfjordem rozciąga się największy lodowiec w kontynentalnej Europie.
        Leży w południowo-zachodniej części Norwegii, w okręgu Sogn og Fjordane.
        Jego najwyższym szczytem jest Lodalskåpa – nunatak mający wysokość 2083
        m. Ogólna powierzchnia lodowca wynosi 487 km². Najwyższy punkt, Høgste
        Breakulen, sięga 1957 m n.p.m.`,
        img: norwegia5,
      },
      {
        subtitle: 'Średniowieczne farmy Skageflå i kręta Droga Trolli',
        caption: 'Geirangerfjord i Droga Trolli',
        desc: `Geirangerfjorden leży w południowo-zachodniej Norwegii, jest wpisany na
        listę światowego dziedzictwa UNESCO. Ma długość 15 kilometrów i otoczony
        jest stromymi, skalistymi zboczami, po których spływają liczne
        wodospady. Na okolicznych wzgórzach rozsiane są dawne, opuszczone farmy.
        Między wioskami Geiranger i Hellesylt, leżącymi na przeciwległych
        krańcach wąskiej doliny fiordu, kursują promy, których można podziwiać
        fjord i De Syv Søstrene (Wodospad Siedmiu Sióstr).`,
        img: norwegia6,
      },
      {
        subtitle:
          'Urocze, portowe miasteczka nad Sognefjordem - Aurland, Lærdal i Flåm',
        caption: 'Aurland, Lærdal i Flåm',
        desc: `Te trzy miasta leżą w okręgu Sogn Og Fjordane. Klimat nadają im strome
        górskie zbocza, otaczające je z każdej strony. Platforma Stegestein w
        Aurland gwarantuje niesamowity widok. Zabytkowe drewniane domy i kościół
        w Laerdal tworzą niesamowity klimat, który zapamiętacie na długo. A
        Flåmsbana umożliwi wygodną podróż wzdłuż fiordu, pełna pięknych widoków.`,
        img: norwegia7,
      },
      {
        subtitle:
          'Ile zapłaciliśmy za wyjazd do Norwegii? Jak dojechać? Co ze sobą spakować?',
        caption: 'Jak zaplanować podróż do Norwegii?',
        desc: `W tym wpisie przedstawię Wam zbiór najbardziej praktycznych informacji
        dotyczących naszego wyjazdu. Planując naszą wyprawę szukaliśmy jak
        najtańszego sposobu dostania się do Norwegii, dlatego zbadaliśmy kilka
        opcji przeprawy, różnymi promami i do różnych portów. Przed pakowaniem
        przygotowaliśmy również szczegółową listę z rzeczami które trzeba ze
        sobą zabrać. Przez cały wyjazd spisywałam nasze wydatki na kartce oraz
        śledziłam trasę na mapie. Jeśli więc chcecie się wybrać do Norwegii,
        koniecznie musicie zapoznać się z tym wpisem 😉.`,
        img: norwegia8,
      },
    ],
    numbers: {
      location: 'Norwegia',
      distance: '1700 km',
      fly: '1 godz. 55 min',
      drive: '17 godz. 50 min',
    },
  },
  {
    title: 'Czerwone Wierchy',
    subtitle: 'Zakopane i Czerwone Wierchy na weekend',
    desc: 'Dowiedz się jakich widoków możesz się spodziewać',
    img: wierchy,
    caption: 'Zakopane i Czerwone Wierchy na weekend',
    articles: [
      {
        subtitle: 'Zakopane - Spacer przez Krupówki',
        caption: 'Zakopane',
        desc: `Piszę prosto z zimowej stolicy Polski, otoczonej Tatrami. W tym wpisie
        dowiecie się gdzie nocowaliśmy, czy Krupówki są przereklamowane, czy
        jednak warte odwiedzenia, co warto tu zjeść i jakie piwo wypić :).`,
        img: wierchy1,
      },
      {
        subtitle: 'Czerwone wierchy, czyli jesienią przez tatrzańskie grzbiety',
        caption: 'Tatrzańskie grzbiety',
        desc: `Drugi dzień był o wiele ciekawszy i było nieco więcej natury, niż na
        Krupówkach. Wybraliśmy się w góry. Wiele osób ostrzega przed wędrówkami
        w listopadzie, bo już leży śnieg, jest zimniej, bardziej ślisko i często
        słyszy się, że już ktoś zamarzł… No cóż, Nas to nie przekonało do
        pozostania w domu… Norwegia nauczyła nas więcej pokory wobec gór. Poza
        tym przecież zawsze można jeszcze zawrócić na szlaku.. Warto chociaż
        spróbować swoich sił :).`,
        img: wierchy2,
      },
    ],
    numbers: {
      location: 'Wierchy',
      distance: '370 km',
      fly: '-',
      drive: '3 godz. 55 min',
    },
  },
  {
    title: 'Czechy',
    subtitle: 'Harrachov, Benecko i Herlikovice na ferie zimowe',
    desc: 'Sprawdź gdzie warto pojeździć na stokach w Czechach',
    img: czechy,
    caption: 'Harrachov, Benecko i Herlikovice na ferie zimowe',
    articles: [
      {
        subtitle: 'Harrachov, Benecko i Herlikovice na ferie zimowe',
        caption: 'Sprawdź gdzie warto pojeździć na stokach w Czechach',
        desc: `W tym wpisie opiszę trzy stoki narciarskie w Czechach (Harrachov,
          Benecko i Vrchlabi) oraz nasz spacer Szlakiem Walońskim w Szklarskiej
          Porębie Dolnej, na który udaliśmy się w drodze powrotnej.`,
        img: czechy,
      },
    ],
    numbers: {
      location: 'Benecko',
      distance: '160 km',
      fly: '-',
      drive: '2 godz. 30 min',
    },
  },
];

export const articlesLinks = {};

const camalize = (str) => {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
};

const getArticleLink = (articleTitle, articleIndex, subtitleIndex) => {
  return `/${articleTitle}/${convertToUrl(
    articlesData[articleIndex].articles[subtitleIndex].subtitle
  )}`;
};

const getArticleTitleUrl = (articleIndex) => {
  return convertToUrl(articlesData[articleIndex].title);
};

const generateArticleLinks = (articleTitle, articleIndex) => {
  switch (articleTitle) {
    case 'londyn':
      return {
        londyn1: getArticleLink(
          getArticleTitleUrl(articleIndex),
          articleIndex,
          0
        ),
        londyn2: getArticleLink(
          getArticleTitleUrl(articleIndex),
          articleIndex,
          1
        ),
        londyn3: getArticleLink(
          getArticleTitleUrl(articleIndex),
          articleIndex,
          2
        ),
      };
    case 'norwegia':
      return {
        kjeragbolten: getArticleLink(
          getArticleTitleUrl(articleIndex),
          articleIndex,
          0
        ),
        preikestolen: getArticleLink(
          getArticleTitleUrl(articleIndex),
          articleIndex,
          1
        ),
        jotunheimen: getArticleLink(
          getArticleTitleUrl(articleIndex),
          articleIndex,
          2
        ),
        trolltunga: getArticleLink(
          getArticleTitleUrl(articleIndex),
          articleIndex,
          3
        ),
        jostedalsbreen: getArticleLink(
          getArticleTitleUrl(articleIndex),
          articleIndex,
          4
        ),
        geirangerfjord: getArticleLink(
          getArticleTitleUrl(articleIndex),
          articleIndex,
          5
        ),
        aurland: getArticleLink(
          getArticleTitleUrl(articleIndex),
          articleIndex,
          6
        ),
        trasa: getArticleLink(
          getArticleTitleUrl(articleIndex),
          articleIndex,
          7
        ),
      };
    case 'czerwoneWierchy':
      return {
        zakopane: getArticleLink(
          getArticleTitleUrl(articleIndex),
          articleIndex,
          0
        ),
        gory: getArticleLink(getArticleTitleUrl(articleIndex), articleIndex, 1),
      };
    case 'czechy':
      return {
        harrachov: getArticleLink(
          getArticleTitleUrl(articleIndex),
          articleIndex,
          0
        ),
      };
  }
};

const addTitlesToArticlesLinks = () => {
  Object.keys(articlesData).forEach((key) => {
    const camelTitle = camalize(articlesData[key].title);
    articlesLinks[camelTitle] = generateArticleLinks(camelTitle, key);
  });
};

addTitlesToArticlesLinks();
