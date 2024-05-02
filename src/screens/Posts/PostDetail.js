import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import {
  DispatchToProps,
  StateToProps,
} from './container/post-detail/container'
import { Layout, Modal, NewCommentForm, NewPostForm } from 'components'
import Post from './components/Post'

const PostDetail = () => {
  // @hooks
  const { postId } = useParams()

  const state = StateToProps.useContainer()
  const dispatch = DispatchToProps.useContainer()

  const navigate = useNavigate()

  const [post, setPost] = useState(null)
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

  const handleOnSuccess = (payload) => {
    // dispatch(addComment(payload))

    setIsFormOpen(false)
  }

  const handleOnEditCommentSuccess = (payload) => {
    // dispatch(editComment(payload))

    setIsFormOpen(false)
  }

  const handleOnEditSuccess = (payload) => {
    setPost(payload)
    // dispatch(editPost(payload))

    setIsEditFormOpen(false)
  }

  return (
    <Layout>
      <section className="mt-16 bg-white rounded p-4">
        <div className="mb-4 flex items-center justify-between space-x-3">
          <h2 className="mb-1 text-2xl font-semibold">
            <button onClick={() => navigate(-1)}>{'< '}</button> Back
          </h2>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            onClick={() => setIsEditFormOpen(true)}
          >
            Edit Post
          </button>
        </div>
        {state.postDetail && <Post postDetail={state.postDetail} />}
      </section>

      <section className="mt-4 bg-white rounded p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold">Comments</h3>
          <button
            onClick={() => setIsFormOpen(true)}
            className="ml-3 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Add New Comment
          </button>
        </div>
        {state.comments.map((comment) => (
          <div key={comment.id} className="mb-4">
            <div className="flex items-center">
              <h4 className="font-semibold">
                {comment.name} ({comment.email})
              </h4>
              <button
                onClick={() => handleDeleteComment(comment.id)}
                className=" text-red-600 font-bold ml-2"
              >
                Delete comment
              </button>
              <button
                onClick={() => {
                  setIsEditComment(true)
                  setIsFormOpen(true)
                  setEditCommentData(comment)
                }}
                className=" text-blue-600 font-bold ml-2"
              >
                Edit comment
              </button>
            </div>
            <p className="whitespace-pre-wrap">{comment.body}</p>
          </div>
        ))}
      </section>
      <Modal
        isOpen={isFormOpen}
        title={isEditComment ? 'Edit Comment' : 'Add New Comment'}
        onClose={() => setIsFormOpen(false)}
      >
        {/* <NewCommentForm
          onSuccess={
            isEditComment
              ? (payload) => handleOnEditCommentSuccess(payload)
              : (payload) => handleOnSuccess(payload)
          }
          postId={postId}
          isEdit={isEditComment}
          commentData={editCommentData}
        /> */}
      </Modal>
      <Modal
        isOpen={isEditFormOpen}
        title="Edit Post"
        onClose={() => setIsEditFormOpen(false)}
      >
        <NewPostForm
          onSuccess={(payload) => handleOnEditSuccess(payload)}
          isEdit={true}
          postData={post}
        />
      </Modal>
    </Layout>
  )
}

export default PostDetail
