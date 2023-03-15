import classes from './Footer.module.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className={classes['footer-container']}>
            <div className={classes['content-container']}>
                <span className={classes.line}></span>
            <nav className={classes.navbar}>
            <Link  to='/'><img className={classes['nav-logo']} src='/images/shared/desktop/logo.svg' alt="audiophile-logo" /></Link>
                <ul className={classes['nav-list']}>
                    <li>
                    <Link  to='/'>home</Link>
                    </li>
                    <li>
                    <Link to='/headphones'>headphones</Link>
                    </li>
                    <li>
                    <Link to='/speakers'>speakers</Link> 
                    </li>
                    <li>
                    <Link to='/earphones'>earphones</Link>
                    </li>
                </ul>
            </nav>
            <div className={classes.content}>
                <p>
                Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
                </p>
            </div>
            <div className={classes['last-container']}>
            <div className={classes.copyright}>
                <p>Copyright 2021. All Rights Reserved</p>
            </div>

            <div className={classes.icons}>
                <Link to='https://www.facebook.com/'><span className={classes['facebook-icon']}></span></Link>
                <Link to='https://twitter.com/i/flow/login'><span className={classes['twitter-icon']}></span></Link>
                <Link to='https://www.instagram.com/'><span className={classes['instagram-icon']}></span></Link>
            </div>
       
            </div>
            </div>
        </footer>
    )
}

export default Footer