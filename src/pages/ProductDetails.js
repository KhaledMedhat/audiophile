import { useParams, useLocation, useNavigate } from "react-router-dom"
import Button from "../components/UI/Button"
import data from '../data/data.json'
import { useContext, useState, useEffect } from "react"
import cartContext from '../store/cart-context'
import classes from './ProductDetails.module.css'
import Categories from '../components/Categories/Categories'
import About from '../components/About/About'
import Footer from '../components/Footer/Footer'


const ProductDetails = () => {
    const cartCtx = useContext(cartContext)
    const [amount ,setAmount] = useState(1)
    const navigate = useNavigate()
    const location = useLocation()
    const productsData = data.products
    const productId = useParams()
    const productDetails  = productsData.find(product => product.slug === productId.productid)
    const formattedPrice  = productDetails.price.toLocaleString('en-US')
    
 
    useEffect(() => {
        setAmount(1)
    },[location.key])
    
    const productIncludedItemDetails =  productDetails.includedItems.map(item => {
        return (          
                <li key={item.item}>
                 <p className={classes.quantity}>{item.quantity}x</p> <p className={classes['included-names']}>{item.item}</p>
                 </li>
        )
    })


    const productOtherDetails = productDetails.others.map(other => {
        return ( 
         
            <li key={other.slug}>
                <div className={classes['other-image']}>
                <img className={classes['other-image-desktop']} src={other.image.desktop} alt={other.name} />
                <img className={classes['other-image-tablet']} src={other.image.tablet} alt={other.name} />
                <img className={classes['other-image-mobile']} src={other.image.mobile} alt={other.name} />
                </div>
                <p className={classes['other-title']}>{other.name}</p>
                <Button className={classes['other-btn']} to={`/${other.slug}`} title={'see product'}/>
            </li>
          
        )
    })

    const increaseAmount = () => {
        setAmount(amount + 1)
    }

    const decreaseAmount = () => {
        if(amount === 1){
            return
        }
        setAmount(amount - 1)
       
    }
     
    const addToCartHandler = () => {
        cartCtx.addItem({
            id: productDetails.id,
            name: productDetails.shortName,
            price: productDetails.price,
            amount : amount,
            image: productDetails.cartImage,
            slug: productDetails.slug
        })
        
    }


    const previousPage = () => {
        navigate(-1)
    }

    return (
        <>
        <section className={classes.container}>
            <button className={classes['go-back-btn']} onClick={previousPage}>Go Back</button>
            <div className={classes.product}>
               <div className={classes['product-image']} >
               <img className={classes['product-image-desktop']} src={productDetails.image.desktop} alt={productDetails.slug} />
               <img className={classes['product-image-tablet']} src={productDetails.image.tablet} alt={productDetails.slug} />
               <img className={classes['product-image-mobile']} src={productDetails.image.mobile} alt={productDetails.slug} />
               </div>
                <div className={classes['product-info']}>
                {productDetails.new && <p className={classes.new}>new product</p>}
                <h2 className={classes['product-name']}>{productDetails.name}</h2>
                <p className={classes['product-description']}>{productDetails.description}</p>
                <p className={classes['product-price']}>$ {formattedPrice}</p>
                <div  className={classes['buy-section']}>
                    <div className={classes['product-buy']}>
                    <button onClick={decreaseAmount}>-</button>
                    <span>{amount}</span>
                    <button onClick={increaseAmount}>+</button>
                    </div>
                    <div className={classes['add-to-cart-btn']}>
                    <button onClick={addToCartHandler}>add to cart</button>
                    </div>
                </div>
                </div>
            </div>
            <div className={classes['product-additional-info']}>
                <div className={classes['product-features']}>
                    <h2 className={classes.title}>features</h2>
                    <p className={classes.features}>{productDetails.features}</p>
                </div>
                <div className={classes['product-included-items']}>
                    <h2 className={classes.title}>in the box</h2>
                    <ul  className={classes['included-items-list']}>
                    {productIncludedItemDetails}
                    </ul>
                
                </div>
            </div>
                <div className={classes['product-images']}>
                    <div className={classes['image-one']}>
                    <img className={classes['image-one-desktop']} src={productDetails.gallery.first.desktop} alt={productDetails.slug} />
                    <img className={classes['image-one-tablet']} src={productDetails.gallery.first.tablet} alt={productDetails.slug} />
                    <img className={classes['image-one-mobile']} src={productDetails.gallery.first.mobile} alt={productDetails.slug} />
                    </div>
                    <div className={classes['image-two']}>
                    <img className={classes['image-two-desktop']} src={productDetails.gallery.second.desktop} alt={productDetails.slug} />
                    <img className={classes['image-two-tablet']} src={productDetails.gallery.second.tablet} alt={productDetails.slug} />
                    <img className={classes['image-two-mobile']} src={productDetails.gallery.second.mobile} alt={productDetails.slug} />
                    </div>
                    <div className={classes['image-three']} >
                    <img className={classes['image-three-desktop']} src={productDetails.gallery.third.desktop} alt={productDetails.slug} />
                    <img className={classes['image-three-tablet']} src={productDetails.gallery.third.tablet} alt={productDetails.slug} />
                    <img className={classes['image-three-mobile']} src={productDetails.gallery.third.mobile} alt={productDetails.slug} />
                </div>
                    </div>      
                <div className={classes['you-may-title']}>
                    <h2>you may also like</h2>
                </div>
                <div className={classes['product-other-items']}>
                    <ul className={classes['other-items-list']}>
                        {productOtherDetails}
                    </ul>
                </div>
        </section>
          <Categories />
          <About />
          <Footer />
          </>



    )
}

export default ProductDetails