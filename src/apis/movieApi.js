import axios from "axios";

const url = 'http://localhost:3004/movies?_page=1';

export const fetchMovieData = async () => {
    try {
        const { data } = await axios.get(url);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const fetchMyList = async () => {
    try {
        const { data } = await axios.get(`http://localhost:3004/my-list`);
        return data;
    } catch (error) {
        console.log(error);
    }
}