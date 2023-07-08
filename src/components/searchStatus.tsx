import React from "react";
import {SearchProps} from "../types";

const renderPhrase = (number: number): string => {
    const lastOne = number%10
    if (number > 4 && number < 15) return "человек тусанет"
    if ([2, 3, 4].indexOf(lastOne) >= 0) return "человека тусанут"
    if (lastOne === 1) return "человек тусанет"
    return "человек тусанет"
}
const SearchStatus = (props: SearchProps) => {
    return (
        <div className={"py-1 px-2 text-white rounded mt-5 ms-5 inline-block " +
            (props.numOfPeople === 0
                ? "danger"
                : "primary")}>
            {props.numOfPeople === 0
                ? "Никто не тусанет с тобой сегодня"
                : props.numOfPeople + " " + renderPhrase(props.numOfPeople) + " с тобой сегодня"}
        </div>
    )
}

export default SearchStatus