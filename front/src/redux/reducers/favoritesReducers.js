import { FETCH_FAVORITES } from '../constants'

const initialState = {
    favorites: [],
}

export default (state = initialState, action) => {
    
    switch (action.type) {
        case FETCH_FAVORITES: return Object.assign({}, state, { favorites: action.favorites });
        default:
            return state;
    }
}