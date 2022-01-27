import { Avatar } from "@material-ui/core";
import React from "react";
import InputOptions from "./InputOptions";
import "./Post.css";
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

function Post({ name, description, message, photoUrl, avatar }) {
  return (
    <div className="post">
      <div className="post_header">
        <Avatar src={avatar} />
        <div className="post_info">
          <h2>{name}</h2>
          <p>{description} </p>
        </div>
      </div>
      <div className="post_body">
        <p>{message}</p>
      </div>
      <div className="post_buttons">
          <InputOptions Icon={ThumbDownOutlinedIcon} title="Like" color='gray'/>
          <InputOptions Icon={ChatOutlinedIcon} title="Comment" color='gray'/>
          <InputOptions Icon={ShareOutlinedIcon} title="Share" color='gray'/>
          <InputOptions Icon={SendOutlinedIcon} title="Send" color='gray'/>
      </div>
    </div>
  );
}

export default Post;
