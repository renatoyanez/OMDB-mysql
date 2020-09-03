import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import '../styles/films.scss'

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    // paddingTop: '56.25%', // 16:9
    paddingTop: '100%'
  },
  cardContent: {
    flexGrow: 1,
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 0, 6),
  },
  heroContent2: {
    padding: theme.spacing(8, 0, 1),
  },
}));


export default ({ props, spinner }) => {
  console.log(spinner)
  const classes = useStyles();
  const favoritesList = props.favorites.favorites
  const userID = props.user.user.id

  return (
    <React.Fragment>
      <main>
        <Container maxWidth="sm" component="main" className={classes.heroContent2}>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            List of your favorites
        </Typography>
        </Container>
        <div className={classes.heroContent}>
          <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {favoritesList.map((film) => (
                <Grid item key={film.imdbID} xs={12} sm={6} md={3}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={film.Poster}
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {film.Title}
                      </Typography>
                      <Typography>
                        {film.Year}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <IconButton onClick={() => props.fetchRemoveFavorite(userID, film.imdbID)} aria-label="add to favorites" title="Eliminar de favoritos">
                        <FavoriteIcon />
                      </IconButton>
                      <Button size="small" color="primary">
                        Edit
                    </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>
      </main>
              {spinner}
    </React.Fragment>
  )
};