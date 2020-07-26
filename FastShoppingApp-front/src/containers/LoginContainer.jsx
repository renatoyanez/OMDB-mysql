import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import Login from "../components/Login";
import { fetchExistingUser } from '../redux/actions/users'

class LoginContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      error: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.userLogin(this.state.email)
      .catch(() => { this.setState({ error: true }) })
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <Login
        state={this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: user => dispatch(fetchExistingUser(user))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
);
