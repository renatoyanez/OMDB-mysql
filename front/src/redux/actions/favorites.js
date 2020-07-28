import {
    ADD_TO_FAVORITES,
    FETCH_FAVORITES
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
        .catch(err => {
            throw new Error(err)
        })
}

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
            const new_array = push_data(favorites)
            return new_array
        })
        .then(res => dispatch(fetchExistingFavorites(res)))
        .catch(err => {
            throw new Error(err)
        })
}


// export const fetchFavoritesCreator = userId => async dispatch => {

//     //fetch data from db:
//     const response = await axios.get(`/favorites/${userId}`)
//     const favorites = await response.data //array of favorites from db

//     //push data to array:

//     const new_array = await push_data(favorites)

//     console.log(new_array)

//     return dispatch(fetchFavorites(new_array))
// }





// export const fetchFavoritesCreator = userId => dispatch => {
//     return axios.get(`/favorites/${userId}`)
//         .then(response => response.data)
//         .then(films => {
//             return fetch_from_api(films)
//         })
// }



// export const fecthRemoveFavorite = (userId, propiedadId) => dispatch => {
//     return axios.delete(`/api/favorites/remove/${userId}/${propiedadId}`)
//     .then(() => {
//         return dispatch(fetchFavoritesCreator(userId))
//     })
// }