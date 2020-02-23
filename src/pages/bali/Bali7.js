import React from 'react';
import Carousel from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Carousel';
import Img from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Img';
import Figure from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Figure';
import Header from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Header';
import Subheader from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Subheader';
import P from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/P';
import LinkToArticle from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/LinkToArticle';

import komunikacja1 from '../../assets/images/bali/komunikacja/info.3.jpg';
import komunikacja2 from '../../assets/images/bali/komunikacja/info.4.1.jpg';
import komunikacja3 from '../../assets/images/bali/komunikacja/info.4.2.jpg';
import { articlesLinks } from '../../data/ArticlesData';

const Bali7 = () => {
  return (
    <>
      <Header>
        Zapraszam na drugi wpis informacyjno-poradnikowy. Opiszę w nim sposoby
        przemieszczania się po wyspie: skuterem, taksówkami i Grabem, jak i
        również podróżowanie speedboatami między wyspami. Opowiem jak wygląda
        sytuacja z bankomatami, płatnościami kartą i kantorami. Dowiecie się też
        na co zwracać szczególną uwagę odwiedzając balijskie miasta.
      </Header>

      <Subheader>Skutery na Bali</Subheader>

      <P>
        Wypożyczenie skutera kosztowało nas: 40K w Kucie, 50k w Munduk, Ubud i
        na Nusa Penidzie, w cenie są zawsze kaski. Stan pojazdów można
        powiedzieć, że był po prostu dostosowany do dróg… :) Czyli np. w Kucie
        skuter trochę miał słaby silnik i zepsuty licznik prędkości, ale w
        Munduk i na Nusa Penidzie pojazdy były dostosowane do górzystych tras -
        stromych podjazdów i ostrych zakrętów. Cena paliwa - bardzo niska,
        litrowa butelka paliwa u przydrożnych sprzedawców kosztowała 10K, jest
        to dokładnie tyle samo ile zapłacimy za butelkę wody.
      </P>

      <P>
        Ruch na Bali jest lewostronny, kierowcy używają tutaj klaksonów jako
        komunikaty typu: ”Będę wyprzedzał’, a zasady ruchu drogowego nie są
        przestrzegane w ogóle, raczej panuje zasada: kto pierwszy ten lepszy.
        Aby legalnie jeździć na Bali wymagane jest międzynarodowe prawo jazdy
        (Konwencja genewska o ruchu drogowym). Dokument możemy wyrobić w
        Urzędzie Miejskim za 35zł. My podczas całego wyjazdu nie spotkaliśmy ani
        razu policji, więc nie wiem jak wygląda sprawa z łapówkami, gdyż nie
        mieliśmy styczności z kontrolą dokumentów.
      </P>

      <Figure figcaption="Skuterem po Munduk">
        <Img src={komunikacja1} alt="Bali Munduk" />
      </Figure>

      <Subheader>Speedboaty</Subheader>

      <P>
        Speedboaty, jak na Balijskie ceny są dosyć drogie. Bilet kupiony w
        biurze przy porcie Padang Bai do Gili Trawangan kosztował nas 500K. Do
        tego sprzedawca opowiadając bajkę o uszkodzonych rafach koralowych,
        wcisnął nam w tej cenie najgorszą możliwą opcję wartą 300K (Ostina).
        Kupowaliśmy bilet na ostatnią chwilę, więc nie chciało się nam już
        kłócić o cenę. Na Gili Meno tak samo kupiliśmy w biurze podróży przy
        porcie za 450 K IDR na Nusa Penidę (nieco lepszej firmy - Eajaya). Moja
        rada: ogarnijcie bilety 2 dni przed planowanym wypłynięciem z portu i
        zróbcie research w internecie. Można tam znaleźć o wiele tańsze i lepsze
        łodzie (np. Na Nusa Penidzie korzystaliśmy ze Skypenida.com). Osobiście
        nie natrafiłam na dobrze zorganizowany transport speedboatem, wydaje mi
        się że jest to wciąż rozwijający się biznes. Niestety nie ma innej
        opcji, by przepłynąć z wyspy do wyspy, więc chcąc nie chcąc trzeba kupić
        te bilety, uzbroić się w cierpliwość i to jakoś przeżyć :).
      </P>

      <Subheader>Taksówki, Uber i Grab</Subheader>

      <P>
        Na Bali, w popularniejszych miejscach nie trudno znaleźć taksówkę,
        właściwie to trudniej odgonić nierzadko nachalnych taksówkarzy :) Uber
        tutaj nie działa, ale istnieje jego odpowiednik - Grab. Polecam ściągnąć
        tę aplikację na telefon, bo ceny są niższe niż w hotelowych taksówkach,
        czy nawet tych ulicznych. W każdej chwili możemy odwołać przyjazd
        kierowcy, bez dodatkowych kosztów. Nie płaci się również za oczekiwanie
        kierowcy. Aplikacja z tych dwóch względów jest lepsza od Ubera, bo
        działa na korzyść pasażerów. Musicie jednak pamiętać, że w wielu
        miejscach na Bali jest zakaz Graba i jego odpowiedników, na rzecz
        hotelowych kierowców. Oznacza to, że np. Kierowca Graba nie będzie
        chciał nas odebrać spod hotelu i napisze, żeby umówić się ulicę dalej.
        Są też rejony, gdzie aplikacja w ogóle nie wyszukuje kierowców, jak np.
        w Munduk, lub na Nusa Penidzie. W tych miejscach musieliśmy korzystać z
        hotelowych taksówek, których ceny jak już pisałam - są nieco wyższe.
      </P>

      <Subheader>Kantory, wymiana walut</Subheader>

      <P>
        Tutejszą walutą jest rupia indonezyjska (IDR), jej kurs na chwilę obecną
        wynosi 0,00027 zł. Można ją kupić w kantorach polskich (np. Kantor Cent
        we Wrocławiu). Tę opcję polecam osobom, które nie są pewne, czy odnajdą
        się w gąszczu kantorów w Kucie. Drugą opcją jest kupno Euro lub dolarów
        i wymiana na miejscu. Nie uważam, by było to coś skomplikowanego, jednak
        ostrzegam, że NIE KAŻDY KANTOR NA BALI JEST PRAWDZIWYM KANTOREM. Na
        pewno w Kucie zwrócicie uwagę, że walutę można wymienić nawet w sklepie.
        Zazwyczaj w lokalu jest małe okienko nazwane “kantorem”, a wymiana po
        jego kursach wydaje się być interesem życia. Nic bardziej mylnego. Jest
        to zwykła ściema i na pewno nic nie zaoszczędzicie. Wiem o tym, bo
        niestety sami daliśmy się zrobić, nie zauważając podmianki kupki z
        pieniędzmi... Moja rada: wymieniajcie gotówkę tylko w bankach lub
        autoryzowanych kantorach, albo korzystajcie z Revoluta.
      </P>

      <Subheader>Płatności</Subheader>

      <P>
        Warto zawsze mieć ze sobą gotówkę i być przygotowanym na to, że w
        większości sytuacji będzie to od nas wymagane (np. Opłata za hotel, w
        sklepie, wypożyczenie skuterów, bilety na speedboaty). Często są
        naliczane dodatkowe prowizje za płatności kartą. W Kucie, Ubud i na Nusa
        Penidzie nie ma problemu ze znalezieniem bankomatu, nawet na Gili Meno
        były czynne dwa, jedynie w Munduk był z tym problem. Przed wyjazdem
        przeczytaliśmy na innych blogach, a potem przetestowaliśmy, że wypłaty z
        BNI, BCA lub Mandiri, a dla karty Revolut: CIMB, Maybank, BCA Bank są
        bez dodatkowych prowizji.
      </P>

      <Subheader>Przewodnicy naciągacze</Subheader>

      <P>
        Jeśli, ktoś będzie Wam oferować, że Was oprowadzi, nawet za darmo, nie
        dziwcie, że później i tak będzie chciał “donation” za usługę. Tak to
        tutaj wygląda, każdy chce zarobić na turystach, czy to pan z biura
        turystycznego, czy kombinator ze sklepowego kantoru, czy biedny chudy
        dziadek. Podczas naszego pobytu mieliśmy do czynienia z każdym z nich
        (niestety), o dwóch pierwszych pisałam w akapicie o speedboatach i
        kantorach.
      </P>

      <P>
        Historia z dziadkiem zaczęła się od tego, że Google Maps poprowadził nas
        na Tembeling Beach jakimiś starymi trasami, nie uwzględniając nowo
        wybudowanej gładkiej drogi, prowadzącej prosto do schodków na plażę.
        Oczywiście wtedy jeszcze nie wiedzieliśmy, że ta trasa istnieje.
        Zauważyliśmy mały, ręcznie robiony znak , na którym widniał napis
        “Tembeling”. Zaparkowaliśmy na poboczu i nie musieliśmy długo czekać, by
        podbiegł do nas mały chudy dziadek. Coś do nas mówił, żywo gestykulując,
        niestety nie po angielsku. Jedyne co zrozumieliśmy to “taxi” i
        “Tembeling”, z gestów można było wywnioskować, że chce nas tam
        zaprowadzić. Na mapie zobaczyliśmy, że nasz punkt znajduje się za dużym
        gęstym lasem, oprócz małego drogowskazu nic nie prowadziło dalej. Za
        dziadkiem był bujny las. Stwierdziliśmy, że sami w życiu nie dojdziemy
        przez te gąszcze i strome zejścia do plaży, więc poszliśmy za dziadkiem
        gotowi odpalić mu jakieś 25K. Gdy dotarliśmy do celu zażądał 100K.
        Daliśmy mu 50K i chyba okazał się tym usatysfakcjonowany, bo po
        otrzymaniu zapłaty odszedł. Wiedzieliśmy, że będzie chciał pieniędzy i
        nie uważamy, by to 50K to było dużo, zważywszy na poziom trudności
        leśnej trasy. Jednak “przekręt” dziadka nie był w porządku z tego
        powodu, że wiedział on o świeżo wybudowanej drodze do plaży i dlatego w
        jego wypowiedzi pojawiało się słowo “taxi”. Zamiast nam pokazać trasę do
        tej drogi, wolał nas zaprowadzić swoja trasą i oczywiście zarobić.
        Szkoda tylko, że później wracaliśmy 2 km na około, bo wiedzieliśmy, że
        sami w tym lasku się pogubimy…
      </P>

      <Carousel figcaption="Świątynia Saraswati, Ubud">
        <Img src={komunikacja2} alt="Bali Ubud" />
        <Img src={komunikacja3} alt="Bali Ubud" />
      </Carousel>

      <Subheader>Narkotyki</Subheader>

      <P>
        W Indonezji i innych krajach Azji Południowo-Wschodniej obowiązują
        bardzo surowe przepisy antynarkotykowe. Narkotyki są zakazane i
        posiadanie każdej ilości grozi więzieniem, a nawet karą śmierci. Mimo
        tego na ulicach, czy np. na Kuta Beach można spotkać mężczyzn
        oferujących sprzedaż marihuany. Oczywiście w większości przypadków są to
        ludzie podstawieni przez policję i gdyby ktoś odważył się kupić, byłby
        zmuszony zapłacić ogromną łapówkę, by nie pójść do więzienia.
      </P>

      <P>
        Zobacz koniecznie wpis o tym{' '}
        <LinkToArticle to={articlesLinks.bali.info}>
          jak przygotować się do wyjazdu na Bali
        </LinkToArticle>
        , co ze sobą spakować do walizki i apteczki oraz jakie szczepienie
        zrobić.
      </P>
    </>
  );
};

export default Bali7;
