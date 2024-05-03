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
        <div
          key={comment.id}
          className="mb-4 border border-gray-400 p-2 rounded"
        >
          <div className="flex justify-between">
            <p className="font-bold">
              {comment.name}{' '}
              <span className="text-gray-400">
                ({comment.email.toLowerCase()})
              </span>
            </p>
            <div className="flex flex-col md:flex-row items-end gap-x-2">
              <button
                onClick={() => handleDeleteComment(comment.id)}
                className=" text-red-600 font-bold"
              >
                Delete
              </button>
              <button
                onClick={() => {
                  setIsEditComment(true)
                  setIsFormOpen(true)
                  setEditCommentData(comment)
                }}
                className=" text-blue-600 font-bold"
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
