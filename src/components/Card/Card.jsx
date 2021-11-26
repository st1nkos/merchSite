import heartUnlikeSvg from "../../assets/heartUnlike.svg";
import AddSvg from "../../assets/add.svg";
import AddConfirmSvg from "../../assets/btn-add.svg";
import styles from "./Card.module.scss"
import {useState} from "react";

const Card = ({title,imageUrl,price,onFavoriteClick,onAddClick}) => {

    const [isAdded, setIsAdded] = useState(false)

    const onClickPlus = () => {
        onAddClick({title,imageUrl,price})
        setIsAdded(!isAdded)
    }


    return (
        <div className={styles.card}>
            <div className={styles.img}><img width={133} height={112} src={imageUrl} alt="cloath"/></div>
            <h5>{title}</h5>
            <div className={styles.cardBottom}>
                <div className={styles.cardCost}>
                    <span>Цена:</span>
                    <b>{price} руб</b>
                </div>
                <div className={styles.favorite} onClick={onFavoriteClick}>
                    <img src={heartUnlikeSvg} alt="Unliked"/>
                </div>
                <img className={styles.plus}
                     onClick={onClickPlus}
                     src={isAdded ? AddConfirmSvg : AddSvg} alt="AddtoCart"/>
            </div>
        </div>
    )
}

export default Card
