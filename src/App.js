import Header from "./components/Header/Header";
import Drawer from "./components/Drawer";
import {createContext, useEffect, useState} from "react";
import axios from "axios";
import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";


export const AppContext = createContext({})

function App() {

    const [cartOpened, setCartOpened] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [favoriteItems, setFavoriteItems] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {

            const cartResponse = await axios.get('https://619ccfda68ebaa001753cc66.mockapi.io/cart')
            const favoriteResponse = await axios.get('https://619ccfda68ebaa001753cc66.mockapi.io/favorite')
            const itemsResponse = await axios.get('https://619ccfda68ebaa001753cc66.mockapi.io/items')

            setIsLoading(false)

            setCartItems(cartResponse.data)
            setFavoriteItems(favoriteResponse.data)
            setItems(itemsResponse.data)

        }

        fetchData()
    }, [])

    const onAddToCart = (obj) => {
        if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
            axios.delete(`https://619ccfda68ebaa001753cc66.mockapi.io/cart/${obj.id}`)
            setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)));
        } else {
            axios.post('https://619ccfda68ebaa001753cc66.mockapi.io/cart', obj)
            setCartItems(prev => [...prev, obj])
        }

    }


    const onAddFavorite = async (obj) => {
        try {
            if (favoriteItems.find(favObj => favObj.id === obj.id)) {
                axios.delete(`https://619ccfda68ebaa001753cc66.mockapi.io/favorite/${obj.id}`)
                setFavoriteItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)));
            } else {
                const {data} = await axios.post('https://619ccfda68ebaa001753cc66.mockapi.io/favorite', obj)
                setFavoriteItems(prev => [...prev, data])
            }
        } catch (error) {
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

    const isItemAdded = (id)=>{
        return cartItems.some(obj => Number(obj.id) === Number(id))
    }

    return (
        <AppContext.Provider value={{cartItems, items, favoriteItems,isItemAdded,onAddFavorite,setCartItems,setCartOpened}}>
            <div className="wrapper clear">
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
                                                   cartItems={cartItems}
                                                   setSearchValue={setSearchValue}
                                                   isLoading={isLoading}

                    />} exact/>

                    <Route path='/favorites' element={<Favorites />}/>
                </Routes>
            </div>
        </AppContext.Provider>
    );
}

export default App;
