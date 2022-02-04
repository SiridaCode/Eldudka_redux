import * as React from 'react';
import Container from "./components/Container";
import Header from './components/Headers/';
import Pagination from './components/Pagination';
import HeaderPhoneBottom from './components/Headers/HeaderPhoneBottom';

const App = () => {
  const [fullData, setFullData] = React.useState(null);
  const [currentData, setCurrentData] = React.useState(null);
  const [activeCategory, setActiveCategory] = React.useState('default');
  const [searchText, setSearchText] = React.useState('');
  const [currentPage, setCurrentPage] = React.useState(null);

  // let currentData = activeCategory === 'default' ? filteredProductsByAvailability : filteredProductsByCategory;
  React.useEffect(() => {
    fetch('http://localhost:5195/Product/GetList')
      .then(response => response.json())
      .then((data) => {

        const filterData = data.filter((value) => {
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
      />

      <Container
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
      <HeaderPhoneBottom />
    </div>

  );
}

export default App;