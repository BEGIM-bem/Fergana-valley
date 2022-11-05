import { useState } from 'react'
import SliderForContent from './SliderContent';
import SliderContent from './SliderContent'
// import sliderImage from './sliderImage.js'



/*
sliderImage - данные каторые приходять из разных компонениов. 
Это массив данных  с карточками
*/
export default function SliderAdaptability({ sliderImage, screenWidth }) {


    const len = sliderImage.length - 1;

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div>
            <div>
                <SliderForContent activeIndex={activeIndex}
                    sliderImage={sliderImage}
                    screenWidth={screenWidth}
                    prevSlide={() =>
                        setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
                    }
                // nextSlide={() =>
                //     setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
                // }

                />
            </div>
        </div>
    )
}
