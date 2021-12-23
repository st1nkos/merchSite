import heartUnlikeSvg from "../../assets/heartUnlike.svg";
import heartLike from "../../assets/heartLike.svg";
import AddSvg from "../../assets/add.svg";
import AddConfirmSvg from "../../assets/btn-add.svg";
import styles from "./Card.module.scss"
import {useContext, useState} from "react";
import ContentLoader from "react-content-loader"
import {AppContext} from "../../App";

const Card = ({
                  id,
                  title,
                  imageUrl,
                  price,
                  onFavoriteClick,
                  onAddClick,
                  favorited = false,
                  loading = false
              }) => {

    const {isItemAdded} = useContext(AppContext)

    const [isFavorite, setIsFavorite] = useState(favorited)



    const onClickPlus = () => {
        onAddClick({id, title, imageUrl, price})
    }

    const onClickFavorite = () => {
        onFavoriteClick({id, title, imageUrl, price})
        setIsFavorite(!isFavorite)
    }


    return (
        <div className={styles.card}>
            {
                loading ? <ContentLoader
                    speed={2}
                    width={155}
                    height={265}
                    viewBox="0 0 155 265"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect x="0" y="0" rx="10" ry="10" width="155" height="155"/>
                    <rect x="0" y="164" rx="5" ry="5" width="155" height="15"/>
                    <rect x="0" y="183" rx="5" ry="5" width="100" height="15"/>
                    <rect x="0" y="234" rx="5" ry="5" width="80" height="25"/>
                    <rect x="124" y="230" rx="10" ry="10" width="32" height="32"/>
                </ContentLoader> : (<>
                        <div className={styles.img}><img width={133} height={112} src={imageUrl} alt="cloath"/></div>
                        <h5>{title}</h5>
                        <div className={styles.cardBottom}>
                            <div className={styles.cardCost}>
                                <span>Цена:</span>
                                <b>{price} руб</b>
                            </div>
                            <div className={styles.favorite}
                                 onClick={onClickFavorite}>
                                <img src={isFavorite ? heartLike : heartUnlikeSvg} alt="Unliked"/>
                            </div>
                            <img className={styles.plus}
                                 onClick={onClickPlus}
                                 src={isItemAdded(id) ? AddConfirmSvg : AddSvg} alt="AddtoCart"/>
                        </div>
                    </>
                )}
        </div>
    )
}


export default Card
