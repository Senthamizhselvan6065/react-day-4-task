import React from 'react'
import { useNavigate } from 'react-router-dom'

const ForgetPage = () => {
  const navigate = useNavigate()
  return (
    <div className="forget">
        <div className="forget-inner-card">
            <div className="forget-middle-card">
                 <div className="forget-main-card">
                    <h2>Forgot Your Password ?</h2>
                    <p>We get it,stuff happens. Just enteryour email address below and we'll send you a link to reset your password.</p>
                    <div className="input-filed">
                        <input type="email" placeholder='Enter Your Email...'/>
                        <button className="reset-password">Reset Password</button>
                    </div>
                    <div className="create">
                        <p onClick={()=>navigate('/create/account')}>Create an Account !</p>
                        <p onClick={()=>navigate('/login')}>Already have an account ? Login !</p>
                       <p onClick={()=>navigate('/')}>Dashboard...!</p>
                    </div>
                 </div> 
            </div>
        </div>
    </div>
  )
}

export default ForgetPage