import React from 'react'
import '../App.css';
import { SidebarData } from './SidebarData';

const Sidebar = () => {
  return (
    <nav className='Sidebar'>
      <div className='image-text'>
        <span className='image'>
          <img src='logo.png' alt='logo'/>
        </span>  
      </div>

      <ul className='SidebarList'>  
        {SidebarData.map((val, key) => {
          return ( 
            <li 
              key={key}
              className='row' 
              id={window.location.pathname == val.link ? "active" : ""}
              onClick={() => {
                window.location.pathname = val.link
              }}
            >
              <div id='icon'>{val.icon}</div>
              <div id='title'>
                {val.title}
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  )
}

export default Sidebar