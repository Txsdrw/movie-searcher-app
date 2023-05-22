import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { REQUEST_STATUS } from "../core/api/types";

interface Movie {
    id: number
    title: string
    vote_average: number
    poster_path: string
}

interface Movies {
  items: Movie[];
  status: REQUEST_STATUS;
}

const initialState: Movies = {
  items: [],
  status: REQUEST_STATUS.LOADING,
};

export const trendingMoviesSlice = createSlice({
  name: "TrendingMovies",
  initialState,
  reducers: {
    requestTrendingMovies: (state) => {
      state.status = REQUEST_STATUS.REQUEST;
    },
    setTrendingMovies: (state, action: PayloadAction<Movie[]>) => {
      state.status = REQUEST_STATUS.SUCCESS;
      state.items = action.payload;
    },
  },
});

export const { requestTrendingMovies, setTrendingMovies } =
  trendingMoviesSlice.actions;
