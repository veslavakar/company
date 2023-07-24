import React from 'react'
import {PaginationProps} from "../types";
import _ from "lodash"

const Pagination = (props: PaginationProps) => {
    const {itemsCount, pageSize, onPageChange, currentPage} = props
    const numOfPages = Math.ceil(itemsCount/pageSize)
    if(numOfPages === 1) return null
    const pages = _.range(1, numOfPages + 1)
    return (<nav>
        <ul className="flex justify-center mt-2">
            {pages.map(page =>
                <li key={"page_" + page}>
                    <button className={"link-style" + (page === currentPage?" active":"")} onClick={()=>onPageChange(page)}>
                        {page}
                    </button>
                </li>)}

        </ul>
    </nav>)
}

export default Pagination