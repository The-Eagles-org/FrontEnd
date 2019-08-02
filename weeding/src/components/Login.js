import React from "react";
import { NavLink } from "react-router-dom";

import { connect } from "react-redux";
import { login } from "../actions";
// import { Loader } from "react-loader-spinner";

class Login extends React.Component {
  state = {
    email: "",
    password: ""
  };
  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.login(this.state);
  };
  render() {
    return (
      <div className="login-container">
        <h3 className="login-title">Please sign in to your account below.</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChanges}
            value={this.state.email}
            placeholder="Email..."
            type="email"
            name="email"
            className="input"
          />
          <br />
          <input
            onChange={this.handleChanges}
            value={this.state.password}
            placeholder="Password..."
            type="password"
            name="password"
            className="input"
          />
          <br />
          {/* <button className="login-button">
            {this.props.isLoading ? (
              <Loader type="ThreeDots" color="#6b6b6b" height="12" width="26" />
            ) : (
              "Sign In"
            )}
          </button> */}
          <button className="login-button">Sign In</button>
        </form>
        <p>Don't Have An Account?</p>
        <NavLink to="/register">*Sign Up Here</NavLink>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    error: state.error,
    isLoading: state.isLoading
  };
};
export default connect(
  mapStateToProps,
  { login }
)(Login);
