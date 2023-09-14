import React from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
   const navigate = useNavigate()
  return (
     <div className="login">
        <div className="login-inner-card">
        <div className="login-card">
            <div className="login-main-card">
                 <h3>Login Here...!</h3>
                 <div className="input-filed">
                    <input type="email" placeholder="Enter Your Email..." />
                    <input type="password" placeholder="Enter Your Password..." />
                 </div>
                 <div className="check-box">
                    <input type="checkbox" />
                    <label htmlFor="#">Remember Me...!</label>
                 </div>
                 <div className="login-button">
                    <button className="login-btn">Login...!</button>
                    <button className="login-google"><span><FaGoogle /></span>Login with Google</button>
                    <button className="login-facebook"><span><FaFacebook /></span>Login with Facebook</button>
                 </div>
                 <div className="other">
                     <p onClick={()=>navigate('/')}>Dashboard...!</p>
                     <p onClick={()=>navigate('/forget/password')}>Forget Password ?</p>
                     <p onClick={()=>navigate('/create/account')}>Create Account !</p>
                 </div>
            </div>
        </div>
        </div>
     </div>
  );
};

export default LoginPage;
