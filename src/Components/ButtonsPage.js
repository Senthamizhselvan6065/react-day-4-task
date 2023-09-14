import React from 'react'
import Core from '../Core/Core'
import {
  FaFacebook, FaGoogle
} from 'react-icons/fa'
import {
  RiDeleteBin7Fill
} from 'react-icons/ri'
import {
  PiWarningFill
} from 'react-icons/pi'
import {
  CgDanger
}  from 'react-icons/cg'
import {
  BsArrowRightSquareFill,
  BsInfoSquareFill
} from 'react-icons/bs'
import {
  MdDangerous
} from 'react-icons/md'
import { 
   BiBug,
   BiChat,
} from 'react-icons/bi'

const ButtonsPage = () => {
  return (
     <Core title="Buttons">
        <div className='button'>
             <div className="button-box">
                 <div className="circle-buttons">
                     <h3>Circle Buttons</h3>
                     <p>Use Font Awesome Icons (included with this theme package) along with the circle buttons as shown in the examples below!</p>
                     <div className="btn-circle">
                        <p>.btn-circle</p>
                        <span className='fa-1'><FaFacebook /></span>
                        <span className='fa-2'><BsArrowRightSquareFill /></span>
                        <span className='fa-3'><PiWarningFill /></span>
                        <span className='fa-4'><CgDanger /></span>
                        <span className='fa-5'><RiDeleteBin7Fill /></span>
                     </div>
                     <div className="btn-sm">
                        <p>.btn-circle</p>
                        <span className='fa-1'><FaFacebook /></span>
                        <span className='fa-2'><BsArrowRightSquareFill /></span>
                        <span className='fa-3'><PiWarningFill /></span>
                        <span className='fa-4'><CgDanger /></span>
                        <span className='fa-5'><RiDeleteBin7Fill /></span>
                     </div>
                     <div className="btn-lg">
                        <p>.btn-circle</p>
                        <span className='fa-1'><FaFacebook /></span>
                        <span className='fa-2'><BsArrowRightSquareFill /></span>
                        <span className='fa-3'><PiWarningFill /></span>
                        <span className='fa-4'><CgDanger /></span>
                        <span className='fa-5'><RiDeleteBin7Fill /></span>
                     </div>
                 </div>
                 <div className="brand-buttons">
                    <h3>Brand Buttons</h3>
                    <p>Google and Facebook buttons are available featuring each company's respective brand color. They are used on the user login and registration pages.</p>
                    <p>You can create more custom buttons by adding a new color variable in the _variables.scss file and then using the Bootstrap button variant mixin to create a new style, as demonstrated in the _buttons.scss file.</p>
                    <button className="btn-google"><FaGoogle />.btn-google</button>
                    <button className="btn-facebook"><FaFacebook />.btn-facebook</button>
                 </div>
             </div>
             <div className="split-button">
                 <h3>Split Buttons with Icon</h3>
                 <p>Works with any button colors, just use the .btn-icon-split class and the markup in the examples below. The examples below also use the .text-white-50 helper class on the icons for additional styling, but it is not required.</p>
                 <div className="button-flex">
                   <div className="button-1">
                    <button className="split split-primary"><span><MdDangerous /></span>Split Button Primary</button>
                    <button className="split split-success"><span><BsArrowRightSquareFill /></span>Split Button Success</button>
                    <button className="split split-info"><span><BsInfoSquareFill /></span>Split Button Info</button>
                    <button className="split split-warning"><span><BiBug /></span>Split Button Warning</button>
                    <button className="split split-danger"><span><BiChat /></span>Split Button Danger</button>
                   </div>
                   <div className="button-2">
                       <p>Also works with small and large button classes!</p>
                      <button className="split split-small"><span><FaGoogle /></span>Split Button Small</button>
                      <button className="split split-large"><span><FaFacebook /></span>Split Button Large</button>
                   </div>
                 </div>
             </div>
        </div>
     </Core>
  )
}

export default ButtonsPage