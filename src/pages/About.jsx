import React from 'react'
import Navbar from "../components/Navbar";
import {imgAbout, imgAbout2} from "../images";
import mainStyles from "./../components/Slider/slider.module.css"
import aboutStyles from "./../Styles/About.module.scss"

export default function About() {
    return (
        <div>
            <Navbar/>
            <div className={aboutStyles.banner}>
                <img className={mainStyles.slideImage} src={imgAbout} alt="/"></img>
                <h1 className={aboutStyles.mainTitle}>Нет звука приятнее,<br/>
                    чем шёпот бессменных лидеров
                </h1>
            </div>
            <div className="container">
                <div style={{height: "540px"}} className="flex_between">
                    <div className={aboutStyles.text_container}>
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
                        <p className={aboutStyles.text}>Таким образом, социально-экономическое развитие требует определения и уточнения новых предложений. Значимость этих проблем настолько очевидна, что высокое качество позиционных исследований требует определения и уточнения поставленных обществом задач.</p>
                    </div>
                    <img style={{width: "636px"}} src={imgAbout2} alt="/"/>
                </div>
            </div>

        </div>
    )
}
