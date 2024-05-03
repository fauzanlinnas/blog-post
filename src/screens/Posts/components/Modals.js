import { Modal, NewCommentForm, NewPostForm } from 'components'
import React from 'react'

const Modals = ({
  isFormOpen,
  isEditComment,
  setIsFormOpen,
  handleSubmitComment,
  editCommentData,
  isEditFormOpen,
  setIsEditFormOpen,
  handleOnEdit,
  postDetail,
}) => {
  return (
    <>
      <Modal
        isOpen={isFormOpen}
        title={isEditComment ? 'Edit Comment' : 'Add Comment'}
        onClose={() => setIsFormOpen(false)}
      >
        <NewCommentForm
          handleSubmitComment={(body) => handleSubmitComment(body)}
          isEdit={isEditComment}
          commentData={editCommentData}
        />
      </Modal>
      <Modal
        isOpen={isEditFormOpen}
        title="Edit Post"
        onClose={() => setIsEditFormOpen(false)}
      >
        <NewPostForm
          handleSubmitPost={(title, body) => handleOnEdit(title, body)}
          isEdit={true}
          postData={postDetail}
        />
      </Modal>
    </>
  )
}

export default Modals
