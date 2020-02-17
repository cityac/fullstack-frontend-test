import * as actionTypes from '../actions/actionTypes';
import IAction from '../../models/action';

interface IUsersState {
  users: Array<any>,
}

const initialState: IUsersState = {
  users: []
}

const reducer = (state = initialState, { type, payload }: IAction )=> {
  switch(type) {
    case actionTypes.GET_USERS_START:
      return {
        ...state,
        loading: true,
      }
    case actionTypes.GET_USERS_SUCCESS:
      return {
        ...state,
        loadging: false,
        posts: payload,
      }
    case actionTypes.GET_USERS_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      }
    default: 
      return state;
  }
}

export default reducer;
