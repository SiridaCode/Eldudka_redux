import * as React from 'react';
import Container from './components/Container';
import Header from './components/Headers/';
import Pagination from './components/Pagination';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './redux/fullData/dataActions';

const App = () => {
  const [currentData, setCurrentData] = React.useState([]);
  const [activeCategory, setActiveCategory] = React.useState('default');
  const [currentPage, setCurrentPage] = React.useState(null);

  const dispatch = useDispatch();
  const { filterData } = useSelector(({ data }) => data);
  React.useEffect(() => {
    dispatch(fetchData());
    setCurrentData(filterData);
  }, [dispatch]);

  return (
    <>
      <Header
        currentData={currentData}
        setCurrentData={setCurrentData}
        setCurrentPage={setCurrentPage}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <Container
        currentData={currentData}
        setCurrentData={setCurrentData}
        currentPage={currentPage}
      />

      <Pagination
        currentData={currentData}
        setCurrentData={setCurrentData}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default App;
