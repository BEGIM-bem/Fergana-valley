import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from '../Styles/Contacts.module.scss'
import {
    contactsFon, contactInstagram,
    contactTelegram,
    contactFacbook,
    contactWatsapp,
} from '../images/index.js'
import './Map/Map.scss'
import Maps from './Map/defaultMarker';
import Footer from '../components/Footer';
import Address from './Address';
import Spinner from '../components/Actions/Spinner';
import Errors from '../components/Actions/Errors';




export default function Contacts() {
    const { status, LinkSocialNetwork } = useSelector(state => state.contacts)

    const { language } = useSelector(state => state.localization)

    const mondayd = `${language === 'russian' ? 'Понедельник' : ''}
                            ${language === 'kyrgyz' ? 'Дүйшөмбү' : ""}
                            ${language === "o'zbekcha" ? "Dushanba" : ''}`

    const tuesday = `${language === 'russian' ? 'Вторник' : ''}
                            ${language === 'kyrgyz' ? 'Шейшемби' : ""}
                            ${language === "o'zbekcha" ? "Seshanba" : ''}`

    const wednesday = `${language === 'russian' ? 'Среда' : ''}
                            ${language === 'kyrgyz' ? 'Шаршемби' : ""}
                            ${language === "o'zbekcha" ? "Chorshanba" : ''}`

    const thursday = `${language === 'russian' ? 'Четверг' : ''}
                            ${language === 'kyrgyz' ? 'Бейшемби' : ""}
                            ${language === "o'zbekcha" ? "Payshanba" : ''}`

    const friday = `${language === 'russian' ? 'Пятница' : ''}
                            ${language === 'kyrgyz' ? 'Жума' : ""}
                            ${language === "o'zbekcha" ? "Juma" : ''}`

    const saturday = `${language === 'russian' ? 'Суббота' : ''}
                            ${language === 'kyrgyz' ? 'Ишемби' : ""}
                            ${language === "o'zbekcha" ? "Shanba" : ''}`

    const sunday = `${language === 'russian' ? 'Воскресенье' : ''}
                            ${language === 'kyrgyz' ? 'Жекшемби' : ""}
                            ${language === "o'zbekcha" ? "Yakshanba" : ''}`
    const weekend = `${language === 'russian' ? 'Выходной' : ''}
                            ${language === 'kyrgyz' ? 'Эс алуу күнү' : ""}
                            ${language === "o'zbekcha" ? "Dam olish kuni" : ''}`

    let contactsWorkTime = [
        {
            id: 1,
            day: mondayd,
            time: '10:00 - 18.00'
        },
        {
            id: 2,
            day: tuesday,
            time: '10:00 - 18.00'
        },
        {
            id: 3,
            day: wednesday,
            time: '10:00 - 18.00'
        },
        {
            id: 4,
            day: thursday,
            time: '10:00 - 18.00'
        },
        {
            id: 5,
            day: friday,
            time: '10:00 - 18.00'
        },
        {
            id: 6,
            day: saturday,
            time: '10:00 - 18.00'
        },
        {
            id: 7,
            day: sunday,
            time: weekend
        },

    ]  //График работы




    let InstagramLink = LinkSocialNetwork[0]?.link
    let WatsapLink = LinkSocialNetwork[1]?.link
    let TelegramLink = LinkSocialNetwork[2]?.link
    let FacbookLink = LinkSocialNetwork[3]?.link


    return (

        <div>
            <div className={styles.banner}>
                <img src={contactsFon} alt='/' className={styles.banner_img} />
                <div className={styles.mainAllText} >
                    <h1 className={styles.mainTitle}>
                        {language === 'russian' && 'КОНТАКТЫ'}
                        {language === 'kyrgyz' && 'БАЙЛАНЫШТАР'}
                        {language === "o'zbekcha" && "ALOQALAR"}
                    </h1>

                    <p className={styles.mainText}>
                        {language === 'russian' && 'МЫ рады услышать вас по телефону, а также привествовать вас в нашем офисе.'}
                        {language === 'kyrgyz' && 'Биз сизди телефон аркылуу укканыбызга кубанычтабыз жана сизди кеңсебизде тосуп алабыз.'}
                        {language === "o'zbekcha" && "Sizni telefon orqali eshitishdan xursandmiz va sizni ofisimizga xush kelibsiz."}
                    </p>
                </div>
            </div>


            {status.getContactsStatus === 'Gettining contacts' && <Spinner />}
            {status.getContactsStatus === 'Rejected geted contacts' && <Errors />}

            <div className='containerFor'>

                <div className={styles.contanct}>

                    <div className={styles.schedule}>
                        <h1 className={styles.adress__title}>
                            {language === 'russian' && 'График работы:'}
                            {language === 'kyrgyz' && 'Иш графиги:'}
                            {language === "o'zbekcha" && "Ish grafigi:"}
                        </h1>
                        {
                            contactsWorkTime.map(item => (
                                <div className={styles.adressWork} key={item.id} >

                                    <div className={styles.adress__text}>
                                        <p className={styles.adress__text_number}>{item.day} </p>
                                    </div>

                                    <div className={styles.adress__time}>
                                        <p className={styles.adress__text_number}>{item.time} </p>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                    <Address />
                </div>

            </div>



            <div className='containerFor'>
                <h1 className={styles.link__title}>
                    {language === 'russian' && 'Связаться с нами через социальные сети'}
                    {language === 'kyrgyz' && 'Биз менен социалдык тармактар аркылуу байланышыңыз'}
                    {language === "o'zbekcha" && "Ijtimoiy tarmoqlar orqali biz bilan bog'laning"}</h1>

                <div className={styles.link__block}>
                    <div className={styles.link__blocks} >
                        <h1 className={styles.link__block_title}>

                            {language === 'russian' && "Подпишитесь на наш инстаграм и следите за нашими новостями."}
                            {language === 'kyrgyz' && "Биздин инстаграмга жазылыңыз жана жаңылыктарыбызды байкаңыз."}
                            {language === "o'zbekcha" && "Bizning instagramimizga obuna bo'ling va yangiliklarimizni kuzatib boring."}
                        </h1>
                        <p className={styles.link__block_text}>
                            {language === 'russian' && "(для перехода нажмите на иконку)"}
                            {language === 'kyrgyz' && "(баруу үчүн сөлөкөтүн чыкылдатыңыз)"}
                            {language === "o'zbekcha" && "  (o'tish uchun belgini bosing) "}

                        </p>
                    </div>

                    <a href={InstagramLink} target="_blank" rel="noreferrer" >
                        <img src={contactInstagram} alt='/' />
                    </a>
                </div>


                <div className={styles.link__block}>
                    <div className={styles.link__blocks} >
                        <h1 className={styles.link__block_title}>
                            {language === 'russian' && "Ищете себе единомышленников и бизнес консультантов? Подпишитесь и станьте частью нашего сообщества предпринимателей"}
                            {language === 'kyrgyz' && "Сиз пикирлеш адамдарды жана бизнес консультанттарды издеп жатасызбы? Катталыңыз жана биздин ишкерлер коомчулугубуздун мүчөсү болуңуз"}
                            {language === "o'zbekcha" && "Siz hamfikrlar va biznes maslahatchilarni qidiryapsizmi?Roʻyxatdan oʻting va tadbirkorlar hamjamiyatimizga aʼzo boʻling"}
                        </h1>
                        <p className={styles.link__block_text}>
                            {language === 'russian' && "(для перехода нажмите на иконку)"}
                            {language === 'kyrgyz' && "(баруу үчүн сөлөкөтүн чыкылдатыңыз)"}
                            {language === "o'zbekcha" && "  (o'tish uchun belgini bosing) "}
                        </p>
                    </div>

                    <a href={TelegramLink} target="_blank" rel="noreferrer" >
                        <img src={contactTelegram} alt='/' />
                    </a>
                </div>

                <div className={styles.link__block}>
                    <div className={styles.link__blocks} >
                        <h1 className={styles.link__block_title}>
                            {language === 'russian' && "Также следите за новостями и на нашей фейсбук странице"}
                            {language === 'kyrgyz' && "Ошондой эле биздин Facebook баракчабыздагы жаңылыктарга көз салыңыз"}
                            {language === "o'zbekcha" && "Shuningdek, yangiliklarni facebook sahifamiz orqali kuzatib boring"}
                        </h1>
                        <p className={styles.link__block_text}>
                            {language === 'russian' && "(для перехода нажмите на иконку)"}
                            {language === 'kyrgyz' && "(баруу үчүн сөлөкөтүн чыкылдатыңыз)"}
                            {language === "o'zbekcha" && "  (o'tish uchun belgini bosing) "}
                        </p>
                    </div>

                    <a href={FacbookLink} target="_blank" rel="noreferrer" >
                        <img src={contactFacbook} alt='/' />
                    </a>
                </div>

                <div className={styles.link__block}>
                    <div className={styles.link__blocks} >
                        <h1 className={styles.link__block_title}>
                            {language === 'russian' && "Если у вас будут вопросы, пишите нам в WhatsApp-e. Будем рады вашему звонку или сообщению."}
                            {language === 'kyrgyz' && "Суроолоруңуз болсо бизге whatsappтан жазыңыз. Чалуу же билдирүүңүздү чыдамсыздык менен күтөбүз."}
                            {language === "o'zbekcha" && "Savollaringiz bo'lsa whatsapp orqali bizga yozing. Sizning qo'ng'iroq yoki xabaringizni kutamiz."}
                        </h1>
                        <p className={styles.link__block_text}>
                            {language === 'russian' && "(для перехода нажмите на иконку)"}
                            {language === 'kyrgyz' && "(баруу үчүн сөлөкөтүн чыкылдатыңыз)"}
                            {language === "o'zbekcha" && "  (o'tish uchun belgini bosing) "}
                        </p>
                    </div>

                    <a href={WatsapLink} target="_blank" rel="noreferrer" >
                        <img src={contactWatsapp} alt='/' />
                    </a>
                </div>


            </div>
            <Maps />
            <Footer />
        </div>
    )

}




