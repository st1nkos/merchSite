import Card from "../components/Card/Card";

const Favorites = ({items,onAddFavorite}) => {
    return (
        <div className="content">
            <div className="ContendHeader">
                <h1>Мои закладки</h1>
            </div>
            <div className="clothes">
                {items
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
