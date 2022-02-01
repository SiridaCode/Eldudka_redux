import * as React from 'react';
import HeaderPhone from "./HeaderPhone";
import HeaderSearch from './HeaderSearch';
import HeaderCategories from "./HeaderCategories";

const Header = ({ activeCategory, setActiveCategory, setCurrentPage }) => {
    return (
        <React.Fragment>
            <HeaderPhone />
            <HeaderSearch />
            <HeaderCategories
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                setCurrentPage={setCurrentPage}
            />
        </React.Fragment>
    )
}

export default Header;