import { useContext } from "react"
import cartContext from '../../store/cart-context'
import SummaryItems from "./SummaryItems"
import classes from './Summary.module.css'

const Summary = (props) => {
    const cartCtx = useContext(cartContext)
    const grandTotal = cartCtx.grandTotal.toLocaleString('en-US')
    const total = cartCtx.total.toLocaleString('en-US')
    const calculatedVat = cartCtx.calculatedVat.toLocaleString('en-US')
    const shipping = cartCtx.shipping.toLocaleString('en-US')



    const summaryItems = cartCtx.items.map(item => (
        <SummaryItems 
        key={item.id}
        id={item.id}
        image={item.image}
        name={item.name}
        price= {item.price}
        amount={item.amount} />
    ))


    return (
        <div className={classes['summary-container']}>
            <h2 className={classes['summary-title']}>summary</h2>
            {!props.hasItems ? summaryItems : <p className={classes['empty-cart']}>No Items in cart</p>}
            <div className={classes.summary}>
            <div className={classes['summary-props']}>
                <p>total</p>
                <p>shipping</p>
                <p>vat(included)</p>
                <div className={classes['summary-props-grand']}>
                <p>grandtotal</p>
                </div>
            </div>
            <div className={classes['summary-values']}>
                <p>$ {total}</p>
                <p>$ {shipping}</p>
                <p>$ {calculatedVat}</p>
                <div className={classes['summary-value-grand']}>
                <p >$ {grandTotal}</p>
                </div>
            </div>      
        </div>
        <button form={props.form} className={props.buttonClass} disabled={props.hasItems} type='submit' >continue & pay</button>
        </div>
    )

}

export default Summary