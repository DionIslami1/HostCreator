import { lazy, Suspense, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { IntlProvider } from 'react-intl';
import { translate } from './translation/translate';
import { useSelector } from 'react-redux';

import './App.scss';
import ScrollToTop from './ScrollToTop';
import Loading from './components/shared/Loading/Loading';
import PersonalDashboard from './personal/PersonalDashboard/PersonalDashboard'

const Home = lazy(() => import('./pages/Home/Home'));
const Websites = lazy(() => import('./pages/Websites/Websites'));
const AppBuilder = lazy(() => import('./pages/AppBuilder/AppBuilder'));
const Portfolio = lazy(() => import('./pages/Portfolio/Portfolio'));
const Templates = lazy(() => import('./pages/Templates/Templates'));
const Signup = lazy(() => import('./pages/Signup/Signup'));
const Login = lazy(() => import('./pages/Login/Login'));

function App() {

  const language = useSelector((state) => state.language.language);
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <IntlProvider
          locale={language}
          formats={{ number: 'en' }}
          messages={translate[language]}
        >
          <ScrollToTop />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/Websites' component={Websites} />
            <Route path='/AppBuilder' component={AppBuilder} />
            <Route path='/Portfolio' component={Portfolio} />
            <Route path='/Templates' component={Templates} />
            <Route path='/Signup' component={Signup} />
            <Route path='/Login' component={Login} />
            <Route path='/PersonalDashboard' component={PersonalDashboard} />
            <Redirect to='/' />
          </Switch>
        </IntlProvider>
      </Suspense>
    </Router>

  );
}

export default App;
