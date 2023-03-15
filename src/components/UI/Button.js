import { Link } from "react-router-dom"
import classes from './Button.module.css'
const Button = (props) => {
    return(
        <Link onClick={props.onClick} to={props.to} className={`${classes.button} ${props.className}`}>
           {props.title}
        </Link>
    )
}

export default Button