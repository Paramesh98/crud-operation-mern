import React, { useState, useEffect } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Alert,
  Spinner,
} from "reactstrap";
import { connect } from "react-redux";
import { updatePost, cancelUpdate } from "../redux/post/postActions";
import { Redirect } from "react-router-dom";

const PostUpdate = ({ post, updatePost, cancelUpdate, loading, error }) => {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (post != null) {
      setAuthor(post.author);
      setContent(post.content);
    }
  }, [post]);

  const onUpdate = () => {
    if (post.id && author && content) {
      updatePost(post.id, author, content);
      setErrorMessage("");
    } else {
      setErrorMessage("Please fill all the fields of the form");
    }
  };

  const postUpdateForm = (
    <div>
      <Form>
        {errorMessage ? <Alert color="danger">{errorMessage}</Alert> : null}
        <FormGroup>
          <Label for="author">Author</Label>
          <Input
            type="text"
            name="author"
            autoComplete="off"
            placeholder="Write your name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="content">Content</Label>
          <Input
            type="textarea"
            name="content"
            autoComplete="off"
            placeholder="Write your content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </FormGroup>
        <Button className="mr-2" color="success" onClick={onUpdate}>
          Update
        </Button>
        <Button className="mr-2" color="danger" onClick={cancelUpdate}>
          Cancel
        </Button>
      </Form>
    </div>
  );

  return (
    <div>
      {loading ? (
        <Spinner color="primary" />
      ) : error ? (
        <Alert color="danger">{error}</Alert>
      ) : (
        <div>{post ? postUpdateForm : <Redirect to="/" />}</div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    post: state.post,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updatePost: (id, author, content) =>
      dispatch(updatePost(id, author, content)),
    cancelUpdate: () => dispatch(cancelUpdate()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostUpdate);
