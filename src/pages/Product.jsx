import React, { useState } from 'react'
import LineHeaders from '../components/Lines/LineHeaders'
import styles from '../Styles/Product.module.scss'
import { productImages, imageTextForProducts } from '../images/index.js'
import Button from '../components/Button'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    productImg1,
    productImg2,
    productImg3,
    productImg4,

    productFinancImg1,
    productFinancImg3,
    productFinancImg4,
    productFinancImg5,
    productFinancImg2,
    productxport1,
    productxport2,
    productxport3,
    productxport4,
    productxport5,
    productxport6,
    productEvents1,
    productEvents2,
    productEvents3,
    productEvents4,
    iconPr1,
    iconPr2,
    iconPr3,
    iconPr4,
    events1,
    switchsWhite,
    switchsBlack

} from '../images/index.js'
import Footer from '../components/Footer'
import SliderAdaptability from '../components/ConteinerAdaptability'
import CardsComponents from '../components/CardsCompon.js'
import { KGBusness, KGEvents, KGExport, KGFinans, OZBusness, OZEvents, OZExport, OZFinans, RusBusness, RusEvents, RusExport, RusFinans } from './InfoProducts'
import useWindowDimensions from './with'
// import ConteinerSlider from '../components/ConteinerSliders'





export default function Product() {
    //Кастомный Хук для определение ширины экрана
    const { height, width } = useWindowDimensions();



    const { status, error, contacts, LinkSocialNetwork } = useSelector(state => state.contacts)
    let WatsapLink = LinkSocialNetwork[1]?.link




    const { language } = useSelector(state => state.localization)

    const bussinesst = `${language === 'russian' ? 'Бизнес Управление' : ''}
                            ${language === 'kyrgyz' ? 'Бизнести башкаруу' : ""}
                            ${language === "o'zbekcha" ? "Biznes boshqaruvi" : ''}`

    const financialt = `${language === 'russian' ? 'Финансирование' : ''}
                            ${language === 'kyrgyz' ? 'Каржылоо' : ""}
                            ${language === "o'zbekcha" ? "Moliyalashtirish" : ''}`

    const eventt = `${language === 'russian' ? 'Новости' : ''}
                            ${language === 'kyrgyz' ? 'Жаңылыктар' : ""}
                            ${language === "o'zbekcha" ? "Yangiliklar" : ''}`

    const exportt = `${language === 'russian' ? 'Экспорт' : ''}
                            ${language === 'kyrgyz' ? 'Экспорт' : ""}
                            ${language === "o'zbekcha" ? "Eksport" : ''}`

    const beginb = `${language === 'russian' ? 'Приступить к курсу “Бизнес с 0”' : ''}
                            ${language === 'kyrgyz' ? '"Бизнес 0дөн" курсун баштоо' : ""}
                            ${language === "o'zbekcha" ? 'Biznes 0 dan" kursini boshlang' : ''}`

    const moreb = `${language === 'russian' ? 'Получить подробную информацию' : ''}
                            ${language === 'kyrgyz' ? 'Толук маалымат алыңыз' : ""}
                            ${language === "o'zbekcha" ? "Batafsil ma'lumot oling" : ''}`

    const morenewsb = `${language === 'russian' ? 'Узнать о Последних Новостях' : ''}
                            ${language === 'kyrgyz' ? 'Акыркы Кабарлар жөнүндө билип алыңыз' : ""}
                            ${language === "o'zbekcha" ? "So'nggi yangiliklar haqida bilib oling" : ''}`



    return (
        <div className={styles.conteiners}>

            {/*<LineHeaders text={'Бизнес Управление'} stylesContent1={'3%'} />*/}

            <div id="buzness" className={styles.conteiner__lines}>
                <LineHeaders text={bussinesst} stylesContent1={'3%'} />
            </div>


            <div className={styles.conteiner_fon}>
                <div className={styles.conteiner__content}>

                    <div className={styles.conteiner__Margin} >

                        <h1 className={styles.conteiner__title}>
                            {language === 'russian' && ' Курс “Бизнес с 0” '}
                            {language === 'kyrgyz' && '"Бизнес 0дөн" курсу'}
                            {language === "o'zbekcha" && '“Biznes 0 dan” kursi'}
                        </h1>

                        <div className={styles.conteiner__block}>
                            <p className={styles.conteiner__block_text} >
                                {language === 'russian' && ' Следует отметить, что укрепление и развитие внутренней структуры однозначно определяет каждого участника как способного принимать собственные решения касаемо системы массового участия.'}
                                {language === 'kyrgyz' && 'Белгилей кетчү нерсе, ички структураны чыңдоо жана өнүктүрүү ар бир катышуучунун массалык катышуу системасына карата өз алдынча чечим кабыл алууга жөндөмдүү экендигин так аныктайт.'}
                                {language === "o'zbekcha" && "Shuni ta'kidlash kerakki, ichki tuzilmaning mustahkamlanishi va rivojlanishi har bir ishtirokchini ommaviy ishtirok tizimi bo'yicha o'z qarorlarini qabul qilishga qodir ekanligini aniq belgilaydi."}
                            </p>
                        </div>

                    </div>

                    <div className={styles.conteiner__btnBlock}>
                        <NavLink to='/course'>
                            <Button
                                text={beginb}
                                width={'100%'}
                                top={'16px'}
                                bottom={'0px'}
                            />
                        </NavLink>
                    </div>
                </div>

            </div>

            {/* Бизнес Управление */}

            <div className={styles.container2} >
                {
                    width < 786 ?
                        <>
                            {language === 'russian' && <SliderAdaptability withs={width <= 500 ? '100%' : '365px'} colorArrow={'black'} data={RusBusness} />}
                            {language === 'kyrgyz' && <SliderAdaptability withs={width <= 500 ? '100%' : '365px'} colorArrow={'black'} data={KGBusness} />}
                            {language === "o'zbekcha" && <SliderAdaptability withs={width <= 500 ? '100%' : '365px'} colorArrow={'black'} data={OZBusness} />}
                        </>
                        :
                        <>
                            {language === 'russian' && <CardsComponents withs={width <= 1272 ? '320px' : '286px'} data={RusBusness} />}
                            {language === 'kyrgyz' && <CardsComponents withs={width <= 1272 ? '320px' : '286px'} data={KGBusness} />}
                            {language === "o'zbekcha" && <CardsComponents withs={width <= 1272 ? '320px' : '286px'} data={OZBusness} />}
                        </>
                }
            </div>
            {
                width <= 500 ?
                    <a href={WatsapLink} target="_blank"
                        rel="noreferrer"
                        className={styles.conteiners_services_linkBtn}>
                        <Button text={moreb}
                            width={'90%'}
                        />
                    </a> :

                    <a href={WatsapLink} target="_blank"
                        rel="noreferrer"
                        className={styles.conteiners_services_linkBtn}>
                        <Button text={moreb}
                        />
                    </a>
            }


            <hr />

            {/* Финансирование */}


            <div id="finans" className={styles.conteiners__finans}>
                <LineHeaders text={financialt} stylesContent={'9%'} stylesContent1={'4%'} />

                <div className={styles.container2} >
                    {
                        width <= 786 ?
                            <>
                                {language === 'russian' && <SliderAdaptability withs={width <= 500 ? '100%' : '365px'} colorArrow={'white'} data={RusFinans} />}
                                {language === 'kyrgyz' && <SliderAdaptability withs={width <= 500 ? '100%' : '365px'} colorArrow={'white'} data={RusFinans} />}
                                {language === "o'zbekcha" && <SliderAdaptability withs={width <= 500 ? '100%' : '365px'} colorArrow={'white'} data={RusFinans} />}
                            </>
                            :
                            <>
                                {language === 'russian' && <CardsComponents withs={width <= 1272 ? '320px' : '370px'} data={RusFinans} />}
                                {language === 'kyrgyz' && <CardsComponents withs={width <= 1272 ? '320px' : '370px'} data={KGFinans} />}
                                {language === "o'zbekcha" && <CardsComponents withs={width <= 1272 ? '320px' : '370px'} data={OZFinans} />}
                            </>
                    }
                </div>

                {
                    width <= 500 ?

                        <a href={WatsapLink} target="_blank"
                            rel="noreferrer"
                            className={styles.conteiners_services_linkBtn}>
                            <Button text={moreb}
                                width={'90%'}
                            />
                        </a>
                        :
                        <a href={WatsapLink} target="_blank"
                            rel="noreferrer"
                            className={styles.conteiners_services_linkBtn}>
                            <Button text={moreb} />
                        </a>
                }

            </div>



            <hr />
            <div id='exports' >
                {
                    width <= 600 ?
                        <LineHeaders text={exportt}
                            stylesContent={'9%'}
                            stylesContent1={'35%'} />
                        :
                        <LineHeaders text={exportt}
                            stylesContent={'15%'}
                            stylesContent1={'8rem'} />
                }

                {/* Экспорт */}
                <div className={styles.container2}>
                    {
                        width <= 786 ?
                            <>
                                {language === 'russian' && <SliderAdaptability withs={width <= 500 ? '100%' : '365px'} colorArrow={'black'} data={RusExport} />}
                                {language === 'kyrgyz' && <SliderAdaptability withs={width <= 500 ? '100%' : '365px'} colorArrow={'black'} data={KGExport} />}
                                {language === "o'zbekcha" && <SliderAdaptability withs={width <= 500 ? '100%' : '365px'} colorArrow={'black'} data={OZExport} />}
                            </>
                            :
                            <>
                                {language === 'russian' && <CardsComponents withs={width <= 1272 ? '320px' : '370px'} data={RusExport} />}
                                {language === 'kyrgyz' && <CardsComponents withs={width <= 1272 ? '320px' : '370px'} data={KGExport} />}
                                {language === "o'zbekcha" && <CardsComponents withs={width <= 1272 ? '320px' : '370px'} data={OZExport} />}
                            </>
                    }
                </div>


                {
                    width <= 500 ?
                        <a href={WatsapLink} target="_blank"
                            rel="noreferrer"
                            className={styles.conteiners_services_linkBtn}>
                            <Button text={moreb}
                                width={'90%'}
                            />
                        </a>
                        : <a href={WatsapLink} target="_blank"
                            rel="noreferrer"
                            className={styles.conteiners_services_linkBtn}>
                            <Button text={moreb} />
                        </a>
                }


            </div>

            <hr />

            <div id='events' className={styles.events}>

                {
                    width <= 600 ?
                        <LineHeaders text={eventt}
                            stylesContent={'9%'}
                            stylesContent1={'32%'} />
                        :
                        <LineHeaders text={eventt}
                            stylesContent={'15%'}
                            stylesContent1={'5rem'} />
                }
                {/* Мероприятия */}

                <div className={styles.container2} >
                    {
                        width <= 786 ?
                            <>
                                {language === 'russian' && <SliderAdaptability withs={width <= 500 ? '100%' : '370px'} vid={'events'} colorArrow={'white'} data={RusEvents} />}
                                {language === 'kyrgyz' && <SliderAdaptability withs={width <= 500 ? '100%' : '370px'} vid={'events'} colorArrow={'white'} data={KGEvents} />}
                                {language === "o'zbekcha" && <SliderAdaptability withs={width <= 500 ? '100%' : '370px'} vid={'events'} colorArrow={'white'} data={OZEvents} />}
                            </>
                            :
                            <>
                                {language === 'russian' && <CardsComponents withs={width <= 1272 ? '320px' : '286px'} vid={'events'} data={RusEvents} />}
                                {language === 'kyrgyz' && <CardsComponents withs={width <= 1272 ? '320px' : '286px'} vid={'events'} data={KGEvents} />}
                                {language === "o'zbekcha" && <CardsComponents withs={width <= 1272 ? '320px' : '286px'} vid={'events'} data={OZEvents} />}
                            </>
                    }
                </div>

                {
                    width <= 500 ?

                        <NavLink to='/events'
                            className={styles.conteiners_services_linkBtn}>
                            <Button width={'90%'} text={morenewsb} />
                        </NavLink>
                        :

                        <NavLink to='/events'
                            className={styles.conteiners_services_linkBtn}>
                            <Button text={morenewsb} />
                        </NavLink>
                }

                <Footer />

            </div>


        </div >
    )
}
