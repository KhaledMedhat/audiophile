import data from '../../data/data.json'
import { useLocation } from 'react-router-dom'
import Products from './Products'
import Categories from '../Categories/Categories'
import About from '../About/About'
import Footer from '../Footer/Footer'
import PageBanner from '../Banner/PageBanner'


const ProductsList = () => {
    const URL = useLocation()
    const ProductsData  = data.products
    const filteredProducts = ProductsData.filter(product => {
        if(URL.pathname == '/headphones'){
            return product.category === 'headphones'
        }
        if(URL.pathname == '/speakers'){
           return product.category === 'speakers'
        }
        if(URL.pathname == '/earphones'){
           return product.category === 'earphones'
        }
    })

    const products = filteredProducts.map(product => {
        return (   
             <Products 
             key={product.id} 
             name={product.name} 
             description={product.description}
             image={product.image}
             slug={product.slug}
             new={product.new}
              />
        )
    })

    return(
        <>          
                    { URL.pathname === '/headphones' ? 
                <PageBanner title={'headphones'} />
                :URL.pathname === '/speakers' ? 
                <PageBanner title={'speakers'} />
                    :URL.pathname === '/earphones' ? 
                <PageBanner title={'earphones'} />
                : false}
        {products}
        <Categories />
        <About />
        <Footer />
        </>
    )

}

export default ProductsList