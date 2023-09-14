import React from 'react'
import Core from '../Core/Core'

const Cards = () => {
  return (
       <Core title="Cards">
           <div className="cards">
                  <div className="card-box-1">
                     <div className="box box-1">
                        <h4>EARNINGS (MONNTHLY)</h4>
                         <p>$40,000</p>
                     </div>
                     <div className="box box-2">
                        <h4>EARNINGS (ANNUAL)</h4>
                        <p>$215,000</p>
                     </div>
                     <div className="box box-3">
                        <h4>TASKS</h4>
                        <div className="input">
                        <p>50%</p>
                        <input type="range" className='range'/>
                        </div>
                     </div>
                     <div className="box box-4">
                        <h4>PENDING REQUESTS</h4>
                        <p>18</p>
                     </div>
                  </div>
                  <div className="card-box-2">
                     <div className="content box-1">
                        <h3>Default Card Example</h3>
                        <p>This card uses Bootstrap's default styling with no utility classes added. Global styles are the only things modifying the look and feel of this default card example.</p>
                     </div>
                     <div className="content box-2">
                        <h3>Dropdown Card Example</h3>
                        <p>Dropdown menus can be placed in the card header in order to extend the functionality of a basic card. In this dropdown card example, the Font Awesome vertical ellipsis icon in the card header can be clicked on in order to toggle a dropdown menu.</p>
                     </div>
                     <div className="content box-3">
                        <h3>Basic Card Example</h3>
                        <p>The styling for this basic card example is created by using default Bootstrap utility classes. By using utility classes, the style of the card component can be easily modified with no need for any custom CSS!</p>
                     </div>
                     <div className="content box-4">
                        <h3>Collapsable Card Example</h3>
                        <p>This is a collapsable card example using Bootstrap's built in collapse functionality. Click on the card header to see the card body collapse and expand</p>
                     </div>
                  </div>
           </div>
       </Core>  
  )
}

export default Cards