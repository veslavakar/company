import React, {useState} from "react";
import api from "../api";
import User from "./user";
import SearchStatus from "./searchStatus";
import Pagination from "./pagination";
import paginate from "../utils/paginate";

const userProperties = ['Имя', 'Качества', 'Профессия', 'Встретился, раз', 'Оценка','Избранное', ' ']
const Users = () => {
    const[users, setUsers] = useState(api.users.fetchAll())
    const [currentPage, setCurrentPage] = useState(1)
    const count = users.length
    const pageSize = 4

    const userCrop = paginate(users, currentPage, pageSize)

    const handleDelete = (id: string) => {
        setUsers(users.filter(user => user._id !== id ))
    }
    const handleChangeFav = (id: string) => {
        setUsers(users.map(user => {
            if(user._id === id) {
                return ({...user, bookmark: !user.bookmark})
            }
            return user
        }))
    }
    const handlePageChange = (pageIndex: number) => {
        setCurrentPage(pageIndex)
    }
    return (
        <>
            <SearchStatus numOfPeople = {count}/>
            <table className="border-collapse min-w-full text-left text-sm font-light">
                <thead>
                <tr>
                    {userProperties.map(property => (<th key={property} className="tableThHeader">{property}</th>))}
                </tr>
                </thead>
                <tbody>
                {
                    userCrop.map(user => (
                        <User key={user._id} {...user} onDelete={handleDelete} onChangeFav={handleChangeFav}/>
                    ))
                }
                </tbody>
            </table>
            <Pagination itemsCount={count} pageSize={pageSize} onPageChange={handlePageChange} currentPage={currentPage}/>
        </>
    )
}

export default Users