import React from "react";
import LandingPage from "../components/LandingPage";
import { connect } from "react-redux";
import { withRouter } from "react-router";

class LandingPageContainer extends React.Component {

  render() {
    return (
      <LandingPage />
    );
  }
}


export default withRouter(
  connect(null)(LandingPageContainer)
);