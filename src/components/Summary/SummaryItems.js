import classes from './SummaryItems.module.css'

const SummaryItems = (props) => {

    const formattedPrice = props.price.toLocaleString('en-US')
    return (
        <div className={classes['items-container']}>
            <div className={classes['item-details']}>
            <img className={classes['item-image']} src={props.image} alt={props.name} />
            <div className={classes['item-info']}>
            <p className={classes['item-name']}>{props.name}</p>
            <p className={classes['item-price']}>$ {formattedPrice}</p>
            </div>
            </div>
            <p className={classes['item-amount']}>x{props.amount}</p>
        </div>
    )
}

export default SummaryItems