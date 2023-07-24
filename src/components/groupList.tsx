import React from "react"
import {GroupListProps} from "../types";

const GroupList = ({items, valueProperty = "_id", contentProperty = "name", onItemSelect, selectedItem}: GroupListProps) => {
    return (
        <ul className="ul-list">
            {Object.keys(items).map((item) =>
                <li key={items[item][valueProperty as keyof typeof items[typeof item]]}
                    className={"li-list rounded-t-lg rounded-b-lg"+(items[item] === selectedItem?" active":"")}
                    onClick={() => onItemSelect(items[item])}
                    role="button"
                    >
                    {items[item][contentProperty as keyof typeof items[typeof item]]}
                </li>)}
        </ul>
    )
}

export default GroupList