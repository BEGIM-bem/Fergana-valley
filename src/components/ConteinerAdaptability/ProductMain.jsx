import { switchsBlack } from '../../images';
import styles from './index.module.scss'

function AdaptivMainProduct({ prevSlide, screenWidth, activeIndex, data, vid, sliderImage, colorArrow }) {
    console.log("data: ", data)

    return (
        <div className={styles.slideshow1}>

            {
                data?.map((item, index) =>
                    <div
                        key={index}
                        // style={{ maxWidth: screenWidth }}
                        className={index === activeIndex ?
                            styles.actives1 :
                            styles.inactivesMain}
                    >

                        <img src={item.icon} alt='/'
                            className={styles.imgs} />
                        <br />
                        <img src={item.text} className={styles.d1} alt='/' />

                    </div>
                )

            }

            {/* <br /> */}

            <div onClick={prevSlide}
                className={styles.slideshow__icon}>

                <img
                    src={switchsBlack} alt='/' />

            </div>

        </div>

    )
}

export default AdaptivMainProduct;