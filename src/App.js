import searchSvg from './assets/search.svg'
import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import cloath1 from "./assets/clothes/bs043010.jpg"
import cloath2 from "./assets/clothes/bs04107.jpg"

const arr = [
    {title: "Черная футболка оверсайз",imageUrl: cloath2, price: 1790},
    {title: "Черная футболка оверсайз",imageUrl: cloath1, price: 1990},
]

function App() {
    return (
        <div className="wrapper">

           <Drawer />
            <Header/>
            <div className="content">
                <div className="ContendHeader"><h1>Каталог товаров</h1>
                    <div className="searchBlock">
                        <img src={searchSvg} alt="Search"/>
                        <input placeholder="Поиск..." type="text"/>
                    </div>
                </div>
                <div className="clothes">
                    {arr.map((obj) =>(<Card title={obj.title} imageUrl={obj.imageUrl} price={obj.price}  />))}
                </div>
            </div>
        </div>
    );
}

export default App;
