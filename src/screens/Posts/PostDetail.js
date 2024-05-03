import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import {
  DispatchToProps,
  StateToProps,
} from './container/post-detail/container'
import { Button, Layout, Modal, NewCommentForm, NewPostForm } from 'components'
import Post from './components/Post'
import Comments from './components/Comments'

const PostDetail = () => {
  // @hooks
  const { postId } = useParams()

  const state = StateToProps.useContainer()
  const dispatch = DispatchToProps.useContainer()

  const navigate = useNavigate()

  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isEditComment, setIsEditComment] = useState(false)
  const [editCommentData, setEditCommentData] = useState(null)
  const [isEditFormOpen, setIsEditFormOpen] = useState(false)

  useEffect(() => {
    dispatch.getPostDetail(postId)
    dispatch.getComments(postId)
  }, [postId])

  const handleDeleteComment = async (commentId) => {
    // await deleteCommentApi(commentId)
    // dispatch(deleteComment(commentId))
  }

  const handleSubmitComment = (body) => {
    if (isEditComment)
      dispatch.editComment(
        postId,
        editCommentData.id,
        body,
        editCommentData.name,
        editCommentData.email,
        () => setIsFormOpen(false)
      )
    else
      dispatch.addComment(
        postId,
        body,
        'Fauzan Linnas',
        'fauzanlinnas@gmail.com',
        () => setIsFormOpen(false)
      )
  }

  const handleOnEdit = (title, body) => {
    dispatch.editPost(title, body, postId, () => setIsEditFormOpen(false))
  }

  return (
    <Layout>
      <section className="mt-16 bg-white rounded p-4">
        <div className="mb-4 flex items-center justify-between space-x-3">
          <h2 className="mb-1 text-2xl font-semibold">
            <button onClick={() => navigate(-1)}>{'< '}</button> Back
          </h2>
          <Button
            onClick={() => setIsEditFormOpen(true)}
            variant="primary"
            title="Edit Post"
          />
        </div>
        {state.postDetail && <Post postDetail={state.postDetail} />}
      </section>

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
          comments={state.comments}
          handleDeleteComment={handleDeleteComment}
          setIsEditComment={setIsEditComment}
          setIsFormOpen={setIsFormOpen}
          setEditCommentData={setEditCommentData}
        />
      </section>

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
          postData={state.postDetail}
        />
      </Modal>
    </Layout>
  )
}

export default PostDetail
