import { useDispatch, useSelector } from 'react-redux'
import { createContainer } from 'unstated-next'
import * as PostsActions from 'store/posts/actions'

// @compose a container
function useStateToProps() {
  return useSelector((state) => {
    return {
      postDetail: state.posts.postDetail,
      selectedUser: state.users.selectedUser,
      comments: state.posts.comments,
    }
  })
}

function useDispatchToProps() {
  const dispatch = useDispatch()
  return {
    getPostDetail: (userId) =>
      dispatch(PostsActions.getPostDetailRequest(userId)),
    editPost: (title, body, postId, onSuccess) =>
      dispatch(PostsActions.editPostRequest(title, body, postId, onSuccess)),
    getComments: (postId) => dispatch(PostsActions.getCommentsRequest(postId)),
  }
}

// @create a container
export const StateToProps = createContainer(useStateToProps)
export const DispatchToProps = createContainer(useDispatchToProps)
