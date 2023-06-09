import React, { useEffect } from 'react';
import  './sidebar.scss';
import { useSelector } from 'react-redux';
export default function SideNavbar() {
  const toggleSidebar=useSelector((state)=> state.uiControls.isToggle);

  return (
    <div className={`sidebar  ${toggleSidebar}`}>  
        <ul className='ul-0'>
            <li><div className='sidebar-item'><span  ><i className="fas fa-chart-line sidebar-icon"></i></span><span className='sidebar-title'>Dashboard</span></div></li>
            <li><div className='sidebar-item'><span><i className="fas fa-chart-line sidebar-icon"></i></span><span className='sidebar-title'>Keywords</span><i className="fas fa-chevron-right"></i></div>
                <ul className='ul-1'>
                    <li><div className='sidebar-item'><span><i className=" sidebar-icon"></i></span><span className='sidebar-title'>Add Item</span></div></li>
                    <li><div className='sidebar-item'><span><i className=" sidebar-icon"></i></span><span className='sidebar-title'>Add Category</span></div></li>
                </ul>    
            </li>
        </ul>
    </div>
  )
}
