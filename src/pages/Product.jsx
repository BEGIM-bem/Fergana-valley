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
    productEvents4
} from '../images/index.js'
import Footer from '../components/Footer'

export default function Product() {
    return (
        <div className={styles.conteiners}>

            <LineHeaders text={'Бизнес Управление'} stylesContent1={'3%'} />

            <div className={styles.conteiner_fon}>
                <div className={styles.conteiner__content}>
                    <div style={{ marginRight: '7.5rem' }}>
                        <h1 className={styles.conteiner__title}> Курс “Бизнес с 0”</h1>
                        <img src={imageTextForProducts} alt='not find'
                            className={styles.conteiner__content_img} />
                    </div>
                    <Button
                        text={'Приступить к курсу “Бизнес с 0”'} />
                </div>
            </div>

            <div className={styles.conteiners_wrappers} >
                <div className={styles.conteiners_services}>
                    <img src={productImg1} alt='/' className={styles.conteiners_services_img} />
                    <img src={productImg2} alt='/' className={styles.conteiners_services_img} />
                    <img src={productImg3} alt='/' className={styles.conteiners_services_img} />
                    <img src={productImg4} alt='/' className={styles.conteiners_services_img} />


                </div>
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

        </div>
    )
}
