import React from 'react';
import foundersStyles from "./Founders.module.scss";
import {founder_card_bg_img} from "../../images";

const FoundersCard = ({img, name}) => {
    return (
        <div className={foundersStyles.img_cont}>
            <img className={foundersStyles.img_bg} src={founder_card_bg_img} alt="/"/>
            <img className={foundersStyles.img_in} src={img} alt="/"/>
            <div className={foundersStyles.text_cont}>
                <p className={foundersStyles.name_text}>{name}</p>
            </div>
        </div>
    );
};

export default FoundersCard;
