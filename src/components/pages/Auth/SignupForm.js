import React, { useState } from 'react'
import { FaUserAlt } from 'react-icons/fa'
import { GoMail } from 'react-icons/go'
import { IoIosLock } from 'react-icons/io'
import { Link } from 'react-router-dom'
import './styles/SignupForm.scss'
import { FormattedMessage } from "react-intl";

const SignupForm = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    return (
        <div className="form-container">
            <form actions=''>
                <h6><FormattedMessage id="sign-up-title" /></h6>

                <div className="input-content">
                    <p><FormattedMessage id="sign-up-name" />*</p>
                    <div className="inner-input-content">
                        <span><FaUserAlt /></span>
                        <input
                            type='text'
                            name='firstname'
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                            placeholder='Enter your first name'
                            classname='auth-form-input'
                        />
                    </div>
                </div>
                <div className="input-content">
                    <p><FormattedMessage id="sign-up-surname" />*</p>
                    <div className='inner-input-content'>
                        <span><FaUserAlt /></span>
                        <input
                            type='text'
                            name='lastname'
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                            placeholder='Enter your last name'
                            classname='auth-form-input'

                        />
                    </div>
                </div>
                <div className='input-content'>
                    <p><FormattedMessage id="sign-up-email" />*</p>
                    <div className='inner-input-content'>
                        <span><GoMail /></span>
                        <input
                            type='email'
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Enter your email'
                            classname='auth-form-input'
                        />
                    </div>
                </div>
                <div className='input-content' >
                    <p><FormattedMessage id="sign-up-password" />*</p>
                    <div className='inner-input-content' >
                        <span><IoIosLock /></span>
                        <input
                            tpye='password'
                            name='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Enter your password'
                            classname='auth-form-input'
                        />
                    </div>
                </div>
                <div className='input-content' >
                    <p><FormattedMessage id="sign-up-confirmpassword" />*</p>
                    <div className='inner-input-content'>
                        <span><IoIosLock /></span>
                        <input
                            type='password'
                            name='password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder='Enter your password'
                            className='auth-form-input'
                        />
                    </div>
                </div>

                <div className='agree-terms-row'>
                    <div className='inner-row'>
                        <label className='form-label-checkbox'>
                            <FormattedMessage id="sign-up-proceeding" />
                            <Link to='/'> <FormattedMessage id="sign-up-terms" /> </Link>
                        </label>
                    </div>
                </div>

                <div className='button-container'>
                    <button type='submit' className='submit-button'><FormattedMessage id="sign-up-Account" /></button>
                </div>
                <p className='text'>
                    <FormattedMessage id="sign-up-Already" />
                    <Link to='/Login'>  <FormattedMessage id="sign-up-LogIn" /></Link>
                </p>
            </form >

        </div >
    )
}

export default SignupForm
