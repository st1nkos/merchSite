import RoseSvg from "../assets/rose.svg";
import CartSvg from "../assets/cart.svg";
import UserSvg from "../assets/user.svg";

const Header = ()=>{
    return(
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
                    <span>1790 руб</span>
                </li>
                <li>
                    <img src={UserSvg} alt="logo"/>
                </li>
            </ul>
        </header>
    )
}
export default Header