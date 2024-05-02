import Api from "../api/axiosInstance";

class PostsServices {
  getPosts = (userId) => {
    return Api.get(`/users/${userId}/posts`);
  };
}

const postsServices = new PostsServices();

export default postsServices;
