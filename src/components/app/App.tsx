import React, { useEffect, FunctionComponent } from 'react';
import { Router, Redirect, RouteComponentProps } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/fontello/css/fontello.css';
import './App.scss';
import ErrorBoundary from '../errorBoundaries/errorBoundaries';
import Navbar from '../Header/Navbar';
import EntryPage from '../Header/EntryPage';
import Articles from '../Articles/Articles';
import NewestArticles from '../NewestArticles/NewestArticles';
import SocialMedia from '../SocialMedia/SocialMedia';
import Authors from '../Authors/Authors';
import Footer from '../Footer/Footer';
import ArticlesPage from '../articlesPage/ArticlesPage';
import articlesData from '../../data/ArticlesData';
import { convertToUrl } from '../../utils/jsUtils';
import TermsAndConditions from '../../pages/termsAndConditions/TermsAndConditions';

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;

// removes entry-page class when route is changed in Main section
function removeArticlesPage() {
  const entryPage = document.querySelector('.entry-page');

  if (entryPage) {
    if (entryPage.classList.contains('articles-page')) {
      entryPage.classList.remove('articles-page');
    }
  }
}

// changes display of main page when route is changed in Main section
function addEntryContent() {
  const entryContent = document.querySelector('.entry-content') as HTMLElement;

  if (entryContent && entryContent.style.display !== 'block') {
    entryContent.style.display = 'block';
  }
}

const Header: FunctionComponent = () => {
  return (
    <section role="article" className="entry-page" id="home">
      <Navbar />
      <Router>
        <RouterPage default path="/" pageComponent={<EntryPage />} />
      </Router>
    </section>
  );
};

const Main: FunctionComponent = () => {
  useEffect(() => {
    if (window.location.pathname === '/') {
      removeArticlesPage();
      addEntryContent();
    }
  }, []);

  return (
    <main>
      <Articles />
      <NewestArticles />
      <SocialMedia />
      <Authors />
    </main>
  );
};

const allArticlesPages = articlesData.map((article, index) => (
  <RouterPage
    path={`/${convertToUrl(article.title)}/*`}
    pageComponent={<ArticlesPage index={index} />}
    key={article.title}
  />
));

function App() {
  return (
    <>
      <Header />
      <Router primary={false}>
        <RouterPage default path="/" pageComponent={<Main />} />
        {allArticlesPages}
        <RouterPage
          path="/terms-and-conditions"
          pageComponent={<TermsAndConditions />}
        />
      </Router>
      <Footer />
    </>
  );
}

export default function AppWithErrorBoundary() {
  return (
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
}
