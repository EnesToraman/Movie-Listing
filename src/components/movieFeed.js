import { useState, useEffect } from 'react';
import { fetchMovieData } from '../apis/movieApi';
import { Button, Grid, Stack, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import InfiniteScroll from "react-infinite-scroll-component";
import { useMovieDataContext } from '../contexts/movieDataContext';

export const MovieFeed = () => {
    const { movieData, setMovieData, isAdded, setIsAdded } = useMovieDataContext();
    const [hasMore, sethasMore] = useState(true);
    const [page, setpage] = useState(2);

    useEffect(() => {
        const fetchAPI = async () => {
            setMovieData(await fetchMovieData());
        }
        fetchAPI();
    }, [setMovieData]);

    const fetchMoreMovies = async () => {
        const res = await fetch(
            `http://localhost:3004/movies?_page=${page}`
        );
        const data = await res.json();
        return data;
    };

    const fetchMoreData = async () => {
        const moreMovieData = await fetchMoreMovies();

        setMovieData([...movieData, ...moreMovieData]);
        if (moreMovieData.length === 0 || moreMovieData.length < 10) {
            sethasMore(false);
        }
        setpage(page + 1);
    };

    const handleButtonActivity = id => {
        setIsAdded([...isAdded, id]);
    }

    return (
        <InfiniteScroll
            dataLength={movieData.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader="It is loading, chill"
            endMessage="Aight that's all folks"
        >
            <Stack spacing={2} p={2}>
                {movieData.length &&
                    movieData.map(movie =>
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
                                            onClick={() => handleButtonActivity(movie.id)}
                                            disableRipple
                                            disableFocusRipple
                                            disabled={isAdded.indexOf(movie.id) !== -1}
                                            variant="contained"
                                            color="success"
                                            size="small">
                                            {isAdded.includes(movie.id) ? 'Added' : 'Add to list'}
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Card>
                    )
                }
            </Stack >
        </InfiniteScroll>
    )
}