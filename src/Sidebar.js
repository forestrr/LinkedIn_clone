import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  const recentItems = (topic) => (

    <div className="sidebar_recentItems">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  )
   
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://www.frogx3.com/wp-content/uploads/2018/03/002-wallpapers-marzo-2018-600x375.jpg"
          alt=""
        />
        <Avatar src="https://img.search.brave.com/buXrLRDRn_L-z4nHMAfMAP9uwBqU5uUnhWzfQacQvOg/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9hcGku/dGltZS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTYvMDUv/MTYwNTA0LXNhbHZh/ZG9yLWRhbGktMDEu/anBn"  className="sidebar_avatar" />
        <h2>mohamed afif</h2>
        <h3>afivmd78@gmail.com</h3>
      </div>

      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>who you view</p>
          <p className="sidebar_statNumber">2652</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on posts</p>
          <p className="sidebar_statNumber">2236</p>
        </div>
      </div>

      <div className="sidebar_bottom">
        <h4>Recent</h4>
        {recentItems("reactJS")}
        {recentItems("Node js")}
        {recentItems("Developer")}
        {recentItems("Web design")}
      </div>
    </div>
  );
}

export default Sidebar;
