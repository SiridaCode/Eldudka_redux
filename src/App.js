import * as React from 'react';
import CardsBlock from './components/CardsBlock';
import Header from './components/Headers/';
import Pagination from './components/Pagination';
import './App.css';

const App = () => {
  const [fullData, setFullData] = React.useState(null);
  const [currentData, setCurrentData] = React.useState(null);
  const [activeCategory, setActiveCategory] = React.useState('default');
  const [searchText, setSearchText] = React.useState('');
  const [currentPage, setCurrentPage] = React.useState(null);

  React.useEffect(() => {
    fetch('http://82.148.28.22/Product/GetList')
      .then(response => response.json())
      .then(data => {
        const filterData = data.filter(value => {
          return (
            value.availability &&
            value.availability.galery &&
            value.availability.tuhach &&
            value.availability.kulakova &&
            value.availability.shokolad
          );
        });
        setFullData(filterData);
        setCurrentData(filterData);
      });
  }, []);

  return (
    <div>
      <Header
        fullData={fullData}
        currentData={currentData}
        setCurrentData={setCurrentData}
        searchText={searchText}
        setSearchText={setSearchText}
        setCurrentPage={setCurrentPage}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        setCurrentPage={setCurrentPage}
      />

      <CardsBlock
        fullData={fullData}
        currentData={currentData}
        setCurrentData={setCurrentData}
        currentPage={currentPage}
      />

      <Pagination
        fullData={fullData}
        currentData={currentData}
        setCurrentData={setCurrentData}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default App;
