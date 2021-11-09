import axios from "axios";

const url = 'https://fake-movie-database-api.herokuapp.com/api?s=star';

export const fetchMovieData = async () => {
    try {
        const { data: { Search: data } } = await axios.get(url);
        return data;
    } catch (error) {
        console.log(error);
    }
}