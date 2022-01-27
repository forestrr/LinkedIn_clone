import { Avatar } from '@material-ui/core';
import React from 'react';
import "./HeaderOption.css"


function HeaderOption({avatar,Icon,title}) {
  return <div className='headeroption'>
      {Icon && <Icon className='headeroption_icon'/> }
      {avatar && <Avatar className="headeroption_icon "src={avatar}/>}
      <h3 className='headeroption_tile'>{title}</h3>
  </div>;
}

export default HeaderOption;
