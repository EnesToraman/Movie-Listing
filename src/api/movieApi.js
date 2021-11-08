import axios from "axios";

const url = 'https://fake-movie-database-api.herokuapp.com/api?s=star';

export const fetchMovieData = async () => {
    try {
        const { data: { Title, Year, Poster} } = await axios.get(url);
        const modifiedData = { Title, Year, Poster };
        return modifiedData;
    } catch (error) {
        console.log(error);
    }
}