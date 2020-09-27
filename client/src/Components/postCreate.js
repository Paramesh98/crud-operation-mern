import React, { useState } from "react";
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
import { Redirect } from "react-router-dom";
import { createPost } from "../redux/post/postActions";

const PostCreate = ({ loading, error, createPost }) => {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const onCreate = () => {
    if (author && content) {
      createPost(author, content);
      setIsSuccess(true);
      setErrorMessage("");
    } else {
      setIsSuccess(false);
      setErrorMessage("Please fill all the fields to create a post");
    }
  };

  const createPostForm = (
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
        <Button className="mr-2" color="success" onClick={onCreate}>
          Create
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
        <div>{isSuccess ? <Redirect to="/" /> : createPostForm}</div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (author, content) => dispatch(createPost(author, content)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostCreate);
