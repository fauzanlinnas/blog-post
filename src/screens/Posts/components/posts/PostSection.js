import { Button } from 'components'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Post from './Post'

const PostSection = ({ postDetail, onClickEdit }) => {
  const navigate = useNavigate()

  return (
    <section className="md:mt-16 bg-white rounded p-4">
      <div className="mb-4 flex items-center justify-between space-x-3">
        <h2 className="mb-1 text-2xl font-semibold">
          <button onClick={() => navigate(-1)}>{'< '}</button> Back
        </h2>
        <Button onClick={onClickEdit} variant="primary" title="Edit Post" />
      </div>
      {postDetail && <Post postDetail={postDetail} />}
    </section>
  )
}

export default PostSection
