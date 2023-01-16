import { useState } from 'react'
import AdaptivMainProduct from './ProductMain';
import SliderForContent from './SliderContent';
import SliderContent from './SliderContent'
// import sliderImage from './sliderImage.js'



/*
sliderImage - данные каторые приходять из разных компонениов. 
Это массив данных  с карточками
*/
export default function SliderAdaptability({ text, data, vid, withs, colorArrow }) {
    let len = 0
    if (data?.length > 0) {
        len = data.length - 1
    }

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div>
            <div>
                {
                    text === 'MainProduct' ?
                        <AdaptivMainProduct
                            activeIndex={activeIndex}
                            data={data}
                            prevSlide={() =>
                                setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
                            }
                        />
                        :
                        <SliderForContent activeIndex={activeIndex}
                            sliderImage={data}
                            vid={vid}
                            screenWidth={withs}
                            colorArrow={colorArrow}
                            prevSlide={() =>
                                setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
                            }
                        />
                }
            </div>
        </div>
    )
}
