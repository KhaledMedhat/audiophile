import classes from './PaymentConfirmationContent.module.css'
const PaymentConfirmationContent = (props) => {

    return (
        <li key={props.id} className={classes.product}>
            <div className={classes['product-details']}>
            <img className={classes['product-image']} src={props.image} alt={props.name} />
           <div className={classes['product-info']}>
           <p className={classes['product-name']}>{props.name}</p>
            <p className={classes['product-price']}>$ {props.price}</p>
           </div>
            </div>
            <p className={classes['product-amount']}>x{props.amount}</p>     
        </li>
    )
}

export default PaymentConfirmationContent