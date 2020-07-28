import React from "react";
import Main from "../components/Main";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class MainContainer extends React.Component {

  render() {
    return <Main />;
  }
}

const mapStateToProps = state => {
  return state
};

export default withRouter(
  connect(mapStateToProps)(MainContainer)
);
