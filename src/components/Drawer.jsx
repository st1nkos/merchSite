import deleteSVG from "../assets/delete.svg";
import clothes1 from "../assets/clothes/bs038010.jpg";
import arrowSvg from "../assets/arrow.svg";

const Drawer = () => {
  return(
      <div style={{display: 'none'}} className="drawerShadow">
          <div className="drawer">
              <h2>Корзина <img src={deleteSVG} alt=""/></h2>
              <div className="items">
                  <div className="cartItem">

                      <div style={{backgroundImage: `url(${clothes1})`}} className="cartItemImg"></div>
                      <div className="cartDescription">
                          <p>Черная оверсайз футболка</p>
                          <b>1790 руб</b>
                      </div>
                      <img className="removeBtn" src={deleteSVG} alt=""/>
                  </div>
                  <div className="cartItem">

                      <div style={{backgroundImage: `url(${clothes1})`}} className="cartItemImg"></div>
                      <div className="cartDescription">
                          <p>Черная оверсайз футболка</p>
                          <b>1790 руб</b>
                      </div>
                      <img className="removeBtn" src={deleteSVG} alt=""/>
                  </div>
              </div>
              <div className="cartTotalBlock">
                  <ul>
                      <li>
                          <span>Итого:</span>
                          <div></div>
                          <b>5000 руб</b></li>
                      <li>
                          <span>Налог 5%:</span>
                          <div></div>
                          <b>500 руб</b></li>
                  </ul>
                  <button className="greenButton">Оформить заказ <img src={arrowSvg} alt="arrow"/></button>
              </div>
          </div>

      </div>
  )
}

export default Drawer