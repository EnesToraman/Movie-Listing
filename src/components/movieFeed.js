import { useState, useEffect } from 'react';
import { fetchMovieData } from '../api/movieApi';
import { Button, Grid, Stack, Typography } from '@mui/material';
import Card from '@mui/material/Card';

export const MovieFeed = () => {
    const [movieData, setMovieData] = useState([]);
    const [disabledButton, setDisabledButton] = useState([]);
    const [isAdded, setIsAdded] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            setMovieData(await fetchMovieData());
        }
        fetchAPI();
    });

    const handleButtonActivity = imdbID => {
        setDisabledButton([...disabledButton, imdbID]);
        setIsAdded([...isAdded, imdbID]);
    }

    return (
        <Stack spacing={2} p={2}>
            {movieData.length &&
                movieData.map( movie =>
                    < Card key={movie.imdbID}>
                        <Grid container>
                            <Grid className="image-grid" item xs={6} p={3}>
                                <img src={movie.Poster} alt="Movie Poster" />
                            </Grid>
                            <Grid item xs={6} pt={3}>
                                <Grid className="text-button-grid" item xs={12} pr={1}>
                                    <Typography variant="subtitle1">{movie.Title}</Typography>
                                    <Typography variant="button">{movie.Year}</Typography>
                                </Grid>
                                <Grid className="text-button-grid" item xs={12} textAlign="center" pt={4}>
                                    <Button
                                        onClick={() => handleButtonActivity(movie.imdbID)}
                                        disableRipple
                                        disableFocusRipple
                                        disabled={disabledButton.indexOf(movie.imdbID) !== -1}
                                        variant="contained"
                                        color="success"
                                        size="small">
                                        {isAdded.includes(movie.imdbID) ? 'Added' : 'Add to list'}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Card>
                )
            }
        </Stack >
    )
}