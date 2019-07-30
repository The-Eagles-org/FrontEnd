import axios from "axios";
//registering
export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";
//actions
export const register = creds => dispatch => {
  dispatch({ type: REGISTER_START });
  return (
    axios
      //Endpoint
      .post(
        "https://lambda-wedding-planner.herokuapp.com/api/auth/register",
        creds
      )
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data.token
        });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: REGISTER_FAIL, payload: err });
      })
  );
};
