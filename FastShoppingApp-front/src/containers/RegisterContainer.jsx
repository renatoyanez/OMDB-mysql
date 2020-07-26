import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import Register from "../components/Register";
import { fetchCreatedUser } from "../redux/actions/users";

class RegisterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.fetchCreatedUser(this.state.name, this.state.email)
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <Register
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        state={this.state}
      />
    );
  }
}

const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCreatedUser: (name, email) => dispatch(fetchCreatedUser(name, email))
  };
}
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RegisterContainer)
);