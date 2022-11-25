import React from 'react';
import styles from '../Styles/Contacts.module.scss'
import { useDispatch, useSelector } from 'react-redux';


export default function Address() {

    const { status, error, contacts } = useSelector(state => state.contacts)
    const {language} = useSelector(state => state.localization)

    return (
        <div className={styles.adress}>
            <h1 className={styles.adress__title}>
                {language === 'russian' && 'Наш адрес:'}
                {language === 'kyrgyz' && 'Биздин дарек:'}
                {language === "o'zbekcha" && "Bizning manzil:"}
            </h1>
            {
                contacts.map(item => (
                    <div className={styles.adress__text} key={item.id} >
                        <p className={styles.adress__text_number}>
                            {language === 'russian' && item?.street_ru}
                            {language === 'kyrgyz' && item?.street_kg}
                            {language === "o'zbekcha" && item?.street_uz}
                        </p>
                        <p className={styles.adress__text_number}>
                            {language === 'russian' && item?.city_country_ru}
                            {language === 'kyrgyz' && item?.city_country_kg}
                            {language === "o'zbekcha" && item?.city_country_uz}
                        </p>
                        <p className={styles.adress__text_number}>Эл.почта: {item.email} </p>
                        <p className={styles.adress__text_number}>Тел: {item.phone_number} </p>
                    </div>
                ))
            }
        </div>
    )
}
