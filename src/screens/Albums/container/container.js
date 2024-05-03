import { useDispatch, useSelector } from 'react-redux'
import { createContainer } from 'unstated-next'
import * as AlbumsActions from 'store/albums/actions'

// @compose a container
function useStateToProps() {
  return useSelector((state) => {
    return {
      albumList: state.albums.albumList,
    }
  })
}

function useDispatchToProps() {
  const dispatch = useDispatch()
  return {
    getAlbumList: (userId) =>
      dispatch(AlbumsActions.getAlbumListRequest(userId)),
  }
}

// @create a container
export const StateToProps = createContainer(useStateToProps)
export const DispatchToProps = createContainer(useDispatchToProps)
