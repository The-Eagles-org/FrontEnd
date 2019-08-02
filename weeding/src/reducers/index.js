//actions
import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from "../actions";
//The source of all truth
const initialState = {
  data: [],
  isLoading: false,
  loggedIn: false,
  error: "",
  token: "",
  id: ""
};
//Reducer
export const rootReducer = (state = initialState, action) => {
  //switch statement
  switch (action.type) {
    case REGISTER_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        loggedIn: true,
        error: ""
      };
    case REGISTER_FAIL:
      return {
        ...state,
        error: action.payload
      };
    case LOGIN_START:
      return {
        ...state,
        isLoading: true,
        id: action.id
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        token: action.payload
      };
    case LOGIN_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
