import React from 'react'
import '../../Styles/Button.scss'

export default function Button({ text }) {
    return (
        <div className='btn' >
            <button className='btn_1'>
                {text}
            </button>
        </div>
    )
}
