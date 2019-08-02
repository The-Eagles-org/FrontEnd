import React from "react";
import { NavLink } from "react-router-dom";

import { connect } from "react-redux";
import { login } from "../actions";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };
  handleChanges = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.login(this.state);
  };
  render() {
    return (
      <div className="login-container">
        <h3 className="login-title">Please sign in to your account below.</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChanges}
            value={this.state.username}
            placeholder="Username..."
            type="username"
            name="username"
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
