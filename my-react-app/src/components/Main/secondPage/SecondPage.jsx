import DescrTextWp from './DescrTextWp';
import './Second.css';
import StickWp from './StickWp';
import { useRef} from 'react';
import SpremWp from './SpremWp';

export default function SecondPage({handleTouchStart, handleTouchMove ,setIsSliderActive}){

    const scrollItem = useRef(null)

    function handelTab(){
        const item = scrollItem
         console.log(item.current.offsetHeight) 

        
    }
    return<div className="home-page page-bg-center"
    onTouchStart={handleTouchStart}
    onTouchMove={handleTouchMove}
    >
            <div className='content-promo-wp'>
                    <h2 className='second-text--haeding'>ТЕКСТ<br/>
                    СООБЩЕНИЯ</h2>
                    <div className='second-descr-wp'>
                        <StickWp handelTab={handelTab} scrollItem={scrollItem} setIsSliderActive={setIsSliderActive}/>
                        <DescrTextWp scrollItem={scrollItem}/>
                        
                    </div>          
            </div>
            <SpremWp/>  
    </div>
}