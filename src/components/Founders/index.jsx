import React from 'react';
import foundersStyles from './Founders.module.scss'
import AboutStyles from './../../Styles/About.module.scss'
import {imgFounders11, imgFounders22, imgFounders33} from "../../images";
import FoundersCard from "./foundersCard";

const Founders = () => {
    return (
        <div className={foundersStyles.founders}>
            <div className='container'>
                <h2 className={AboutStyles.white_title}>Основатели</h2>
                <div className={`${foundersStyles.cards_container} {/*flex_between*/}`}>
                    <FoundersCard img={imgFounders11} name='Самидинова Файруза' position='Должность'/>
                    <FoundersCard img={imgFounders22} name='Самидинова Файруза' position='Должность'/>
                    <FoundersCard img={imgFounders33} name='Самидинова Файруза' position='Должность'/>
                </div>
            </div>
        </div>
    );
};

export default Founders;
