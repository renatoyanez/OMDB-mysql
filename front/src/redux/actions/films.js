import {
  GET_FILMS,
  GET_SINGLE_FILM
} from "../constants";
import axios from "axios";

const filmsAction = films => ({
  type: GET_FILMS,
  films
});

const singleFilmAction = film => ({
  type: GET_SINGLE_FILM,
  film
});


export const fetchFilms = title => dispatch => {
  return axios
    .get(`https://www.omdbapi.com/?apikey=20dac387&s=${title}`)
    .then(res => res.data)
    .then(films => dispatch(filmsAction(films)))
}


export const fetchSingleFilm = id => dispatch => {
  return axios
    .get(`https://www.omdbapi.com/?apikey=20dac387&i=${id}`)
    .then(res => res.data)
    .then(film => dispatch(singleFilmAction(film)))
}