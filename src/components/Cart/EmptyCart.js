import classes from './EmptyCart.module.css'


const EmptyCart = () => {
    return (
        <div className={classes['empty-cart-container']}>
            <p className={classes['empty-cart-text']}>Your cart is empty</p>
            <img className={classes['cart-logo']} src='/images/shared/desktop/icon-cart2.svg' alt="cart" />
        </div>
    )
}

export default EmptyCart