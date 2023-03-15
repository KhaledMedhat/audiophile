import classes from './MainBanner.module.css'
import Button from '../UI/Button'

const MainBanner = () => {
    return(
            <section className={classes['banner-container']}>
                <div className={classes['banner-image']}>
                </div>
                <div className={classes['banner-content']}> 
                    <p className={classes.new}>new product</p>
                    <h1 className={classes.title}>xx99 mark ii headphones</h1>
                    <p className={classes['sub-title']}>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                    <Button className={classes.btn} title={'see product'} to={'/headphones/xx99-mark-two-headphones'}/>
                </div>   
            </section>
    )
}

export default MainBanner