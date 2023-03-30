import ReactDOM from 'react-dom'
import classes from './ResizeableNavLayout.module.css'


const Backdrop = () => {
    return (
        <div className={classes.backdrop}/> 
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

const portalElement = document.getElementById('ResizableNav')

const ResizeableNavLayout = (props) => {
    return (
        <>
        {ReactDOM.createPortal(<Backdrop onClick={props.onClick} /> , portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay> , portalElement)}
        
        </>
    )
}

export default ResizeableNavLayout