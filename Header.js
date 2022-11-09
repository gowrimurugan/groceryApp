import './Header.css';
import  Search  from './Search';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {logout} from '../../redux/reducers/loginSlice';
import { Link, useNavigate } from 'react-router-dom';
import CartIcon from '../cart/CartIcon';


function Header(){
    const navigateTo = useNavigate()
    const isLoggedIn = useSelector((state) => state.loginHandler.isLoggedIn)
    const user = useSelector((state) => state.loginHandler.user)
    const cartList = useSelector((state) => state.cartHandler.cart)

    const dispatch = useDispatch()
    const [showNav, setShowNav] = useState(false)

    return(
        <header className='header'>
            <div className='container'>
                <div className='headerWrapper'>
                    <div className='headerLogo'>
                        <Link to='/'>
                            <h1 className='logo'><span className='logoSpan'>Choo</span>fe<span className='logoSpan'>'</span></h1>
                        </Link>
                    </div>
                    {
                        isLoggedIn &&
                        <p className='user'>Welcome <span>{user}</span></p>
                    }
                    <div className='barHolder' onClick={() => {
                        setShowNav(!showNav)
                    }}>
                        <div className='bar'></div>
                        <div className='bar'></div>
                        <div className='bar'></div>
                        {
                            cartList.length > 0 &&
                            <div className='cartDot'></div>
                        }
                    </div>
                    <nav className={showNav ? "nav" : "nav hidden"}>
                        <Search/>
                        <Link to='/' className='navLink' onClick={() => {
                            setShowNav(!showNav)
                        }}>Home</Link>
                        {isLoggedIn ? <Link className='navLink' onClick={() => {
                            setShowNav(!showNav)
                            dispatch(logout())
                        }}>Logout</Link> : <Link className='navLink' to={'login'} onClick={() => {
                            setShowNav(!showNav)
                        }}>Login</Link>}
                        <Link to={'signup'} className='navLink' onClick={() => {
                            setShowNav(!showNav)
                        }}>Signup</Link>
                        <Link to='/cart' className='navLink cartIcon'><CartIcon/></Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;