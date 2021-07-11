import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Modal from "../components/Modal";
import FavoriteIcon from "@material-ui/icons/Favorite";
// import "../styles/films.scss";

const useStyles = makeStyles(theme => ({
  main: {
    // backgroundColor: "rgba(0, 0, 0, 0.88)"
  },
  card: {
    backgroundColor: 'transparent',
    maxWidth: 300,
    margin: "auto",
    boxShadow: 'none',
    "&:hover": {
      boxShadow: "0 1px 40px -12px rgba(255,255,255,0.3) inset"
      // boxShadow: '0px 0px 10px 1px rgba(0, 198, 255, 0.7) inset'
    },
    padding: '1px 1px',
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardContent: {
    paddingBottom: 0,
    paddingTop: '2px',
    width: '85%',
    margin: "auto",
    padding: '31px 14px 3px',
    flexGrow: 1,
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  heroContent: {
    padding: theme.spacing(1, 0, 6),
  },
  media: {
    width: '85%',
    margin: "auto",
    padding: '0 15px 0',
  },
  actions: {
    padding: '1px 23px 0',
  }
}));



export default ({ films, handleAddFavorite, props }) => {
  const classes = useStyles();
  const filmsList = films.searchedFilms.Search;

  return (
    <React.Fragment>
      <main className={classes.main}>
        <div className={classes.heroContent}>
          <Container className={classes.cardGrid} maxWidth="lg">
            {/* End hero unit */}
            {filmsList ? (
              <Grid container spacing={4}>
                {filmsList.map(film => (
                  <Grid item key={film.imdbID} xs={12} sm={6} md={3}>
                      <Card className={classes.card}>
                        <CardMedia
                          component="img" //Makes image responsive to the space it occupies
                          height="350"
                          className={classes.media}
                          image={film.Poster}
                          title={film.Title}
                        />
                        <CardContent className={classes.cardContent} title={film.Title}>
                          <Typography gutterBottom variant="subtitle1" component="h2" id='text2'>
                            {film.Title}
                          </Typography>
                          <Typography id='text' variant="caption">{film.Year}</Typography>
                        </CardContent>
                        <CardActions className={classes.actions}>
                          <IconButton
                            component='default'
                            onClick={() => {
                              handleAddFavorite(film.imdbID, film.Title)
                            }}
                            aria-label="add to favorites"
                            title="Agregar a favoritos"
                          >
                            {props.favorites.favorites.map(element => element.imdbID).includes(film.imdbID) ? <FavoriteIcon id='favoriteCard' /> : <FavoriteBorderIcon id='favoriteCard' />}
                          </IconButton>
                        </CardActions>
                      </Card>
                  </Grid>
                ))}
              </Grid>
            ) : (
                <Modal />
              )}
          </Container>
        </div>
      </main>
    </React.Fragment>
  );
};
