import classes from './ToastLayout.module.css'
import ReactDOM from 'react-dom'
const ToastLayoutModal = (props) => {
    return (
        <div className={classes.overlay}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    )
}

const portalElement = document.getElementById('toast-layout')

const ToastLayout = (props) => {
    return (
        <>
        {ReactDOM.createPortal(<ToastLayoutModal>{props.children}</ToastLayoutModal>, portalElement)}
        </>
    )
}

export default ToastLayout
