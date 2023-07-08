import React from "react";
import { ReactComponent as NoFavorite} from "../static/favorite.svg";
import { ReactComponent as FavoriteFill} from "../static/favorite-fill.svg";
import {BookmarkProps} from "../types";


const Bookmark = (props: BookmarkProps) => {
  return (
        <button onClick={() => {props.onFavClick(props.id)}}>
            <i>{
                props.isFav
                ? <FavoriteFill />
                    : <NoFavorite />
            }</i>
        </button>
    )
}

export default Bookmark