import * as React from 'react';
import Layout from './components/Headers/Headers';
import Pagination from './components/Pagination/Pagination';
import './App.css';
import { useDispatch } from 'react-redux';
import { fetchData } from './redux/fullData/dataActions';
import CardsBlock from './components/CardsBlock/CardsBlock';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SelectCard from './components/Card/SelectCard';
import SelectCardSearch from './components/Card/SelectCardSearch';

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
            <Route path="/card/:card">
              <SelectCard />
            </Route>
            <Route path="/search/:search">
              <SelectCardSearch />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </>
  );
};

export default App;
