import { Button } from 'components'
import React from 'react'
import Comments from './Comments'

const CommentSection = ({
  comments,
  handleDeleteComment,
  handleEditComment,
  onClickAddComment,
}) => {
  return (
    <section className="mt-4 bg-white rounded p-4">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold">Comments</h3>
        <Button
          onClick={onClickAddComment}
          variant="primary"
          title="Add Comment"
        />
      </div>

      <Comments
        comments={comments}
        handleDeleteComment={handleDeleteComment}
        onClickEditComment={handleEditComment}
      />
    </section>
  )
}

export default CommentSection
