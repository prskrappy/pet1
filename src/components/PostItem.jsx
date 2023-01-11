import React from "react";
import Counter from "./UI/Counter/Counter";
import classes from "./UI/button/MyButton.module.css"

const PostItem = (props) => {
    
    return (
        <div className="post">
            <div className="post_content">
                <strong>{props.number} {props.post.tittle}</strong>
                <div>
                    {props.post.body}
                </div>
                <Counter/>
            </div>
            <div className="post__btns">
                <button onClick={() => props.remove(props.post)} className={classes.myBtn}>delete post</button>
            </div>
      </div>
    )
}

export default PostItem;