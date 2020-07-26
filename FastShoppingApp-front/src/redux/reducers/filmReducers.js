import { GET_SINGLE_FILM, GET_FILMS } from '../constants';

const initialState = {
  searchedFilms: [],
  film: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FILMS: {
      return Object.assign({}, state, { searchedFilms: action.films })
    }
    case GET_SINGLE_FILM: {
      return Object.assign({}, state, { film: action.film })
    }
    default:
      return state;
  }
};