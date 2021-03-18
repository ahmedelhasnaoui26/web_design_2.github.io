import React from 'react';
import styles from './Section1.module.css'
import line from './line.svg'
import line2 from './line2.svg'
import logo from './logo.svg'
import video from './video.svg'
import video2 from './video2.svg'
import icon1 from './icon1.svg'
import icon2 from './icon2.svg'
import Footer from '../../footer'

const Section1 = () => {

    return (
        <div>
            <div className={styles.header}>
                <p className={styles.h6}>to grow the business together<br />
                    <span className={styles.spanTitle}>Continous effort through improvement and innovation</span></p>
                <img src={logo} alt='logo' className={styles.img} />

            </div>
            <div className={styles.part2}>
                <section className={styles.section}>
                    <h4 className={styles.h44}>About Dwidasa Samsara Indonesia (DSI)</h4>
                    <img src={line} alt='line' />
                    <p className={styles.p}><span className={styles.spanColor}>Dwidasa Samsara Indonesia (DSI)</span> was firstly established in 2010 by the founders, who each of them has a common end objective to innovate new creations by making the most of the ever-growing information technology through <span className={styles.spanColor}>DSI</span>’s distinct front-end based application concept. Managed by a team of professional experts with extensive experience and impressive track records, <span className={styles.spanColor}>DSI</span> believes that continuous improvements and innovations assure your business to run effectively and efficiently.<br /><br />

Then from that perspective, we named our company <span className={styles.spanColor}>‘Dwidasa Samsara Indonesia’</span>, which means continuous efforts through improvement and innovation will help us evolving toward the forefront position in Indonesia. In responding to various clients’ specifi c requirements,<span className={styles.spanColor}>DSI</span>  will work consistently in optimizing its existing reliable resources combined with well-trained team supports, to present particularly the dynamic fi nancial industry sector with its customized solutions.<br /><br />

Considering the complexity of the clients’ demand, however notwithstanding the size of the organization,<span className={styles.spanColor}>DSI</span>  is always committed to work effectively for growing the business together with business partners, through its innovative and collaborative methodology while assuring a fast response time to customers. That way, the final output is delivered in a secured and timely manner, towards the attainment of the most effi cient outcome.<br /><br />

For <span className={styles.spanColor}>DSI</span>, both technical and non-technical supports are as important as the partnership we have built with your business. Among others, our partnership portfolio has been built with various business segments such as Internet Service Provider (ISP), Application Service Provider (ASP) and Payment Network corporations. Through such partnerships, we are evolving together to a new height of innovative explorations and effective improvements with purpose to having a sustainable business operation cycles.

</p>
                </section>

            </div>
            <div className={styles.part22}>
                <div className={styles.video}>
                    <img src={video} alt='video' className={styles.videoImg} />
                </div>
                <div className={styles.container1}>
                    <h4 className={styles.h44}>Our Future Prespective</h4>
                    <img src={line} alt='line' />
                    <div>
                        <div className={styles.container2}>
                            <img src={icon1} alt='icon' />
                            <h5 className={styles.h5}>Vision</h5>
                        </div>
                        <p className={styles.pp}>To become the leading application service provider (ASP) focusing on front-end application delivered for Indonesia’s banking and fi nancial industry.</p>
                    </div>
                    <div>
                        <div className={styles.container2}>
                            <img src={icon2} alt='icon' />
                            <h5 className={styles.h5}>Mission</h5>
                        </div>
                        <p className={styles.pp}>To grow the business together with clients by providing enhanced services and wide delivery channel to end-users.</p>
                    </div>
                </div>
            </div>
            <div className={styles.part2x}>
                <section className={styles.section1}>
                    <h4 className={styles.h44x}>DSI Culture</h4>
                    <img src={line2} alt='line' />
                    <p className={styles.px}>
                        Our commitment to innovation depends on everyone being comfortable sharing ideas and opinions. Every employee is a hands-on contributor, and everyone wears several hats. Because we believe that each DSI employee is an equally important part of our success.<br /><br />

We deeply understand that the average working person spends at least eight hours or even more, so we spend one third even half of our lives to work in a day. therefore we strive to provide a fun and positive environment in addition to a wide range of benefits to provide safety so they can enjoy working at Dwidasa Samsara Indonesia.


</p>
                </section>
                <div className={styles.video}>
                    <img src={video2} alt='img' className={styles.videoImg} />
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default Section1
