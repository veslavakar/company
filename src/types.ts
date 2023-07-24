import React from "react";

type Qualities = {
    _id: string,
    name: string,
    color: string
}[]

type Profession = {
    _id: string,
    name: string,
}

export type UserInfo = {
    _id: string,
    name: string,
    profession: Profession,
    qualities: Qualities,
    completedMeetings: number,
    rate: number,
    bookmark: boolean
}

export type UserInfoProps = {
    _id: string,
    name: string,
    profession: Profession,
    qualities: Qualities,
    completedMeetings: number,
    rate: number,
    bookmark: boolean,
    onDelete: (id: string) => void,
    onChangeFav: (id: string) => void
}


export type SearchProps = {
    numOfPeople: number
}

type PropertiesOfQuality = {
    _id: string,
    name: string,
    color: string
}

export type QualityProps = {
    propertiesOfQuality: PropertiesOfQuality
}

export type BookmarkProps = {
    id: string,
    isFav: boolean
    onFavClick: (id: string) => void
}

export type PaginationProps = {
    itemsCount: number,
    pageSize: number,
    onPageChange: (pageIndex: number) => void,
    currentPage: number
}

export type Professions1 = {
        _id: string,
        name: string
}

export type Professions = Record<string, Professions1>

export type GroupListProps = {
    items: Professions,
    valueProperty?: string,
    contentProperty?: string,
    onItemSelect: (params: Professions1) => void,
    selectedItem: Professions1
}
