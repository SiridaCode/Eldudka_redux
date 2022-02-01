import * as React from 'react';
import Container from "./components/Container";
import Header from './components/Headers/';
import Pagination from './components/Pagination';
import HeaderPhoneBottom from './components/Headers/HeaderPhoneBottom';

const App = () => {
  const [fullData, setFullData] = React.useState(null);
  const [activeCategory, setActiveCategory] = React.useState('default');
  const [currentPage, setCurrentPage] = React.useState(null);

  React.useEffect(() => {
    fetch('http://localhost:5195/Product/GetList')
      .then(response => response.json())
      .then((data) => {
        setFullData(data);
      });
  }, []);

  const filteredProducts = fullData && fullData.filter((value) => value.name.includes(activeCategory.slice(0, 3)));
  let currentData = activeCategory === 'default' ? fullData : filteredProducts;

  return (
    <div>
      <Header
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