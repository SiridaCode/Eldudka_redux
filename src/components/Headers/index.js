import * as React from "react";
import HeaderPhone from "./HeaderPhone";
import HeaderSearch from "./HeaderSearch";
import HeaderCategories from "./HeaderCategories";

const Header = ({
  fullData,
  currentData,
  setCurrentData,
  setCurrentPage,
  searchText,
  setSearchText,
  activeCategory,
  setActiveCategory,
}) => {
  return (
    <React.Fragment>
      <HeaderPhone />
      <HeaderSearch
        fullData={fullData}
        currentData={currentData}
        setCurrentData={setCurrentData}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <HeaderCategories
        fullData={fullData}
        currentData={currentData}
        setCurrentData={setCurrentData}
        setSearchText={setSearchText}
        setCurrentPage={setCurrentPage}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
    </React.Fragment>
  );
};

export default Header;
