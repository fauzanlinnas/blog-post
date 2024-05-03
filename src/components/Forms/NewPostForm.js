import { Button } from 'components/Buttons'
import React, { useState } from 'react'
// import { createPost, editPostApi } from "../services/postsApi";

const NewPostForm = ({ handleSubmitPost, isEdit, postData }) => {
  const [title, setTitle] = useState(isEdit ? postData.title : '')
  const [body, setBody] = useState(isEdit ? postData.body : '')

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleBodyChange = (event) => {
    setBody(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    handleSubmitPost(title, body)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
          required
          className="mt-1 mb-3 w-full px-3 py-2 rounded-lg shadow border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="body">Content</label>
        <textarea
          rows={8}
          id="body"
          value={body}
          onChange={handleBodyChange}
          required
          className="mt-1 w-full px-3 py-2 rounded-lg shadow border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      </div>
      <Button
        variant="primary"
        type="submit"
        title={isEdit ? 'Edit Post' : 'Create Post'}
      />
    </form>
  )
}

export { NewPostForm }
