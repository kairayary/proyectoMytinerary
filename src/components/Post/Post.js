import React from "react";
import { Link } from "react-router-dom";
import "./Post.css";

function Post(props) {
    return (
      <div className="post">
        <img src={props.img}
         className="card__img" />
        <div className="post__body">
          <h2 className="post__title">{props.title}</h2>
          <p className= "post__description">{props.description}</p>
         {/*  <button className="post__likes">{props.likes}</button>
          <button className="post__comment">{props.comment}</button>*/}
          <Link to="/Cities">
          <button className="post__btn">More</button>
          </Link>
        </div>
      </div>
    );
};

export default Post;