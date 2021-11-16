import RoseSvg from './assets/rose.svg'
import CartSvg from './assets/cart.svg'
import UserSvg from './assets/user.svg'
import AddSvg from './assets/add.svg'
import clothes1 from  './assets/clothes/bs038010.jpg'
import clothes2 from  './assets/clothes/bs03107.jpg'
import clothes3 from  './assets/clothes/bs04107.jpg'
import clothes4 from  './assets/clothes/bs043010.jpg'

function App() {
    return (
        <div className="wrapper">
            <header>
                <div className="headerLeft">
                    <img src={RoseSvg} alt="logo"/>
                    <div>
                        <h3>Between Seasons</h3>
                        <p>Студия дизайна</p>
                    </div>
                </div>
                <ul className="headerRight">
                    <li>
                        <img src={CartSvg} alt="logo"/>
                        <span>1000 руб</span>
                    </li>
                    <li>
                        <img src={UserSvg} alt="logo"/>
                    </li>
                </ul>
            </header>
            <div className="content">
                <h1>Каталог товаров</h1>

                <div className="clothes">
                    <div className="card">
                        <div className="img"><img width={133} height={112} src={clothes1} alt=""/></div>
                        <h5>Черная оверсайз футболка</h5>
                        <div className="cardBottom">
                            <div className="cardCost">
                                <span>Цена:</span>
                                <b>1790 руб</b>
                            </div>
                            <button className="button">
                                <img width={11} height={11} src={AddSvg} alt=""/>
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="img"><img width={133} height={112} src={clothes2} alt=""/></div>
                        <h5>Черная оверсайз футболка</h5>
                        <div className="cardBottom">
                            <div className="cardCost">
                                <span>Цена:</span>
                                <b>1790 руб</b>
                            </div>
                            <button className="button">
                                <img width={11} height={11} src={AddSvg} alt=""/>
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="img"><img width={133} height={112} src={clothes3} alt=""/></div>
                        <h5>Черная оверсайз футболка</h5>
                        <div className="cardBottom">
                            <div className="cardCost">
                                <span>Цена:</span>
                                <b>1790 руб</b>
                            </div>
                            <button className="button">
                                <img width={11} height={11} src={AddSvg} alt=""/>
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="img"><img width={133} height={112} src={clothes4} alt=""/></div>
                        <h5>Черная оверсайз футболка</h5>
                        <div className="cardBottom">
                            <div className="cardCost">
                                <span>Цена:</span>
                                <b>1790 руб</b>
                            </div>
                            <button className="button">
                                <img width={11} height={11} src={AddSvg} alt=""/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
