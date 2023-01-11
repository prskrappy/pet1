import React, {useState} from 'react';
import MyButton from "./button/MyButton";
import MyInput from "./input/MyInput";;

const PostForm = ({create}) => {
    const [post, setPost] = useState({tittle: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()    
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({tittle: '', body: ''})
    }

    return (
        <form>
            <MyInput
                value={post.tittle}
                onChange={e => setPost({...post, tittle: e.target.value})} 
                type="text" 
                placeholder="post title"
            />
            <MyInput
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type="text"
                placeholder="post body"
            />
            <MyButton onClick={addNewPost}>add post</MyButton>
        </form>
    );
};

export default PostForm;