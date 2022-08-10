import { useState } from "react";
import { useQuery, useMutation} from "react-query";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

import { fetchPosts, addPosts, deletePost } from "../Api";
import Todo from "./Todo";


function TodoList(){

    const [newTitle, setNewTitle] = useState('');
    const [newContent, setNewContent] = useState('');

    const getPosts = useQuery(['posts'], fetchPosts);
    const addPostMutation = useMutation(addPosts);
    const deletePostMutation = useMutation(deletePost);

    const handleSubmit = (e) => {
        e.preventDefault()
        addPostMutation.mutate({ title:newTitle, body: newContent })
        setNewTitle('')
        setNewContent('')
    }

    const handleDelete = (id) => {
        deletePostMutation.mutate({id});
    }

    const newItemSection = (
        <form onSubmit={handleSubmit}>
          <label htmlFor="new-todo">Enter a new post :</label>
          <div className="new-todo">
            <input className="form-input" type="text" id="new-title" value={newTitle} onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Enter new title"/>
            <input className="form-input" type="text" id="new-content" value={newContent} onChange={(e) => setNewContent(e.target.value)}
            placeholder="Enter content"/>
          </div>
          <button className="submit">
            Submit <FontAwesomeIcon icon={faUpload}/>
          </button>

          <div>
            {addPostMutation.loading ? "loading" : ""}
            {addPostMutation.error ? addPostMutation.error.message : ""}
            {addPostMutation.data ? JSON.stringify(addPostMutation.data) : "" }
          </div>
        </form>
      )

    let content;
    if(getPosts.loading){
        content = <div>loading...</div>
    } else if (getPosts.error) {
        content = <div>{getPosts.error.message}</div>
    } else if (getPosts.data) {
        content = <div className="section-posts"> {
                getPosts.data.map((post) => (
                    <Todo post={post} key={post.id} handleDelete={handleDelete}/>
                ))
            }
        </div>
    } 


    return (
        <div className="box">
            <h1>Posts List</h1>
            <div className="form-box">
                {newItemSection}
            </div>
            {content}
        </div>
    )
}

export default TodoList