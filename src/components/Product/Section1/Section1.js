import React from 'react'
import bg1 from './bg1.svg'
import bg2 from './bg2.svg'
import line from './line.svg'
import img from './img.svg'
import styles from './Section1.module.css'
const Section1 = () => {
    return (
        <div>
            <div className={styles.header}>
                {/* <img src={bg1} alt='bg1' className={styles.img1} />
                <img src={bg2} alt='bg2' className={styles.img2} /> */}
                <div className={styles.title}>
                    <h4 className={styles.h4}>The most advanced technology<br />
                        <span className={styles.span}>always work hand-in-hand with qualified people</span></h4>
                </div>

            </div>
            <div className={styles.part2}>
                <section className={styles.section}>
                    <h4 className={styles.h44}>Our Product</h4>
                    <img src={line} alt='line' />
                    <p className={styles.p}><span>DSI</span>’s shared service solutions focus on the front-end based software development, designed specifically for the banking and financial sectors. We short-cut your front-liners to customers interaction process through a way that mediates your business process in a more direct communication means, in just a smile away from winning your customer’s trust.<br /><br />

Through close partnership, we always work together with your team, all throughout from pretopost project cycles – initial planning, project development, implementation, evaluation up to reporting documentation – to fully coach you so that all your specific business.<br /><br />

requirements can be delivered at the right time to the right audience of particular interests. Moreover, our team will support you to provide a detailed consultation throughout operation stage, and after the project implementation cycles by applying specific monitoring and improvement methodology. Our experienced people will drive your personalized service, by utilizing the best technology supports no other businesses can provide.

</p>
                </section>
                <div >
                    <img src={img} alt='img' className={styles.img} />
                </div>
            </div>
        </div>
    )
}

export default Section1
