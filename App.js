import './App.css';

import Header from './components/header/Header';
import productHolder from './components/product/ProductHolder';
import CartHolder from './components/cart/CartHolder';
import Home from './components/Home';
import Description from './components/description/Description';
import Login from './components/Login/Login'
import SignUp from './components/Login/Signup';

import { Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login,  logout } from './redux/reducers/loginSlice';
import NotFound from './components/NotFound';


function App(){
    const isLoggedIn = useSelector((state) => state.loginHandler.isLoggedIn)
    const dispatch = useDispatch();


    return (
        <div className='App'>
            <Header/>

            <Routes>
                <Route index element={<Home></Home>}/>
                <Route path='store/:category' element={<productHolder/>}/>
                <Route path='description/:category/:id' element={<Description/>}/>
                <Route path='cart' element={isLoggedIn ? <CartHolder/> : <Login/>} />
                <Route path='cart' element={isLoggedIn ? <CartHolder/> : <Login/>} />
                <Route path='login' element={<Login/>}/>
                <Route path='signup' element={<SignUp/>}/>
                <Route path='*' element={<NotFound />}/>
            </Routes>
        </div>
    )

}
export default App;

