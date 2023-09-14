import React from 'react'
import {Link} from 'react-router-dom'
import { 
  LuLayoutDashboard
 } from "react-icons/lu";
 import { 
  AiFillCreditCard
 } from "react-icons/ai";
 import { 
  BsFillMenuButtonWideFill
 } from "react-icons/bs";
 import { 
  RiLoginBoxFill
 } from "react-icons/ri";
 import { 
  MdAccountBox,
  MdOutlinePassword
 } from "react-icons/md";

const Core = ({title, children}) => {
  return (
    <div className='core'>
         <div className="side-bar">
            <div className="nav-buttons">
                <ul>  
                   <li><Link className='link-nav' to={'/'}><span className='link-nav-1'><LuLayoutDashboard /></span>Dashboard</Link></li>
                   <li><Link className='link-nav' to={'/card'}><span className='link-nav-2'><AiFillCreditCard /></span>Cards</Link></li>
                   <li><Link className='link-nav' to={'/button'}><span className='link-nav-3'><BsFillMenuButtonWideFill /></span>Button</Link></li>
                   <li><Link className='link-nav' to={'/login'}><span className='link-nav-4'><RiLoginBoxFill /></span>Login</Link></li>
                   <li><Link className='link-nav' to={'/forget/password'}><span className='link-nav-5'><MdOutlinePassword /></span>Forgot Password</Link></li>
                   <li><Link className='link-nav' to={'/create/account'}><span className='link-nav-6'><MdAccountBox /></span>Create Account</Link></li>
                </ul>   
            </div> 
          </div> 
          <div className="content-flex">
              <div className="title">{title}</div>
              <div className="content">{children}</div> 
          </div>   
    </div>
  )
}

export default Core