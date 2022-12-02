import { useEffect, useState } from 'react'
import SliderContent from './SliderContent'
import sliderImage from './sliderImage.js'
import { imageSlider2, imagesSlider3, MainImages, paginationsArrows1, paginationsArrows2 } from "../../images";
import { useSelector } from "react-redux";



export default function Slider() {
    const { language } = useSelector(state => state.localization)
    let [activeIndex, setActiveIndex] = useState(0);


    useEffect(() => {

        const interval = setInterval(() => {
            setActiveIndex(activeIndex > len ? 0 : activeIndex++);
        }, 2000);
        return () => clearInterval(interval)
    }, [activeIndex]);

    const translate = (ru, kg, uz) => {
        return `${language === 'russian' ? ru : ''}
                                    ${language === 'kyrgyz' ? kg : ''}
                                    ${language === "o'zbekcha" ? uz : ''}`
    }

    const g = [
        {
            urls: imageSlider2,
            arrows1: paginationsArrows1,
            arrows2: paginationsArrows2,
            title: translate('От идеи к результату', 'Идеядан жыйынтыкка', 'Fikrdan natijaga'),
            titleSmoll: translate('Добро пожаловать в', 'Fergana Valley ', 'Fergana vodiysi'),
            titleBig: translate('Fergana Valley Business Academy', 'Business Academy ге кош келиниз', 'biznes akademiyasiga xush kelibsiz')
        },
        {
            urls: imagesSlider3,
            arrows1: paginationsArrows1,
            arrows2: paginationsArrows2,
            titleSmoll: translate('Случайный текст похож на ласковый перезвон вертикали власти', 'Кокус текст күч вертикалынын мээримдүү чакыруусуна окшош', "Tasodifiy matn kuch vertikalining yumshoq qo'ng'irog'iga o'xshaydi"),
            textImages: translate('Главное действие', 'Негизги аракет', 'Asosiy harakat'),
            titleBig2: translate('Мы создаём легкие решения сложных задач и проблем', 'Биз татаал маселелерди жана проблемаларды жеңил чечимдерди түзүү', 'Biz murakkab muammolar va muammolarga oson echimlarni yaratamiz'),
            top: '55%',
        },
        {
            urls: MainImages,
            arrows1: paginationsArrows1,
            arrows2: paginationsArrows2,
            events: translate('Только сложившаяся структура организации сделала своё дело', 'Уюмдун түзүлгөн структурасы гана өз ишин аткарды', 'Faqat tashkilotning o\'rnatilgan tuzilmasi o\'z vazifasini bajardi'),
            titleEvents: translate('События', 'Oкуялар ', 'Hodisalar'),
            btnText: translate('Подробнее', 'Толугураак', "Ko'proq"),
            data: translate('29 сентября 2022', '29-сентябрь, 2022-жыл', '2022 yil 29 sentyabr')
        }

    ];

    let len = g.length - 1;


    return (
        <div>
            <div>
                <SliderContent activeIndex={activeIndex} sliderImage={g}
                    prevSlide={() =>
                        setActiveIndex(activeIndex <= 1 ? len : activeIndex - 1)
                    }
                    nextSlide={() =>
                        setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
                    } />
            </div>
        </div>
    )
}
