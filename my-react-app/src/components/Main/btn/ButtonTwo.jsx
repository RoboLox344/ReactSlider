import SvgPlus from "./svgButton/SvgPlus"
export default function ButtonTwo(props){
  
    
    return (
    
        <button className='btn btn-main btn-last-page'onClick={props.toggleBoll} >
            <div className="btn-round">
                 <SvgPlus/>
            </div>
            <span className="btn-text">Подробнее</span>
        </button>
    )
}