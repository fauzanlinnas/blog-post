import { useDispatch, useSelector } from 'react-redux'
import { createContainer } from 'unstated-next'
import * as AlbumsActions from 'store/albums/actions'

// @compose a container
function useStateToProps() {
  return useSelector((state) => {
    return {
      photos: state.albums.photos,
    }
  })
}

function useDispatchToProps() {
  const dispatch = useDispatch()
  return {
    getPhotos: (albumId) => dispatch(AlbumsActions.getPhotosRequest(albumId)),
  }
}

// @create a container
export const StateToProps = createContainer(useStateToProps)
export const DispatchToProps = createContainer(useDispatchToProps)
