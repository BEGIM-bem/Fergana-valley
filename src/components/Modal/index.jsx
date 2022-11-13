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
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {createUser} from "../../api/user";

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

};

const title = {
    textAlign: 'center',
    color: 'white',
    fontWeight: '700',
    fontSize: '24px',
    lineHeight: '150%',
    marginBottom: '16px',
};

export default function AccessModal({ open, handleClose }) {

    const dispatch = useDispatch()

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
            const data = {datas: datas, closeRegistrationModal: handleClose}
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
                            Чтобы получить бесплатный доступ к курсу
                            пожалуйста заполните форму
                        </Typography>
                        <form onSubmit={formik.handleSubmit} className={modalStyles.form}>
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
                            <Button type='submit' top='32px' bottom='0' text='Начать обучение'/>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
