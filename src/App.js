import * as React from 'react';
import Layout from './components/Headers/Headers';
import Pagination from './components/Pagination/Pagination';
import './App.css';
import { useDispatch } from 'react-redux';
import { fetchData } from './redux/fullData/dataActions';
import CardsBlock from './components/CardsBlock/CardsBlock';
import { BrowserRouter, Route, Switch, useParams } from 'react-router-dom';
import { filterData } from './utils/filter';
import SelectCard from './components/Card/SelectCard';

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/">
              <CardsBlock />
              <Pagination />
            </Route>
            <Route path="/card/:card">
              <SelectCard />
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
