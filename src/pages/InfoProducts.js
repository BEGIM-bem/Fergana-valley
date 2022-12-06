import {
    bis1,
    bis2,
    bis3,
    bis4,

    fin1,
    fin2,
    fin3,
    fin4,
    events1,
    events2,
    events3,
    events4,

    // bis1,
    ex1,
    ex2, ex3,
    ex4, ex5,
} from '../imagesProduct/index.js'
import {
    mainAboutImg,
    blokMain1,
    blokMain2,
    blockMain3,
    blockMain4,
    adaptivProductImg,
    aboutImagess,
    imgAbout2
} from '../images/index.js'

import Main1 from '../imagesProduct/Бизнес  Управление карточка OZ.svg'
import Main2 from '../imagesProduct/Мероприятие карточкаOZ.svg'
import Main3 from '../imagesProduct/Финансирование карточка OZ.svg'
import Main4 from '../imagesProduct/Экпорт карточка OZ.svg'

import kg1 from '../imagesProduct/Бизнес  Управление карточкаKG.svg'
import kg2 from '../imagesProduct/Мероприятие карточкаKG.svg'
import kg3 from '../imagesProduct/Финансирование карточкаKG.svg'
import kg4 from '../imagesProduct/Экпорт карточкаKG.svg'

import ad1 from '../imagesProduct/Бизнес  Управление карточкаAdRus1.svg'
import ad2 from '../imagesProduct/Финансирование карточкаAdRus2.svg'
import ad3 from '../imagesProduct/Экпорт карточкаAdRus3.svg'
import ad4 from '../imagesProduct/Мероприятие карточкаAdRus4.svg'
import iconProduct1 from '../imagesProduct/ruIcon1.svg'
import iconProduct2 from '../imagesProduct/runIcon2.svg'
import textProduct1 from '../imagesProduct/ruText2.svg'
import textProduct2 from '../imagesProduct/runText2.svg'

import textExport from '../imagesProduct/exsportText.svg'
import iconExport from '../imagesProduct/Iconexport.svg'

import textEvent from '../imagesProduct/eventYext.svg'
import iconEvent from '../imagesProduct/eventIcon.svg'


import text1 from '../imagesProduct/exKg1.svg'
import text2 from '../imagesProduct/exKG2.svg'
import text3 from '../imagesProduct/exKG3.svg'
import text4 from '../imagesProduct/exKG4.svg'

import fin31 from '../imagesProduct/wallet-money.svg'

import textOZ1 from '../imagesProduct/eventOZ1.svg'
import textOZ2 from '../imagesProduct/eventOZ2.svg'
import textOZ3 from '../imagesProduct/eventOZ3.svg'
import textOZ4 from '../imagesProduct/eventOZ4.svg'

// Главная страница Продукты и Услиги 
export let sliderImageProductRus = [
    {
        id: 1,
        icon: blokMain1,
    },
    {
        id: 2,
        icon: blokMain2,
    },
    {
        id: 3,
        icon: blockMain3,
    },
    {
        id: 4,
        icon: blockMain4,
    },

]

export let sliderImageProductOZ = [
    {
        id: 1,
        icon: Main1,
    },
    {
        id: 2,
        icon: Main2,
    },
    {
        id: 3,
        icon: Main3,
    },
    {
        id: 4,
        icon: Main4,
    },

]

export let sliderImageProductKG = [
    {
        id: 1,
        icon: kg1,
    },
    {
        id: 2,
        icon: kg2,
    },
    {
        id: 3,
        icon: kg3,
    },
    {
        id: 4,
        icon: kg4,
    },

]

// Главная Страница Продукты и Услуги Мобилька

export let sliderADImageProductRU = [
    {
        id: 1,
        icon: iconProduct1,
        text: textProduct1
    },
    {
        id: 2,
        icon: iconProduct2,
        text: textProduct2
    },
    {
        id: 3,
        icon: iconExport,
        text: textExport
    },
    {
        id: 4,
        icon: iconEvent,
        text: textEvent
    },

]

export let sliderADImageProductKG = [
    {
        id: 1,
        icon: iconProduct1,
        text: text1
    },
    {
        id: 2,
        icon: iconProduct2,
        text: text2
    },
    {
        id: 3,
        icon: iconExport,
        text: text3
    },
    {
        id: 4,
        icon: iconEvent,
        text: text4
    },

]

export let sliderADImageProductOZ = [
    {
        id: 1,
        icon: iconProduct1,
        text: textOZ1
    },
    {
        id: 2,
        icon: iconProduct2,
        text: textOZ1
    },
    {
        id: 3,
        icon: iconExport,
        text: textOZ1
    },
    {
        id: 4,
        icon: iconEvent,
        text: textOZ1
    },

]


//Бизнес Управление
export let RusBusness = [
    {
        id: 1,
        icon: bis1,
        title: 'Бизнес Консультация',
        text: "Хотите запустить свой бизнес? Не знаете как сделать анализ рынка и целевой аудитории? Хотите увеличить продажи? Нужна помощь с масштабированием, созданием команды, маркетингом?",
        br: 'Нажмите кнопку внизу для получения подробной информации.'

    },
    {
        id: 2,
        icon: bis2,
        title: 'Бизнес-тренинги, Мастер Классы и Семинары:',
        text: " Вы ищете возможности для развития компании? Хотите новые решение? Мы предлагаем вам мастер классы, семинары, тренинги и курсы на темы бизнес управления, финансирования, экспорта и энерго-эффективности.",
        br: 'Нажмите кнопку внизу для получения подробной информации.'

    },
    {
        id: 3,
        icon: bis3,
        title: 'Сообщество',
        text: "Вам не хватает поддержки и понимания? Ищете единомышленников для генерации новых идей и решений? Нужен обмен опытом и информацией? Наша компания предлагает вам стать частью нашего сообщества предпринимателей, созданная нами для предпринимателей для поддержки и обмена опытом и информацией.",
        br: "Нажмите кнопку внизу для получения подробной информации."

    },
    {
        id: 4,
        icon: bis4,
        title: 'Бизнес Лагеря',
        text: "Возраст от 18 до 30 лет — это период, полный энтузиазма, чтобы что-то сделать. Bootcamp — это одна из лучших возможностей не только для семинаров и направлений, но и для ежедневного общения с целеустремленными людьми. По итогам бизнес-лагерей предпринимателей учатся как начать свой бизнес, как делать маркетинг и оценивать свои ресурсы.",
        br: 'Нажмите кнопку внизу для получения подробной информации.'
    }
]

export let KGBusness = [
    {
        id: 1,
        icon: bis1,
        title: 'Бизнес-Консультация',
        text: "Бизнесиңизди ачкыңыз келеби? Базарды жана максаттуу аудиторияны кантип талдоону билбей жатасызбы? Сиз сатууну көбөйтүүнү каалайсызбы? Масштабдоо, команда куруу, маркетинг боюнча жардам керекпи?",
        br: 'Чоо-жайын билүү үчүн төмөнкү баскычты басыңыз.'

    },
    {
        id: 2,
        icon: bis2,
        title: ' Бизнес тренингдер, мастер-класстар жана семинарлар:',
        text: "Сиз компанияңызды өнүктүрүү үчүн мүмкүнчүлүктөрдү издеп жатасызбы? Жаңы чечимдерди каалайсызбы? Биз сиздерге бизнести башкаруу, каржылоо, экспорт жана энергияны үнөмдөө боюнча мастер-класстарды, семинарларды, тренингдерди жана курстарды сунуштайбыз.",
        br: 'Чоо-жайын билүү үчүн төмөнкү баскычты басыңыз'

    },
    {
        id: 3,
        icon: bis3,
        title: 'Коомчулук',
        text: "Сизге колдоо жана түшүнүү жетишпей жатабы? Жаңы идеяларды жана чечимдерди чыгаруу үчүн пикирлеш адамдарды издеп жатасызбы?Тажрыйба жана маалымат алмашуу керекпи? Биздин компания сизди ишкерлерди колдоо жана тажрыйба жана маалымат алмашуу үчүн түзүлгөн биздин ишкерлер коомчулугубуздун бир бөлүгү болууга чакырат.",
        br: 'Чоо-жайын билүү үчүн төмөнкү баскычты басыңыз.'
    },
    {
        id: 4,
        icon: bis4,
        title: 'Бизнес лагерлери',
        text: "18 жаштан 30 жашка чейинки курак бир нерсеге шыктанууга толгон мезгил. Bootcamp – бул семинарлар жана рефералдар үчүн гана эмес, ошондой эле мотивацияланган адамдар менен күнүмдүк баарлашуу үчүн эң мыкты мүмкүнчүлүктөрдүн бири. Бизнес лагерлердин жыйынтыгында ишкерлер өз бизнесин кантип баштоону, маркетингди кантип жүргүзүүнү жана ресурстарын баалоону үйрөнүшөт.",
        br: 'Чоо-жайын билүү үчүн төмөнкү баскычты басыңыз.'
    }
]

export let OZBusness = [
    {
        id: 1,
        icon: bis1,
        title: 'Biznes konsalting',
        text: "O'z biznesingizni yo'lga qo'ymoqchimisiz? Bozor va maqsadli auditoriyani qanday tahlil qilishni bilmayapsizmi? Savdoni oshirishni xohlaysizmi? Scaling, team building, marketing bo'yicha yordam kerakmi?",
        br: 'Tafsilotlar uchun quyidagi tugmani bosing.'

    },
    {
        id: 2,
        icon: bis2,
        title: 'Biznes treninglar Mahorat darslari va seminarlar',
        text: "Kompaniyangizni rivojlantirish imkoniyatlarini qidiryapsizmi? Yangi yechimlarni xohlaysizmi? Sizga biznesni boshqarish, moliyalashtirish, eksport va energiya samaradorligi mavzularida mahorat darslari, seminarlar, treninglar va kurslarni taklif etamiz.",
        br: 'Tafsilotlar uchun quyidagi tugmani bosing.'

    },
    {
        id: 3,
        icon: bis3,
        title: 'Jamiyat',
        text: "Sizga qo'llab-quvvatlash va tushunish etishmayaptimi? Yangi g'oyalar va echimlarni ishlab chiqarish uchun hamfikr odamlarni qidiryapsizmi? Tajriba va ma'lumot almashish kerakmi? Kompaniyamiz sizni tadbirkorlarni qo'llab-quvvatlash va tajriba va ma'lumot almashish uchun biz yaratgan tadbirkorlar hamjamiyatining bir qismi bo'lishga taklif qiladi.",
        br: 'Tafsilotlar uchun quyidagi tugmani bosing.'

    },
    {
        id: 4,
        icon: bis4,
        title: 'Biznes lagerlari',
        text: "18 yoshdan 30 yoshgacha - bu biror narsa qilishga ishtiyoq bilan to'la davr. Bootcamp nafaqat seminarlar va tavsiyalar uchun, balki g'ayratli odamlar bilan kundalik muloqot qilish uchun ham eng yaxshi imkoniyatlardan biridir. Biznes-lagerlar natijasida tadbirkorlar o‘z biznesini yo‘lga qo‘yish, marketing bilan shug‘ullanish va resurslarini baholashni o‘rganmoqda.",
        br: 'Tafsilotlar uchun quyidagi tugmani bosing.'
    }
]

// Финансирование
export let RusFinans = [
    {
        id: 1,
        icon: fin1,
        title: 'База Данных',
        text: "Не знаете где найти финансирование? Хотите получить список организаций, проектов и инвесторов, которые дают инвестиции и гранты для бизнеса? Нужен список тренеров и  консультантов по предпринимательству, доступу к финансам, мягким навыкам и образованием команд. У нас есть база данных, которая облегчит вам жизнь.",
        br: 'Нажмите кнопку внизу для получения подробной информации.'

    },
    {
        id: 2,
        icon: fin2,
        title: 'Финансовая Консультация',
        text: "Не знаете, где и как найти деньги для финансирования бизнеса? Нужна помощь с бизнес планом или инвестиционным проектом? Хотите найти новые решения проблем в бизнесе? Наши консультанты предоставят вам финансовую консультацию.",
        br: 'Нажмите кнопку внизу для получения подробной информации.'

    },
    {
        id: 3,
        icon: fin3,
        title: 'Курсы финансовой грамотности',
        text: "Хотите научиться планировать свои доходы и расходы? Не знаете как составлять план для достижения финансовой цели? Нужна информация про финансовые продукты? Хотите узнать как распознать мошенников и противостоять им? Хотите научиться копить и увеличивать свои деньги? Но е знаете как?",
        br: ' Нажмите кнопку внизу для получения подробной информации.'

    },
    {
        id: 10,
        icon: fin4, // Фотку
        title: 'Финансовый менеджмент',
        text: "Не знаете куда уходят деньги и как сократить расходы? Нужна помощь с управлением денежными средствами в бизнесе? Хотите внедрить бухгалтерский и финансовый учет?",
        br: ' Нажмите кнопку внизу для получения подробной информации.'

    },
    {
        id: 4,
        icon: fin31,
        title: 'Как найти деньги для бизнеса',
        text: "Начали поиски денежных средств для запуска бизнеса или масштабирования бизнеса? Не знаете куда и как подавать? Не знаете как оформить документы? Нужна помощь с написанием бизнес плана или инвестиционного проекта? Наши финансовые консультанты предоставят вам поддержку в виде консультаций, наставничества и сопровождения.",
        br: ' Нажмите кнопку внизу для получения подробной информации'
    }
]

export let KGFinans = [
    {
        id: 1,
        icon: fin1,
        title: 'Маалыматтар базасы',
        text: "Каржылоону кайдан табаарын билбей жатасызбы? Бизнеске инвестиция жана грант берген уюмдардын, долбоорлордун жана инвесторлордун тизмесин алгыңыз келеби? Ишкердик, финансыга жетүү, жумшак көндүмдөр жана команда куруу боюнча машыктыруучулардын жана консультанттардын тизмеси керек. Бизде сиздин жашооңузду жеңилдете турган маалымат базасы бар",
        br: "Чоо-жайын билүү үчүн төмөнкү баскычты басыңыз."

    },
    {
        id: 2,
        icon: fin2,
        title: 'Финансылык кеңеш',
        text: "Бизнесиңизди каржылоо үчүн акчаны кайдан жана кантип тапса болорун билбей жатасызбы? Бизнес-план же инвестициялык долбоор боюнча жардам керекпи? Бизнес көйгөйлөрүнө жаңы чечимдерди тапкыңыз келеби? Биздин консультанттар сизге финансылык кеңеш беришет.",
        br: "Чоо-жайын билүү үчүн төмөнкү баскычты басыңыз."

    },
    {
        id: 3,
        icon: fin3,
        title: 'Финансылык сабаттуулук курстары.',
        text: "Кирешеңизди жана чыгашаңызды пландаштырууну үйрөнгүңүз келеби? Каржылык максатыңызга жетүү үчүн кантип план түзүүнү билбей жатасызбы? Каржылык продуктулар жөнүндө маалымат керекпи? Сиз алдамчыларды кантип таанып, аларга каршы турууну үйрөнгүңүз келеби? Акчаңызды кантип үнөмдөөнү жана көбөйтүүнү үйрөнгүңүз келеби? Бирок кантип билесизби?",
        br: "Чоо-жайын билүү үчүн төмөнкү баскычты басыңыз."

    },
    {
        id: 10,
        icon: fin4, // Фотку
        title: 'Финансылык сабаттуулук курстары.',
        text: "Акча кайда кетип жатканын жана чыгымдарды кантип кыскартууну билбей жатасызбы? Бизнес акчаңызды башкарууга жардам керекпи? Бухгалтердик эсепти жана финансылык эсепти ишке ашырууну каалайсызбы?",
        br: "Чоо-жайын билүү үчүн төмөнкү баскычты басыңыз."

    },
    {
        id: 4,
        icon: fin31,
        title: 'Бизнеске акчаны кантип тапса болот',
        text: "Сиз бизнес баштоо үчүн же бизнести масштабдоо үчүн каражат издеп баштадыңызбы? Каякка же кантип тапшырууну билбей жатасызбы? Документтерди кантип тапшырууну билбей жатасызбы? Бизнес-план же инвестициялык долбоорду жазууга жардам керекпи? Биздин финансылык кеңешчилерибиз сизге кеңеш, насаатчылык жана колдоо түрүндө колдоо көрсөтөт.",
        br: "Чоо-жайын билүү үчүн төмөнкү баскычты басыңыз."
    }
]

export let OZFinans = [
    {
        id: 1,
        icon: fin1,
        title: 'Malumotlar bazasi',
        text: "Moliyani qayerdan topishni bilmayapsizmi? Biznes uchun investitsiyalar va grantlar taqdim etuvchi tashkilotlar, loyihalar va investorlar roʻyxatini olishni xohlaysizmi? Tadbirkorlik, moliyadan foydalanish, yumshoq ko'nikmalar va jamoani shakllantirish bo'yicha murabbiylar va maslahatchilar ro'yxati kerak. Bizda hayotingizni osonlashtiradigan ma'lumotlar bazasi mavjud.",
        br: "Choo-zhayyn biluuchun tömonku baskychty basynyz."

    },
    {
        id: 2,
        icon: fin2,
        title: 'Moliyaviy maslahat',
        text: "Biznesingizni moliyalashtirish uchun pulni qayerdan va qanday topishni bilmayapsizmi? Biznes-reja yoki investitsiya loyihasida yordam kerakmi? Biznes muammolariga yangi yechimlar topmoqchimisiz? Bizning maslahatchilarimiz sizga moliyaviy maslahatlar beradi.",
        br: "Choo-zhayyn biluuchun tömonku baskychty basynyz."

    },
    {
        id: 3,
        icon: fin3,
        title: 'Financeslyk sabattuuluk kurslari.',
        text: 'Pul qayerga ketayotganini va xarajatlarni qanday kamaytirishni bilmayapsizmi? Biznes pulingizni boshqarishda yordam kerakmi? Buxgalteriya hisobi va moliyaviy hisobni amalga oshirishni xohlaysizmi?',
        br: "Choo-zhayyn biluuchun tömonku baskychty basynyz."

    },
    {
        id: 10,
        icon: fin4, // Фотку
        title: 'Moliyaviy menejment',
        text: "Pul qayerga ketayotganini va xarajatlarni qanday kamaytirishni bilmayapsizmi? Biznes pulingizni boshqarishda yordam kerakmi? Buxgalteriya hisobi va moliyaviy hisobni amalga oshirishni xohlaysizmi?",
        br: 'Choo-zhayyn biluuchun tömonku baskychty basynyz.'

    },
    {
        id: 4,
        icon: fin31,
        title: 'Biznes uchun pulni qanday topish mumkin',
        text: "Biznes boshlash yoki biznesni kengaytirish uchun mablag' izlashni boshladingizmi? Qaerga yoki qanday murojaat qilishni bilmayapsizmi? Hujjatlarni qanday topshirishni bilmayapsizmi? Biznes-reja yoki investitsiya loyihasini yozishda yordam kerakmi? Bizning moliyaviy maslahatchilarimiz sizga maslahat, maslahat va qo'llab-quvvatlash shaklida yordam beradi.",
        br: "Choo-zhayyn biluuchun tömonku baskychty basynyz."
    }
]

//Экспорт
export let RusExport = [
    {
        id: 1,
        icon: ex1,
        title: 'Подготовка к экспорту',
        text: "Настал момент поиска новых рынков вне Кыргызстана? Не знаете какие страны подходят для экспорта вашего продукта? Не знаете с чего начать? Наша команда вам с этим поможет.",
        br: 'Нажмите кнопку внизу для получения подробной информации.'

    },
    {
        id: 2,
        icon: ex2,
        title: 'Отдел Продаж',
        text: 'Понимаете, что уже пора выходить на экспорт, но не знаете языка? Не знаете как держать связь с иностранными компаниями? Хотите быть более профессиональными в продажах с зарубежными компаниями? Наш отдел продаж был создан, чтобы представлять интересы компаний в Кыргызстане и Узбекистане в странах СНГ, ЕС, США  и др.',
        br: 'Нажмите кнопку внизу для получения подробной информации.'

    },
    {
        id: 3,
        icon: ex3,
        title: 'Сертификация',
        text: 'Настал момент выходить на зарубежные рынки, но нужен сертификат? Не знаете какой подходит или где и как можно приобрести? Нужна помощь с подачей на получение сертификата для вашей компании и ваших товаров? Наша Академия к вашим услугам.',
        br: ' Нажмите кнопку внизу для получения подробной информации.'

    },
    {
        id: 4,
        icon: bis1,
        title: 'Юридическое Сопровождение',
        text: 'Для экспорта нужно слишком документов? Запутались как и когда они нужны? Ищете нужного юриста, но не можете найти? Слишком требований от обоих (или же несколько) государств? Наша компания предлагает вам юридическое сопровождение при экспорте.',
        br: ' Нажмите кнопку внизу для получения подробной информации'
    },
    {
        id: 5,
        icon: ex4,
        title: 'Курсы финансовой грамотности',
        text: "Начали готовиться к экспорту, но нет опыта работы с таежной системой? Отсутствие информации также мешает? Не знаете и к кому идти для консультации и помощи? Приходите в ОсОО Бизнес Академия Ферганской Долины. Мы вам поможем.",

        br: ' Нажмите кнопку внизу для получения подробной информации.'

    },
    {
        id: 5,
        icon: ex5,
        title: 'Как найти деньги для бизнеса',
        text: "Начали поиски денежных средств для запуска бизнеса или масштабирования бизнеса? Не знаете куда и как подавать? Не знаете как оформить документы? Нужна помощь с написанием бизнес плана или инвестиционного проекта? Наши финансовые консультанты предоставят вам поддержку в виде консультаций, наставничества и сопровождения.",
        br: ' Нажмите кнопку внизу для получения подробной информации'
    }
]


export let KGExport = [
    {
        id: 1,
        icon: ex1,
        title: 'Экспортко даярданууда',
        text: "Кыргызстандан тышкары жаңы рынокторду издөөгө убакыт келдиби? Сиздин продуктуну экспорттоо үчүн кайсы өлкөлөр ылайыктуу экенин билбейсизби? Эмнеден баштоону билбей жатасызбы? Биздин команда сизге бул жагынан жардам берет.",
        br: 'Чоо-жайын билүү үчүн төмөнкү баскычты басыңыз.'

    },
    {
        id: 2,
        icon: ex2,
        title: 'Сатуу белуму',
        text: 'Экспортко чыга турган учур келди, бирок тил билбегениңизди түшүндүңүзбү? Кантип байланышты билбейм чет өлкөлүк компаниялар менен? Чет өлкөлүк компаниялар менен сатууда профессионалдуу болгуңуз келеби? Биздин сатуу бөлүмү КМШ өлкөлөрүндө, ЕБде, АКШда ж.б. Кыргызстандагы жана Өзбекстандагы компаниялардын кызыкчылыктарын коргоо үчүн түзүлгөн.',
        br: 'Чоо-жайын билүү үчүн төмөнкү баскычты басыңыз.'

    },
    {
        id: 3,
        icon: ex3,
        title: 'Сертификациялоо',
        text: 'Тышкы рынокко чыгууга убакыт келди, бирок сертификат керекпи? Кайсысы ылайыктуу экенин же кайдан жана кантип сатып алууну билбей жатасызбы? Сиздин компанияңызга жана өнүмдөрүңүзгө сертификат алууда жардам керекпи? Биздин академия сиздердин кызматыңызда.',
        br: 'Чоо-жайын билүү үчүн төмөнкү баскычты басыңыз.'

    },
    {
        id: 4,
        icon: bis1,
        title: 'Экспорт боюнча кеңеш',
        text: 'Товарларды экспорттоо мезгили келгенин түшүндүңбү, бирок эмнеден баштоо жана кандай тартипте кирүүнү билбей жатасызбы? Компанияңызды өнүгүүнүн жаны этабына кантип даярдоону билбей жатасызбы? Бизге келининиз жана биздин консультант сизге бул маселелелерди чечууго жардам берет.',
        br: 'Чоо-жайын билүү үчүн төмөнкү баскычты басыңыз.'
    },
    {
        id: 5,
        icon: ex4,
        title: 'Укуктук колдоо',
        text: 'Экспорттоо үчүн өтө көп документтер керекпи? Алар кантип жана качан керек экенин түшүнбөй жатасызбы? Туура юрист издеп, бирок таба албай жатасызбы? Эки (же бир нече) мамлекеттерден өтө көп талаптар барбы? Биздин компания сизге экспорт учурунда юридикалык колдоо көрсөтөт.',

        br: 'Чоо-жайын билүү үчүн төмөнкү баскычты басыңыз.'

    },
    {
        id: 5,
        icon: ex5,
        title: 'Бажы эксперттеринин курсу',
        text: "Экспортко даярдана баштадыңызбы, бирок тайга системасы боюнча тажрыйбаңыз жокпу? Маалыматтын жетишсиздиги да тоскоол болууда? Кимден кеңеш жана жардам сурап кайрыларыңды билбей жатасыңбы? Фергана өрөөнүндөгү ЖЧК Бизнес Академиясына келиңиз. Биз сага жардам беребиз.",
        br: 'Чоо-жайын билүү үчүн төмөнкү баскычты басыңыз.'
    }
]

export let OZExport = [
    {
        id: 1,
        icon: ex1,
        title: 'Preparatni eksport qilish',
        text: 'Qirg‘izistondan tashqarida yangi bozorlarni izlash vaqti keldimi? Mahsulotingizni eksport qilish uchun qaysi davlatlar mos ekanligini bilmayapsizmi? Qayerdan boshlashni bilmayapsizmi? Bizning jamoamiz sizga bu borada yordam beradi.',
        br: 'Choo-zhayyn biluuchun tömonku baskychty basynyz.'

    },
    {
        id: 2,
        icon: ex2,
        title: "Savdo bo'limi",
        text: "Eksportga chiqish vaqti kelganini tushunyapsizmi, lekin tilni bilmaysizmi? Xorijiy kompaniyalar bilan qanday aloqada bo'lishni bilmayapsizmi? Chet el kompaniyalari bilan savdo qilishda professionalroq bo'lishni xohlaysizmi? Savdo boʻlimimiz Qirgʻiziston va Oʻzbekiston kompaniyalari manfaatlarini MDH, Yevropa Ittifoqi, AQSh va boshqalarda ifodalash uchun tashkil etilgan.",
        br: 'Choo-zhayyn biluuchun tömonku baskychty basynyz.'

    },
    {
        id: 3,
        icon: ex3,
        title: 'Sertifikatlash',
        text: 'Xorijiy bozorlarga chiqish vaqti keldi, ammo sertifikat kerakmi? Qaysi biri mos ekanligini yoki qaerdan va qanday sotib olishni bilmayapsizmi? Kompaniyangiz va mahsulotlaringiz uchun sertifikat olishda yordam kerakmi? Akademiyamiz sizning xizmatingizda.',
        br: 'Choo-zhayyn biluuchun tömonku baskychty basynyz.'

    },
    {
        id: 4,
        icon: bis1,
        title: 'Huquqiy yordam',
        text: "Eksport qilish uchun sizga juda ko'p hujjatlar kerakmi? Ular sizga qanday va qachon kerakligi haqida bosh qotirdingizmi? To'g'ri advokat qidiryapsizmi, lekin topa olmayapsizmi? Ikkala (yoki bir nechta) davlatdan juda ko'p talablar bormi? Bizning kompaniyamiz sizga eksport paytida huquqiy yordam taklif qiladi.",
        br: 'Choo-zhayyn biluuchun tömonku baskychty basynyz.'
    },
    {
        id: 5,
        icon: ex4,
        title: 'Moliyaviy savodxonlik kurslari',
        text: "Eksportga tayyorgarlik ko'rishni boshladingizmi, lekin tayga tizimi bilan tajribangiz yo'qmi? Axborotning etishmasligi ham to'sqinlik qiladimi? Maslahat va yordam uchun kimga murojaat qilishni bilmayapsizmi? Farg'ona vodiysi MChJ Biznes Akademiyasiga keling. Biz sizga yordam beramiz.",

        br: 'Choo-zhayyn biluuchun tömonku baskychty basynyz.'

    },
    {
        id: 5,
        icon: ex5,
        title: 'Biznes uchun pulni qanday topish mumkin',
        text: "Начали поиски денежных средств для запуска бизнеса или масштабирования бизнеса? Не знаете куда и как подавать? Не знаете как оформить документы? Нужна помощь с написанием бизнес плана или инвестиционного проекта? Наши финансовые консультанты предоставят вам поддержку в виде консультаций, наставничества и сопровождения.",
        br: 'Choo-zhayyn biluuchun tömonku baskychty basynyz.'
    }
]

// Мероприятие  
export let RusEvents = [
    {
        id: 1,
        icon: events1,
        title: 'Организация Бизнес Встреч',
        text: 'Ищете партнеров в Кыргызстане и вне страны? Не знаете как и где искать? В ходе наших мероприятий мы помогаем предпринимателям и экспертам найти партнеров по бизнесу из разных сфер и стран.',

        br: 'Нажмите кнопку внизу для получения подробной информации.'

    },
    {
        id: 2,
        icon: events2,
        title: 'Организация Бизнес Форумов',
        text: "Мы организовываем бизнес форумы в Кыргызстане и Узбекистане и даем возможность для представителей бизнеса обменяться опытом, найти решения насущных вопросов, познакомиться с передовыми технологиями и специалистами, найти единомышленников и заключить важные соглашения.",
        br: 'Нажмите кнопку внизу для получения подробной информации.'

    },
    {
        id: 3,
        icon: events3,
        title: 'Организация Бизнес Консультаций',
        text: "Нужна помощь специалиста в сфере бизнес управления, финансирования, экспорта и энерго-эффективности? Мы поможем найти вам нужного специалиста, который поможет определить слабые стороны бизнеса и выйти на новый уровень дохода.",
        br: ' Нажмите кнопку внизу для получения подробной информации.'

    },
    {
        id: 4,
        icon: events4,
        title: 'Организация Бизнес Поездок',
        text: "Ищете партнеров и поставщиков вне Кыргызстана? Не знаете где их найти и как с ними выйти на связь? ОсОО Бизнес Академия Ферганской Долины поможет вам в этом. Мы проводим бизнес туры страны СНГ, ЕС и других стран. Участники получают возможность обмена опыта, информацией и нахождением новых партнеров",
        br: ' Нажмите кнопку внизу для получения подробной информации'
    }
]

export let KGEvents = [
    {
        id: 1,
        icon: events1,
        title: 'Ишкердик жолугушууларды уюштуруу',
        text: 'Кыргызстанда жана өлкөдөн тышкары өнөктөштөрдү издеп жатасызбы? Кантип жана каяктан издөөнү билбей жатасызбы? Иш-чараларыбыздын жүрүшүндө биз ишкерлерге жана эксперттерге түрдүү тармактардан жана өлкөлөрдөн бизнес өнөктөштөрдү табууга жардам беребиз.',

        br: 'Чоо-жайын билүү үчүн төмөнкү баскычты басыңыз.'

    },
    {
        id: 2,
        icon: events2,
        title: 'Бизнес форумдарды уюштуруу',
        text: 'Биз Кыргызстан менен Өзбекстанда бизнес форумдарды уюштуруп, бизнес өкүлдөрүнө тажрыйба алмашууга, актуалдуу маселелерди чечүү жолдорун табууга, алдыңкы технологиялар жана адистер менен таанышууга, пикирлеш адамдарды табууга жана маанилүү келишимдерди түзүүгө мүмкүнчүлүк түзүп жатабыз.',
        br: 'Чоо-жайын билүү үчүн төмөнкү баскычты басыңыз.'

    },
    {
        id: 3,
        icon: events3,
        title: 'Бизнес-консультацияларды уюштуруу',
        text: 'Бизнести башкаруу, каржылоо, экспорт жана энергияны үнөмдөө боюнча адистин жардамы керекпи? Биз сизге бизнесиңиздин алсыз жактарын аныктоого жана кирешенин жаңы деңгээлине чыгууга жардам бере турган туура адисти табууга жардам беребиз.',
        br: 'Чоо-жайын билүү үчүн төмөнкү баскычты басыңыз.'

    },
    {
        id: 4,
        icon: events4,
        title: 'Командировкаларды уюштуруу',
        text: "Кыргызстандан тышкары өнөктөштөрдү жана жеткирүүчүлөрдү издеп жатасызбы? Аларды кайдан табаарын жана алар менен кантип байланышууну билбей жатасызбы? Бул боюнча сизге Фергана өрөөнүнүн Бизнес академиясы ЖЧКсы жардам берет. КМШ өлкөлөрүнө, ЕБге жана башка өлкөлөргө бизнес-турларды өткөрөбүз. Катышуучулар тажрыйба, маалымат алмашуу жана жаңы өнөктөштөрдү табуу мүмкүнчүлүгүнө ээ болушат.",
        br: 'Чоо-жайын билүү үчүн төмөнкү баскычты басыңыз.'
    }
]

export let OZEvents = [
    {
        id: 1,
        icon: events1,
        title: 'Tashkilot biznesi',
        text: "Siz Qirg'izistonda va mamlakat tashqarisida hamkorlar qidiryapsizmi? Qanday va qayerga qarashni bilmayapsizmi? Tadbirlarimiz davomida biz tadbirkorlar va mutaxassislarga turli soha va mamlakatlardan biznes sheriklarini topishda yordam beramiz.",

        br: 'Choo-zhayyn biluuchun tömonku baskychty basynyz.'

    },
    {
        id: 2,
        icon: events2,
        title: 'Biznes forumlarini tashkil etish',
        text: "Qirg‘iziston va O‘zbekistonda biznes-forumlar tashkil etib, biznes vakillariga o‘zaro tajriba almashish, dolzarb masalalarga yechim topish, ilg‘or texnologiyalar va mutaxassislar bilan tanishish, hamfikrlarni topish, muhim shartnomalar tuzish imkonini beryapmiz.",
        br: 'Choo-zhayyn biluuchun tömonku baskychty basynyz.'

    },
    {
        id: 3,
        icon: events3,
        title: 'Biznes maslahatlarini tashkil etish',
        text: "Biznesni boshqarish, moliyalashtirish, eksport va energiya samaradorligi bo'yicha mutaxassis yordamiga muhtojmisiz? Biz sizga biznesingizning zaif tomonlarini aniqlashga va daromadning yangi darajasiga erishishga yordam beradigan to'g'ri mutaxassisni topishga yordam beramiz.",
        br: 'Choo-zhayyn biluuchun tömonku baskychty basynyz.'

    },
    {
        id: 4,
        icon: events4,
        title: 'Ish safarlarini tashkil etish',
        text: "Qirg'izistondan tashqarida hamkorlar va yetkazib beruvchilarni qidiryapsizmi? Ularni qaerdan topishni va ular bilan qanday bog'lanishni bilmayapsizmi? Bunda sizga Farg‘ona vodiysi Biznes Akademiyasi MChJ yordam beradi. Biz MDH mamlakatlari, Yevropa Ittifoqi va boshqa mamlakatlarga biznes-turlar o'tkazamiz. Ishtirokchilar tajriba, ma’lumot almashish va yangi hamkorlar topish imkoniyatiga ega bo‘ladilar Tafsilotlar uchun quyidagi tugmani bosing",
        br: 'Choo-zhayyn biluuchun tömonku baskychty basynyz.'
    }
]