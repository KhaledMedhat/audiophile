import classes from './Navbar.module.css'
import { NavLink, Link} from 'react-router-dom'
import { useContext, useState } from 'react'
import cartContext from '../../store/cart-context'
import CartButton from './CartButton'
import SmallNavbar from './SmallNavbar'



const Navbar = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const cartCtx = useContext(cartContext)
    const { items } = cartCtx
    const cartItemCount = items.reduce((currNumber , item) => {
        return currNumber + item.amount
    }, 0)

    const openAndCloseNavbarHandler = () => {
        setIsOpen(!isOpen)
    }

    return(
        <header className={classes['header-container']}>
            <nav className={classes['main-container']}>
            <div className={classes.navbar}>
                <div className={classes['smaller-screen-navbar']}>        
                    {!isOpen ? <img onClick={openAndCloseNavbarHandler} className={classes['hamburger-open-close']} src="/images/shared/tablet/icon-hamburger.svg" alt="" /> : <img onClick={openAndCloseNavbarHandler} className={classes['hamburger-open-close']} src="/images/shared/tablet/icon-close-menu.svg" alt="" /> }
                    {isOpen && <SmallNavbar/> }
                    <Link to='/'><img className={classes.logo} src="/images/shared/desktop/logo.svg" alt="audiophile-logo" /></Link>
                </div>
                <Link to='/'><img className={classes['logo-M']} src="/images/shared/desktop/logo.svg" alt="audiophile-logo" /></Link>
            <ul className={classes['navbar-list']}>
                    <li>
                        <NavLink to='/' className={(navData) => navData.isActive ? classes.active : '' }>home</NavLink>
                        </li>
                        <li>
                        <NavLink to='/headphones' className={(navData) => navData.isActive ? classes.active : '' }>headphones</NavLink>
                        </li>
                        <li>
                        <NavLink to='/speakers' className={(navData) => navData.isActive ? classes.active : '' }>speakers</NavLink> 
                        </li>
                        <li>
                        <NavLink to='/earphones' className={(navData) => navData.isActive ? classes.active : '' }>earphones</NavLink>
                        </li>
            </ul>

            
            <CartButton items={cartCtx.items} itemAmount={cartItemCount} onShow={props.onShow} />
          
            </div>
            </nav>
        </header>

    )
}

export default Navbar