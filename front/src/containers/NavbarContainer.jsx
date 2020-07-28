import React from "react";
import Navbar from "../components/Navbar";
import { connect } from "react-redux";
import { fetchFilms } from "../redux/actions/films";
import { withRouter } from "react-router";
import { fetchFavoritesCreator } from '../redux/actions/favorites'


class NavbarContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
    this.onSearch = this.onSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  onSearch(event) {
    event.preventDefault();
    this.props.fetchFilms(this.state.input).then(() => this.props.history.push(`/search/${this.state.input}`));
  }

  render() {
    return (
      <Navbar props={this.props} onSearch={this.onSearch} handleChange={this.handleChange} />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchFilms: films => dispatch(fetchFilms(films)),
    fetchFavoritesCreator: (userID) => dispatch(fetchFavoritesCreator(userID))
  };
};

const mapStateToProps = state => {
  return state
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NavbarContainer)
);