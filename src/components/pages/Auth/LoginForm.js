import React, { useState } from 'react'
import { GoMail } from 'react-icons/go'
import { IoIosLock } from 'react-icons/io'
import { Link } from 'react-router-dom'
import './styles/LoginForm.scss'
import { FormattedMessage } from "react-intl";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
        <div className="form-container">
            <form actions=''>
                <h6><FormattedMessage id="log-in-title" /></h6>

                <div className='input-content'>
                    <p><FormattedMessage id="log-in-email" /></p>
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
                    <p><FormattedMessage id="log-in-password" /></p>
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

                <div className='agree-terms-row'>
                    <div className='inner-row'>
                        <input type='checkbox' name='keep-logged' id='keep-logged' />
                        <label htmlFor='keep-logged' className='form-label-checkbox'>
                            <FormattedMessage id="log-in-Remember" />
                        </label>
                    </div>
                    <Link to='/' className='link'><FormattedMessage id="log-in-Forgot" /></Link>
                </div>

                <div className='button-container'>
                    <button type='submit' className='submit-button'><FormattedMessage id="log-in-button" /></button>
                </div>
                <p className='text'>
                    <FormattedMessage id="log-in-New" />
                    <Link to='/Signup'> <FormattedMessage id="log-in-Signup" /></Link>
                </p>


            </form >

        </div >
    )
}

export default LoginForm
