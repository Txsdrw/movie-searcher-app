import { configureStore } from '@reduxjs/toolkit'
import {TypedUseSelectorHook, useSelector, useDispatch as useAppDispatch} from 'react-redux';
import createSagaMiddleware from "redux-saga";

import {trendingByCategorySlice} from './slice';
import {watchGetTrendingByCategory} from './sagas';

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        trendingMovies: trendingByCategorySlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(watchGetTrendingByCategory)


export const useDispatch: () => AppDispatch = useAppDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch