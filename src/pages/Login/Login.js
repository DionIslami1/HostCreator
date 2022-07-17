import React from 'react'
import Nav from '../../components/shared/Navbar/Nav';
import Footer from '../../components/shared/Footer/Footer';
import LoginComponents from '../../components/pages/Auth/LoginComponents';

const Login = () => {
    return (
        <div className='login-page'>
            <Nav />
            <LoginComponents />
            <Footer />
        </div>
    )
}

export default Login
