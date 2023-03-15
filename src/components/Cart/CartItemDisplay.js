import classes from './CartItemDisplay.module.css'

const CartItemDisplay = (props) => {
    const formattedPrice = props.price.toLocaleString('en-US')

    return (
    
         <div className={classes['cart-items']}>
        <div className={classes['product']}>
            <img className={classes['product-image']} src={props.image} alt={props.name}/>
            <div className={classes['product-details']}>
                <p className={classes['product-name']}>{props.name}</p>
                <p className={classes['product-price']}>$ {formattedPrice}</p>
            </div>
            </div>
            <div className={classes['product-quantity']}>
                <button onClick={props.onRemove}>-</button>
                <span>{props.amount}</span>
                <button onClick={props.onAdd}>+</button>
            </div>
            </div>
 
   

    )
}

export default CartItemDisplay