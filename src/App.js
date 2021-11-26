import searchSvg from './assets/search.svg'
import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import {useEffect, useState} from "react";

// const arr = [
//     {"title": "Черная футболка оверсайз", "imageUrl": cloath2, "price": 1790},
//     {"title": "Черная футболка оверсайз", "imageUrl": cloath1, "price": 1990},
//     {"title": "Черная футболка оверсайз", "imageUrl": cloath3, "price": 1990},
//     {"title": "Черная футболка оверсайз", "imageUrl": cloath4, "price": 1990},
// ]

function App() {

    const [cartOpened, setCartOpened] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('https://619ccfda68ebaa001753cc66.mockapi.io/items')
            .then((response) => {
                return response.json()
            })
            .then((json)=>{
                setItems(json)
            })
    },[])

    const onAddToCart = (obj) => {
        setCartItems(prev=>[...prev,obj])
    }
    
    const onChangeSearchInput = (event) => {
      setSearchValue(event.target.value)
    }


    return (
        <div className="wrapper">
            {cartOpened && <Drawer
                onClose={() => setCartOpened(false)}
                items={cartItems}
            />}
            <Header onClickCart={() => setCartOpened(true)}/>
            <div className="content">

                <div className="ContendHeader"><h1>{searchValue ? `Поиск по запросу:"${searchValue}"`: "Каталог товаров"}</h1>
                    <div className="searchBlock">
                        <img src={searchSvg} alt="Search"/>
                        <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." type="text"/>
                    </div>
                </div>

                <div className="clothes">
                    {items.map((item, index) => (<Card
                        key={index}
                        title={item.title}
                        imageUrl={item.imageUrl}
                        price={item.price}
                        onFavoriteClick={() => console.log('нажали сердце')}
                        onAddClick={(obj) => onAddToCart(obj)}/>))}
                </div>
            </div>
        </div>
    );
}

export default App;
