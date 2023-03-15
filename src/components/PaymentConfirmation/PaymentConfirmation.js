import PaymentConfirmationLayout from "../UI/PaymentConfirmationLayout";
import { useContext, useState } from "react";
import cartContext from "../../store/cart-context";
import Button from "../UI/Button";
import PaymentConfirmationContent from "./PaymentConfirmationContent";
import classes from './PaymentConfirmation.module.css'

const SuccessfulPayment = (props) => {
    const cartCtx = useContext(cartContext)
    const [show, setShow] = useState(false)
    const grandTotal = cartCtx.grandTotal.toLocaleString('en-US')
    const dataSplittingDisplay = show ? cartCtx.items : cartCtx.items.slice(0,1)

    const closePaymentConfirmation = () => {
        cartCtx.removeItems()
        props.onClose()
    }
    const itemsBorderClass = show ? classes['list-border'] : ''
    const confirmationPaymentItems = dataSplittingDisplay.map(item => ( 
        <PaymentConfirmationContent 
        key={item.id}
        price={item.price}
        id={item.id}
        image = {item.image}
        name= {item.name}
        amount = {item.amount}
        borderClass = {itemsBorderClass}
        />
    ))
  
    const hasMoreThanOneItem = cartCtx.items.length > 1

    const confirmationClick = () => {
        setShow(!show)
    }
  
    return (
        <PaymentConfirmationLayout  onClick={closePaymentConfirmation}>
            <div className={classes['confirmation-container']}>
            <img className={classes['confirmation-logo']} src="./images/shared/desktop/icon-check-mark.svg" alt="check-mark" />
            <h1>thank you</h1>
            <h1>for your order</h1>
            <p className={classes['confirmation-text']}>You will receive an email confirmation shortly.</p>
            <div className={classes['confirmation-info-container']}>
                <div className={classes['confirmation-info']}>
                <ul className={ classes['products-list']}>
                {confirmationPaymentItems}
                    </ul>
                    <span className={itemsBorderClass}></span>
            <div className={classes['btn-container']}>
        
            {hasMoreThanOneItem && <button className={classes['show-more-less-btn']} onClick={confirmationClick}> {show ?  `View less` :  `and ${cartCtx.items.length - 1} other item(s)`}  </button>}
            </div>
                </div>
                <div className={classes['grand-price-container']}>
                    <p className={classes['grand-title']}>grand total</p>
                <p className={classes['grand-price']}>$ {grandTotal}</p>
                </div>
          
            </div>
            <Button className={classes.btn} to={'/'} title={'back to home'} onClick={closePaymentConfirmation}/>
            </div>
        </PaymentConfirmationLayout>
    )
}

export default SuccessfulPayment