import React from 'react'
import {
   FaFacebook,
   FaGoogle
} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const CreateAccount = () => {
   const navigate = useNavigate()
  return (
    <div className="create-account">
        <div className="create-card">
                <h2>Create an Account...!</h2>
            <div className="input-filed">
                <input type="text" placeholder='First Name...'/>
                <input type="text" placeholder='Last Name...'/>
                <input type="text" placeholder='Email Address...'/>
                <input type="password" placeholder='Password...'/>
                <input type="text" placeholder='Repeat Password...'/>
                <button className="register">Register Account</button>
            </div>
            <div className="create-account-button">
                <button className="create-btn-google"><span><FaGoogle /></span>Register with Google</button>
                <button className="create-btn-facebook"><span><FaFacebook /></span>Register with Facebook</button>
            </div>
            <div className="forger-password">
                <p onClick={()=>navigate('/')}>Dashboard...!</p>
                <p onClick={()=>navigate('/forget/password')}>Forget Password ?</p>
                <p onClick={()=>navigate('/login')}>Already have an account ? Login..!</p>
            </div>
        </div>
    </div>
  )
}

export default CreateAccount