import SvgArrow from "./svgButton/SvgArrow"
export default function ButtonCustom({handelButton}){
    return (
    
        <button className="btn btn-main" onClick={handelButton}>
            <div className="btn-round">
                <SvgArrow/>
            </div>
            <span className="btn-text">Что дальше?</span>
        </button>
    )
}