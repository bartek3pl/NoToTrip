import React from 'react';
import Carousel from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Carousel';
import Img from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Img';
import Header from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Header';
import Subheader from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Subheader';
import P from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/P';
import A from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/A';
import Iframe from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Iframe';
import Figure from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Figure';
import Figures4x1 from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/Figures4x1';
import '../../components/ArticlesPage/ArticlesContainer/ArticlesContainer/ArticleContainer.scss';

import eye from '../../assets/images/londyn/eye.jpg';
import westminster from '../../assets/images/londyn/westminster.jpg';
import tate1 from '../../assets/images/londyn/tate1.jpg';
import tate2 from '../../assets/images/londyn/tate2.jpg';
import tate3 from '../../assets/images/londyn/tate3.jpg';
import teatr from '../../assets/images/londyn/theatre.jpg';
import jajo from '../../assets/images/londyn/jajo.jpg';
import dariaTower from '../../assets/images/londyn/daria-tower.jpg';
import statek from '../../assets/images/londyn/statek.jpg';
import szklo from '../../assets/images/londyn/szklo.jpg';
import bridge1 from '../../assets/images/londyn/bridge2.jpg';
import bridge2 from '../../assets/images/londyn/bridge3.jpg';
import LinkToArticle from '../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/LinkToArticleFooter';
import { articlesLinks } from '../../data/ArticlesData';

const London2 = () => {
  return (
    <>
      <Header>
        To był spacer pełen mostów i łodzi. Trasa zahaczała o wiele ciekawych
        punktów kulturalnych i zabytkowych oraz zapewniła nam piękne widoki!
        Tamiza jest jedną z najdłuższych rzek Wysp Brytyjskich, ma 346
        kilometrów długości...
      </Header>

      <Figure figcaption="Widok na London Eye">
        <Img src={eye} alt="London Eye" />
      </Figure>

      <Subheader>Trasa - City of Westminster</Subheader>

      <P>
        Na drugi dzień zaplanowaliśmy spacer Tamizą. Był on dosyć długi,
        ponieważ do pierwszego punktu, doszliśmy z domu pieszo (około 3,7 km).
        Zaczęliśmy zwiedzanie od Opactwa Westminsterskiego - jednej z
        najważniejszych świątyń anglikańskich w Londynie. Jest ona również
        miejscem koronacji królów Anglii i Wielkiej Brytanii. W 1953 roku odbyła
        się koronacja Elżbiety II. Znajdują się tu także groby znanych pisarzy,
        dramaturgów, aktorów poetów i uczonych. A w 2011 roku w świątyni odbył
        się ślub księcia Williama i Kate Middleton.
      </P>

      <P>
        Pałac Westminsterski jest równie imponującym zabytkiem. Wraz ze swoją
        wieżą zegarową Elizabeth Tower, znaną również jako Big Ben robią ogromne
        wrażenie. Czy wiecie, że w pałacu znajduje się ponad 1000 pokoi?
        Wybudowano go w 1045 roku, jednak to, co my możemy dziś zobaczyć to
        wersja odbudowana po pożarze w 1834 roku.
      </P>

      <P>
        Parliament Square to plac, na którym znajdują się posągi mężów stanu. Ma
        on ważne znaczenie symboliczne dla państwa. Przedstawia cztery siły:
        władzę wykonawczą na północy (Whitehall), wymiar sprawiedliwości na
        zachodzie (Supreme Court) i Kościół na południu (Opactwo
        Westminsterskie) władzę ustawodawczą na wschodzie (Pałac
        Westminsterski).
      </P>

      <Figure figcaption="Pałac Westminsterski">
        <Img src={westminster} alt="Pałac Westminster" />
      </Figure>

      <Subheader>Trochę kultury współczesnej</Subheader>

      <P>
        Później Mostem Westminister przeszliśmy obok Aquarium do London Eye.
        Mijając Most Hungerford doszliśmy do{' '}
        <A href="https://www.southbankcentre.co.uk">South Bank Centre</A> -
        największego ośrodka sztuki w Europie, z trzema głównymi salami
        koncertowymi.
      </P>

      <P>
        Dalej zatrzymaliśmy się między Mostem Waterloo, a Wieżą Oxo na targu
        food trucków z jedzeniem z różnych zakątków świata. Polecam rozejrzeć
        się po stoiskach, bo sprzedawcy sami częstują jedzeniem. My zamówiliśmy
        grecką pitę z kurczakiem i włoskie ravioli ze szpinakiem.
      </P>

      <P>
        Po zjedzeniu kontynuowaliśmy spacer Tamizą. Minęliśmy most Blackfriars i
        zatrzymaliśmy się w
        <A href="https://www.tate.org.uk/visit/tate-modern">Tate Modern</A>,
        czyli muzeum sztuki nowoczesnej, które bardzo polecam i radzę
        zarezerwować na nie 2-3 godziny. Możemy w nim znaleźć między innymi
        słynne dzieło Pabla Picassa “Płacząca kobieta”.
      </P>

      <P>
        Gdy skończycie zwiedzanie, to koniecznie pojedźcie windą na 10. piętro
        na punkt widokowy! Te wieżowce, które z niego widzieliśmy, były tak
        blisko, że było widać wszystko, co znajdowało się w środku przeszklonych
        pokoi w apartamentach. Myślę, że mieszkanie w takim miejscu może być
        nieco problematyczne.
      </P>

      <Carousel figcaption="Widok z 10 piętra Tate Modern">
        <Img src={tate1} alt="Tate Modern" />
        <Img src={tate2} alt="Widok z Tate Modern" />
        <Img src={tate3} alt="Tate Modern" />
      </Carousel>

      <Subheader>Znowu te zabytki...</Subheader>

      <P>
        Czy pamiętacie most z początkowej sceny z “Harrego Pottera i Księcia
        Półkrwi”? Jest to most Millenium i później przeszliśmy nim, by dotrzeć
        do Katedry świętego Pawła. Jednego z najbardziej znanych kościołów
        anglikańskich w Wielkiej Brytanii. Jeżeli chcecie zobaczyć ją
        bezpłatnie, to jest taka możliwość podczas wieczornych codziennych
        nabożeństw, więc zachęcam.
      </P>

      <P>
        Po zwiedzaniu Katedry świętego Pawła, wróciliśmy mostem Milllenium do{' '}
        <A href="http://www.shakespearesglobe.com">Globe Theatre</A>. Teatr
        działał w latach 1599-1642, a jednym z jego udziałowców był William
        Shakespeare. Aktualnie można zobaczyć jego rekonstrukcję, w której
        sztuki grane są do dziś, a chętnych widzów nie brakuje.
      </P>

      <Figure figcaption="Globe Theatre">
        <Img src={teatr} alt="Globe Theatre" />
      </Figure>

      <P>
        Dalej za mostem Southwark, zwiedziliśmy 800-letni pub The Anchor
        Bankside. Następnie katedrę w Southwark, która od od przeszło 1000 lat
        jest miejscem kultu chrześcijańskiego. Później poszliśmy na Borough
        Market - jeden z najstarszych i największych targów żywności w Londynie.
      </P>

      <Figures4x1 figcaption="Szklany, modernistyczny budynek i okolice Tower Bridge">
        <Img src={jajo} alt="Nowoczesne budynki Tamiza" />
        <Img src={dariaTower} alt="Tower bridge" />
        <Img src={statek} alt="Londyn brytyjski okręt" />
        <Img src={szklo} alt="Okolice Tower Bridge" />
      </Figures4x1>

      <Subheader>Brytyjskie okręty</Subheader>

      <P>
        Następnym udaliśmy się obejrzeć okręt Złota Łania (Golden Hind), który
        był okrętem flagowym Francisa Drake'a podczas jego podróży dookoła
        świata. Spośród pięciu okrętów biorących udział w wyprawie był
        największy i jako jedyny powrócił cało do Anglii. Wodowano go w roku
        1576 w porcie w Plymouth.
      </P>

      <P>
        Później minęliśmy London Bridge i doszliśmy do okrętu HMS Belfast -
        krążownika lekkiego brytyjskiej marynarki Royal Navy z okresu II wojny
        światowej. Niedaleko znajduje się ratusz, który jest szklaną
        modernistyczną budowlą. Pięknie wygląda nocą, świecąc wraz z Tower
        Bridge, którym poszliśmy dalej. Po drugiej stronie rzeki zobaczyliśmy
        Tower of London, czyli pałac i twierdzę powstałą na życzenie króla
        Wilhelma I.
      </P>

      <Carousel figcaption="Albert Bridge i zachód Słońca">
        <Img src={bridge1} alt="Albert Bridge" />
        <Img src={bridge2} alt="Londyn zachód słońca" />
      </Carousel>

      <P>
        Na koniec naszej wycieczki odwiedziliśmy St. Katharine Docks - piękny
        kompleks rekreacyjny i mieszkalny z małym portem dla jachtów. Nocą w
        świetle lamp wyglądał bardzo klimatycznie. Spacer po nim był idealnym
        uwieńczeniem naszego intensywnego zwiedzania. Pozostało tylko wrócić do
        domu… To co też na piechotę? ;)
      </P>

      <LinkToArticle to={articlesLinks.londyn.londyn3}>
        Zobacz jak spędziliśmy 3 dzień w Londynie
      </LinkToArticle>

      <Iframe
        src="https://www.google.com/maps/embed?pb=!1m72!1m8!1m3!1d23626.633708172!2d-0.100395075934698!3d51.50507077560434!3m2!1i1024!2i768!4f13.1!4m61!3e2!4m5!1s0x487604c40c8d9b99%3A0x7797a8ef74e1f7c!2sPalace+of+Westminster!3m2!1d51.4994794!2d-0.1248092!4m5!1s0x487604b900d26973%3A0x4291f3172409ea92!2sOko+Londynu!3m2!1d51.503324!2d-0.119543!4m5!1s0x487604b639dd033d%3A0x95dc798a4bb09484!2sWaterloo+Bridge%2C+London%2C+Wielka+Brytania!3m2!1d51.5083225!2d-0.1165128!4m5!1s0x487604a92c573857%3A0x7395ddc3381f645e!2sTate+Modern%2C+Londyn%2C+Wielka+Brytania!3m2!1d51.507721!2d-0.0991941!4m5!1s0x487604aca207bc87%3A0x3a1d3501a9af5fde!2sKatedra+%C5%9Bw.+Paw%C5%82a+w+Londynie!3m2!1d51.5138453!2d-0.0983506!4m5!1s0x487603563190160d%3A0xd57076474a98e953!2sAnchor+Bankside!3m2!1d51.5072924!2d-0.09285099999999999!4m5!1s0x4876035159bb13c5%3A0xa61e28267c3563ac!2sLondon+Bridge!3m2!1d51.5078788!2d-0.0877321!4m5!1s0x4876034fcfd170e7%3A0xb5fcfd348020fae!2sHMS+Belfast!3m2!1d51.506578999999995!2d-0.081389!4m5!1s0x487603483823269b%3A0xc146c1d84b628edf!2sSt+Katharine+Docks+Marina!3m2!1d51.506429999999995!2d-0.0710647!4m5!1s0x48760349331f38dd%3A0xa8bf49dde1d56467!2sTower+of+London!3m2!1d51.508112399999995!2d-0.0759493!5e0!3m2!1spl!2spl!4v1538147601537"
        title="Mapa trasy zwiedzania, dzień 2"
      />
    </>
  );
};

export default London2;
