import React from "react";
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import HeaderOption from "./HeaderOption";
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
  return (
    <div className="header ">
      <div className="header_left">
        <img src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1643211708~hmac=9daf2920e51a6bd06c111346a97b8597" alt="" />
      <div className="header_search">
          <SearchIcon/>
          <input type="text" />
      </div>
      </div>
      <div className="header_right">
          <HeaderOption Icon={HomeIcon} title='Home' />
          <HeaderOption Icon={PeopleAltIcon} title='Network' />
          <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
          <HeaderOption Icon={MessageIcon} title='Messaging' />
          <HeaderOption Icon={NotificationsIcon} title='Notification' />
          <HeaderOption avatar="https://img.search.brave.com/buXrLRDRn_L-z4nHMAfMAP9uwBqU5uUnhWzfQacQvOg/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9hcGku/dGltZS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTYvMDUv/MTYwNTA0LXNhbHZh/ZG9yLWRhbGktMDEu/anBn" title='Me'/>
                
      </div>

    </div>
  );
}

export default Header;
