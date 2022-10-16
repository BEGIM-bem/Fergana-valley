import { useState } from 'react'
import SliderContent from '../components/Slider/SliderContent'
import sliderImage from '../components/Slider/sliderImage.js'

const len = sliderImage.length - 1;
export default function Home() {

    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div>

            <div className='sliderHome' >
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
