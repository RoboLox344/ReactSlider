import FerstPage from "./ferstPage/FerstPage";
import { useState} from 'react';
import SecondPage from "./secondPage/SecondPage";
import LastPage from "./Lastpage/LastPage";

export default function Main(){




const [currentIndex, setCurrentIndex] = useState(0);
const [startX, setStartX] = useState(null);
const [isSliderActive, setIsSliderActive] = useState(false);

const handleTouchStart = (e) => {
    
    if (isSliderActive) return;
    setStartX(e.touches[0].clientX);
    console.log(e.touches[0].clientX)
  };

  const handleTouchMove = (e) => {
    if (startX === null || isSliderActive)  return; 

    const moveX = e.touches[0].clientX - startX;
    if (moveX > 150) {
      prevSlide();
      setStartX(null);
    } else if (moveX < -150) {
      nextSlide();
      setStartX(null);
    }
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderIndex.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sliderIndex.length - 1 ? 0 : prevIndex + 1
    );
  };


  function handelButton(){
    nextSlide();
  }

  const sliderIndex =[
    <FerstPage   handleTouchStart={handleTouchStart} handleTouchMove={handleTouchMove} handelButton={handelButton}/>,
    <SecondPage  handleTouchStart={handleTouchStart} handleTouchMove={handleTouchMove}  setIsSliderActive={setIsSliderActive}/>,
    <LastPage  handleTouchStart={handleTouchStart} handleTouchMove={handleTouchMove}/>
]


    return <main>
        <section id="fert-page">
            <div className="container slider">

             
                {sliderIndex.map((slide, index) =>{
                     return currentIndex === index ? slide : null
                })}
                
            </div>
        </section>
    </main>
}