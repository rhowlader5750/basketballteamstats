
import Header from './header/Header'
import { Outlet } from 'react-router-dom'
import Home from './home/Home'

const Layout = () => { 
    return(
        <div className = "App">
            <Header/>
            <Home/>
            <div className = "page">
                <Outlet />
            </div>
        </div>
    ) 
}

export default Layout