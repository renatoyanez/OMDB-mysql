import { ADD_TO_FAVORITES } from '../constants'

const initialState = {
    favorites: []
}

export default (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_TO_FAVORITES: {
            return Object.assign({}, state, { favorites: action.favorites })
        };
        default:
            return state;
    }
}