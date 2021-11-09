import { useState, useEffect } from 'react';
import { fetchMovieData } from '../../api/movieApi';
import { Button, Grid, Stack, Typography } from '@mui/material';
import Card from '@mui/material/Card';

export const MovieFeed = () => {
    const [movieData, setMovieData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setMovieData(await fetchMovieData());
        }
        fetchAPI();
    });

    return (
        <Stack spacing={2} p={2}>
            <Card>
                {movieData.length &&
                    <Grid container>
                        <Grid className="image-grid" item xs={6} p={3}>
                            <img src={movieData[0].Poster} alt="Movie Poster" />
                        </Grid>
                        <Grid item xs={6} pt={3}>
                            <Grid className="text-button-grid" xs={12}>
                                <Typography variant="subtitle1">{movieData[0].Title}</Typography>
                                <Typography variant="button">{movieData[0].Year}</Typography>
                            </Grid>
                            <Grid className="text-button-grid" xs={12} textAlign="center" pt={4}>
                                <Button disableRipple variant="contained" color="success" size="small">
                                    Add to list
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                }
            </Card>
            <Card>Item 2</Card>
            <Card>Item 3</Card>
            <Card>Item 3</Card>
            <Card>Item 3</Card>
            <Card>Item 3</Card>
            <Card>Item 3</Card>
            <Card>Item 3</Card>
        </Stack>
    )
}