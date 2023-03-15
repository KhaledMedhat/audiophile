import classes from './Cash.module.css'
const Cash = () => {
    return (
        <div className={classes['cash-container']}>
        <img  src="./images/checkout/icon-cash-on-delivery.svg" alt="Cash-Icon" />
        <p >The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
    </div>
    )
}

export default Cash