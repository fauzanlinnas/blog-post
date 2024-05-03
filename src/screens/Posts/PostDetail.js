import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import {
  DispatchToProps,
  StateToProps,
} from './container/post-detail/container'
import { Button, Layout, Modal, NewCommentForm, NewPostForm } from 'components'
import Post from './components/Post'
import Comments from './components/comments/Comments'
import CommentSection from './components/comments/CommentSection'
import Modals from './components/Modals'

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

  const handleDeleteComment = (commentId) => {
    dispatch.deleteComment(commentId)
  }

  const handleSubmitComment = (body) => {
    if (isEditComment)
      dispatch.editComment(
        postId,
        editCommentData.id,
        body,
        editCommentData.name,
        editCommentData.email,
        () => {
          setIsEditComment(false)
          setIsFormOpen(false)
        }
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
      <section className="md:mt-16 bg-white rounded p-4">
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

      <CommentSection
        setIsFormOpen={setIsFormOpen}
        comments={state.comments}
        handleDeleteComment={handleDeleteComment}
        setIsEditComment={setIsEditComment}
        setEditCommentData={setEditCommentData}
      />

      <Modals
        isFormOpen={isFormOpen}
        isEditComment={isEditComment}
        setIsFormOpen={setIsFormOpen}
        handleSubmitComment={handleSubmitComment}
        editCommentData={editCommentData}
        isEditFormOpen={isEditFormOpen}
        setIsEditFormOpen={setIsEditFormOpen}
        handleOnEdit={handleOnEdit}
        postDetail={state.postDetail}
      />
    </Layout>
  )
}

export default PostDetail
