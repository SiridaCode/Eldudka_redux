import * as React from 'react';
import Header from './components/Headers/';
import Pagination from './components/Pagination';
import './App.css';
import { useDispatch } from 'react-redux';
import { fetchData } from './redux/fullData/dataActions';
import CardsBlock from './components/CardsBlock';

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <>
      <Header />
      <CardsBlock />
      <Pagination />
    </>
  );
};

export default App;
