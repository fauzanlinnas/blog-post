import Api from '../api/axiosInstance'

class AlbumsServices {
  getAlbums = (userId) => {
    return Api.get(`/users/${userId}/albums`)
  }
}
const albumsServices = new AlbumsServices()

export default albumsServices
