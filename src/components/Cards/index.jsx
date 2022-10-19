import React from 'react';
import aboutStyles from "../../Styles/About.module.scss";

const Cards = () => {
    return (
        <div className={aboutStyles.card_container}>
            <div className={aboutStyles.white_card}>
                <p className={aboutStyles.card_num}>400+</p>
                <p className={aboutStyles.card_blue_text}>Velit risus</p>
            </div>
            <div className={aboutStyles.blue_card}>
                <p className={aboutStyles.card_num_blue}>200+</p>
                <p className={aboutStyles.card_white_text}>Fermentum at</p>
            </div>
            <div className={aboutStyles.white_card}>
                <p className={aboutStyles.card_num}>300+</p>
                <p  className={aboutStyles.card_blue_text}>Morbi non</p>
            </div>
            <div className={aboutStyles.blue_card}>
                <p className={aboutStyles.card_num_blue}>150+</p>
                <p className={aboutStyles.card_white_text}>Lorem proin</p>
            </div>
        </div>
    );
};

export default Cards;
