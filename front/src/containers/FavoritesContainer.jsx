import React from "react";
import { withRouter } from 'react-router'
import { unstable_deferredUpdates as deferredUpdates } from 'react-dom'
import Favorites from "../components/Favorites";
import { connect } from "react-redux";
import { fetchFilms } from "../redux/actions/films";
import { fetchFavoritesCreator, fetchRemoveFavorite } from '../redux/actions/favorites'

class FavoritesContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            loading: false
        }
        this.handleDelete = this.handleDelete.bind(this)
        this.spinner = this.spinner.bind(this)
    }

    componentDidMount() {
        this.props.fetchFavoritesCreator(this.props.user.user.id)
    }

    spinner() {
        console.log(this.state.loading)
        if (this.state.loading) return
        deferredUpdates(() => {
          this.setState({ loading: true })
        })
        // this.props.createAccountSomehow(this.state)
        //   .then(() => {
        //     deferredUpdates(() => {
        //       this.setState(prevState => prevState.loading
        //         ? { loading: false } : null)
        //     })
        // })
    }


    handleDelete(userId, imdbID) {
        this.props.fetchRemoveFavorite(this.props.user.id, imdbID)
        alert("Acabas de eliminar esta propiedad de favoritos")
    }

    render() {

        return (
            <Favorites spinner={this.spinner} props={this.props} />
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchFilms: id => dispatch(fetchFilms(id)),
        fetchFavoritesCreator: (userID) => dispatch(fetchFavoritesCreator(userID)),
        fetchRemoveFavorite: (userId, imdbID) => dispatch(fetchRemoveFavorite(userId, imdbID))
    };
};

const mapStateToProps = state => {
    return state
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FavoritesContainer))