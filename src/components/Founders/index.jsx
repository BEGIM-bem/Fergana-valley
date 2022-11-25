import React, {useEffect} from 'react';
import foundersStyles from './Founders.module.scss'
import AboutStyles from './../../Styles/About.module.scss'
import {imgF1, imgF2, imgF3, imgFounders11, imgFounders22, imgFounders33} from "../../images";
import FoundersCard from "./foundersCard";
import {useDispatch, useSelector} from "react-redux";
import {getFounders} from "../../api/user";

const Founders = () => {
    const {language} = useSelector(state => state.localization)
    const dispatch = useDispatch()
    const {founders} = useSelector(state => state.users)

    useEffect(()=>{
        dispatch(getFounders())
    },[])

    return (
        <div className={foundersStyles.founders}>
            <div className='container1'>
                <h2 className={AboutStyles.white_title}>
                    {language === 'russian' && 'Основатели'}
                    {language === 'kyrgyz' && "Уюштуруучулар"}
                    {language === "o'zbekcha" && "Ta'sischilar"}
                </h2>
                <div className={`${foundersStyles.cards_container} {/*flex_between*/}`}>
                    {founders. map(founder => <FoundersCard img={founder.image} name={founder.fullname}/>)}

                    {/*<FoundersCard img={imgF2} name='Самидинова Файруза' position='Должность'/>*/}
                    {/*<FoundersCard img={imgF3} name='Самидинова Файруза' position='Должность'/>*/}
                </div>
            </div>
        </div>
    );
};

export default Founders;
