import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMovies = createAsyncThunk('/product/fetch',
    async () => {
        try {
            let response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=aacdbe83dedab8fc913bd72adf3fdbad`)
            let json = await response.json()
            console.log(json)
            return json
        } catch (error) {
            return Promise.reject(error)
        }
    }
)