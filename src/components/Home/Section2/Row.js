import React from 'react'
import styles from './Section2.module.css'
const Row = (props) => {
    const { img, title, text } = props;
    return (
        <div className={styles.div}>
            <div className={styles.divimg}>
                <img src={img} alt='img' className={styles.img} />
            </div>

            <h5 className={styles.h5}>{title}</h5>
            <p className={styles.p}>{text}</p>
            <button className={styles.button}>Read More</button>
        </div>
    )
}

export default Row

