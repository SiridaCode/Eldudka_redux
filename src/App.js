import * as React from 'react';
import Layout from './components/Layout/Layout';
import './App.css';
import { useDispatch } from 'react-redux';
import { fetchData } from './redux/fullData/dataActions';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SelectCard from './components/MainPage/Card/SelectCard';
import SelectCardSearch from './components/MainPage/Card/SelectCardSearch';
import MainPage from './components/MainPage/MainPage';

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
            <Route exact path="/" component={MainPage}></Route>
            <Route path="/card:card" component={SelectCard}></Route>
            <Route path="/search:search" component={SelectCardSearch}></Route>
          </Switch>
        </Layout>
      </Router>
    </>
  );
};

export default App;
