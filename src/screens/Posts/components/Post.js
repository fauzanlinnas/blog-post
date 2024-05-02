import React from 'react'

const Post = ({ postDetail }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">{postDetail.title}</h2>
      <p className="whitespace-pre-wrap">{postDetail.body}</p>
    </div>
  )
}

export default Post
