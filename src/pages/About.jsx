import React from 'react'
import Navbar from "../components/Navbar";
import {aboutImagess, imgAbout, imgAbout2, imgAbout2banner, imgAbout3, imgAbout4} from "../images";
import mainStyles from "./../components/Slider/slider.module.css"
import aboutStyles from "./../Styles/About.module.scss"
import Cards from "../components/Cards";
import Footer from '../components/Footer/index.jsx'
import OurPartners from "../components/OurPartners";
import Founders from "../components/Founders";
import styles from "../Styles/Home.module.scss";
import {useSelector } from 'react-redux';


export default function About() {

    const lang = useSelector(state => state.localization.language)
    return (
        <div>
            {/* <Navbar /> */}
            <div className={aboutStyles.banner}>
                <img className={aboutStyles.banner_image}
                    src={imgAbout} alt="/"></img>
                <h1 className={aboutStyles.mainTitle}>Нет звука приятнее,<br />
                    {lang == 'russian' ? 'чем шёпот бессменных лидеров' : "not russian text"}
                </h1>
            </div>


            <div className="container">
                <div className={aboutStyles.desc_cont}>
                    <div style={{ marginRight: "10px" }} className={aboutStyles.text_container}>
                        <h2 className={aboutStyles.title}>Hac maecenas</h2>

                        <p className={aboutStyles.text}>Есть над чем задуматься: некоторыео собенности внутренней политики
                            призваны к ответу. Для современного мира социально-экономическое
                            развитие выявляет срочную потребность глубокомысленных
                            рассуждений.Повседневная практика показывает, что высокотех-
                            нологичная концепция общественного уклада требует определения
                            и уточнения экономической целесообразности принимаемых решений.
                            В своём стремлении улучшить пользовательский опыт мы упускаем,
                            что предприниматели в сети интернет будут преданы социально-
                            демократической анафеме.
                        </p>
                        <br />
                        <p className={aboutStyles.text}>Таким образом, социально-экономическое развитие требует определения и уточнения новых предложений. Значимость этих проблем настолько очевидна, что высокое качество позиционных исследований требует определения и уточнения поставленных обществом задач.</p>
                    </div>
                    <div className={styles.contents__imgBlock}>
                        <img src={aboutImagess} alt='/' className={styles.contents__img} />
                    </div>
                    {/*<div className={aboutStyles.img_block}>*/}
                    {/*    <img className={aboutStyles.img} src={imgAbout2} alt="/" />*/}
                    {/*</div>*/}

                </div>
            </div>


            <div className={aboutStyles.second_section}>
                <div className="container">
                    <h2 className={aboutStyles.white_title}>Fergana Valley Business Academy в Цифрах</h2>
                    <Cards />
                </div>

            </div>
            <div className="container">
                <div className="flex_between">
                    {/*<img className={aboutStyles.img2} src={imgAbout3} alt="/" />*/}
                    <div className={styles.contents__imgBlock}>
                        <img src={aboutImagess} alt='/' style={{boxShadow: '-15px 16px 2px -5px #1959ab', marginTop: '30px'}} className={styles.contents__img} />
                    </div>
                    <div style={{ marginLeft: "10px" }} className={aboutStyles.text_container}>
                        <h2 className={aboutStyles.title}>Hac maecenas</h2>
                        <p className={aboutStyles.text}>Есть над чем задуматься: некоторыео собенности внутренней политики
                            призваны к ответу. Для современного мира социально-экономическое
                            развитие выявляет срочную потребность глубокомысленных
                            рассуждений.Повседневная практика показывает, что высокотех-
                            нологичная концепция общественного уклада требует определения
                            и уточнения экономической целесообразности принимаемых решений.
                            В своём стремлении улучшить пользовательский опыт мы упускаем,
                            что предприниматели в сети интернет будут преданы социально-
                            демократической анафеме.
                        </p>
                        <br />
                        <p className={aboutStyles.text}>Таким образом, социально-экономическое развитие требует определения и уточнения новых предложений. Значимость этих проблем настолько очевидна, что высокое качество позиционных исследований требует определения и уточнения поставленных обществом задач.</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div style={{ marginTop: "20px" }} className={aboutStyles.desc_cont}>
                    <div style={{ marginRight: "10px" }} className={aboutStyles.text_container}>
                        <h2 className={aboutStyles.title}>Hac maecenas</h2>

                        <p className={aboutStyles.text}>Есть над чем задуматься: некоторыео собенности внутренней политики
                            призваны к ответу. Для современного мира социально-экономическое
                            развитие выявляет срочную потребность глубокомысленных
                            рассуждений.Повседневная практика показывает, что высокотех-
                            нологичная концепция общественного уклада требует определения
                            и уточнения экономической целесообразности принимаемых решений.
                            В своём стремлении улучшить пользовательский опыт мы упускаем,
                            что предприниматели в сети интернет будут преданы социально-
                            демократической анафеме.
                        </p>
                        <br />
                        <p className={aboutStyles.text}>Таким образом, социально-экономическое развитие требует определения и уточнения новых предложений. Значимость этих проблем настолько очевидна, что высокое качество позиционных исследований требует определения и уточнения поставленных обществом задач.</p>
                    </div>
                    <div className={styles.contents__imgBlock}>
                        <img src={aboutImagess} alt='/' className={styles.contents__img} />
                    </div>
                    {/*<div className={aboutStyles.img_block}>*/}
                    {/*    <img className={aboutStyles.img} src={imgAbout4} alt="/" />*/}
                    {/*</div>*/}
                </div>
            </div>
            <Founders />
            <OurPartners />
            <Footer />
        </div>
    )
}
