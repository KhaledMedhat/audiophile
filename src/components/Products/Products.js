import Button from '../UI/Button'
import classes from './Products.module.css'
const Products = (props) => {
    return (
            <section className={classes['grid-container']}> 
            <div className={classes.image} >
            <img className={classes['product-image-desktop']} src={props.image.desktop} alt={props.name} />   
            <img className={classes['product-image-tablet']} src={props.categoryImage.tablet} alt={props.name} /> 
            <img className={classes['product-image-mobile']} src={props.categoryImage.mobile} alt={props.name} /> 
            </div>
                <div className={classes.info}>
                    {props.new && <p className={classes.new}>new product</p>}
                    <h2>{props.name}</h2>
                    <p className={classes.description}>{props.description}</p>
                    <Button className={classes.btn} to={`/${props.category}/${props.slug}`} title={'see product'}/>
                </div>
        </section>
    )

}
    
export default Products