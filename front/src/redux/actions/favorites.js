import {
    ADD_TO_FAVORITES
} from '../constants'
import axios from 'axios';

export const fetchFavorites = favorites => ({
    type: ADD_TO_FAVORITES,
    favorites
});

export const addFavoriteCreator = object => dispatch => {
    return axios.post('/favorites/add', object)
        .then(res => res.data)
        .then(favorite => dispatch(fetchFavorites(favorite)))
}


export const fetchFavoritesCreator = userId => async dispatch => {

    //fetch data from db:
    const response = await axios.get(`/favorites/${userId}`)
    const favorites = await response.data //array of favorites from db

    var array = [];
    //push data to array:
    const nuevo = async arreglo => {
        for (let i in arreglo) {
            const fetch = await axios.get(`https://www.omdbapi.com/?apikey=20dac387&i=${arreglo[i].film}`)
            const res = await fetch.data
            array.push(res)
        }
        return array
    }

    const new_array = await nuevo(favorites)

    console.log(new_array)

    return dispatch(fetchFavorites(new_array))
}





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