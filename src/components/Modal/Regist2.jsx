import React from 'react';
import modalStyles from './Modal.module.scss';
import {useDispatch} from "react-redux";
import * as Yup from "yup";
import {useFormik} from "formik";
import {createUser} from "../../api/user";
import {iconInstagram} from "../../images";
import Button from "../Button";

const Registration = ({close, openAuthModal}) => {

    const dispatch = useDispatch()

    const backAuthModal = () => {
        close()
        openAuthModal()
    }

    const AccessSchema = Yup.object().shape({
        email: Yup.string()
            .email("Введите правильный формат почты")
            .required("Обязательное поле"),
        fullname: Yup.string()
            .required("Обязательное поле"),
        phone_number: Yup.string()
            // .min(9, "Номер должен состоять из 9 чисел")
            // .max(9, "Номер не должен превышать 9 чисел")
            .required("Обязательное поле"),
        whatsapp_number: Yup.string()
            // .min(9, "Номер должен состоять из 9 чисел")
            // .max(9, "Номер не должен превышать 9 чисел")
            .required("Обязательное поле"),
        instagram: Yup.string()
            .required("Обязательное поле"),
        password: Yup.string()
            .required()
    });

    const formik = useFormik({
        initialValues: {
            fullname: "",
            phone_number: '',
            whatsapp_number: ``,
            email: "",
            instagram: "",
            password: ""
        },
        validationSchema: AccessSchema,
        onSubmit: (datas) => {
            const data = { datas: datas, closeRegistrationModal: close, openAuthModal: openAuthModal}
            dispatch(createUser(data))
        }
    })

    return (
        <div className={modalStyles.open_modal}>
            <form onSubmit={formik.handleSubmit} className={modalStyles.form}>
                <h2 className={modalStyles.modal_title}>Чтобы получить бесплатный доступ к курсу
                    пожалуйста заполните форму</h2>
                <div className={modalStyles.input_cont}>
                    <label className={modalStyles.label}>ФИО<span style={{ color: '#EB5757' }}>*</span></label>
                    <input name='fullname' onChange={formik.handleChange} placeholder='ФИО' className={(formik.errors.fullname) ? modalStyles.error_input : modalStyles.input} type="text" />
                </div>
                <div className={modalStyles.input_cont}>
                    <label className={modalStyles.label}>Введите номер вашего телефона<span style={{ color: '#EB5757' }}>*</span></label>
                    <div className={modalStyles.insta_input_cont}>
                        <p className={modalStyles.phone_code}>+996</p>
                        <input name='phone_number' onChange={formik.handleChange} style={{ paddingLeft: '70px' }} placeholder='номер телефона' className={(formik.errors.phone_number) ? modalStyles.error_input : modalStyles.input} type="number" />
                    </div>
                </div>
                <div className={modalStyles.input_cont}>
                    <label style={{ marginBottom: '4px' }} className={modalStyles.label}>Введите номер вашего WhatsApp<span style={{ color: '#EB5757' }}>*</span></label>
                    <p className={modalStyles.sub_label}>Если его нет введите номер вашего телефона</p>
                    <div className={modalStyles.insta_input_cont}>
                        <p className={modalStyles.phone_code}>+996</p>
                        <input name='whatsapp_number' onChange={formik.handleChange} style={{ paddingLeft: '70px' }} placeholder='номер телефона' className={(formik.errors.whatsapp_number) ? modalStyles.error_input : modalStyles.input} type="number" />
                    </div>
                </div>
                <div className={modalStyles.input_cont}>
                    <label className={modalStyles.label}>Почта<span style={{ color: '#EB5757' }}>*</span></label>
                    <input name='email' onChange={formik.handleChange} placeholder='Ваша почта' className={(formik.errors.email) ? modalStyles.error_input : modalStyles.input} type="text" />
                </div>
                <div className={modalStyles.input_cont}>
                    <label className={modalStyles.label}>Пароль<span style={{ color: '#EB5757' }}>*</span></label>
                    <input name='password' onChange={formik.handleChange} placeholder='Ваш пароль' className={(formik.errors.password) ? modalStyles.error_input : modalStyles.input} type="text" />
                </div>
                <div className={modalStyles.input_cont}>
                    <label className={modalStyles.label}>Инстаграм</label>
                    <div className={modalStyles.insta_input_cont}>
                        <img className={modalStyles.inst_icon} src={iconInstagram} alt="/" />
                        <input name='instagram' onChange={formik.handleChange} style={{ paddingLeft: '70px' }} placeholder='введите ваш ник' className={(formik.errors.instagram) ? modalStyles.error_input : modalStyles.input} type="text" />
                    </div>
                </div>
                <Button type='submit' width='220px' top='32px' bottom='0' text='Начать обучение' />
                <Button onClick={backAuthModal} width='220px' type='button' top='13px' bottom='0' text='Авторизоваться' />
            </form>
        </div>
    );
};

export default Registration;
