import { Button } from 'components'
import React from 'react'
import Comments from './Comments'

const CommentSection = ({
  setIsFormOpen,
  comments,
  handleDeleteComment,
  setIsEditComment,
  setEditCommentData,
}) => {
  return (
    <section className="mt-4 bg-white rounded p-4">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold">Comments</h3>
        <Button
          onClick={() => setIsFormOpen(true)}
          variant="primary"
          title="Add Comment"
        />
      </div>
      <Comments
        comments={comments}
        handleDeleteComment={handleDeleteComment}
        setIsEditComment={setIsEditComment}
        setIsFormOpen={setIsFormOpen}
        setEditCommentData={setEditCommentData}
      />
    </section>
  )
}

export default CommentSection
