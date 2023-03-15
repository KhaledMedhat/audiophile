import BestSelling from '../components/BestSelling/BestSelling'
import Categories from '../components/Categories/Categories'
import About from '../components/About/About'
import Footer from '../components/Footer/Footer'
import MainPanner from '../components/Banner/MainBanner'
const Home = () => {
    return (
        <>
        <MainPanner/>
        <Categories />
        <BestSelling />
        <About />
        <Footer />
        </>
    )
}

export default Home