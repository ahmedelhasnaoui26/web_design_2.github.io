import React from 'react'
import logo from './logo.svg'
import lang from './lang.svg'
import styles from './Section2.module.css'

const Section2 = () => {
    return (
        <div>
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
                <img src={lang} alt='Languages' className={styles.lang} />
            </div>
            <footer className={styles.footer}>
                <p className={styles.copy}>Copyright © 2021 - Ahmed Elhasnaoui Morocco</p>
            </footer>
        </div>
    )
}

export default Section2
