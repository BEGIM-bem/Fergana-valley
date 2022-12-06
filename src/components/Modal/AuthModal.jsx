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
import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {authUser} from "../../api/user";
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

};

const title = {
    textAlign: 'center',
    color: 'white',
    fontWeight: '700',
    fontSize: '24px',
    lineHeight: '150%',
    marginBottom: '16px',
};

export default function AuthModal({ openAuth, handleCloseAuth, handleOpen }) {

    const dispatch = useDispatch()

    const { language } = useSelector(state => state.localization)

    const translate = (ru, kg, uz) => {
        return `${language === 'russian' ? ru : ''}${language === 'kyrgyz' ? kg : ''}${language === "o'zbekcha" ? uz : ''}`
    }
    const firstAlertText = translate("Повторите попытку", "Кайра аракет кылып корунуз", "Qayta urinib ko'ring")
    const secondAlertText = translate("Пользователь с таким почтовым адресом не существует!", "Бул электрондук почта дареги бар колдонуучу жок!", "Ushbu elektron pochta manziliga ega foydalanuvchi mavjud emas!")
    const AlertTextSuccess = translate("Вы успешно авторизовались!", "Сиз ийгиликтүү кирдиңиз!", "Siz muvaffaqiyatli tizimga kirdingiz!")

    const alert = () => {
        swal(`${firstAlertText}`, `${secondAlertText}`, "error");
    }

    const alertSuccess = () => {
        swal(`${AlertTextSuccess}`);
    }


    const AccessSchema = Yup.object().shape({
        email: Yup.string()
            .email("Введите правильный формат почты")
            .required("Обязательное поле")
    });

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "AdminFergana"
        },
        validationSchema: AccessSchema,
        onSubmit: (datas) => {
            const data = {datas: datas, closeAuth: handleCloseAuth, alert: alert, alertSuccess: alertSuccess}
            console.log(datas)
            dispatch(authUser(data))
        }
    })

    return (
        <div>
            <Modal
                // sx={{ mt: 2 }}
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openAuth}
                // onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openAuth}>
                    <Box sx={style}>
                        <Typography sx={title} id="transition-modal-title" variant="h6" component="h2">
                            {translate("Авторизация","Кирүү", "Avtorizatsiya")}
                        </Typography>
                        <form onSubmit={formik.handleSubmit} className={modalStyles.auth_form}>
                            <div className={modalStyles.input_cont}>
                                <label className={modalStyles.label}>{translate("Почта","Почта","Pochta")}<span style={{ color: '#EB5757' }}>*</span></label>
                                <input name='email' onChange={formik.handleChange} placeholder={translate('Ваша почта', "Сиздин почтаныз", "Sizning pochtangiz")} className={(formik.errors.email) ? modalStyles.error_input : modalStyles.input} type="text" />
                            </div>
                            <Button type='submit' width='220px' top='32px' bottom='0' text={translate('Начать обучение', "Окууну баштоо", "Treningni boshlash")}/>
                            <Button onClick={handleOpen} type='button' width='220px' top='13px' bottom='0' text={translate('Зарегистрироваться', "Катталуу", "Ro'yxatdan o'tish")}/>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
