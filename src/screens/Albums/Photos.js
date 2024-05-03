import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Layout, Modal } from 'components'
import { DispatchToProps, StateToProps } from './container/photos/container'
import PhotosGrid from './components/PhotosGrid'

const Photos = () => {
  // @hooks
  const navigate = useNavigate()
  const { albumId } = useParams()

  const state = StateToProps.useContainer()
  const dispatch = DispatchToProps.useContainer()

  const [activePhoto, setActivePhoto] = useState(null)

  // @effects
  useEffect(() => {
    dispatch.getPhotos(albumId)
  }, [albumId])

  return (
    <Layout>
      <section className="md:mt-16 bg-white rounded p-4">
        <h2 className="mb-4 text-2xl font-semibold">
          <button onClick={() => navigate(-1)}>{'<'}</button> Photos
        </h2>

        <PhotosGrid photos={state.photos} setActivePhoto={setActivePhoto} />

        {activePhoto && (
          <Modal
            isOpen={activePhoto}
            title={activePhoto.title}
            onClose={() => setActivePhoto(null)}
          >
            <img
              src={activePhoto.url}
              alt={activePhoto.title}
              className="max-w-full h-auto m-auto"
            />
            <p className="text-sm">
              <span className="font-semibold">source:</span> {activePhoto.url}
            </p>
          </Modal>
        )}
      </section>
    </Layout>
  )
}

export default Photos
