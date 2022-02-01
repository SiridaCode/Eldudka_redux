import * as React from 'react';
import Container from "./components/Container";
import Header from './components/Headers/';
import Pagination from './components/Pagination';
import HeaderPhoneBottom from './components/Headers/HeaderPhoneBottom';

const App = () => {
  const [fullData, setFullData] = React.useState(null);
  const [activeCategory, setActiveCategory] = React.useState('default');
  const [currentPage, setCurrentPage] = React.useState(null);
  const [searchText, setSearchText] = React.useState('');

  React.useEffect(() => {
    fetch('http://localhost:5195/Product/GetList')
      .then(response => response.json())
      .then((data) => {
        setFullData(data);
      });
  }, []);

  const filteredProductsByCategory = fullData && fullData.filter((value) => value.name.includes(activeCategory.slice(0, 3)));
  const filteredProductsBySearch = fullData && fullData.filter((value) => value.name.toLowerCase().includes(searchText.toLowerCase()));
  const filteredProductsByAvailability = fullData && fullData.filter((value) => {
    return (
      value.availability &&
      value.availability.galery !== 0 &&
      value.availability.tuhach !== 0 &&
      value.availability.kulakova !== 0 &&
      value.availability.shokolad !== 0
    );
  });
  let currentData = null;
  if (searchText !== '') {
    currentData = filteredProductsBySearch;
  } else {
    currentData = activeCategory === 'default' ? filteredProductsByAvailability : filteredProductsByCategory;
  }
  // currentData = searchText === '' ? fullData : filteredProductsBySearch;

  return (
    <div>
      <Header
        searchText={searchText}
        setSearchText={setSearchText}
        fullData={fullData}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        setCurrentPage={setCurrentPage}
      />

      <Container
        currentPage={currentPage}
        currentData={currentData}
      />

      <Pagination
        setCurrentPage={setCurrentPage}
        currentData={currentData}
      />
      <HeaderPhoneBottom />
    </div>

  );
}

export default App;