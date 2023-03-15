import classes from './PageBanner.module.css'

const PageBanner = (props) => {

    return (
        <section className={classes['banner-container']}>
            <div className={classes.title}>
            {props.title}
            </div>
        </section>
    )
}

export default PageBanner