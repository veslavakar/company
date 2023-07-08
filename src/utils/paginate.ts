import {UserInfo} from "../types";

function paginate (items: UserInfo[], pageNumber: number, pageSize: number) {
    const startIndex = (pageNumber - 1) * pageSize
    return [...items].splice(startIndex, pageSize)
}

export default paginate