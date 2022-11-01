import React from 'react'
import LineHeaders from '../components/Lines/LineHeaders'
import styles from '../Styles/Product.module.scss'
import { productImages, imageTextForProducts } from '../images/index.js'
import Button from '../components/Button'
import { NavLink } from 'react-router-dom';
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
    iconPr4
} from '../images/index.js'
import Footer from '../components/Footer'
import ConteinerSlider from '../components/ConteinerSliders'

export default function Product() {

    let oneInfo = [
        { images: iconPr1 },
        { images: iconPr2 },
        { images: iconPr3 },
        { images: iconPr4 }
    ]



    const screenWidth = window.screen.width

    return (
        <div className={styles.conteiners}>

            {/*<LineHeaders text={'Бизнес Управление'} stylesContent1={'3%'} />*/}
            <div className={styles.conteiner__lines}>
                <LineHeaders text={'Бизнес Управление'} stylesContent1={'3%'} />

            </div>
            <div className={styles.conteiner_fon}>
                <div className={styles.conteiner__content}>

                    <div className={styles.conteiner__Margin} >

                        <h1 className={styles.conteiner__title}> Курс “Бизнес с 0”</h1>

                        <div className={styles.conteiner__block}>
                            <p className={styles.conteiner__block_text} >Следует отметить, что укрепление и развитие внутренней
                                структуры однозначно определяет каждого участника как
                                способного принимать собственные решения касаемо
                                системы массового участия.</p>
                        </div>
                        {/* <img src={imageTextForProducts} alt='not find'
                            className={styles.conteiner__content_img} /> */}
                    </div>

                    <div className={styles.conteiner__btnBlock}>
                        <Button
                            text={'Приступить к курсу “Бизнес с 0”'}
                            width={'100%'}
                            top={'16px'}
                            bottom={'0px'}
                        />
                    </div>
                </div>
            </div>


            <div className={styles.conteiners_wrappers} >

                {(screenWidth <= 600 && <ConteinerSlider arrImg={oneInfo} />)

                    // || screenWidth <= 1006 ?
                    // <div className={styles.conteiners_services}>
                    //     <figure>   <img src={iconPr1} alt='/' style={{ width: '100%' }} className={styles.conteiners_services_img} /> </figure>
                    //     <figure>  <img src={iconPr2} alt='/' style={{ width: '100%' }} className={styles.conteiners_services_img} /> </figure>
                    //     <figure>   <img src={iconPr3} alt='/' style={{ width: '100%' }} className={styles.conteiners_services_img} /> </figure>
                    //     <figure>    <img src={iconPr4} alt='/' style={{ width: '100%' }} className={styles.conteiners_services_img} /> </figure>
                    // </div>
                    // :
                    // <div className={styles.conteiners_services}>
                    //     <figure>   <img src={productImg1} alt='/' style={{ width: '100%' }} className={styles.conteiners_services_img} /> </figure>
                    //     <figure>  <img src={productImg2} alt='/' style={{ width: '100%' }} className={styles.conteiners_services_img} /> </figure>
                    //     <figure>   <img src={productImg3} alt='/' style={{ width: '100%' }} className={styles.conteiners_services_img} /> </figure>
                    //     <figure>    <img src={productImg4} alt='/' style={{ width: '100%' }} className={styles.conteiners_services_img} /> </figure>
                    // </div>



                }



                <a href='https://wa.me/996996777777549' target="_blank"
                    rel="noreferrer"
                    className={styles.conteiners_services_linkBtn}>
                    <Button text={"Получить подробную информацию"} />
                </a>

            </div>
            <div className={styles.conteiners__finans}>
                <LineHeaders text={'Финансирование'} stylesContent={'9%'} stylesContent1={'4%'} />


                <div className={styles.conteiner__contentsFinans}>
                    <img src={productFinancImg1} alt='/' className={styles.conteiner__finans_img} />
                    <img src={productFinancImg2} alt='/' className={styles.conteiner__finans_img} />
                    <img src={productFinancImg3} alt='/' className={styles.conteiner__finans_img} />
                    <img src={productFinancImg4} alt='/' className={styles.conteiner__finans_img} />
                    <img src={productFinancImg5} alt='/' className={styles.conteiner__finans_img} />

                </div>
                <a href='https://wa.me/996996777777549' target="_blank"
                    rel="noreferrer"
                    className={styles.conteiners_services_linkBtn}>
                    <Button text={"Получить подробную информацию"} />
                </a>

            </div>



            <hr />
            <div>
                <LineHeaders text={'Экспорт'} stylesContent={'15%'} stylesContent1={'8rem'} />
                <div className={styles.export__conteiner}>
                    <img src={productxport1} alt='/' className={styles.export__conteiner_img} />
                    <img src={productxport2} alt='/' className={styles.export__conteiner_img} />
                    <img src={productxport3} alt='/' className={styles.export__conteiner_img} />
                    <img src={productxport4} alt='/' className={styles.export__conteiner_img} />
                    <img src={productxport5} alt='/' className={styles.export__conteiner_img} />
                    <img src={productxport6} alt='/' className={styles.export__conteiner_img} />
                </div>
                <a href='https://wa.me/996996777777549' target="_blank"
                    rel="noreferrer"
                    className={styles.conteiners_services_linkBtn}>
                    <Button text={"Получить подробную информацию"} />
                </a>
            </div>

            <hr />

            <div className={styles.events}>
                <LineHeaders text={'Мероприятие'} stylesContent={'12%'} stylesContent1={'8%'} />

                <div className={styles.events__contents}>
                    <img className={styles.events__contents_img} src={productEvents4} alt='/' />
                    <img className={styles.events__contents_img} src={productEvents3} alt='/' />
                    <img className={styles.events__contents_img} src={productEvents2} alt='/' />
                    <img className={styles.events__contents_img} src={productEvents1} alt='/' />
                </div>
                <NavLink to='/events'

                    className={styles.conteiners_services_linkBtn}>
                    <Button text={"Узнать о Последних Новостях"} />
                </NavLink>
            </div>
            <Footer />

        </div >
    )
}
