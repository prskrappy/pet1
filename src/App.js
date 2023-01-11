import React, { useState, useRef } from "react";
import PostList from "./components/PostList";
import './styles/App.css';
import PostForm from "./components/UI/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {

  const [posts, setPosts] = useState([
    {id: 1, tittle: 'JavaScript_1', body: 'Description'},
    {id: 2, tittle: 'JavaScript_2', body: 'Description'},
    {id: 3, tittle: 'JavaScript_3', body: 'Description'}
  ])

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style ={{margin: "15px 0"}}/> 
      <div>
        {/* <select>
          <option value="value1"> sort by tittle </option>
          <option value="value1"> sort by body </option>
        </select> */}
        <MySelect
          defaultValue="sort by"
          options={[
            {value: 'tittle', name: 'by tittle'},
            {value: 'body', name: 'by body'}
          ]}
        />
      </div>
      {posts.length !== 0
      ? <PostList remove={removePost} posts={posts} title="Post List I"/>
      : <h1 style={{textAlign: "center"}}> Posts List is Empty! </h1>
      }

    </div>
  );
}


export default App;


//cd projects\firstProj\reactproj\newapp