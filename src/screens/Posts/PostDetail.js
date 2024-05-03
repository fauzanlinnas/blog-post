import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import {
  DispatchToProps,
  StateToProps,
} from './container/post-detail/container'
import { Layout } from 'components'
import CommentSection from './components/comments/CommentSection'
import Modals from './components/Modals'
import PostSection from './components/posts/PostSection'

const PostDetail = () => {
  // @hooks
  const { postId } = useParams()

  const state = StateToProps.useContainer()
  const dispatch = DispatchToProps.useContainer()

  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isEditComment, setIsEditComment] = useState(false)
  const [editCommentData, setEditCommentData] = useState(null)
  const [isEditPostOpen, setIsEditPostOpen] = useState(false)

  // @effects
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
    dispatch.editPost(title, body, postId, () => setIsEditPostOpen(false))
  }

  return (
    <Layout>
      <PostSection
        postDetail={state.postDetail}
        onClickEdit={() => setIsEditPostOpen(true)}
      />

      <CommentSection
        onClickAddComment={() => setIsFormOpen(true)}
        comments={state.comments}
        handleEditComment={(comment) => {
          setIsEditComment(true)
          setIsFormOpen(true)
          setEditCommentData(comment)
        }}
        handleDeleteComment={handleDeleteComment}
      />

      <Modals
        isFormOpen={isFormOpen}
        isEditComment={isEditComment}
        setIsFormOpen={setIsFormOpen}
        handleSubmitComment={handleSubmitComment}
        editCommentData={editCommentData}
        isEditPostOpen={isEditPostOpen}
        setIsEditPostOpen={setIsEditPostOpen}
        handleOnEdit={handleOnEdit}
        postDetail={state.postDetail}
      />
    </Layout>
  )
}

export default PostDetail
