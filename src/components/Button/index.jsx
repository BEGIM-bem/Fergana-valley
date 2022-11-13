import React from 'react'
import '../../Styles/Button.scss'

export default function Button({ text, width, top, bottom, onClick, type }) {
    return (
        <div className='btn' >
            <button type={type} onClick={onClick} className='btn_1' style={{
                width: width,
                marginTop: top, marginBottom: bottom,
            }}
            >
                {text}
            </button>
        </div>
    )
}
