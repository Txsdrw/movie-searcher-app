import { call, put, takeLatest } from 'redux-saga/effects'
import {requestTrendingMovies, setTrendingMovies} from './slice';
import {TRENDING_MOVIES_API} from '../core/api/axios';


export function* getMovies() {
    try {
        // @ts-ignore
        const response = yield call(TRENDING_MOVIES_API.get, '/?api_key=e5910deaee05895e3512ea9d8d99d9d1&language=en-US&sort_by=popularity.desc')
        yield put((setTrendingMovies(response.data.results)));
        console.log(response.data.results)
    } catch(e) {
        console.log(e)
    }
}

export function* watchGetMovies() {
    yield takeLatest(requestTrendingMovies.type, getMovies)
}