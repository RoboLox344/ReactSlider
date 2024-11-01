import ButtonExit from "./ButtonExit"
import ButtonNavWp from "./ButtonNavWp"
import { useState } from "react"



export default function WindowActive({toggleBoll2}){


    const[text, setText]= useState(0)

    const TextDesr = ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nesciunt quisquam, quos atque consequuntu!','Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nesciunt quisquam, quos atque consequuntu!','Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nesciunt quisquam, quos atque consequuntu!','Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nesciunt quisquam, quos atque consequuntu!','Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nesciunt quisquam, quos atque consequuntu!','Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nesciunt quisquam, quos atque consequuntu!']

  
    

    const handleNext = () => {
        setText((prevIndex) => Math.min(prevIndex + 3, TextDesr.length - 3));
    };
                
    const handleBack = () => {
        setText((prevIndex) => Math.max(prevIndex - 3, 0));
    };


 return(
                <div className='page-three-content-wp text-bg'>


                        <ButtonExit toggleBoll2={toggleBoll2}/>

                        <div className='page-three-descr-text'>
                            <div className='page-three-heading-wp'>
                                <div className='page-three-heading-text-wp'>
                                <span className='page-three-heading-text-low page-three-heading-text-low--load'>ПРЕДЛОЖЕНИЕ</span>
                                <h1 className='page-three-heading-text'><span className='page-three-heading-text-thin'>BREND</span>XY</h1>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex">
                            <ul className="liset-item-wp">
                            {TextDesr.slice(text, text + 3).map((item, index) => (
                                    
                                
                                <li key={index} className="item-wp">
                                    <div className="item-number">0{index+text}</div>
                                    <div className="intem-descr">{item}</div>
                                </li>
    
                            ))}
                            </ul>
   
                        </div>
                       

                        <ButtonNavWp handleNext={handleNext} handleBack={handleBack}/>

                </div>
 )
}