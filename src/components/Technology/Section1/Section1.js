import React from 'react';
import styles from './Section1.module.css'
import vector from './vector.svg';
import vector_bg from './vector_bg.svg';
import macbook from './macbook.svg';
import lang from './lang.svg';
import line from './line.svg';
import Footer from '../../footer'
const Section1 = () => {
    return (
        <div>
            <div className={styles.bg}>
                <img src={vector} alt='img' className={styles.img1} />
                <img src={vector_bg} alt='img' className={styles.img2} />
                <h4 className={styles.h4}>“Knowledge” some way of future<br />
                    <span className={styles.sapn}>up-to-date in latest technology</span></h4>
                <div className={styles.btn}>
                    <button className={styles.button}>Learn More</button>
                </div>
                <div className={styles.btn}>
                    <img src={macbook} alt='img' className={styles.img3} />
                </div>
                <div className={styles.img}>
                    <img src={lang} alt='img' className={styles.img4} />
                </div>
            </div>
            <div className={styles.part2}>
                <section className={styles.section}>
                    <h4 className={styles.h44}>Our technology</h4>
                    <img src={line} alt='line' />
                    <p className={styles.p}><span>DSI</span>’s shared service solutions focus on the front-end based software development, designed specifically for the banking and financial sectors. We short-cut your front-liners to customers interaction process through a way that mediates your business process in a more direct communication means, in just a smile away from winning your customer’s trust.<br /><br />

Through close partnership, we always work together with your team, all throughout from pretopost project cycles – initial planning, project development, implementation, evaluation up to reporting documentation – to fully coach you so that all your specific business.<br /><br />

requirements can be delivered at the right time to the right audience of particular interests. Moreover, our team will support you to provide a detailed consultation throughout operation stage, and after the project implementation cycles by applying specific monitoring and improvement methodology. Our experienced people will drive your personalized service, by utilizing the best technology supports no other businesses can provide.

</p>
                </section>

            </div>
            <Footer />
        </div>
    )
}

export default Section1
