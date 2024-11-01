export default function ItemWp({index, text}){
    const {number} = index || {};

    return(
        <li className="item-wp">
            <div className="item-number">0{number}</div>
            <div className="intem-descr">{text}</div>
        </li>
    )
}