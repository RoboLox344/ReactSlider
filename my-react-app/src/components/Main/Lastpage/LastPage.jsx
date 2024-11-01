
import './Last.css'
import { useState } from 'react'
import MainWindow from './windows/MainWindow'
import WindowActive from './windows/Windowactive'


export default function LastPage({handleTouchStart, handleTouchMove }){
    const [bool, setBoll] = useState(true)

    function toggleBoll(){
        setBoll(!bool)
    }


    return <div className="home-page page-bg-end"
    onTouchStart={handleTouchStart}
    onTouchMove={handleTouchMove}>

        <div className='page-three-wp'>
            {bool ? <MainWindow toggleBoll={toggleBoll} /> : <WindowActive  toggleBoll2 ={toggleBoll}/>}
        </div>  
    </div>
}