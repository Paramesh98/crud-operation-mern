import {
  FETCH_ALL_POSTS_REQUEST,
  FETCH_ALL_POSTS_SUCCESS,
  FETCH_ALL_POSTS_FAILURE,
  DELETE_POSTS_SUCCESS,
  GET_POST_DATA_REQUEST,
  GET_POST_DATA_SUCCESS,
  DELETE_POSTS_FAILURE,
  GET_POST_DATA_FAILURE,
  DELETE_POSTS_REQUEST,
  UPDATE_POST_REQUEST,
  UPDATE_POST_FAILURE,
  UPDATE_POST_SUCCESS,
  CANCEL_UPDATE,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
} from "./postTypes";

const initialState = {
  lading: false,
  posts: [],
  post: null,
  error: "",
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_POSTS_REQUEST:
    case DELETE_POSTS_REQUEST:
    case GET_POST_DATA_REQUEST:
    case UPDATE_POST_REQUEST:
    case CREATE_POST_REQUEST:
      return {
        ...state,
        laoding: true,
      };
    case FETCH_ALL_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    case DELETE_POSTS_SUCCESS:
      const postAfterDelete = state.posts.filter(
        (post) => post._id !== action.payload
      );
      return {
        ...state,
        loading: false,
        posts: postAfterDelete,
      };
    case GET_POST_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        post: action.payload,
      };
    case CANCEL_UPDATE:
    case UPDATE_POST_FAILURE:
    case UPDATE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        post: null,
      };

    case CREATE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case CREATE_POST_FAILURE:
    case FETCH_ALL_POSTS_FAILURE:
    case DELETE_POSTS_FAILURE:
    case GET_POST_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;
