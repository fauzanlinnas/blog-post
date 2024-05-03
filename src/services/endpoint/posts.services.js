import Api from '../api/axiosInstance'

class PostsServices {
  getPosts = (userId) => {
    return Api.get(`/users/${userId}/posts`)
  }

  addPost = (payload) => {
    return Api.post('/posts', payload)
  }

  editPost = (payload) => {
    return Api.put(`/posts/${payload.id}`, payload)
  }

  deletePost = (postId) => {
    return Api.delete(`/posts/${postId}`)
  }

  getPostDetail = (postId) => {
    return Api.get(`/posts/${postId}`)
  }

  getComments = (postId) => {
    return Api.get(`/posts/${postId}/comments`)
  }

  addComment = (payload) => {
    return Api.post('/comments', payload)
  }
}

const postsServices = new PostsServices()

export default postsServices
