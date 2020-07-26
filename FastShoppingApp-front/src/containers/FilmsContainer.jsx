import React from "react";
import { withRouter } from 'react-router'
import Films from "../components/Films";
import { connect } from "react-redux";
import { fetchFilms } from "../redux/actions/films";
// import { addFavoriteCreator } from '../redux/actions/favorites'

class FilmsContainer extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddFavorite = this.handleAddFavorite.bind(this)
  }

  handleAddFavorite(title) {
    const user = this.props.user.user
    if (user) {
      alert("Added")
      let obj = { film: title, user: user }
      // this.props.addFavoriteCreator(obj)
    }
  }

  render() {
    const { films } = this.props;

    return (
      <Films films={films} handleAddFavorite={this.handleAddFavorite} />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchFilms: id => dispatch(fetchFilms(id)),
    // addFavoriteCreator: (obj) => dispatch(addFavoriteCreator(obj))
  };
};

const mapStateToProps = state => {
  return {
    films: state.films,
    user: state.user
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FilmsContainer))
