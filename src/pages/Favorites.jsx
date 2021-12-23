import Card from "../components/Card/Card";
import {useContext} from "react";
import {AppContext} from "../App";

const Favorites = () => {

    const {favoriteItems,onAddFavorite} = useContext(AppContext)



    return (
        <div className="content">
            <div className="ContendHeader">
                <h1>Мои закладки</h1>
            </div>
            <div className="clothes">
                {favoriteItems
                    .map((item, index) => (<Card
                        key={index}
                        favorited={true}
                        onFavoriteClick={onAddFavorite}
                        {...item}
                    />))}
            </div>
        </div>
    )
}

export default Favorites
