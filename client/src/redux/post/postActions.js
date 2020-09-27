import myAxios from "../myAxios";
import {
  FETCH_ALL_POSTS_FAILURE,
  FETCH_ALL_POSTS_SUCCESS,
  FETCH_ALL_POSTS_REQUEST,
  DELETE_POSTS_REQUEST,
  DELETE_POSTS_SUCCESS,
  DELETE_POSTS_FAILURE,
  GET_POST_DATA_SUCCESS,
  GET_POST_DATA_FAILURE,
  GET_POST_DATA_REQUEST,
  UPDATE_POST_REQUEST,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_FAILURE,
  CANCEL_UPDATE,
  CREATE_POST_FAILURE,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
} from "./postTypes";

export const fetchAllPosts = () => (dispatch) => {
  dispatch({ type: FETCH_ALL_POSTS_REQUEST });
  myAxios
    .get("/")
    .then((response) => {
      const posts = response.data.response;
      dispatch({ type: FETCH_ALL_POSTS_SUCCESS, payload: posts });
    })
    .catch((err) => {
      dispatch({
        type: FETCH_ALL_POSTS_FAILURE,
        payload: "Something went wrong while fetching the data",
      });
    });
};

export const deletePost = (id) => (dispatch) => {
  dispatch({ type: DELETE_POSTS_REQUEST });
  myAxios
    .delete("/delete/" + id)
    .then((response) => {
      dispatch({ type: DELETE_POSTS_SUCCESS, payload: id });
    })
    .catch((err) => {
      dispatch({
        type: DELETE_POSTS_FAILURE,
        payload: "Something went wrong while deleting",
      });
    });
};

export const getPostData = (id) => (dispatch) => {
  dispatch({ type: GET_POST_DATA_REQUEST });
  myAxios
    .get("/" + id)
    .then((response) => {
      const post = {
        id: response.data.response._id,
        author: response.data.response.author,
        content: response.data.response.content,
      };
      dispatch({ type: GET_POST_DATA_SUCCESS, payload: post });
    })
    .catch((err) => {
      dispatch({
        type: GET_POST_DATA_FAILURE,
        payload: "Something went wrong while getting the data of the post",
      });
    });
};

export const updatePost = (id, author, content) => (dispatch) => {
  dispatch({ type: UPDATE_POST_REQUEST });
  myAxios
    .post("/update/" + id, { author, content })
    .then((response) => {
      const post = {
        id: response.data.response._id,
        author: response.data.response.author,
        content: response.data.response.content,
      };
      dispatch({ type: UPDATE_POST_SUCCESS });
    })
    .catch((err) => {
      dispatch({
        type: UPDATE_POST_FAILURE,
        payload: "Something went wrong while editing the post",
      });
    });
};

export const cancelUpdate = () => (dispatch) => {
  dispatch({ type: CANCEL_UPDATE });
};

export const createPost = (author, content) => (dispatch) => {
  dispatch({ type: CREATE_POST_REQUEST });
  myAxios
    .post("/add", { author, content })
    .then((response) => {
      dispatch({ type: CREATE_POST_SUCCESS });
    })
    .catch((err) => {
      dispatch({
        type: CREATE_POST_FAILURE,
        payload: "Something went wrong while creating a post",
      });
    });
};
