import * as actionTypes from '../actions/actionTypes';
import Post from '../../models/post';

interface IPostsState {
  posts: Array<any>,
  currentPost: Post,
}

const initialState = {
  posts: [],
  currentPost: undefined,
  loading: true,
}

const reducer = (state = initialState, action: any )=> {
  switch(action.type) {
    case actionTypes.GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      }
    case actionTypes.GET_POST_BY_ID_START:
      return {
        ...initialState
      }
    
    case actionTypes.GET_POST_BY_ID_SUCCESS:
      return {
        ...state,
        currentPost: action.payload,
        loading: false,
      }
    default: 
      return state;
  }
}

export default reducer;
