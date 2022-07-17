import React from 'react'
import Nav from '../../components/shared/Navbar/Nav';
import Footer from '../../components/shared/Footer/Footer';
import SignupComponents from '../../components/pages/Auth/SignupComponents'


const Signup = () => {
    return (
        <div className='signup-page'>
            <Nav />
            <SignupComponents />
            <Footer />
        </div>
    )
}

export default Signup
