import classes from './CartButton.module.css'
const Cart = (props) => {
    const hasItems = props.items.length > 0
    return (
    
        <button className={classes.button} onClick={props.onShow}>
        <span className={classes.icon}>
         <img className={classes.cartlogo} src='/images/shared/desktop/icon-cart.svg' alt="Cart-icon" />
        </span>
        {hasItems && <span className={classes.badge}>{props.itemAmount}</span>}
      </button>
      
    )
    
}

export default Cart