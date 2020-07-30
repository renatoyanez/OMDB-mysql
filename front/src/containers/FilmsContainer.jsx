import React from "react";
import { withRouter } from 'react-router'
import Films from "../components/Films";
import { connect } from "react-redux";
import { fetchFilms } from "../redux/actions/films";
import { addFavoriteCreator, fetchFavoritesCreator } from '../redux/actions/favorites'

class FilmsContainer extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddFavorite = this.handleAddFavorite.bind(this)
  }

  componentDidMount() {
    this.props.fetchFavoritesCreator(this.props.user.user.id)
  }

  handleAddFavorite(imdbID, title) {
    const user = this.props.user.user
    if (user.id) {
      alert(`${title} added`)
      let obj = { film: imdbID, user: user }
      this.props.addFavoriteCreator(obj)
    } else {
      alert('Sign up your account to add a favorite!')
    }
  }

  render() {
    const { films } = this.props;
    return (
      <Films props={this.props} films={films} handleAddFavorite={this.handleAddFavorite} />
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchFilms: id => dispatch(fetchFilms(id)),
    addFavoriteCreator: (obj) => dispatch(addFavoriteCreator(obj)),
    fetchFavoritesCreator: (userID) => dispatch(fetchFavoritesCreator(userID)),
  };
};

const mapStateToProps = state => {
  return {
    films: state.films,
    user: state.user,
    favorites: state.favorites
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FilmsContainer))
