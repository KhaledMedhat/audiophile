import { Route, Routes} from 'react-router-dom';
import './App.css';
import Layout from './components/UI/Layout'
import Speakers from './pages/Speakers'
import Headphones from './pages/Headphones'
import Earphones from './pages/Earphones'
import Home from './pages/Home'
import ProductsDetails from './pages/ProductDetails'
import { useState, useEffect, useRef } from 'react';
import CartProvider from "./store/CartProvider"
import Cart from './components/Cart/Cart';
import PaymentConfirmation from './components/PaymentConfirmation/PaymentConfirmation'
import Toast from './components/Toast/Toast';
import Checkout from './pages/Checkout'
import { CSSTransition } from "react-transition-group";
import './App.css'



function App() {

  const [cartDisplay, setCartDisplay] = useState(false)
  const [confirmation, setConfirmation] = useState(false)

  const showConfirmation = () => {
    setConfirmation(!confirmation)
  }

  const closeConfirmation = () => {
    setConfirmation(!confirmation)
 
  }

  const showCart = () => {
    setCartDisplay(!cartDisplay)
  }

  const closeCart = () => {
    setCartDisplay(!cartDisplay)
  }

  useEffect(() => {
    if(cartDisplay || confirmation){
      document.body.style.overflow = 'hidden'
    }else {
      document.body.style.overflow = 'auto'
    }
  }, [cartDisplay, confirmation])
  return (
    <CartProvider>
    <Layout onShow={showCart}>
    <Toast/>
      {cartDisplay && <Cart isShown={cartDisplay} onClose={closeCart}/>}
      {confirmation && <PaymentConfirmation onClose={closeConfirmation} />}
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/speakers' element={<Speakers />}/>
        <Route path='/earphones' element={<Earphones />}/>
        <Route path='/headphones' element={<Headphones />}/>
        <Route path='/checkout' element={<Checkout showConfirmation={showConfirmation} />}/>
        <Route path='/:product/:productid' element={<ProductsDetails />}/>
  
      </Routes>
    </Layout>
    </CartProvider>
  );
}

export default App;
