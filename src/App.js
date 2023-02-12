import * as React from 'react';
import Layout from './components/Layout/Layout';
import './App.css';
import { useDispatch } from 'react-redux';
import { fetchData } from './redux/data/dataActions';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SelectCardPage from './pages/SelectCardPage/SelectCardPage';
import MainPage from './components/MainPage/MainPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import CategoriesPage from './pages/CategoriesPage/CategoriesPage'

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
          <Route path="/contacts" exact component={ContactsPage} />
          <Route path="/:card" exact component={SelectCardPage} />
          <Route path='/categories' exact component={CategoriesPage} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
