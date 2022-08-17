import React from "react";
import './Post.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleCheck, faComment, faRetweet, faHeart, faArrowDownLong} from '@fortawesome/free-solid-svg-icons'
import { Coments } from "./Coments";
import { Reposts } from "./Reposts";
import { Likes } from "./Likes";


function Post({author, content, image, date}) {
  const {name, photo, nickname} = author;
  return (
    <div className="post">
      <div className="main-info">
        <img src={photo} className="avatar"></img>
        <div className="main-info-text">
          <div>
            <span><b>{name}</b></span>
            <FontAwesomeIcon icon={faCircleCheck}/>
            <span className="nick-and-date">{nickname} • {date}</span>
          </div>
          <div>
            <span>{content}</span>
          </div>
        </div>
      </div>

      <img className="image" src={image}></img>

      <div className="interactive-info">
        <div>
          <FontAwesomeIcon icon={faComment}/>
          {Coments()}
        </div>
        <div>
          <FontAwesomeIcon icon={faRetweet}/>
          {Reposts()}
        </div>
        <div>
          <FontAwesomeIcon icon={faHeart}/>
          {Likes()}        
        </div>
        <div>
          <FontAwesomeIcon icon={faArrowDownLong}/>        
        </div>
      </div>
    </div>
  );
}

export default Post;