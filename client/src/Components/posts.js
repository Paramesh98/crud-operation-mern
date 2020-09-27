import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Alert, Spinner } from "reactstrap";
import { fetchAllPosts } from "../redux/post/postActions";
import Post from "./Post";

function Posts({ fetchAllPosts, posts, loading, error }) {
  useEffect(() => {
    fetchAllPosts();
  }, [fetchAllPosts]);

  const postMessage = "There is no posts availabel";

  const renderPosts =
    posts.length === 0 ? (
      // <Alert color="primary">{postMessage}</Alert>
      <div className="text-center">
        <Spinner className="text-center" color="primary"></Spinner>
      </div>
    ) : (
      posts.map((post) => {
        return (
          <Post
            key={post._id}
            author={post.author}
            content={post.content}
            createdAt={post.createdAt}
            updatedAt={post.updatedAt}
            id={post._id}
          />
        );
      })
    );
  return (
    <div>
      {loading ? (
        <Spinner color="primary"></Spinner>
      ) : error ? (
        <Alert color="danger">{error}</Alert>
      ) : (
        <div>{renderPosts}</div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    posts: state.posts,
    error: state.error,
  };
};

const mapDispatchToprops = (dispatch) => {
  return {
    fetchAllPosts: () => dispatch(fetchAllPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToprops)(Posts);
