import React, { useRef, useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Modal from '../components/Modal'
import FavoriteIcon from '@material-ui/icons/Favorite';
import '../styles/films.scss'

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: 'rgba(0, 0, 0, 0.88)'
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    flexGrow: 1,
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  heroContent: {
    // backgroundColor: 'rgba(0, 0, 0, 0.88)',
    padding: theme.spacing(1, 0, 6),
  },
  // favorite: {
    // "&:hover": favorite()
  // }
}));


const useHover = () => {
  const ref = useRef()
  const [hovered, setHovered] = useState(false)
  
  const enter = () => setHovered(true)
  const leave = () => setHovered(false)
  
  useEffect(() => {
    ref.current.addEventListener('mouseenter', enter)
    ref.current.addEventListener('mouseleave', leave)
    return () => {
      ref.current.removeEventListener('mouseenter', enter)
      ref.current.removeEventListener('mouseleave', leave)
    }
  }, [ref])
  
  return [ref, hovered]
}

export default ({ films, handleAddFavorite }) => {
  const classes = useStyles();
  const filmsList = films.searchedFilms.Search
  const [ref, hovered] = useHover()

  return (
    <React.Fragment>
      <main className={classes.main}>
        <div className={classes.heroContent}>
          <Container className={classes.cardGrid} maxWidth="lg">
            {/* End hero unit */}
            {filmsList ? (
              <Grid container spacing={4}>
                {filmsList.map((film) => (
                  <Grid item key={film.imdbID} xs={12} sm={6} md={3}>
                    <Card className={classes.card}>
                      <CardMedia
                        component='img'
                        height="300"
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
                      <CardActions >
                        <IconButton /*disableRipple={true}*/ ref={ref} onClick={() => handleAddFavorite(film.imdbID, film.Title)} aria-label="add to favorites" title="Agregar a favoritos">
                          <FavoriteBorderIcon />
                          {hovered && console.log('Hovered!')}
                        </IconButton>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>) : <Modal />}
          </Container>
        </div>
      </main>
    </React.Fragment>
  )
};