import React from 'react';
import foundersStyles from "./Founders.module.scss";

const FoundersCard = ({img, name, position}) => {
    return (
        <div className={foundersStyles.img_cont}>
            <img src={img} alt="/"/>
            <div className={foundersStyles.text_cont}>
                <p className={foundersStyles.name_text}>{name}</p>
                <p className={foundersStyles.position_text_cont}>{position}</p>
            </div>
        </div>
    );
};

export default FoundersCard;
