import RoseSvg from "../../assets/rose.svg";
import CartSvg from "../../assets/cart.svg";
import UserSvg from "../../assets/user.svg";
import FavoriteSvg from "../../assets/favorite.svg";
import style from "./Header.module.scss"
import {Link} from "react-router-dom";

const Header = (props) => {
    return (
        <header>
            <Link to="/">
            <div className={style.headerLeft}>

                    <img src={RoseSvg} alt="logo"/>
                    <div>
                        <h3>Between Seasons</h3>
                        <p>Студия дизайна</p>
                    </div>
            </div>
            </Link>
            <ul className={style.headerRight}>
                <li>
                    <img className={style.cart} onClick={props.onClickCart} src={CartSvg} alt="logo"/>
                    <span>1790 руб</span>
                </li>

                <li>
                    <Link to="/favorites">
                        <img src={FavoriteSvg} alt="logo"/>
                    </Link>
                </li>

                <li>
                    <img src={UserSvg} alt="logo"/>
                </li>
            </ul>
        </header>
    )
}
export default Header