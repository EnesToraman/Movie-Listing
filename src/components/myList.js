import { useEffect } from 'react';
import { Button, Grid, Stack, Typography, Card } from '@mui/material';
import { useMovieDataContext } from '../contexts/movieDataContext';
import { fetchMyList } from '../apis/movieApi';

export const MyList = () => {
    const { movieData, setMovieData, myList, setMyList, isAdded, setIsAdded } = useMovieDataContext();

    useEffect(() => {
        const fetchAPI = async () => {
            setMyList(await fetchMyList());
        }
        fetchAPI();
    }, [setMyList]);

    const removeFromList = id => {
        const newIsAdded = isAdded.filter(movie => movie.id !== id)
        setIsAdded(...newIsAdded);
        setMyList(newIsAdded);
    }

    return (
        <Stack spacing={2} p={2}>
            {myList.length ?
                myList.map(movie => {
                    return (
                        < Card key={movie.id}>
                            <Grid container>
                                <Grid className="image-grid" item xs={6} p={3}>
                                    <img src={movie.poster} alt="Movie Poster" />
                                </Grid>
                                <Grid item xs={6} pt={3}>
                                    <Grid className="text-button-grid" item xs={12} pr={1}>
                                        <Typography variant="subtitle1">{movie.title}</Typography>
                                        <Typography variant="button">{movie.year}</Typography>
                                    </Grid>
                                    <Grid className="text-button-grid" item xs={12} textAlign="center" pt={4}>
                                        <Button
                                            onClick={() => removeFromList(movie.id)}
                                            disableRipple
                                            disableFocusRipple
                                            variant="contained"
                                            color="warning"
                                            size="small">
                                            Remove
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Card>
                    )
                }
                )
                : null}
        </Stack >
    )
}