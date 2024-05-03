import { Button } from "components";
import React from "react";
import { Link } from "react-router-dom";

const Post = ({ postData, handleDeletePost }) => {
  return (
    <li className="mb-4">
      <div className="flex items-center justify-between">
        <Link to={`/post/${postData.id}`} className="w-2/3">
          <h4 className="font-semibold text-lg hover:underline">
            {postData.position}. {postData.title}
          </h4>
        </Link>
        <Button
          onClick={() => handleDeletePost(postData.id)}
          title="Delete post"
          variant="danger"
        />
      </div>
    </li>
  );
};

const PostList = ({ postList, handleDeletePost }) => {
  return (
    <ul>
      {postList.map((postData, i) => (
        <Post
          postData={{ ...postData, position: i + 1 }}
          key={postData.id}
          handleDeletePost={handleDeletePost}
        />
      ))}
    </ul>
  );
};

export default PostList;
