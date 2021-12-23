import deleteSVG from "../assets/delete.svg";
import arrowSvg from "../assets/arrow.svg";
import emptyCart from "../assets/cart-empty.png";
import orderProcessed from "../assets/order-processed.png";
import {useContext, useState} from "react";
import {AppContext} from "../App";
import axios from "axios";
import Info from "./Card/Info";


const delay = (ms) => new Promise((resolve) => setTimeout(resolve,ms))

const Drawer = (props) => {

    const {cartItems, setCartItems} = useContext(AppContext)
    const [isOrderComplete, setIsOrderComplete] = useState(false)
    const [orderId, setOrderId] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const onClickOrder = async () => {
     try {
         setIsLoading(true)
         const {data} = await  axios.post('https://619ccfda68ebaa001753cc66.mockapi.io/orders', {
             items: cartItems
         })
         setOrderId(data.id)
         setIsOrderComplete(true)
         setCartItems([])

         for (let i=0; i<cartItems.length; i++){
             const item = cartItems[i]
             await axios.delete('https://619ccfda68ebaa001753cc66.mockapi.io/cart/'+item.id)
             await delay(1000)
         }
     }catch (e) {
         alert('не удалось создать заказ')
     }
        setIsLoading(false)
    }

    return (
        <div className="drawerShadow">
            <div className="drawer ">
                <h2 >Корзина <img onClick={props.onClose} src={deleteSVG} alt=""/></h2>
                {
                    props.items.length > 0 ? (
                            <div className='d-flex flex-column flex'>
                                <div className="items">
                                    {props.items.map(obj => (
                                        <div key={obj.id} className="cartItem d-flex align-center mb-20">
                                            <div style={{backgroundImage: `url(${obj.imageUrl})`}}
                                                 className="cartItemImg"></div>
                                            <div className="cartDescription">
                                                <p>{obj.title}</p>
                                                <b>{obj.price} руб</b>
                                            </div>
                                            <img onClick={() => props.onRemove(obj.id)} className="removeBtn"
                                                 src={deleteSVG} alt=""/>
                                        </div>
                                    ))}
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
                                        <button disabled={isLoading} className="greenButton" onClick={onClickOrder}>Оформить заказ <img
                                            src={arrowSvg} alt="arrow"/></button>
                                    </div>
                                </div>
                            </div>
                    ) : (
                        <Info
                            title={isOrderComplete? "Заказ оформле!" : "Корзина пустая"}
                            description={isOrderComplete?`Ваш зака #${orderId} скоро будет передан в курьерскую службу`:"Добавьте хотя бы одну вещь, чтобы соверщить заказ"}
                            image={isOrderComplete?orderProcessed:emptyCart}
                        />
                    )}
            </div>
        </div>
    )
}

export default Drawer