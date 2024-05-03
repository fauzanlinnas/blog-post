import { useDispatch, useSelector } from 'react-redux'
import { createContainer } from 'unstated-next'
import * as PostsActions from 'store/posts/actions'

// @compose a container
function useStateToProps() {
  return useSelector((state) => {
    return {
      postList: state.posts.postList,
      selectedUser: state.users.selectedUser,
    }
  })
}

function useDispatchToProps() {
  const dispatch = useDispatch()
  return {
    getPostList: (userId) => dispatch(PostsActions.getPostListRequest(userId)),
    addPost: (title, body, userId, successCallback) =>
      dispatch(
        PostsActions.addPostRequest(title, body, userId, successCallback)
      ),
    deletePost: (postId) => dispatch(PostsActions.deletePostRequest(postId)),
  }
}

// @create a container
export const StateToProps = createContainer(useStateToProps)
export const DispatchToProps = createContainer(useDispatchToProps)
