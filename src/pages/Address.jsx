import React from 'react';
import styles from '../Styles/Contacts.module.scss'
import { useDispatch, useSelector } from 'react-redux';


export default function Address() {

    const { status, error, contacts } = useSelector(state => state.contacts)


    return (
        <div className={styles.adress}>
            <h1 className={styles.adress__title}>Наш адрес:</h1>
            {
                contacts.map(item => (
                    <div className={styles.adress__text} key={item.id} >
                        <p className={styles.adress__text_number}>{item.street_ru} </p>
                        <p className={styles.adress__text_number}>{item.city_country_ru} </p>
                        <p className={styles.adress__text_number}>Эл.почта: {item.email} </p>
                        <p className={styles.adress__text_number}>Тел: {item.phone_number} </p>

                    </div>
                ))
            }
        </div>
    )
}
