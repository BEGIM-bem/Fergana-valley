import React from 'react'
import styles from '../../Styles/LineHeaders.module.scss'

export default function LineHeaders({ text, stylesContent, stylesContent1 }) {


  return (
    <p style={{ paddingLeft: stylesContent, paddingRight: stylesContent1 }}
      className={styles.span} >{text} </p>

  )
}
