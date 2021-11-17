import clothes1 from "../assets/clothes/bs038010.jpg";
import heartUnlikeSvg from "../assets/heartUnlike.svg";
import AddSvg from "../assets/add.svg";

const Card = () => {
    return (
        <div className="card">
            <div className="img"><img width={133} height={112} src={clothes1} alt=""/></div>
            <h5>Черная оверсайз футболка</h5>
            <div className="cardBottom">
                <div className="cardCost">
                    <span>Цена:</span>
                    <b>1790 руб</b>
                </div>
                <div className="favorite">
                    <img src={heartUnlikeSvg} alt="Unliked"/>
                </div>
                <button className="button">
                    <img width={11} height={11} src={AddSvg} alt=""/>
                </button>
            </div>
        </div>
    )
}

export default Card
