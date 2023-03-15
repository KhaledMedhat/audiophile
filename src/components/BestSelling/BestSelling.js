import classes from './BestSelling.module.css'
import Button from '../UI/Button'

import { LazyLoadComponent } from 'react-lazy-load-image-component';


const BestSelling = () => {
    return (
       <LazyLoadComponent >
        <section className={classes['section-container']}>   
            <div className={classes['first-best']}>
                <img className={classes['first-best-image-desktop']} src="./images/home/desktop/image-speaker-zx9.png" alt="speaker-zx9" />
                <img className={classes['first-best-image-tablet']} src="./images/home/tablet/image-speaker-zx9.png" alt="speaker-zx9" />
                <img className={classes['first-best-image-mobile']} src="./images/home/mobile/image-speaker-zx9.png" alt="speaker-zx9" />
                <div className={classes['first-best-info']}>
                    <h2>zx9 speaker</h2>
                    <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                    <Button title={'see product'} className={classes['first-btn']} to={'/speakers/zx9-speaker'} />
                </div>
            </div>
            <div className={classes['second-best']}>
                  <div className={classes['second-best-info']}>
                  <h2>zx7 speaker</h2>
                    <Button title={'see product'} className={classes['second-btn']} to={'/speakers/zx7-speaker'} />
                  </div>
                
                <img className={classes['second-best-image-desktop']} src="/images/home/desktop/image-speaker-zx7.jpg" alt="speaker-zx7" />
                <img className={classes['second-best-image-tablet']} src="/images/home/tablet/image-speaker-zx7.jpg" alt="speaker-zx7" />
                <img className={classes['second-best-image-mobile']} src="/images/home/mobile/image-speaker-zx7.jpg" alt="speaker-zx7" />
            </div>
            <div className={classes['third-best']}>
                <div className={classes['third-best-image']}>
                <img className={classes['third-best-image-desktop']} src="/images/home/desktop/image-earphones-yx1.jpg" alt="earphones-yx1" />
                <img className={classes['third-best-image-tablet']} src="/images/home/tablet/image-earphones-yx1.jpg" alt="earphones-yx1" />
                <img className={classes['third-best-image-mobile']} src="/images/home/mobile/image-earphones-yx1.jpg" alt="earphones-yx1" />
                </div>
            <div className={classes['third-best-content']}>
                <div className={classes.content}>
                <h2>yx1 earphones</h2>
                    <Button title={'see product'} className={classes['third-btn']} to={'/earphones/yx1-earphones'} />  
                </div>
                </div>
            </div>
            
        </section>
        </LazyLoadComponent>
    )
}

export default BestSelling