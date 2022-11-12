import React from 'react';
import foundersStyles from './Founders.module.scss'
import AboutStyles from './../../Styles/About.module.scss'
import { imgFounders1, imgFounders2, imgFounders3 } from "../../images";

const Founders = () => {
    return (
        <div className={foundersStyles.founders}>
            <div className='container1'>
                <h2 className={AboutStyles.white_title}>Основатели</h2>
                <div className={`${foundersStyles.cards_container} {/*flex_between*/}`}>
                    <img className={foundersStyles.img} src={imgFounders1} alt="/" />
                    <img className={foundersStyles.img} src={imgFounders2} alt="/" />
                    <img className={foundersStyles.img} src={imgFounders3} alt="/" />
                </div>
            </div>
        </div>
    );
};

export default Founders;
