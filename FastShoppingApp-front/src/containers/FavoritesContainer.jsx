import React from "react";
import { withRouter } from 'react-router'
import Favorites from "../components/Favorites";
import { connect } from "react-redux";
import { fetchFilms } from "../redux/actions/films";
import { fetchFavoritesCreator } from '../redux/actions/favorites'

class FavoritesContainer extends React.Component {

    componentDidMount() {
        this.props.fetchFavoritesCreator(this.props.user.user.id)
    }

    render() {
        return (
            <Favorites props = {this.props}/>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchFilms: id => dispatch(fetchFilms(id)),
        fetchFavoritesCreator: (userID) => dispatch(fetchFavoritesCreator(userID))
    };
};

const mapStateToProps = state => {
    return state
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FavoritesContainer))