import searchSvg from './assets/search.svg'
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

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
                    <Card/>
                </div>
            </div>
        </div>
    );
}

export default App;
