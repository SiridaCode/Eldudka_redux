import * as React from 'react';
import Container from './components/Container';
import Header from './components/Headers/';
import Pagination from './components/Pagination';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './redux/fullData/dataActions';

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <>
      <Header />
      <Container />
      <Pagination />
    </>
  );
};

export default App;
