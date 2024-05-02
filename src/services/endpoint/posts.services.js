import Api from '../api/axiosInstance'

class PostsServices {
  getPosts = (userId) => {
    return Api.get(`/users/${userId}/posts`)
  }

  deletePost = (postId) => {
    return Api.delete(`/posts/${postId}`)
  }
}

const postsServices = new PostsServices()

export default postsServices
