import Header from "./components/Header/Header";
import Drawer from "./components/Drawer";
import {useEffect, useState} from "react";
import axios from "axios";
import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {

    const [cartOpened, setCartOpened] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [favoriteItems, setFavoriteItems] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get('https://619ccfda68ebaa001753cc66.mockapi.io/items')
            .then(res => {
                setItems(res.data)
            })
        axios.get('https://619ccfda68ebaa001753cc66.mockapi.io/cart')
            .then(res => {
                setCartItems(res.data)
            })
        axios.get('https://619ccfda68ebaa001753cc66.mockapi.io/favorite')
            .then(res => {
                setFavoriteItems(res.data)
            })
    }, [])

    const onAddToCart = (obj) => {
        axios.post('https://619ccfda68ebaa001753cc66.mockapi.io/cart', obj)
        setCartItems(prev => [...prev, obj])
    }

    const onAddFavorite = async (obj) => {
        try {
            if (favoriteItems.find(favObj=>favObj.id === obj.id)){
                axios.delete(`https://619ccfda68ebaa001753cc66.mockapi.io/favorite/${obj.id}`)
            }else {
                const {data} = await axios.post('https://619ccfda68ebaa001753cc66.mockapi.io/favorite', obj)
                setFavoriteItems(prev => [...prev, data])
            }
        }catch (error){
            alert('Не удалось добавить в закладки')
        }
    }

    const onRemoveItem = (id) => {
        axios.delete(`https://619ccfda68ebaa001753cc66.mockapi.io/cart/${id}`)
        setCartItems((prev) => prev.filter(item => item.id !== id))
    }

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value)
    }


    return (
        <div className="wrapper">
            {cartOpened && <Drawer
                onRemove={onRemoveItem}
                onClose={() => setCartOpened(false)}
                items={cartItems}
            />}

            <Header favorite={favoriteItems} onClickCart={() => setCartOpened(true)}/>
            <Routes>
                <Route path='/' element={<Home items={items}
                                               onAddFavorite={onAddFavorite}
                                               onAddToCart={onAddToCart}
                                               onChangeSearchInput={onChangeSearchInput}
                                               searchValue={searchValue}
                                               setSearchValue={setSearchValue}/>} exact/>

                <Route path='/favorites' element={<Favorites items={favoriteItems} onAddFavorite={onAddFavorite}/>} />
            </Routes>
        </div>
    );
}

export default App;
