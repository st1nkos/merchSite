import searchSvg from "../assets/search.svg";
import deleteSVG from "../assets/delete.svg";
import Card from "../components/Card/Card";


const Home = ({
                  searchValue,
                  setSearchValue,
                  onChangeSearchInput,
                  items,
                  onAddFavorite,
                  onAddToCart
              }) => {
    return (
        <div className="content">
            <div className="ContendHeader">
                <h1>{searchValue ? `Поиск по запросу:"${searchValue}"` : "Каталог товаров"}</h1>
                <div className="searchBlock">
                    <img src={searchSvg} alt="Search"/>
                    {searchValue &&
                    <img onClick={() => setSearchValue('')} className="clear" src={deleteSVG} alt="Clear"/>}
                    <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." type="text"/>
                </div>
            </div>
            <div className="clothes">
                {items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                    .map((item, index) => (<Card
                        key={index}
                        onFavoriteClick={(obj) => onAddFavorite(obj)}
                        onAddClick={(obj) => onAddToCart(obj)}
                        {...item}
                    />))}
            </div>
        </div>
    )
}

export default Home
