import heartUnlikeSvg from "../../assets/heartUnlike.svg";
import AddSvg from "../../assets/add.svg";
import styles from "./Card.module.scss"
const Card = (props) => {
    return (
        <div className={styles.card}>
            <div className={styles.img}><img width={133} height={112} src={props.imageUrl} alt=""/></div>
            <h5>{props.title}</h5>
            <div className={styles.cardBottom}>
                <div className={styles.cardCost}>
                    <span>Цена:</span>
                    <b>{props.price} руб</b>
                </div>
                <div className={styles.favorite}>
                    <img src={heartUnlikeSvg} alt="Unliked"/>
                </div>
                <button className={styles.button}>
                    <img width={11} height={11} src={AddSvg} alt=""/>
                </button>
            </div>
        </div>
    )
}

export default Card
