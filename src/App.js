import * as React from 'react';
import Layout from './components/Headers/Headers';
import Pagination from './components/MainPage/Pagination/Pagination';
import './App.css';
import { useDispatch } from 'react-redux';
import { fetchData } from './redux/fullData/dataActions';
import CardsBlock from './components/MainPage/CardsBlock/CardsBlock';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import SelectCard from './components/MainPage/Card/SelectCard';
import SelectCardSearch from './components/MainPage/Card/SelectCardSearch';

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <CardsBlock />
              <Pagination />
            </Route>
            <Route path="/card:card">
              <SelectCard />
            </Route>
            <Route path="/search:search">
              <SelectCardSearch />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </>
  );
};

export default App;
