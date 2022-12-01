import * as React from 'react';
import Layout from './components/Layout/Layout';
import './App.css';
import { useDispatch } from 'react-redux';
import { fetchData } from './redux/data/dataActions';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SelectCardPage from './pages/SelectCardPage/SelectCardPage';
import CardSearchPage from './pages/CardSearchPage/CardSearchPage';
import MainPage from './components/MainPage/MainPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/search:search" exact component={CardSearchPage} />
          <Route path="/contacts" exact component={ContactsPage} />
          <Route path="/:card" exact component={SelectCardPage} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
