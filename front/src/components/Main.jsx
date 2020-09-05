// *** Este es tu componente principal ***

import React from "react";
import NavbarContainer from "../containers/NavbarContainer";
import FilmsContainer from "../containers/FilmsContainer";
import SingleFilmContainer from "../containers/SingleFilmContainer";
import LoginContainer from "../containers/LoginContainer";
import RegisterContainer from "../containers/RegisterContainer";
import LandingPageContainer from '../containers/LandingPageContainer'
import FavoritesContainer from '../containers/FavoritesContainer'
import { Switch, Route } from "react-router-dom";
import '../styles/films.scss'

export default () => {

  return (
    <>
      <NavbarContainer />
      <Switch>
        <Route exact path='/' component={LandingPageContainer} />
        <Route exact path="/search/:film" component={FilmsContainer} />
        <Route exact path="/detalle/:id" component={SingleFilmContainer} />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/register" component={RegisterContainer} />
        <Route exact path="/favorites/:user" component={FavoritesContainer} />
      </Switch>
    </>
  )
};