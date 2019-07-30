import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
//actions
import { register } from "../actions";
//css
import "./index.css";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      location: "",
      email: ""
    };
  }
  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.register(this.state);
  };
  render() {
    return (
      <div className="register-container">
        <h2 className="register-text">Please Sign up to continue!</h2>
        <br />
        <form onSubmit={this.handleSubmit} className="form">
          <input
            onChange={this.handleChanges}
            placeholder="username..."
            name="username"
            value={this.state.username}
            className="input"
          />
          <br />
          <input
            onChange={this.handleChanges}
            placeholder="password..."
            name="password"
            value={this.state.password}
            className="input"
          />
          <br />
          <input
            onChange={this.handleChanges}
            placeholder="location..."
            name="location"
            value={this.state.location}
            className="input"
          />
          <br />
          <input
            onChange={this.handleChanges}
            placeholder="email..."
            name="email"
            value={this.state.email}
            className="input"
          />
          <br />
          <button className="register-button">Register</button>
          <p>Already have an account?</p>
          <NavLink className="login-link" to="/">
            *Login
          </NavLink>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    username: state.username,
    password: state.password,
    location: state.location,
    email: state.email
  };
};
export default connect(
  mapStateToProps,
  { register }
)(Register);
