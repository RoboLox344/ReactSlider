import ButtonCustom from "../btn/Button";

export default function FestpageContWp({handelButton}){

    return(
        <div className="ferstPage-cont-wp">
            <p className="page-ferst-text">привет,</p>
            <h1 className="page-ferst-text--heading">
                <span className="promo-text-wp">ЭТО<span className="promo-text-wp--ultraStrong"><b>НЕ</b></span><br/> </span>
                <span className="promo-text-wp">КОММЕРЧЕСКОЕ<br/> </span>
                <span className="promo-text-wp">ЗАДАНИЕ<ButtonCustom handelButton={handelButton}/></span>
            </h1>

        </div>
    )
}