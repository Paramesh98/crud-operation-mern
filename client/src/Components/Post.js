import React from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  CardText,
  Container,
} from "reactstrap";
import { connect } from "react-redux";
import { deletePost, getPostData } from "../redux/post/postActions";
import { Redirect } from "react-router-dom";

function Post({
  author,
  content,
  updatedAt,
  createdAt,
  deletePost,
  id,
  post,
  getPostData,
}) {
  const isUpdate = post ? (
    <Redirect to="/update" />
  ) : (
    <div className="mt-4">
      <Card>
        <CardHeader>
          {`${author} ${new Date(createdAt).toDateString()}`}
        </CardHeader>
        <CardBody>
          <CardText>{content}</CardText>
          <CardText>
            Last Updated at {new Date(updatedAt).toLocaleString()}
          </CardText>
          <ButtonGroup>
            <Button className="btn btn-infor" onClick={() => getPostData(id)}>
              Edit
            </Button>
            <Button className="btn  btn-danger" onClick={() => deletePost(id)}>
              Delete
            </Button>
          </ButtonGroup>
        </CardBody>
      </Card>
    </div>
  );
  return isUpdate;
}

const mapStateToProps = (state) => {
  return {
    post: state.post,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch(deletePost(id)),
    getPostData: (id) => dispatch(getPostData(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
