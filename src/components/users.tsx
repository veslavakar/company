import React, {useState, useEffect} from "react";
import api from "../api";
import User from "./user";
import SearchStatus from "./searchStatus";
import Pagination from "./pagination";
import paginate from "../utils/paginate";
import GroupList from "./groupList";
import {Professions, Professions1} from "../types";


const userProperties = ["Имя", "Качества", "Профессия", "Встретился, раз", "Оценка","Избранное", " "]
const Users = () => {
    const[users, setUsers] = useState(api.users.fetchAll())
    const [currentPage, setCurrentPage] = useState(1)
    const [professions, setProfessions] = useState<Professions>()
    const [selectedProf, setSelectedProf] = useState<Professions1>()
    const pageSize = 4
    const filteredUsers = selectedProf ? users.filter(user => user.profession === selectedProf) : users
    const count = filteredUsers.length
    const userCrop = paginate(filteredUsers, currentPage, pageSize)

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

    const handleProfessionSelect = (params: Professions1) => {
        selectedProf === params ? setSelectedProf(undefined) : setSelectedProf(params)
       // handlePageChange(1)
    }

    useEffect(() => {
        api.professions.fetchAll()
            .then((data) => setProfessions(data as Professions))
    },[])

    useEffect(() => {
        setCurrentPage(1)
    }, [selectedProf])

    return (
        <>
            <SearchStatus numOfPeople = {count}/>
            {professions && (<GroupList items={professions} onItemSelect={handleProfessionSelect}
            selectedItem={selectedProf as Professions1}/>)}
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