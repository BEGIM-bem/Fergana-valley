import React from 'react';
import aboutStyles from "../../Styles/About.module.scss";
import {useSelector} from "react-redux";

const Cards = () => {

    const {language} = useSelector(state => state.localization)

    return (
        <div className={aboutStyles.card_container}>
            <div className={aboutStyles.white_card}>
                <p className={aboutStyles.card_num}>500+</p>
                <p className={aboutStyles.card_blue_text}>
                    {language === 'russian' && 'прошли оффлайн курс “Бизнеса с 0”'}
                    {language === 'kyrgyz' && '"Бизнес 0дөн" оффлайн курсун аяктады'}
                    {language === "o'zbekcha" && 'ortiq kishi “Biznes 0 dan” oflayn kursini tamomladi'}
                </p>
            </div>
            <div className={aboutStyles.blue_card}>
                <p className={aboutStyles.card_num_blue}>150+</p>
                <p className={aboutStyles.card_white_text}>
                    {language === 'russian' && 'запустили свой бизнес'}
                    {language === 'kyrgyz' && 'бизнесиңизди ачты'}
                    {language === "o'zbekcha" && 'biznesingizni ishga tushirdi'}
                </p>
            </div>
            <div className={aboutStyles.white_card}>
                <p className={aboutStyles.card_num}>250+</p>
                <p  className={aboutStyles.card_blue_text}>
                    {language === 'russian' && 'членов в сообществе предпринимателей'}
                    {language === 'kyrgyz' && 'бизнес коомчулугунун мүчөлөрү'}
                    {language === "o'zbekcha" && 'biznes hamjamiyatining a\'zolari'}
                </p>
            </div>
            <div className={aboutStyles.blue_card}>
                <p className={aboutStyles.card_num_blue}>100+</p>
                <p className={aboutStyles.card_white_text}>
                    {language === 'russian' && 'специалистов в предпринимательстве в ФД'}
                    {language === 'kyrgyz' && 'ФДда ишкердик боюнча адистер'}
                    {language === "o'zbekcha" && "FDda tadbirkorlik bo'yicha mutaxassislar"}
                </p>
            </div>
        </div>
    );
};

export default Cards;
