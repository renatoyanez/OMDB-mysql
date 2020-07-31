import {
    ADD_TO_FAVORITES,
    FETCH_FAVORITES,
} from '../constants'
import axios from 'axios';

export const fetchFavorites = favorites => ({
    type: ADD_TO_FAVORITES,
    favorites
});

export const fetchExistingFavorites = favorites => ({
    type: FETCH_FAVORITES,
    favorites
});

export const addFavoriteCreator = object => dispatch => {
    return axios.post('/favorites/add', object)
        .then(res => res.data)
        .then(favorite => {
            dispatch(fetchFavorites(favorite))
        })
        .catch(error => console.log(error))
}

//this function pushes data to a new array after fetching data from db and public api: 
const push_data = async list_of_favorites_from_db => {
    var array = [];
    for (let i in list_of_favorites_from_db) {
        const fetch = await axios.get(`https://www.omdbapi.com/?apikey=20dac387&i=${list_of_favorites_from_db[i].film}`)
        try {
            const res = fetch.data
            array.push(res)
        } catch (error) {
            console.log(error.response.data)
        }
    }
    return array
}


export const fetchFavoritesCreator = userId => dispatch => {
    return axios.get(`/favorites/${userId}`)
        .then(response => response.data)
        .then(favorites => {
            //invokes pushing function
            const new_array = push_data(favorites)
            return new_array
        })
        .then(res => {
            //handles error
            if (res.error) {
                throw (res.error);
            }
            //dispatching the action
            return dispatch(fetchExistingFavorites(res))
        })
        //catches error
        .catch(err => {
            console.log(err)
        })
}


export const fetchRemoveFavorite = (userId, imdbID) => dispatch => {
    return axios.delete(`/favorites/remove/${userId}/${imdbID}`)
    .then(() => {
        return dispatch(fetchFavoritesCreator(userId))
    })
    .catch(err => {
        throw new Error(err)
    })
}