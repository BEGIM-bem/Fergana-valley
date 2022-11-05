import { useState } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import styles from './actions.module.scss'




export default function Spinner() {
    return (
        <div className={styles.spinner} >
            <PropagateLoader
                color='#1959AB'

            />
        </div>
    )
}
