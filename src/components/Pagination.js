import * as React from "react";

const Pagination = ({ currentData, setCurrentPage }) => {

    let pages = [];
    const pagesNumber = currentData && Math.ceil(currentData.length / 10);

    for (let i = 0; i < pagesNumber; i++) {
        pages.push(i);
    }

    const onPageNumberClick = (id) => {
        setCurrentPage(id);
    }

    return (
        <div className="Pages">
            {pages.map((id) => <div onClick={() => onPageNumberClick(id)} key={id} className="Page">{id + 1}</div>)}
        </div>
    )
}

export default Pagination;