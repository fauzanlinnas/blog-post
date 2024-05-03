import React from 'react'

const Comments = ({
  comments,
  handleDeleteComment,
  setIsEditComment,
  setIsFormOpen,
  setEditCommentData,
}) => {
  return (
    <>
      {comments.map((comment) => (
        <div key={comment.id} className="mb-4">
          <div className="flex justify-between">
            <p className="font-semibold">
              {comment.name}{' '}
              <span className="text-gray-400">({comment.email})</span>
            </p>
            <div className="flex gap-1">
              <button
                onClick={() => handleDeleteComment(comment.id)}
                className=" text-red-600 font-bold ml-2"
              >
                Delete
              </button>
              <button
                onClick={() => {
                  setIsEditComment(true)
                  setIsFormOpen(true)
                  setEditCommentData(comment)
                }}
                className=" text-blue-600 font-bold ml-2"
              >
                Edit
              </button>
            </div>
          </div>
          <p className="whitespace-pre-wrap">{comment.body}</p>
        </div>
      ))}
    </>
  )
}

export default Comments
