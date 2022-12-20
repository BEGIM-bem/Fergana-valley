import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import modalStyles from './Modal.module.scss';
import Button from "../Button";
import { iconInstagram } from "../../images";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { createUser } from "../../api/user";
import swal from 'sweetalert';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '680px',
    background: 'rgba(25, 89, 171, 0.5)',
    backdropFilter: 'blur(3.5px)',
    borderRadius: '5px',
    border: 'none',
    boxShadow: 24,
    p: 4,
    padding: '32.5px',
    overflow: 'scroll',
    height: '100%',

};

const title = {
    textAlign: 'center',
    color: 'white',
    fontWeight: '700',
    fontSize: '24px',
    lineHeight: '150%',
    marginBottom: '16px',
};

export default function AccessModal({ open, handleClose, openAuthModal }) {

    const {language} = useSelector(state => state.localization)

    const translate = (ru, kg, uz) => {
        return `${language === 'russian' ? ru : ''}${language === 'kyrgyz' ? kg : ''}${language === "o'zbekcha" ? uz : ''}`
    }

    const firstAlertText = translate("Повторите попытку", "Кайра аракет кылып корунуз", "Qayta urinib ko'ring")
    const secondAlertText = translate("Пользователь с таким почтовым адресом уже существует!","Бул электрондук почта дареги бар колдонуучу мурунтан эле бар!", "Ushbu elektron pochta manziliga ega foydalanuvchi allaqachon mavjud!")
    const AlertTextSuccess = translate("Вы успешно прошли регистрацию!", "Сиз каттоодон ийгиликтүү өттүңүз!", "Siz ro'yxatdan muvaffaqiyatli o'tdingiz!")

    const dispatch = useDispatch()

    const backAuthModal = () => {
        handleClose()
        openAuthModal()
    }

    const alert = () => {
        swal(`${firstAlertText}`, `${secondAlertText}`, "error");
    }

    const alertSuccess = () => {
        swal(`${AlertTextSuccess}`);
    }

    const emailValid = translate("Введите правильный формат почты","Туура почта форматын киргизиңиз", "To'g'ri pochta formatini kiriting")
    const requiredValid = translate("Обязательное поле","Милдеттүү","Majburiy")

    const AccessSchema = Yup.object().shape({
        email: Yup.string()
            .email(`${emailValid}`)
            .required(`${requiredValid}`),
        fullname: Yup.string()
            .required(translate("Обязательное поле","Милдеттүү","Majburiy")),
        phone_number: Yup.string()
            .required(translate("Обязательное поле","Милдеттүү","Majburiy")),
        whatsapp_number: Yup.string()
            .required(translate("Обязательное поле","Милдеттүү","Majburiy")),
        instagram: Yup.string()
            .required(translate("Обязательное поле","Милдеттүү","Majburiy")),
    });

    const formik = useFormik({
        initialValues: {
            fullname: "",
            phone_number: '',
            whatsapp_number: ``,
            email: "",
            instagram: "",
            password: 'AdminFergana'
        },
        validationSchema: AccessSchema,
        onSubmit: (datas) => {
            const data = { datas: datas, closeRegistrationModal: handleClose, openAuthModal: openAuthModal}
            dispatch(createUser(data))
        }
    })

    return (
        <div>
            <Modal
                // sx={{ mt: 2 }}
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                // onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography sx={title} id="transition-modal-title" variant="h6" component="h2">
                            {translate("Чтобы получить бесплатный доступ к курсу пожалуйста заполните форму","Курска акысыз кирүү үчүн сураныч форманы толтуруңуз","Kursga bepul kirish uchun iltimos, shaklni to'ldiring")}
                        </Typography>
                        <form onSubmit={formik.handleSubmit} className={modalStyles.form}>
                            <div className={modalStyles.input_cont}>
                                <label className={modalStyles.label}>{translate('ФИО',"Аты-жөнү","Ism")}<span style={{ color: '#EB5757' }}>*</span></label>
                                <input name='fullname' onChange={formik.handleChange} placeholder={translate('ФИО',"Аты-жөнү","Ism")} className={(formik.errors.fullname) ? modalStyles.error_input : modalStyles.input} type="text" />
                                {formik.errors.fullname && <p className={modalStyles.error}>{formik.errors.fullname}</p>}
                            </div>
                            <div className={modalStyles.input_cont}>
                                <label className={modalStyles.label}>{translate(`Введите номер вашего телефона`,"Телефон номериңизди киргизиңиз","Telefon raqamingizni kiriting")}<span style={{ color: '#EB5757' }}>*</span></label>
                                <label className={modalStyles.label}>{translate(`(укажите телефонный код страны)`,"(өлкө кодун киргизиңиз)","(mamlakat kodini kiriting)")}<span style={{ color: '#EB5757' }}>*</span></label>
                                <input name='phone_number' onChange={formik.handleChange} placeholder={translate('Номер телефона',"Телефон номери","Тelefon raqami")} className={(formik.errors.phone_number) ? modalStyles.error_input : modalStyles.input} type="number" />
                                {formik.errors.phone_number && <p className={modalStyles.error}>{formik.errors.phone_number}</p>}
                            </div>
                            <div className={modalStyles.input_cont}>
                                <label style={{ marginBottom: '4px' }} className={modalStyles.label}>{translate("Введите номер вашего WhatsApp","WhatsApp телефон номериңизди киргизиңиз","WhatsApp telefon raqamingizni kiriting")}<span style={{ color: '#EB5757' }}>*</span></label>
                                <label className={modalStyles.label}>{translate(`(укажите телефонный код страны)`,"(өлкө кодун киргизиңиз)","(mamlakat kodini kiriting)")}<span style={{ color: '#EB5757' }}>*</span></label>
                                <p className={modalStyles.sub_label}>{translate("Если его нет введите номер вашего телефона","Эгер жок болсо телефонуңуздун номерин киргизиңиз", "Agar yo'q bo'lsa, telefon raqamingizni kiriting")}</p>
                                <input name='whatsapp_number' onChange={formik.handleChange} placeholder={translate('Номер телефона',"Телефон номери","Тelefon raqami")} className={(formik.errors.whatsapp_number) ? modalStyles.error_input : modalStyles.input} type="number" />
                                {formik.errors.whatsapp_number && <p className={modalStyles.error}>{formik.errors.whatsapp_number}</p>}
                            </div>
                            <div className={modalStyles.input_cont}>
                                <label className={modalStyles.label}>{translate('Почта', "Почта", "Pochta")}<span style={{ color: '#EB5757' }}>*</span></label>
                                <input name='email' onChange={formik.handleChange} placeholder={translate('Ваша почта', "Сиздин почтаныз", "Sizning pochtangiz")} className={(formik.errors.email) ? modalStyles.error_input : modalStyles.input} type="text" />
                                {formik.errors.email && <p className={modalStyles.error}>{formik.errors.email}</p>}
                            </div>
                            <div className={modalStyles.input_cont}>
                                <label className={modalStyles.label}>{translate('Инстаграм', "Инстаграм", "Instagram")}</label>
                                <div className={modalStyles.insta_input_cont}>
                                    <img className={modalStyles.inst_icon} src={iconInstagram} alt="/" />
                                    <input name='instagram' onChange={formik.handleChange} style={{ paddingLeft: '70px' }} placeholder={translate('введите ваш ник', "лакап атыңызды киргизиңиз", "taxallusingizni kiriting")} className={(formik.errors.instagram) ? modalStyles.error_input : modalStyles.input} type="text" />
                                </div>
                                {formik.errors.instagram && <p className={modalStyles.error}>{formik.errors.instagram}</p>}
                            </div>
                            <Button type='submit' width='220px' top='32px' bottom='0' text={translate('Зарегистрироваться', "Катталуу", "Ro'yxatdan o'tish")} />
                            <Button onClick={backAuthModal} width='220px' type='button' top='13px' bottom='0' text={translate('Авторизоваться', "Кирүү", "Kirish")} />

                        </form>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
