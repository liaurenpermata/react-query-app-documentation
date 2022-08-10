import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = ({ post, handleDelete }) => {

  return (
    <div className='card card-post'>
      <div className='card-text'>
        <h3 className='card-title'>{post.title}</h3>
        <p className='card-body'>{post.body}</p>
      </div>
      <div className='card-button-delete'>
        <FontAwesomeIcon icon={faTrash} onClick={() => {handleDelete(post.id)}}/>
      </div>
    </div>
  )
}

export default Todo