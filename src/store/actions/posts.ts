import { Dispatch } from 'redux';
import axios from '../../http/axios';
import IPost from '../../models/post';

import { 
  GET_POSTS_START,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILED,
  GET_POST_BY_ID_START,
  GET_POST_BY_ID_SUCCESS,
  GET_POST_BY_ID_FAILED,
} from './actionTypes';

export const getPosts = () => {
  return (dispatch: Dispatch) => {
    dispatch(getPostsStart());
    axios.get("posts")
      .then((res) => {
        dispatch(getPostsSuccess(res.data))
      })
      .catch((error) => {
        dispatch(getPostsFail(error))
      })
  }
}

const getPostsStart = () => ({
    type: GET_POSTS_START,
})

const getPostsSuccess = (data: any) => ({
  type: GET_POSTS_SUCCESS,
  payload: data,
})

const getPostsFail = (error: any) => ({
  type: GET_POSTS_FAILED,
  payload: error,
})

export const getPostById = (id: string | undefined) => {
  return (dispatch: Dispatch) => {
    dispatch(getPostByIdStart(id));
    let post: IPost;
    axios.get(`posts/${id}`)
      .then((res) => {
        post = res.data;
        return axios.get(`/users/${post.userId}`)
      })
      .then((res) => {
        post.author = res.data;
        dispatch(getPostByIdSuccess(post))
      })
      .catch((error) => {
        dispatch(getPostByIdFail(error))
      })
  }
}

const getPostByIdStart = (id: string | undefined) => ({
  type: GET_POST_BY_ID_START,
  payload: id,
})

const getPostByIdSuccess = (data: any) => ({
  type: GET_POST_BY_ID_SUCCESS,
  payload: data,
})

const getPostByIdFail = (error: any) => ({
  type: GET_POST_BY_ID_FAILED,
  payload: error,
})
