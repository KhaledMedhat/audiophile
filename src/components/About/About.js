import classes from './About.module.css'
import { LazyLoadComponent } from 'react-lazy-load-image-component';
const About = () => {
    return (
        <LazyLoadComponent>
        <section className={classes['grid-container']}>
        <div className={classes.image}>  
            <img className={classes['desktop-image']} src="/images/shared/desktop/image-best-gear.jpg" alt="best-gear" /> 
            <img className={classes['tablet-image']} src="/images/shared/tablet/image-best-gear.jpg" alt="best-gear" />    
            <img className={classes['mobile-image']} src="/images/shared/mobile/image-best-gear.jpg" alt="best-gear" />           
            </div>
            <div className={classes.content}>
                <h2>bringing you the <span className={classes.best}>best</span> audio gear</h2>
                <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
            </div>
      

        </section>
        </LazyLoadComponent>
    )
}

export default About