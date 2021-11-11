import React, { useState, useContext, createContext } from "react"

const MovieDataContext = createContext();

export const useMovieDataContext = () => {
    return useContext(MovieDataContext);
}

export const MovieDataProvider = ({ children }) => {
    const [movieData, setMovieData] = useState([]);
    const [isAdded, setIsAdded] = useState([])

    const value = {
        movieData,
        setMovieData,
        isAdded,    
        setIsAdded
    }

    return (
        <MovieDataContext.Provider value={value}>
            {children}
        </MovieDataContext.Provider>
    )
}