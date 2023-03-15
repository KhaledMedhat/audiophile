import CartLayout from '../UI/CartLayout'
import { useContext } from 'react'
import CartContext from '../../store/cart-context'
import CartItemDisplay from './CartItemDisplay'
import EmptyCart from './EmptyCart'
import Button from "../UI/Button"
import classes from './Cart.module.css'



const Cart = (props) => {
   
    const cartCtx = useContext(CartContext)
    const formattedTotalPrice = cartCtx.totalAmount.toLocaleString('en-US')
    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id)
    }

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item, amount:1})
    }
    const hasItem = cartCtx.items.length > 0
    const removeAllCartItems = () => {
        cartCtx.removeItems()
        cartCtx.setAllItemsDeletedToast(true)
    }

    const cartItemCount = cartCtx.items.reduce((currNumber , item) => {
        return currNumber + item.amount
    }, 0)


    const cartItems = (
        <div className={classes['cart-container']}>
            <div className={classes['cart-header']}>
            <p className={classes['cart-header-title']}>cart ({cartItemCount})</p>
        <button className={classes['cart-delete-all-btn']} onClick={removeAllCartItems}>Remove All</button>
            </div>
            {cartCtx.items.map(item => (
                <CartItemDisplay
                key={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                amount={item.amount}
                onRemove={cartItemRemoveHandler.bind(null, item.id)}
                onAdd={cartItemAddHandler.bind(null, item)}
                onClose={props.onClose}
                 />
            ))}
        <div className={classes['cart-total-price']}>
            <p className={classes['cart-total-text']}>total</p>
            <p className={classes['cart-price-text']}>$ {formattedTotalPrice}</p>
    </div>
    <Button className={classes['check-out-btn']} onClick={props.onClose} to={'/checkout'} title={'checkout'} />
    </div>   
    )

    return (
        <CartLayout   onClick={props.onClose}>
            {!hasItem ? <EmptyCart /> : cartItems }
        </CartLayout>
    )
}

export default Cart