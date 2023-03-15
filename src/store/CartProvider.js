import context from './cart-context'
import { useReducer, useState } from 'react'

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state , action) => {
    if(action.type === 'REMOVE_ITEMS'){
   
        return defaultCartState
    }
    if(action.type === 'ADD_ITEM'){
        const  updatedTotalAmount  = state.totalAmount + action.item.price * action.item.amount
        const existingCartItemIndex = state.items.findIndex((item) => 
            item.id === action.item.id
        )
        const existinCartItem = state.items[existingCartItemIndex]
        let updatedItems;
     
        if(existinCartItem){
          const updatedItem = {
                ...existinCartItem,
                amount : existinCartItem.amount + action.item.amount,
            }
            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex] = updatedItem
        }else {
           
          updatedItems = state.items.concat(action.item)
        } 
        return {
            items : updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    if(action.type === 'REMOVE_ITEM'){
       
        const existingCartItemIndex = state.items.findIndex((item) => 
        item.id === action.id
    )
    const existingItem = state.items[existingCartItemIndex]
    const updatedTotalAmount = state.totalAmount - existingItem.price
    let updatedItems
    if(existingItem.amount === 1){
        updatedItems = state.items.filter(item => item.id !== action.id )
    }else {
        const updatedItem = {...existingItem, amount: existingItem.amount - 1}
        updatedItems = [...state.items]
        updatedItems[existingCartItemIndex] = updatedItem
    }
    return {
        items : updatedItems,
        totalAmount : updatedTotalAmount
    }
    }
    return defaultCartState
}
const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)
    const [allItemsDeletedToast ,setAllItemsDeletedToast] = useState(false)
    const [itemToast , setItemToast] = useState([])

    const vat = 0.20
    const shipping = 50
    const calculatedVat = cartState.totalAmount * vat
    const total = cartState.totalAmount
    const grandTotal = total + calculatedVat + shipping

    const addItemToCartHandler = (item) => {
        dispatchCartAction({
            type:'ADD_ITEM',
            item: item
        })
        setItemToast([...itemToast , item])
    }

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({
            type:'REMOVE_ITEM',
            id: id
        })
    }
    const removeAllItemsFromCartHandler = () => {
        dispatchCartAction({
            type:'REMOVE_ITEMS'
        })
       
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        removeItems: removeAllItemsFromCartHandler,
        grandTotal : grandTotal,
        total: total,
        calculatedVat : calculatedVat,
        shipping : shipping,
        allItemsDeletedToast,
        itemToast,
        setItemToast,
        setAllItemsDeletedToast

    }



    return(
        <context.Provider value={cartContext}>
            {props.children}
        </context.Provider>
    )
}

export default CartProvider