import {
    GET_USER, FETCH_USER_FAILURE
} from '../constants'
import axios from "axios";

const registerUser = user => ({
    type: GET_USER,
    user
})

export const fetchUserFailure = error => ({
    type: FETCH_USER_FAILURE,
    error
  });

export const fetchCreatedUser = (name, email) => {
    const user = {
        name,
        email
    }
    return dispatch => {
        try {
            axios.post('/users/create', user)
                .then(response => dispatch(registerUser(response.data)))
        } catch (error) {
            console.log(error.response.data)
        }
    }
}

export const fetchExistingUser = (email) => {
    return dispatch => {
        return axios.get(`/users/by-email/${email}`).then(res => {
            dispatch(registerUser(res.data))
        }).catch(error => dispatch(fetchUserFailure(error)))
    }
};