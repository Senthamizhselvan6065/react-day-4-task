import React from 'react'
import Core from '../Core/Core'

const Dashboard = () => {
  return (
     <Core title="Dashboard">
          <div className="dashboard">
              <div className="content-color">
                <div className="color color-primary">
                  <h3>Primary</h3>
                  <p>#4e73df</p>
                </div>
                <div className="color color-success">
                  <h3>Success</h3>
                  <p>#1cc88a</p>
                </div>
                <div className="color color-info">
                  <h3>Info</h3>
                  <p>#36b9cc</p>
                </div>
                <div className="color color-warning">
                  <h3>Warning</h3>
                  <p>#f6c23e</p>
                </div>
                <div className="color color-danger">
                  <h3>Danger</h3>
                  <p>#e74a3b</p>
                </div>
                <div className="color color-dark">
                  <h3>Dark</h3>
                  <p>#5a5c69</p>
                </div>
              </div>
              <div className="content-box">
                 <h2>Development Approach</h2>
                 <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom components and custom utility classes.</p>
                 <p>Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.</p>
              </div>
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
          </div>
     </Core>
  )
}

export default Dashboard