import { Layout } from 'components'
import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { DispatchToProps, StateToProps } from './container/container'
import AlbumList from './components/AlbumList'

const Albums = () => {
  // @hooks
  const navigate = useNavigate()
  const { userId } = useParams()

  const state = StateToProps.useContainer()
  const dispatch = DispatchToProps.useContainer()

  useEffect(() => {
    dispatch.getAlbumList(userId)
  }, [userId])

  return (
    <Layout>
      <section className="mt-16 bg-white rounded p-4">
        <h2 className="mb-4 text-2xl font-semibold">
          <button onClick={() => navigate(-1)}>{'<'}</button> Albums
        </h2>

        <AlbumList albumList={state.albumList} userId={userId} />
      </section>
    </Layout>
  )
}

export default Albums
