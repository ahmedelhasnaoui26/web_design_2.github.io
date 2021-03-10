import React from 'react'
import Row from './Row'
import product from './product.svg'
import service from './service.svg'
import technology from './technology.svg'
import logo from './logo.svg'
import lang from './lang.svg'
import styles from './Section2.module.css'


const Section2 = () => {
    return (
        <section>
            <div className={styles.divsection}>
                <h3 className={styles.h3}>Product and Service</h3>
                <div className={styles.Row}>
                    <Row img={product} title='Our Product' text='Our product is made on the base of our team’s careful research and analyses, 
                ranging from internet based application.' />
                    <Row img={service} title='Our Service' text='DSI’s shared service solutions focus on the front-end based software development, designed specifically for the banking and financial sectors.' />
                    <Row img={technology} title='Our Technology' text='First JAVA, runs on more than 850 million personal computers worldwide, and on billions of devices worldwide, including mobile and TV devices.' />
                </div>
            </div>
            <div className={styles.divfin}>
                <section>
                    <img src={logo} alt='logo' />
                    <h5 className={styles.h55}>PT Dwidasa Samsara Indonesia</h5>
                    <p className={styles.pp}>Ruko Jalur Sutera 29A No. 53<br />
                    Alam Sutera Serpong, Tangerang 15323
                    </p>
                </section>
                <section>
                    <h5 className={styles.h55}>Contact</h5>
                    <p className={styles.ppp}>Phone : +62.21.5314.1135<br />
                    Fax : +62.21.5314.1135<br />
                       Email : ahmedelhasnaoui26@gmail.com</p>
                </section>
                <img src={lang} alt='Languages' />
            </div>
            <footer className={styles.footer}>
                <p className={styles.copy}>Copyright © 2021 - Ahmed Elhasnaoui Morocco</p>
            </footer>
        </section>

    )
}

export default Section2
