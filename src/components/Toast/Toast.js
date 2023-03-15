import classes from './Toast.module.css'
import { useEffect, useContext } from 'react';
import cartContext from '../../store/cart-context';
import ToastLayout from '../UI/ToastLayout';

const Toast = () => {
    const cartCtx = useContext(cartContext)

    const deleteItemToastHandler = (id) => {
      const toastIndex = cartCtx.itemToast.findIndex(toast => toast.id === id)
      cartCtx.itemToast.splice(toastIndex, 1)
        cartCtx.setItemToast([...cartCtx.itemToast])
    }

    const deleteEmptyCartToastHandler = () => {
      cartCtx.setAllItemsDeletedToast(false)
      cartCtx.setItemToast([])
    }
  
    

      useEffect(() => {
        const interval = setInterval(() => {
          if(cartCtx.itemToast.length){
            deleteItemToastHandler(cartCtx.itemToast[0].id)
          }
          if(cartCtx.allItemsDeletedToast){
            deleteEmptyCartToastHandler()
          }
        }, 2000);
    
        return () => {
          clearInterval(interval);
        }
      }, [cartCtx.itemToast, cartCtx.allItemsDeletedToast]);

      const addingItemsNotification  =
      <ul className={classes['notification-container']}>
            {cartCtx.itemToast.map((content, i) => (
        <li
          key={i}
          className={classes['notification']}>
          <button className={classes['notification-close-btn']} onClick={() => deleteItemToastHandler(content.id)}>&#10005;</button>
          <div className={classes['notification-content']}>
            <img className={classes['notification-image']} src="/images/shared/desktop/icon-check-mark2.svg" alt="check-mark" />
            <p className={classes['notification-msg']}>Item <span className={classes['toast-item-name']}>'{content.slug}'</span> was added to cart</p>
          </div>
        </li>
      ))}
      </ul>

      const deleteAllItemsNotification =         
      <div className={classes['notification']}>
          <button className={classes['notification-close-btn']} onClick={deleteEmptyCartToastHandler}>&#10005;</button>
          <div className={classes['notification-content']}>
            <img className={classes['notification-image']} src="/images/shared/desktop/icon-check-mark2.svg" alt="check-mark" />
            <p className={classes['notification-msg']}>Cart is empty</p>
          </div>
    </div>

      
    return (
        <ToastLayout>
          {cartCtx.allItemsDeletedToast ? deleteAllItemsNotification : addingItemsNotification}
         
        </ToastLayout>
      
    )

}
export default Toast