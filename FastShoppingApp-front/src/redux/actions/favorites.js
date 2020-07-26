import { ADD_TO_FAVORITES } from '../constants'
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


const fetch_from_api = array_from_db => {
    const array = []
    const final_array = array_from_db.forEach(each => {
        return axios.get(`https://www.omdbapi.com/?apikey=20dac387&i=${each.film}`).then(response => response.data).then(data => {
            array.push(data)
        }).then(arr => arr)
    })
    console.log(final_array)
}

// response.data es un array



export const fetchFavoritesCreator = userId => async dispatch => {
    //fetch data from db:
    const response = await axios.get(`/favorites/${userId}`)
    const favorites = await response.data //array of favorites from db
   
    //invokes callback from api:
    const invoke = await fetch_from_api(favorites)
    return invoke

    // await dispatch(fetchFavorites())
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