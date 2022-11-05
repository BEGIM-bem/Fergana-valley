import { useEffect, useState } from 'react'
import SliderContent from './SliderContent'
import sliderImage from './sliderImage.js'



const len = sliderImage.length - 1;

export default function Slider() {
    const [activeIndex, setActiveIndex] = useState(0);

    // useEffect(() => {

    //     const interval = setInterval(() => {
    //         setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    //     }, 1000);
    //     return () => clearInterval(interval);


    // }, []);

    return (
        <div>
            <div>
                <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} prevSlide={() =>
                    setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
                }
                    nextSlide={() =>
                        setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
                    } />
            </div>
        </div>
    )
}
