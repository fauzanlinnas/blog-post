import Api from '../api/axiosInstance'

class AlbumsServices {
  getAlbums = (userId) => {
    return Api.get(`/users/${userId}/albums`)
  }
  getPhotos = (albumId) => {
    return Api.get(`/albums/${albumId}/photos`)
  }
}
const albumsServices = new AlbumsServices()

export default albumsServices
