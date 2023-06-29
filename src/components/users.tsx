import React, {useState} from "react";
import api from "../api";
import {UserInfo} from "../types";

const userProperties = ['Имя', 'Качества', 'Профессия', 'Встретился, раз', 'Оценка','']
const renderPhrase = (number: number): string => {
    const lastOne = number%10
    if (number > 4 && number < 15) return "человек тусанет"
    if ([2, 3, 4].indexOf(lastOne) >= 0) return "человека тусанут"
    if (lastOne === 1) return "человек тусанет"
    return "человек тусанет"
}
const Users = () => {
    const[users, setUsers] = useState(api.users.fetchAll())
    const handleDelete = (id: string) => {
        setUsers(users.filter(user => user._id !== id ))
    }
    const len = users.length
    return (
        <>
            <div className={"py-1 px-2 text-white rounded mt-5 ms-5 inline-block " +
                (len === 0
                ? "danger"
                : "primary")}>
                    {len === 0
                    ? "Никто не тусанет с тобой сегодня"
                    : len + " " + renderPhrase(len) + " с тобой сегодня"}
            </div>
            <table className="border-collapse min-w-full text-left text-sm font-light">
                <thead>
                <tr>
                    {userProperties.map(property => (<th key={property} className="tableThHeader">{property}</th>))}
                </tr>
                </thead>
                <tbody>
                {
                    users.map(user => (<tr key={user._id}>
                        <td className="tableTh">{user.name}</td>
                        <td className="tableTh">{user.qualities.map(quality =>
                            (<span key={quality.name} className={"py-1 px-2 text-white m-1 rounded "+ quality.color}>
                            {quality.name}
                        </span>))}</td>
                        <td className="tableTh">{user.profession.name}</td>
                        <td className="tableTh">{user.completedMeetings}</td>
                        <td className="tableTh">{user.rate}/5</td>
                        <td className="tableTh">
                            <button className="danger rounded text-white px-2 py-1 hover:bg-red-700"
                            onClick={()=>handleDelete(user._id)}>
                                Delete
                            </button>
                        </td>
                    </tr>))
                }
                </tbody>
            </table>
        </>
    )
}

export default Users