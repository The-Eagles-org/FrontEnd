//actions
import { REGISTER_START, REGISTER_SUCCESS, REGISTER_FAIL } from "../actions";
//The source of all truth
const initialState = {
  data: [],
  isLoading: false,
  error: "",
  token: ""
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
        token: action.payload.token,
        error: ""
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
