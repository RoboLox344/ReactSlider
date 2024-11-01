
import ButtonTwo from "../../btn/ButtonTwo"

export default function MainWindow({toggleBoll,text}){
    return(

        <div className='page-three-content-wp '>

                <div className='page-three-descr-text'>
                    <div className='page-three-heading-wp'>
                        <div className='page-three-heading-text-wp'>
                        <span className='page-three-heading-text-low'>КЛЮЧЕВОЕ СООБЩЕНИЕ</span>
                        <h1 className='page-three-heading-text'><span className='page-three-heading-text-thin'>BREND</span>XY</h1>
                        </div>
                    </div>
                </div>

                <div className='page-three-main-cont-wp'>
                        <div className='main-item--fesrt-wp'>
                            <div></div>
                            <p className='page-three-text-promo--ferst'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam incidunt corporis </p>
                        </div>

                        <div className='main-item---second-wp'>
                            <div className='seocnd-item--fesrt-wp'>
                                <div className='seocnd-item--fesrt'>
                                    <p className='page-three-text-promo--sec'>Lorem ipsum dolor </p>
                                </div>
                            </div>
                            <div className='seocnd-item--sec-wp'>
                                <ButtonTwo toggleBoll={toggleBoll}/>
                            </div>
                        </div>

                </div>

            </div>
    )
}