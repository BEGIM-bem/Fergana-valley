import React from 'react'
import Navbar from "../components/Navbar";
import {aboutImagess, imgAbout, imgAbout2, imgAbout2banner, imgAbout3, imgAbout4} from "../images";
import mainStyles from "./../components/Slider/slider.module.css"
import aboutStyles from "./../Styles/About.module.scss"
import Cards from "../components/Cards";
import Footer from '../components/Footer/index.jsx'
import OurPartners from "../components/OurPartners";
import Founders from "../components/Founders";
import styles from "../Styles/Home.module.scss";
import {useSelector } from 'react-redux';


export default function About() {

    const lang = useSelector(state => state.localization.language)

    return (
        <div>
            <div className={aboutStyles.banner}>
                <img className={aboutStyles.banner_image}
                    src={imgAbout} alt="/"></img>
                    {lang == 'russian' && (
                        <p className={aboutStyles.mainTitle}>
                            Нет звука приятнее,<br/>
                            чем шёпот бессменных лидеров
                        </p>
                    )}
                    {lang == 'kyrgyz' && (
                        <p className={aboutStyles.mainTitle}>
                            Андан таттуу үн жок<br/>
                            туруктуу жетекчилердин шыбырына Караганда
                        </p>
                    )}
                    {lang == "o'zbekcha" && (
                        <p className={aboutStyles.mainTitle}>
                            Bundan shirin ovoz yo'q<br/>
                            doimiy rahbarlarning shivirlashidan ko'ra
                        </p>
                    )}
            </div>


            <div className="container">
                <div className={aboutStyles.desc_cont}>
                    <div style={{ marginRight: "10px" }} className={aboutStyles.text_container}>
                        <h2 className={aboutStyles.title}>
                            {lang === 'russian' && 'Кто мы?'}
                            {lang === 'kyrgyz' && 'Биз кимбиз?'}
                            {lang === "o'zbekcha" && "Biz kimmiz?"}
                        </h2>
                        {lang == 'russian' && (
                            <p className={aboutStyles.text}>

                                Общество с Ограниченной Ответственностью  «Академия Бизнеса Ферганской Долины» создано для развития, поддержки и продвижения предпринимательства в Ферганской Долине.<br/><br/>
                                Наша главная цель - помочь предпринимателям Ферганской Долины реализовать свои идеи и замыслы и достичь результата.
                                <br/><br/>
                                Основные направления<br/>
                                <ul>
                                    <li>Информирование</li>
                                    <li>Обучение</li>
                                    <li>Поддержка предпринимателей</li>
                                    <li>Нетворкинг</li>
                                </ul><br/>

                                Мы предоставляем ресурсы и услуги, необходимые для вывода бизнеса на новый уровень - локально и глобально.

                            </p>
                        )}
                        { lang == "o'zbekcha"&& (
                            <p className={aboutStyles.text}>
                                Farg‘ona vodiysida tadbirkorlikni rivojlantirish, qo‘llab-quvvatlash va rag‘batlantirish maqsadida “Farg‘ona vodiysi biznes akademiyasi” mas’uliyati cheklangan jamiyati tashkil etildi.
                                <br/><br/>
                                Farg‘ona vodiysi tadbirkorlariga o‘z g‘oya va rejalarini ro‘yobga chiqarish, natijaga erishishda ko‘maklashish asosiy maqsadimizdir.
                                <br/><br/>
                                Asosiy yo'nalishlar<br/>
                                <ul>
                                    <li>Axborot berish</li>
                                    <li>Ta'lim</li>
                                    <li>Tadbirkorlarni qo'llab-quvvatlash</li>
                                    <li>Tarmoqqa ulanish</li>
                                </ul>
                                <br/><br/>

                                Biz sizning biznesingizni keyingi bosqichga olib chiqishingiz uchun zarur bo'lgan resurslar va xizmatlarni taqdim etamiz - mahalliy va global.

                            </p>
                        )}
                        {lang == 'kyrgyz' && (
                            <p className={aboutStyles.text}>
                                Fergana Valley Business Academy жоопкерчилиги чектелген коому Фергана өрөөнүндө ишкерликти өнүктүрүү, колдоо жана өнүктүрүү максатында түзүлгөн.
                                <br/><br/>
                                Негизги максатыбыз – Фергана өрөөнүнүн ишкерлерине өз идеяларын, пландарын ишке ашырууга жана натыйжаларга жетишүүгө жардам берүү.
                                <br/><br/>
                                Негизги багыттары<br/>
                                <ul>
                                    <li>Маалымат берүү</li>
                                    <li>Билим берүү</li>
                                    <li>Ишкерлерди колдоо</li>
                                    <li>Networking</li>
                                </ul>
                                <br/><br/>

                                Биз сиздин бизнесиңизди кийинки деңгээлге чыгаруу үчүн керектүү ресурстарды жана кызматтарды сунуштайбыз - жергиликтүү жана глобалдык.
                                <br/><br/>

                            </p>
                        )}
                        <br />
                    </div>
                    <div className={styles.contents__imgBlock}>
                        <img src={aboutImagess} alt='/' className={styles.contents__img} />
                    </div>

                </div>
            </div>


            <div className={aboutStyles.second_section}>
                <div className="container">
                    <h2 className={aboutStyles.white_title}>
                        {lang === 'russian' && 'Fergana Valley Business Academy в Цифрах'}
                        {lang === 'kyrgyz' && 'Сандар боюнча Фергана өрөөнүнүн бизнес академиясы'}
                        {lang === "o'zbekcha" && 'Farg‘ona vodiysi biznes akademiyasi raqamlarda'}
                    </h2>
                    <Cards />
                </div>

            </div>
            <div className="container">
                <div className="flex_between">
                    <div className={styles.contents__imgBlock}>
                        <img src={aboutImagess} alt='/' style={{boxShadow: '-15px 16px 2px -5px #1959ab', marginTop: '30px'}} className={styles.contents__img} />
                    </div>
                    <div style={{ marginLeft: "10px" }} className={aboutStyles.text_container}>
                        {lang == 'russian' && (
                            <p className={aboutStyles.text}>
                                Предоставьте своему бизнесу конкурентное преимущество, убедившись, что у вас есть знания бизнес управления, финансирования, экспорта и нетворкинга!
                                <br/><br/>
                                У нас есть профессионалы из Узбекистана, Кыргызстана и ЕС, которые работают вместе, чтобы адаптировать проверенные методы ведения бизнеса к местной аудитории и создать прочную инфраструктуру экспертов, специалистов и тренеров.
                                <br/><br/>
                                Мы помогаем оценить сильные и слабые стороны организации и его сотрудников, а также в разработке своей стратегии , которая позволит вашей компании использовать существующие ресурсы и найти новые пути к доступу к финансам, рынкам, человеческим и другим ресурсам, которых может не хватать.

                            </p>
                        )}
                        {lang == 'kyrgyz' && (
                            <p className={aboutStyles.text}>
                                Бизнести башкаруу, каржылоо, экспорттоо жана тармактарды түзүү боюнча билимиңиз бар экенине ынануу менен бизнесиңизге атаандаштык артыкчылык бериңиз!
                                <br/><br/>
                                Бизде Өзбекстандын, Кыргызстандын жана ЕБнин профессионалдары бар, алар бизнестин далилденген тажрыйбаларын жергиликтүү аудиторияга ыңгайлаштыруу жана эксперттердин, адистердин жана тренерлердин бекем инфраструктурасын түзүү үчүн биргелешип иштешет.
                                <br/><br/>
                                Биз уюмдун жана анын адамдарынын күчтүү жана алсыз жактарын баалоого, ошондой эле стратегияңызды иштеп чыгууга жардам беребиз, бул сиздин компанияңызга болгон ресурстарды колдонууга жана жетишпеген каржыга, рынокко, адамдык жана башка ресурстарга жетүүнүн жаңы жолдорун табууга мүмкүндүк берет.

                            </p>
                        )}
                        {lang == "o'zbekcha" && (
                            <p className={aboutStyles.text}>
                                Biznesni boshqarish, moliyalashtirish, eksport qilish va tarmoq yaratish bo'yicha bilimga ega ekanligingizga ishonch hosil qilib, biznesingizga raqobatdosh ustunlikni bering!
                                <br/><br/>
                                Bizda O‘zbekiston, Qirg‘iziston va Yevropa Ittifoqidan kelgan professionallar ishbilarmonlik amaliyotini mahalliy auditoriyaga moslashtirish va ekspertlar, mutaxassislar va trenerlarning mustahkam infratuzilmasini yaratish uchun birgalikda ishlamoqda.
                                <br/><br/>
                                Biz tashkilot va uning xodimlarining kuchli va zaif tomonlarini baholashga yordam beramiz, shuningdek, sizning kompaniyangizga mavjud resurslardan foydalanish va etishmayotgan moliya, bozorlar, inson va boshqa resurslarga kirishning yangi usullarini topish imkonini beradigan strategiyangizni ishlab chiqishga yordam beramiz.
<br/>

                            </p>
                        )}
                        <br />
                        {/*<p className={aboutStyles.text}>Таким образом, социально-экономическое развитие требует определения и уточнения новых предложений. Значимость этих проблем настолько очевидна, что высокое качество позиционных исследований требует определения и уточнения поставленных обществом задач.</p>*/}
                    </div>
                </div>
            </div>
            <div className="container">
                <div style={{ marginTop: "20px" }} className={aboutStyles.desc_cont}>
                    <div style={{ marginRight: "10px" }} className={aboutStyles.text_container}>
                        <h2 className={aboutStyles.title}>
                        </h2>

                        {lang == 'russian' && (
                            <p className={aboutStyles.text}>
                                <span style={{fontWeight: "bold"}}>Ожидаемые результаты –</span>
                                увеличение числа<br/>
                                <ul>
                                    <li>успешных запусков бизнеса,</li>
                                    <li>устойчивых и развивающихся компаний,</li>
                                    <li>созданных рабочих мест,</li>
                                    <li>повышение квалификации местных экспертов и специалистов (бизнес консультанты, фрилансеры, и др)</li>
                                </ul>
                                <br/><br/>

                                Академия планирует <span style={{fontWeight: "bold"}}>достичь поставленных целей через:</span> <br/>
                                <ul>
                                    <li>создание сообщества предпринимателей</li>
                                    <li>повышение качества бизнес-консультаций для ММСП и стартапов;</li>
                                    <li>стимулирование нетворкинга между предпринимателями и специалистами Ферганской долины</li>
                                </ul>
                                <br/>
                                <span style={{fontWeight: "bold"}}>Кому мы помогаем?</span>
                                <ul>
                                    <li>эксперты и специалисты своего дела</li>
                                    <li>потенциальные предприниматели</li>
                                    <li>предприниматели (ММСП, консультанты, фрилансеры, и др)</li>
                                    <li>бизнес ассоциации, бизнес сообщества и кооперативы</li>
                                </ul>
                            </p>
                        )}
                        {lang == 'kyrgyz' && (
                            <p className={aboutStyles.text}>
                                <span style={{fontWeight: "bold"}}>Күтүлгөн натыйжалар -</span>
                                санын көбөйтүү<br/>
                                <ul>
                                    <li>ийгиликтүү бизнес ачуу</li>
                                    <li>туруктуу жана өсүп жаткан компаниялар,</li>
                                    <li>түзүлгөн жумуш орундары,</li>
                                    <li>жергиликтүү эксперттердин жана адистердин квалификациясын жогорулатуу (бизнес консультанттар, фрилансерлер ж.б.)
                                    </li>
                                </ul>
                                <br/><br/>

                                Академия <span style={{fontWeight: "bold"}}>төмөнкү максаттарга жетишүүнү пландаштырууда:</span> <br/>
                                <ul>
                                    <li>ишкерлер коомун түзүү</li>
                                    <li>чакан жана орто бизнести баштагандар үчүн кеңеш берүүнүн сапатын жогорулатуу;</li>
                                    <li>Фергана өрөөнүнүн ишкерлери менен адистеринин ортосундагы байланышты стимулдаштыруу</li>
                                </ul><br/>

                                <span style={{fontWeight: "bold"}}>Биз кимге жардам берип жатабыз?</span>
                                <ul>
                                    <li>эксперттер жана өз тармагындагы эксперттер</li>
                                    <li>потенциалдуу ишкерлер</li>
                                    <li>ишкерлер (МКК, консультанттар, фрилансерлер ж.б.)</li>
                                    <li>чарбалык бирикмелер, чарбалык коомдор жана кооперативдер</li>
                                </ul>
                            </p>
                        )}
                        {lang == "o'zbekcha" && (
                            <p className={aboutStyles.text}>
                                <span style={{fontWeight: "bold"}}>Kutilgan natijalar - </span>sonining ortishi
                                <ul>
                                    <li>muvaffaqiyatli biznesni boshlash</li>
                                    <li>barqaror va rivojlanayotgan kompaniyalar,</li>
                                    <li>yaratilgan ish o'rinlari,</li>
                                    <li> mahalliy ekspertlar va mutaxassislarning malakasini oshirish (biznes maslahatchilar, frilanserlar va boshqalar).
                                    </li>
                                </ul>
                                <br/><br/>

                                Akademiya  <span style={{fontWeight: "bold"}}>o'z maqsadlariga erishishni rejalashtirmoqda:</span><br/>
                                <ul>
                                    <li>tadbirkorlar hamjamiyatini yaratish</li>
                                    <li>kichik va o'rta va kichik biznes sub'ektlari uchun maslahatlar sifatini oshirish;</li>
                                    <li>Farg'ona vodiysi tadbirkorlari va mutaxassislari o'rtasida aloqalarni rag'batlantirish</li>
                                </ul>
                                <br/>
                                <span style={{fontWeight: "bold"}}>Biz kimga yordam beramiz?</span>
                                <ul>
                                    <li>o'z sohasi bo'yicha mutaxassislar va mutaxassislar</li>
                                    <li>potentsial tadbirkorlar</li>
                                    <li>tadbirkorlar (MKH, maslahatchilar, frilanserlar va boshqalar)</li>
                                    <li>xo'jalik birlashmalari, biznes hamjamiyatlari va kooperativlar</li>
                                </ul>
                            </p>
                        )}
                        <br />
                    </div>
                    <div className={styles.contents__imgBlock}>
                        <img src={aboutImagess} alt='/' className={styles.contents__img} />
                    </div>
                </div>
            </div>
            <Founders />
            <OurPartners />
            <Footer />
        </div>
    )
}
