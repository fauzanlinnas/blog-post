import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DispatchToProps, StateToProps } from './container/container'
import { Button, Layout, Modal, NewPostForm } from 'components'
import PostList from './components/posts/PostList'

const Posts = () => {
  // @hooks
  const { userId } = useParams()
  const navigate = useNavigate()

  const state = StateToProps.useContainer()
  const dispatch = DispatchToProps.useContainer()

  const [isFormOpen, setIsFormOpen] = useState(false)

  // @effects
  useEffect(() => {
    dispatch.getPostList(userId)
  }, [userId])

  const handleSubmitPost = (title, body) => {
    dispatch.addPost(title, body, userId, () => setIsFormOpen(false))
  }

  const handleDeletePost = (postId) => {
    dispatch.deletePost(postId)
  }

  return (
    <Layout>
      <section className="md:mt-16 bg-white rounded p-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold">
            <button onClick={() => navigate(-1)}>{'< '}</button> Posts by{' '}
            {state.selectedUser}
          </h2>
          <Button
            onClick={() => setIsFormOpen(true)}
            variant="primary"
            title="Add Post"
          />
        </div>

        <PostList
          postList={state.postList}
          handleDeletePost={(postId) => handleDeletePost(postId)}
        />

        <Modal
          isOpen={isFormOpen}
          title="Add Post"
          onClose={() => setIsFormOpen(false)}
        >
          <NewPostForm
            handleSubmitPost={(title, body) => handleSubmitPost(title, body)}
          />
        </Modal>
      </section>
    </Layout>
  )
}

export default Posts
