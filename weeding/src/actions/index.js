import axios from "axios";
//registering
export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";
//log-in
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
//actions
export const register = credentials => dispatch => {
  dispatch({ type: REGISTER_START });
  return (
    axios
      //Endpoint
      .post(
        "https://lambda-wedding-planner.herokuapp.com/api/auth/register",
        credentials
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

export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_START });
  axios
    //Endpoint
    .post(
      "https://lambda-wedding-planner.herokuapp.com/api/auth/login",
      credentials
    )
    .then(res => {
      console.log(res);
      localStorage.setItem("token", res.data.token);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.token
      });
    })
    .catch(err => {
      dispatch({
        type: LOGIN_FAIL,
        payload: err
      });
    });
};
