/***** DISCLAIMER *****/ 
/***** To whom it may concern: *****/

// When I developed this reducer, as well as every other file including any piece of code writen here, I purposely commented some things to be uncommented later on further versions of this project


import {
    GET_USER,
    /*FETCH_USER_FAILURE (For later)*/
} from "../constants";

const initialState = {
    user: {},
    // error: null
};

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_USER:
            return Object.assign({}, state, {
                user: action.user,
                // error: null
            });
            // In the near future, when you add authentication middlewares to this app, you will need this case to: 
            // Save the error, so you can display it somewhere.
            // Since it failed, we don't have user to display anymore, so set `user` empty.
            // When that happens, just uncomment everything
            // Until then, this is purposely commented 
            //
            // case FETCH_USER_FAILURE: return  Object.assign({}, state, { error: action.error, user: {} })

        default:
            return state;
    }
};