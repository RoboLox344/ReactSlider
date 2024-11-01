
import DecorWp from './DecorWp'
import FestpageContWp from './FerstPageContWp'
import './FestPage.css'

export default function FerstPage({handleTouchStart, handleTouchMove, handelButton}){
    console.log(handleTouchStart)
    console.log(handleTouchMove)
    console.log(handelButton)
    return <div className="home-page " 
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            >
        <FestpageContWp handelButton={handelButton}/>
        <DecorWp/>
        
    </div>
}