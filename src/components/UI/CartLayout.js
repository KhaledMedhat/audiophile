import ReactDOM from 'react-dom'
import classes from './CartLayout.module.css'


const Backdrop = (props) => {
    return (
        <div className={classes.backdrop} onClick={props.onClick} /> 
    )
}

const ModalOverlay = (props) => {
    return (
        <div className={classes.overlay}>
            <div className={classes.content}>
            {props.children}
            </div>
        </div>
    )
}

const portalElement = document.getElementById('cart-layout')

const CartLayout = (props) => {
    return (
        <>
        {ReactDOM.createPortal(<Backdrop onClick={props.onClick} /> , portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay> , portalElement)}
        
        </>
    )
}

export default CartLayout