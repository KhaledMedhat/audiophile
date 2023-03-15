import ReactDOM from 'react-dom'
import classes from './PaymentConfirmationLayout.module.css'
const PaymentConfirmationBackdrop = (props) => {
    return(
        <div className={classes.backdrop} onClick={props.onClick}/>
    )
}

const PaymentConfirmationModal = (props) => {
    return (
        <div  className={classes.overlay}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    )
}

const portalElement = document.getElementById('successful-payment')

const PaymentConfirmationLayout = (props) => {
    return (
        <>
        {ReactDOM.createPortal(<PaymentConfirmationModal>{props.children}</PaymentConfirmationModal>, portalElement)}
        {ReactDOM.createPortal(<PaymentConfirmationBackdrop onClick={props.onClick}/>, portalElement)}
        </>
    )
}

export default PaymentConfirmationLayout