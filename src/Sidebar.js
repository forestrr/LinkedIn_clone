import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css'
function Sidebar() {
  return <div className='sidebar' >
      <div className="sidebar_top">
          <img src="" alt="" />
          <Avatar className='sidebar_avatar'/>
          <h2>mohamed afif</h2>
          <h2>afivmd78@gmail.com</h2>
      </div>
      <div className="sidebar_stats">
          <div className="sidebar_stat">
              <p>who you view</p>
              <p className="sidebar_statNumber">2652</p>
          </div>
          <div className="sidebar_stat">view on the posts</div>
              <p className="sidebar_statNumber">2236</p>
      </div>
      <div className="sidebar_bottom">
          <p>Recent</p>
      </div>
  </div>;
}

export default Sidebar;
