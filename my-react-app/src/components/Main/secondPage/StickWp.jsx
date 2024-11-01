import { useEffect, useRef } from 'react'

export default function StickWp({setIsSliderActive, scrollItem, handelTab}){
    const btnRef = useRef(null);
    const containerRef = useRef(null);
    let shiftY = 0;
     console.log(scrollItem.current)
    const handleTouchStartSec = (event) => {
        event.preventDefault();
        setIsSliderActive(true)
        const touch = event.touches[0];
        shiftY = touch.clientY - btnRef.current.getBoundingClientRect().top;

        document.addEventListener('touchmove', handleTouchMoveSec);
        document.addEventListener('touchend', handleTouchEndSec);
    };

    const handleTouchMoveSec = (event) => {
        const touch = event.touches[0];
        let newTop = touch.clientY - shiftY - containerRef.current.getBoundingClientRect().top;

        
        if (newTop < 0) {
            newTop = 0;
        }
        const bottomEdge = containerRef.current.offsetHeight - btnRef.current.offsetHeight;
        if (newTop > bottomEdge) {
            newTop = bottomEdge;
        }

        
        btnRef.current.style.top = newTop + 'px';

        
        const scrollHeight = scrollItem.current.scrollHeight - scrollItem.current.clientHeight;
        const scrollPercentage = newTop / bottomEdge; 
        scrollItem.current.scrollTop = scrollPercentage * scrollHeight; 
    };

    const handleTouchEndSec = () => {
        setIsSliderActive(false)
        handelTab()
        document.removeEventListener('touchmove', handleTouchMoveSec);
        document.removeEventListener('touchend', handleTouchEndSec);
    };

    useEffect(() => {
        const btnElement = btnRef.current;
        btnElement.addEventListener('touchstart', handleTouchStartSec);

        return () => {
            btnElement.removeEventListener('touchstart', handleTouchStartSec);
        };
    }, []);

    return(

        <div className='second-stick-wp'>
            <div className='second-stick' ref={containerRef}>
                <div className='second-stick-slide' ref={btnRef}></div>
            </div>
        </div>
    )
}