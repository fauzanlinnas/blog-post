import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
// import FormNewPost from "../component/FormNewPost.js";
// import { addPost, deletePost, initPost } from "../store/actions/postsActions.js";
// import { deletePostApi, getUserPosts } from "../services/postsApi.js";
// import { getUserDetail } from "../services/usersApi.js";
import { DispatchToProps, StateToProps } from "./container/container";
import { Layout, Modal, NewPostForm } from "components";
import PostList from "./components/PostList";

const Posts = () => {
  // @hooks
  const { userId } = useParams();

  const state = StateToProps.useContainer();
  const dispatch = DispatchToProps.useContainer();

  const navigate = useNavigate();

  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    dispatch.getPostList(userId);
  }, [userId]);

  // useEffect(() => {
  //   const fetchUserAndPosts = async () => {
  //     try {
  //       const [userResponse, postsResponse] = await Promise.all([
  //         getUserDetail(id),
  //         getUserPosts(id),
  //       ]);

  //       setUser(userResponse.data);
  //       dispatch(initPost(postsResponse.data));
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchUserAndPosts();
  // }, [id, dispatch]);

  const handleOnSuccess = (payload) => {
    // dispatch(addPost(payload));
    // setIsFormOpen(false);
  };

  const handleDeletePost = async (postId) => {
    // try {
    //   await deletePostApi(postId);
    //   dispatch(deletePost(postId));
    // } catch (error) {
    //   console.error("Error deleting post:", error);
    // }
  };

  return (
    <Layout>
      <section className="mt-16 bg-white rounded p-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold">
            <button onClick={() => navigate(-1)}>{"< "}</button> Posts by {state.selectedUser}
          </h2>
          <button
            onClick={() => setIsFormOpen(true)}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Add New Post
          </button>
        </div>

        <PostList
          postList={state.postList}
          handleDeletePost={(postId) => handleDeletePost(postId)}
        />

        <Modal isOpen={isFormOpen} title="Add New Post" onClose={() => setIsFormOpen(false)}>
          <NewPostForm onSuccess={(payload) => handleOnSuccess(payload)} />
        </Modal>
      </section>
    </Layout>
  );
};

export default Posts;
