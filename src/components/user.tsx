import React from "react"
import {UserInfoProps} from "../types";
import Quality from "./quality";
import Bookmark from "./bookmark"

const User = (props: UserInfoProps) => {
    const {name, qualities, _id, profession, completedMeetings, rate, bookmark, onChangeFav, onDelete} = props

    return (
        <tr key={_id}>
            <td className="tableTh">{name}</td>
            <td className="tableTh">{qualities.map(quality =>
                <Quality key = {quality._id} propertiesOfQuality = {quality}/> )} </td>
            <td className="tableTh">{profession.name}</td>
            <td className="tableTh">{completedMeetings}</td>
            <td className="tableTh">{rate}/5</td>
            <td className="tableTh">{bookmark}<Bookmark isFav = {bookmark} id = {_id} onFavClick={onChangeFav}/></td>
            <td className="tableTh">
                <button className="danger rounded text-white px-2 py-1 hover:bg-red-700"
                        onClick={()=>onDelete(props._id)}>
                    Delete
                </button>
            </td>
        </tr>
    )
}

export default User