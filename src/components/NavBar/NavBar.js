
import React, { useState } from 'react'
import logo from './logo.svg'
import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'
const NavBar = () => {
    const BarItems = [
        {
            title: 'Services',
            url: '',
            destination: '/Services'
        },
        {
            title: 'Product',
            url: '',
            destination: '/Product'
        },
        {
            title: 'Technology',
            url: '',
            destination: '/Technology'
        },
        {
            title: 'About  ',
            url: '',
            icon: 'fas fa-angle-down',
            destination: '/About'
        },
        {
            title: 'Client  ',
            url: '',
            icon: 'fas fa-angle-down',
            destination: '/Client'
        },
        {
            title: 'Partner',
            url: '',
            destination: '/Partner'
        },
    ]
    const [Cliked, setCliked] = useState(false);
    const HandleCliked = () => {
        setCliked(!Cliked)
    }
    return (
        <div>
            <nav className={styles.nav}>
                <Link to='/'><img src={logo} alt='logo' /></Link>
                <ul className={Cliked ? "" : styles.list}>
                    {
                        BarItems.map((item, index) => {
                            return (
                                <Link to={item.destination} className={styles.link}><li key={index}>{item.title}<i class={item.icon}></i></li></Link>
                            )
                        })
                    }
                </ul>
                <div onClick={HandleCliked} className={styles.menu}>
                    {
                        Cliked ? <i class="fas fa-times"></i> : <i class="fas fa-bars"></i>
                    }


                </div>
                <div className={styles.icons}>
                    <i class="fas fa-home"></i>
                    <i class="far fa-envelope"></i>
                    <i class="fas fa-align-center"></i>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
