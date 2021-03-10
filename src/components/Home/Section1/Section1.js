import React from 'react'
import Section from './Section1.svg';
import Section2 from './Section2.svg';
import styles from './Section1.module.css'
const Section1 = () => {
    return (
        <div>
            <div className={styles.div}>
                <div className={styles.div1}>
                    <h1 className={styles.h1}>Making the most of the ever-growing<br />
                        <span className={styles.span}>Information Technology</span></h1>
                    <p className={styles.p}>Managed by a team of professional experts with extensive experience and impressive track records</p>
                    <div className={styles.divbutton}>
                        <button className={styles.button}>Read More</button>
                    </div>
                </div>
                <di className={styles.div2}>
                    <img src={Section} alt='Section1' className={styles.img} />
                </di>
            </div>
            <div className={styles.divbg}>
                <div className={styles.div0}>
                    <div>
                        <img src={Section2} alt='Section2' className={styles.img2} />
                    </div>
                    <div className={styles.div11}>
                        <h5 className={styles.h5}>Welcome to <span className={styles.span}>Dwidasa Samsara Indonesia (DSI)</span></h5>
                        <p>Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by the founders, who each of them has a common end objective to innovate new creations by making the most of the ever-growing information technology through DSI’s distinct front-end based application concept.
<br />
Managed by a team of professional experts with extensive experience and impressive track records, DSI believes that continuous improvements and innovations assure your business to run effectively and efficiently.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Section1
