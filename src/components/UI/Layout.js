import Navbar from '../Navbar/Navbar'

const Layout = (props) => {
    return (
        <>
        <Navbar onShow={props.onShow} />
        <main>{props.children}</main>
        </>
    )
}

export default Layout