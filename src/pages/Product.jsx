import React from 'react'
import LineHeaders from '../components/Lines/LineHeaders'
import '../Styles/Product.scss'
import { productImages, imageTextForProducts } from '../images/index.js'
import Button from '../components/Button'

export default function Product() {
    return (
        <div className='conteiner' >

            <LineHeaders text={'Бизнес Управление'} />


            <img src={productImages} alt='not find' className='conteiner__fon' />

            <div className='conteiner__content'>

                <div>
                    <h1 className='conteiner__title'> Курс “Бизнес с 0”</h1>
                    <img src={imageTextForProducts} alt='not find' className='conteiner__content_img' />
                </div>

                <Button text={'Приступить к курсу “Бизнес с 0”'} />
            </div>


        </div>
    )
}
