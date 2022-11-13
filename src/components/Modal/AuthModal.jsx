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
import {useDispatch} from "react-redux";
import {authUser} from "../../api/user";

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
            const data = {datas: datas, closeAuth: handleCloseAuth, openRegist: handleOpen}
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
                            Авторизация
                        </Typography>
                        <form onSubmit={formik.handleSubmit} className={modalStyles.form}>
                            <div className={modalStyles.input_cont}>
                                <label className={modalStyles.label}>Email<span style={{ color: '#EB5757' }}>*</span></label>
                                <input name='email' onChange={formik.handleChange} placeholder='Ваша почта' className={(formik.errors.email) ? modalStyles.error_input : modalStyles.input} type="text" />
                            </div>
                            <Button type='submit' top='32px' bottom='0' text='Начать обучение'/>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
