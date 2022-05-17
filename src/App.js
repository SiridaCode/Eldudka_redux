import * as React from 'react';
import Layout from './components/Layout/Layout';
import './App.css';
import { useDispatch } from 'react-redux';
import { fetchData } from './redux/data/dataActions';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SelectCardPage from './pages/SelectCardPage/SelectCardPage';
import CardSearchPage from './pages/CardSearchPage/CardSearchPage';
import MainPage from './components/MainPage/MainPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';

const App = () => {
  const dispatch = useDispatch();

  const routes = [
    { path: '/', component: MainPage },
    { path: '/card:card', component: SelectCardPage },
    { path: '/search:search', component: CardSearchPage },
    { path: '/contacts', component: ContactsPage },
  ];

  React.useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <>
      <Router>
        <Layout>
          <Switch>
            {routes.map(({ path, component }) => (
              <Route exact path={path} component={component} />
            ))}
          </Switch>
        </Layout>
      </Router>
    </>
  );
};

export default App;
