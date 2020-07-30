import { FETCH_FAVORITES, FETCH_FAVORITES_ERROR } from '../constants'

const initialState = {
    favorites: [],
    error: null
}

export default (state = initialState, action) => {
    
    switch (action.type) {
        case FETCH_FAVORITES: return Object.assign({}, state, { favorites: action.favorites });

        case FETCH_FAVORITES_ERROR: return Object.assign({}, state, { error: action.error });

        default:
            return state;
    }
}