import React from 'react';
import Carousel from '../../components/ArticlesPage/ArticlesContainer/Carousel';
import Img from '../../components/ArticlesPage/ArticlesContainer/Img';
import { Link as ReachLink } from '@reach/router';
import '../../components/ArticlesPage/ArticlesContainer/ArticlesContainer/ArticleContainer.scss';

import mall from '../../assets/images/londyn/plac.jpg';
import arch from '../../assets/images/londyn/1.4.jpg';
import victoria from '../../assets/images/londyn/1.jpg';
import whitehall from '../../assets/images/londyn/1.5.jpg';
import lew from '../../assets/images/londyn/lew.jpg';
import supreme from '../../assets/images/londyn/2.jpg';
import china from '../../assets/images/londyn/3.jpg';
import sklep from '../../assets/images/londyn/1.2.jpg';
import harry from '../../assets/images/londyn/1.3.jpg';

const London1 = () => {
  return (
    <>
      <h3>
        Po porannym przylocie samolotem, nie marnowaliśmy czasu. Wybraliśmy się
        na całodniowy spacer, trasą z kategorii “must see in London”. Trasa nie
        męczy, myślę, że każdy da radę przejść, bo w jej czas wliczone jest
        sporo postojów na ciekawe zabytki, sklepy i jedzonko!
      </h3>

      <h4>Transport</h4>

      <p>
        Do Londynu polecieliśmy Wizzairem z Wrocławia, za około 260 zł za osobę.
        Samolot mieliśmy koło 6. rano. Na lotnisku London Luton byliśmy 7:25
        czasu miejscowego (8:25 w Polsce), czyli lot trwał 2 godziny i 25 minut.
        Autobus National Express zarezerwowaliśmy na 8:35. Jednak wsiedliśmy do
        niego koło godziny 10. Z powodu opóźnień czekaliśmy na zimnym dworze
        dwie godziny. Po kolejnych dwóch godzinach dojechaliśmy autobusem do
        Victoria Coach Station i stamtąd pojechaliśmy metrem ogarnąć się w
        mieszkaniu.
      </p>

      <figure className="article-figure">
        <div className="figure-img">
          <div className="article-img-overlay">
            <Img src={mall} alt="The Mall" />
            <span className="article-img-link d-block rounded">
              <p className="title">The Mall</p>
            </span>
          </div>
        </div>

        <div className="figure-img">
          <div className="article-img-overlay">
            <Img src={arch} alt="Admiralty Arch" />
            <span className="article-img-link d-block rounded">
              <p className="title two-line">Admiralty Arch</p>
            </span>
          </div>
        </div>

        <div className="figure-img">
          <div className="article-img-overlay">
            <Img src={victoria} alt="Plac Victoria Memorial" />
            <span className="article-img-link d-block rounded">
              <p className="title two-line">Victoria Memorial</p>
            </span>
          </div>
        </div>

        <div className="figure-img">
          <div className="article-img-overlay">
            <Img src={whitehall} alt="Whitehall Street" />
            <span className="article-img-link d-block rounded">
              <p className="title two-line">Whitehall Street</p>
            </span>
          </div>
        </div>

        <figcaption className="article-figcaption">
          Zaczynamy od Victoria Memorial
        </figcaption>
      </figure>

      <h4>Tutaj można złapać tanie loty do Londynu</h4>

      <a
        href="https://www.esky.pl/tanie-loty/ci/waw/ci/lon/warszawa-londyn?gclid=Cj0KCQjw3KzdBRDWARIsAIJ8TMSCfq4fcyrpe4H6_Y_B4r87vx36gplEv9VS8JFxkTKqpliaHbi2l-EaAiY7EALw_wcB"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="link">Warszawa - Londyn</p>
      </a>

      <h4>Rezerwacja autobusów z lotnisk do Londynu</h4>
      <a
        href="http://www.easybus.com/pl/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="link">Easy Bus</p>
      </a>
      <a
        href="https://www.nationalexpress.com/en"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="link">National Express</p>
      </a>
      <a
        href="https://www.greenline.co.uk/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="link">Green Line Coaches</p>
      </a>

      <h4>Królewski Londyn</h4>

      <p>
        Trasę rozpoczęliśmy od Buckingham Palace (najbliższe stacje metra: Hyde
        Park Corner, Green Park, St.James’s Park). Na przeciwko pałacu stoi
        Victoria Memorial, a za nim reprezentacyjna droga - The Mall. Na
        południe od The Mall znajduje się St. James’s Park- najstarszy park
        królewski w Londynie. Dalej na północ kolejny- Green Park, a za nim St.
        James’s Palace- jeden z najstarszych pałaców w Londynie. Na Horse Guard
        Road można zobaczyć Horse Guards Parade – na największym placu defilad w
        centralnym Londynie. My załapaliśmy się na przejazd wojska konno. Obok
        znajduje się rezydencja I biuro premiera Wielkiej Brytanii oraz siedziba
        rządu przy 10 Downing Street. Kierując się na Whitehall Street doszliśmy
        do Admiralty Arch. Budynek dzieli The Mall od Trafalgar Square.
      </p>

      <p>
        Z ciekawostek warto wspomnieć, że na Trafalgar Square można zobaczyć{' '}
        <a
          href="https://metro.co.uk/2016/09/18/gay-and-here-to-stay-lgbt-traffic-lights-wont-be-removed-6135953/"
          target="_blank"
          rel="noopener noreferrer"
        >
          równościową sygnalizację świetlną LGBT
        </a>
        , dającą wyraz tolerancji, jak i również bezpieczeństwa na przejściach
        dla pieszych. Na placu stoi kolumna Nelsona z czterema lwami i niedawno
        powstałym z okazji Festiwalu Designu -
        <a
          href="https://www.mirror.co.uk/travel/uk-ireland/londons-trafalgar-square-getting-fifth-
                                    13091427"
          target="_blank"
          rel="noopener noreferrer"
        >
          karmazynowym piątym lwem
        </a>
        , który ma wyświetlaną poezję na ekranie w swoim pysku. Za kolumną
        Nelsona mieści się galeria sztuki - National Gallery. Przed wejściem do
        niej uliczni artyści prezentują swoje talenty. Można spotkać wielu
        przebierańców, muzyków, śpiewaków, malarzy i kredowych rysowników,
        których dzieła widnieją na betonowym chodniku.
      </p>

      <figure className="article-figure">
        <Img src={lew} alt="Londyn czerwony lew" />
        <figcaption className="article-figcaption">
          Karmazynowy "piąty" lew
        </figcaption>
      </figure>

      <h4>Miasto pełne kolorów</h4>

      <p>
        Następnie poszliśmy na dzielnicę Covent Garden, gdzie znajduje się
        mnóstwo kawiarni i oryginalnych sklepów, które można odwiedzić między
        innymi na Apple Market. Niedaleko znajduje się Muzeum Transportu w
        Coventry, ze starymi czerwonymi dwupiętrowymi busami, kolejami,
        samochodami. Kierując się na Soho radzę przejść przez uroczą kolorową
        aleję Neals Yard, która zachwyca swoim wyglądem.
      </p>

      <p>
        W Soho radzę zarezerwować sobie kilka godzin, ponieważ jest tam wiele,
        luksusowych butików, barów, klubów, restauracji i teatrów (między innymi
        Palace theatre, gdzie grają “Harry Potter and the cursed child”). W
        sklepie{' '}
        <a
          href="https://www.sjakstreetwear.pl/2018/02/19/stacjonarny-drop-supreme/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Supreme
        </a>
        był jeden z dropów i widzieliśmy długie kolejki, pilnowane przez
        ochroniarzy.
      </p>

      <figure className="article-figure">
        <Img src={supreme} alt="supreme" />
        <figcaption className="article-figcaption">
          Kolejki po drop Supreme
        </figcaption>
      </figure>

      <p>
        W dzielnicy Covent Garden poszliśmy do{' '}
        <a
          href="https://www.tripadvisor.co.uk/Attraction_Review-g186338-d3923313-Reviews-Forbidden_Planet-London_England.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Forbidden Planet
        </a>
        , czyli największego w UK sklepu z figurkami i gadżetami dla fanów
        fantastyki i science-fiction. A na Leicester Square odwiedziliśmy
        M&amp;M’s World i sklep Lego.
      </p>

      <p>
        Obiad zjedliśmy w China Town, czyli słynnej chińskiej dzielnicy. Na
        Gerrard Street oraz Lisle Street znajdują się tylko azjatyckie sklepy,
        restauracje i kilka podejrzanych interesów z szyldami typu “massage”,
        “models upstairs”, których pewnie Red Light District by się nie
        powstydziła. W niedzielę w Chińskiej Dzielnicy odbywa się targ
        spożywczy, a gdy nadchodzi Chiński Nowy Rok organizowany jest z tej
        okazji słynny orientalny festiwal.
      </p>

      <figure className="article-figure">
        <Img src={china} alt="Londyn China Town" />
        <figcaption className="article-figcaption">
          Słynna dzielnica China Town (+ Pan wyglądający jak Hodor)
        </figcaption>
      </figure>

      <h4>Co znajdziemy w China Town?</h4>

      <p className="point first">- restauracje, bary szybkiej obsługi</p>
      <p className="point">- kawiarnie, cukiernie azjatyckie</p>
      <p className="point">- supermarkety z azjatycką żywnością</p>
      <p className="point">- sklepy z ziołami, medycyną chińską, naturalną</p>
      <p className="point">- sklepy ze sprzętem elektronicznym</p>
      <p className="point">- usługi fryzjerskie, kosmetyczne</p>
      <p className="point">- usługi typu akupunktura, masaż</p>

      <h4>Co zobaczyć i gdzie zjeść w China Town?</h4>

      <a
        href="https://pl.tripadvisor.com/ShowUserReviews-g186338-d211804-r220790042-Chinatown-London_England.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="link">Dzielnica China Town</p>
      </a>

      <h4>Londyńskie puby</h4>

      <p>
        Następnie przeszliśmy przez Piccadilly Circus, na Regent Street i
        stamtąd do Carnaby Street. A na koniec nocą przeszliśmy się po Oxford
        Street. Po drodze zahaczyliśmy o pub. Mam wrażenie, że puby w Londynie
        różnią się od Polskich. Pierwsze co rzuciło mi się w oczy już podczas
        spaceru, to tłok na uliczkach. Przed każdym mijanym pubem stało mnóstwo
        klientów, pili piwo i żywo dyskutowali. Było to dla mnie dziwne i mijało
        się z moim wyobrażeniem o wyjściu do pubu, w którym raczej siedzi się w
        środku, a nie stoi na zewnątrz. Druga rzecz, miałam wrażenie, że Anglicy
        są o wiele głośniejsi. Ciężko mi się rozmawiało z osobą siedzącą obok,
        było tak głośno, że aż mi się nie chciało przekrzykiwać. Trzecia
        różnica, to ochroniarze. Z tego co zaobserwowałam każdy pub ma swojego
        ochroniarza, który sprawdza przy wejściu ID, pilnuje porządku (i tego z
        klientami, jak i ogólnie w lokalu, bo jak ktoś zbił szkło, to ochroniarz
        posprzątał szufelką).
      </p>

      <Carousel figcaption="Ciekawe miejsca w dzielnicy Soho">
        <Img src={sklep} alt="Sklep M&M's" />
        <Img src={harry} alt="Londyn Harry Potter" />
      </Carousel>

      <h4>Małe ostrzeżenie na koniec!</h4>

      <p>
        Pamiętajcie, aby na zatłoczonych ulicach pilnować cennych rzeczy,
        ponieważ często zdarzają się tu kradzieże telefonów! Znajoma policjantka
        opowiadała mi o zorganizowanych akcjach - złodzieje jeżdżą skuterem i po
        prostu wyrywają ludziom telefony z rąk! Także miejcie oczy szeroko
        otwarte i lepiej nie słuchajcie głośnej muzyki na słuchawkach, aby nie
        tracić czujności.
      </p>

      <p className="link-to-article">
        <ReachLink to="/londyn/spacer-tamiza">
          Zobacz jak spędziliśmy 2 dzień w Londynie
          <i className="icon-angle-right" />
        </ReachLink>
      </p>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m76!1m12!1m3!1d9933.112963671303!2d-0.1436335171739137!3d51.50811115898701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m61!3e2!4m5!1s0x48760520cd5b5eb5%3A0xa26abf514d902a7!2sBuckingham+Palace!3m2!1d51.501363999999995!2d-0.14189!4m5!1s0x487604c541d11c47%3A0xf882a439cb8a5619!2s10+Downing+Street!3m2!1d51.5033635!2d-0.12762479999999998!4m5!1s0x48761be37a08548f%3A0x8c2c4c72fe80030d!2sAdmiralty+Arch!3m2!1d51.5067898!2d-0.1286584!4m5!1s0x487604ce3941eb1f%3A0x1a5342fdf089c627!2sTrafalgar+Square!3m2!1d51.508039!2d-0.128069!4m5!1s0x487604ce3941eb1f%3A0x758d4846cd60c222!2sSt+Martin-in-the-Fields!3m2!1d51.5087908!2d-0.1267527!4m5!1s0x487604cb878e81b3%3A0x91f10fa364452046!2sCovent+Garden%2C+Londyn%2C+Wielka+Brytania!3m2!1d51.5117797!2d-0.1231911!4m5!1s0x487604cd28515fe1%3A0x54720e1a94469f73!2sNeal&#39;s+Yard%2C+London%2C+Wielka+Brytania!3m2!1d51.514353799999995!2d-0.1265039!4m5!1s0x48761b32cc1770b3%3A0x38c43399a7314d58!2sForbidden+Planet+London+Megastore!3m2!1d51.5151226!2d-0.127327!4m5!1s0x487604d3ff201fc1%3A0xf08adf0cfb3eb2fe!2sPiccadilly+Circus%2C+London%2C+Wielka+Brytania!3m2!1d51.5099695!2d-0.13497119999999999!4m5!1s0x48761ad554c335c1%3A0xda2164b934c67c1a!2sOxford+St%2C+London%2C+Wielka+Brytania!3m2!1d51.5149226!2d-0.1448236!5e0!3m2!1spl!2spl!4v1538148266315"
        className="gmap"
        title="Mapa trasy zwiedzania, dzień 1"
      />
    </>
  );
};

export default London1;
