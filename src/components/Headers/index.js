import * as React from 'react';
import HeaderPhone from "./HeaderPhone";
import HeaderSearch from './HeaderSearch';
import HeaderCategories from "./HeaderCategories";

const Header = ({ activeCategory, setActiveCategory, setCurrentPage, fullData, searchText, setSearchText }) => {
    return (
        <React.Fragment>
            <HeaderPhone />
            <HeaderSearch
                fullData={fullData}
                searchText={searchText}
                setSearchText={setSearchText}
            />
            <HeaderCategories
                setSearchText={setSearchText}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                setCurrentPage={setCurrentPage}
            />
        </React.Fragment>
    )
}

export default Header;