import classes from './SmallNavbar.module.css'
import ResizeableNavLayout from '../UI/ResizeableNavLayout'
import { Link } from 'react-router-dom'


const SmallNavbar = () => {
    return ( 
        <ResizeableNavLayout>
       <div className={classes['categories-container']}>
       <ul className={classes['category-list']}>
                <li className={classes.category}>
                        <Link className={classes['category-link']} to='/headphones'>
                            <div className={classes['category-display-container']}>
                            <img className={classes['category-image']} src="/images/shared/desktop/image-headphones.png" alt="headphone" />
                            <div className={classes['category-info']}>
                                <h2>headphones</h2>
                                <div className={classes['category-btn']}>
                                <p>shop</p>
                                <img className={classes.arrow} src="/images/shared/desktop/icon-arrow-right.svg" alt="right-arrow" />
                                </div>
                            </div>
                            </div>
                        </Link>
                </li>
                <li className={classes.category}>
                <Link className={classes['category-link']} to='/speakers'>
                            <div className={classes['category-display-container']}>
                            <img className={classes['category-image']} src=" /images/shared/desktop/image-speakers.png" alt="speakers" />
                            <div className={classes['category-info']}>
                                <h2>speakers</h2>
                                <div className={classes['category-btn']}>
                                <p>shop</p>
                                <img className={classes.arrow} src="/images/shared/desktop/icon-arrow-right.svg" alt="right-arrow" />
                                </div>
                            </div>
                            </div>
                        </Link>
                </li>
                <li className={classes.category}>
                <Link className={classes['category-link']} to='/earphones'>
                            <div className={classes['category-display-container']}>
                            <img className={classes['category-image']} src=" /images/shared/desktop/image-earphones.png" alt="earphones" />
                            <div className={classes['category-info']}>
                                <h2>earphones</h2>
                                <div className={classes['category-btn']}>
                                <p>shop</p>
                                <img className={classes.arrow} src="/images/shared/desktop/icon-arrow-right.svg" alt="right-arrow" />
                                </div>
                            </div>
                            </div>
                        </Link>
                </li>
            </ul>
       </div>
        </ResizeableNavLayout>

    )
}

export default SmallNavbar