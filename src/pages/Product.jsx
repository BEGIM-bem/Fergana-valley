import React from 'react'
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
// import ConteinerSlider from '../components/ConteinerSliders'

export default function Product() {
    const { status, error, contacts, LinkSocialNetwork } = useSelector(state => state.contacts)
    let WatsapLink = LinkSocialNetwork[3]?.link

    let sliderImageBusness = [
        {
            id: 1,
            images: iconPr1,
        },
        {
            id: 2,
            images: iconPr2,
        },
        {
            id: 3,
            images: iconPr3,
        },
        {
            id: 4,
            images: iconPr4,
        }
    ]


    let sliderImageFinans = [
        {
            id: 1,
            images: productFinancImg1,
        },
        {
            id: 2,
            images: productFinancImg2,
        },
        {
            id: 3,
            images: productFinancImg3,
        },
        {
            id: 4,
            images: productFinancImg4,
        }
    ]

    let sliderImageExport = [
        {
            id: 1,
            images: productxport1,
        },
        {
            id: 2,
            images: productxport2,
        },
        {
            id: 3,
            images: productxport3,
        },
        {
            id: 4,
            images: productxport4,
        }
    ]


    let sliderImageEvents = [
        {
            id: 1,
            images: events1,
        },
        {
            id: 2,
            images: events1,
        },
        {
            id: 3,
            images: events1,
        },
        {
            id: 4,
            images: events1,
        }
    ]


    const screenWidth = window.screen.width
    const {language} = useSelector(state => state.localization)

    const bussinesst = `${language === 'russian' ? 'Бизнес Управление': ''}
                            ${language === 'kyrgyz' ? 'Бизнести башкаруу' : ""}
                            ${language === "o'zbekcha" ? "Biznes boshqaruvi" : ''}`

    const financialt = `${language === 'russian' ? 'Финансирование': ''}
                            ${language === 'kyrgyz' ? 'Каржылоо' : ""}
                            ${language === "o'zbekcha" ? "Moliyalashtirish" : ''}`

    const eventt = `${language === 'russian' ? 'Новости': ''}
                            ${language === 'kyrgyz' ? 'Жаңылыктар' : ""}
                            ${language === "o'zbekcha" ? "Yangiliklar" : ''}`

    const exportt = `${language === 'russian' ? 'Экспорт': ''}
                            ${language === 'kyrgyz' ? 'Экспорт' : ""}
                            ${language === "o'zbekcha" ? "Eksport" : ''}`

    const beginb = `${language === 'russian' ? 'Приступить к курсу “Бизнес с 0”': ''}
                            ${language === 'kyrgyz' ? '"Бизнес 0дөн" курсун баштоо' : ""}
                            ${language === "o'zbekcha" ? 'Biznes 0 dan" kursini boshlang' : ''}`

    const moreb = `${language === 'russian' ? 'Получить подробную информацию': ''}
                            ${language === 'kyrgyz' ? 'Толук маалымат алыңыз' : ""}
                            ${language === "o'zbekcha" ? "Batafsil ma'lumot oling" : ''}`

    const morenewsb = `${language === 'russian' ? 'Узнать о Последних Новостях': ''}
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
                        {/* <img src={imageTextForProducts} alt='not find'
                            className={styles.conteiner__content_img} /> */}
                    </div>

                    <div className={styles.conteiner__btnBlock}>
                        <Button
                            text={beginb}
                            width={'100%'}
                            top={'16px'}
                            bottom={'0px'}
                        />
                    </div>
                </div>

            </div>



            <div className={styles.conteiners_wrappers} >

                {
                    (screenWidth <= 600 && <SliderAdaptability
                        sliderImage={sliderImageBusness} />)
                    ||

                    (screenWidth <= 1006 ?
                        <div className={styles.conteiners_services}>
                            <figure>   <img src={iconPr1} alt='/' style={{ width: '100%' }} className={styles.conteiners_services_img} /> </figure>
                            <figure>  <img src={iconPr2} alt='/' style={{ width: '100%' }} className={styles.conteiners_services_img} /> </figure>
                            <figure>   <img src={iconPr3} alt='/' style={{ width: '100%' }} className={styles.conteiners_services_img} /> </figure>
                            <figure>    <img src={iconPr4} alt='/' style={{ width: '100%' }} className={styles.conteiners_services_img} /> </figure>
                        </div>
                        :
                        <div className={styles.conteiners_services}>
                            <figure>   <img src={productImg1} alt='/' style={{ width: '100%' }} className={styles.conteiners_services_img} /> </figure>
                            <figure>  <img src={productImg2} alt='/' style={{ width: '100%' }} className={styles.conteiners_services_img} /> </figure>
                            <figure>   <img src={productImg3} alt='/' style={{ width: '100%' }} className={styles.conteiners_services_img} /> </figure>
                            <figure>    <img src={productImg4} alt='/' style={{ width: '100%' }} className={styles.conteiners_services_img} /> </figure>
                        </div>)



                }
                {
                    screenWidth <= 600 ?

                        <a href={WatsapLink} target="_blank"
                            rel="noreferrer"
                            className={styles.conteiners_services_linkBtn}>
                            <Button text={moreb}
                                width={'83%'}
                            />
                        </a> :

                        <a href={WatsapLink} target="_blank"
                            rel="noreferrer"
                            className={styles.conteiners_services_linkBtn}>
                            <Button text={moreb}
                            />
                        </a>
                }


            </div>


            {/* <div className='container'> */}
            <div id="finans" className={styles.conteiners__finans}>
                <LineHeaders text={financialt} stylesContent={'9%'} stylesContent1={'4%'} />

                <div className='container'>
                    {
                        screenWidth <= 600 ?

                            <SliderAdaptability
                                sliderImage={sliderImageFinans} />


                            :
                            <div className={styles.conteiner__contentsFinans}>
                                <img src={productFinancImg1} alt='/' className={styles.conteiner__finans_img} />
                                <img src={productFinancImg2} alt='/' className={styles.conteiner__finans_img} />
                                <img src={productFinancImg3} alt='/' className={styles.conteiner__finans_img} />
                                <img src={productFinancImg4} alt='/' className={styles.conteiner__finans_img} />
                                <img src={productFinancImg5} alt='/' className={styles.conteiner__finans_img} />
                            </div>

                    }
                </div>


                {
                    screenWidth <= 600 ?

                        <a href={WatsapLink} target="_blank"
                            rel="noreferrer"
                            className={styles.conteiners_services_linkBtn}>
                            <Button text={moreb}
                                width={'75%'}
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


            {/* </div> */}

            <hr />
            <div id='exports' >
                {
                    screenWidth <= 600 ?
                        <LineHeaders text={exportt}
                            stylesContent={'9%'}
                            stylesContent1={'35%'} />
                        :
                        <LineHeaders text={exportt}
                            stylesContent={'15%'}
                            stylesContent1={'8rem'} />
                }
                <div className='container'>
                    {
                        screenWidth <= 600 ?
                            <SliderAdaptability
                                sliderImage={sliderImageExport} />
                            :
                            <div className={styles.export__conteiner}>
                                <img src={productxport1} alt='/' className={styles.export__conteiner_img} />
                                <img src={productxport2} alt='/' className={styles.export__conteiner_img} />
                                <img src={productxport3} alt='/' className={styles.export__conteiner_img} />
                                <img src={productxport4} alt='/' className={styles.export__conteiner_img} />
                                <img src={productxport5} alt='/' className={styles.export__conteiner_img} />
                                <img src={productxport6} alt='/' className={styles.export__conteiner_img} />
                            </div>
                    }
                </div>


                {
                    screenWidth <= 600 ?
                        <a href={WatsapLink} target="_blank"
                            rel="noreferrer"
                            className={styles.conteiners_services_linkBtn}>
                            <Button text={moreb}
                                width={'73%'}
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
                    screenWidth <= 600 ?
                        <LineHeaders text={eventt}
                            stylesContent={'6%'}
                            stylesContent1={'8%'} />
                        :
                        <LineHeaders text={eventt}
                            stylesContent={'12%'}
                            stylesContent1={'8%'} />
                }


                {
                    screenWidth <= 600 ?
                        <SliderAdaptability
                            sliderImage={sliderImageEvents}
                        />
                        :
                        <div className={styles.events__contents}>
                            <img className={styles.events__contents_img} src={productEvents4} alt='/' />
                            <img className={styles.events__contents_img} src={productEvents3} alt='/' />
                            <img className={styles.events__contents_img} src={productEvents2} alt='/' />
                            <img className={styles.events__contents_img} src={productEvents1} alt='/' />
                        </div>

                }
                {
                    screenWidth <= 600 ?

                        <NavLink to='/events'
                            className={styles.conteiners_services_linkBtn}>
                            <Button width={'88%'} text={morenewsb} />
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
