import deleteSVG from "../assets/delete.svg";
import arrowSvg from "../assets/arrow.svg";


const Drawer = (props) => {



  return(
      <div className="drawerShadow">
          <div className="drawer">
              <h2>Корзина <img onClick={props.onClose} src={deleteSVG} alt=""/></h2>
              <div className="items">
                  {
                      props.items.map(obj=>(
                          <div className="cartItem">

                              <div style={{backgroundImage: `url(${obj.imageUrl})`}} className="cartItemImg"></div>
                              <div className="cartDescription">
                                  <p>{obj.title}</p>
                                  <b>{obj.price} руб</b>
                              </div>
                              <img className="removeBtn" src={deleteSVG} alt=""/>
                          </div>
                      ))
                  }
              </div>
              <div className="cartTotalBlock">
                  <ul>
                      <li>
                          <span>Итого:</span>
                          <div></div>
                          <b>10234 руб</b></li>
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