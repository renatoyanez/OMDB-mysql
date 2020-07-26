import React from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router'
import SingleFilm from "../components/SingleFilm";
import { fetchSingleFilm } from "../redux/actions/films";

class SingleFilmContainer extends React.Component {

  componentWillMount() {
    this.props.fetchSingleFilm(this.props.match.params.id)
  }

  render() {
    return (
      <SingleFilm film={this.props.film} />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSingleFilm: id => dispatch(fetchSingleFilm(id))
  };
};

const mapStateToProps = state => {
  return {
    film: state.films.film
  }
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleFilmContainer));
