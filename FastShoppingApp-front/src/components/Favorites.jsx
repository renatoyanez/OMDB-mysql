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
    backgroundImage: 'url(https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));


export default ({ props }) => {
  const classes = useStyles();
  const favoritesList = props.favorites.favorites
  console.log(favoritesList)

  return (
    <React.Fragment>
      <main className={classes.main}>
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
                        <IconButton aria-label="add to favorites" title="Eliminar de favoritos">
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
    </React.Fragment>
  )
};