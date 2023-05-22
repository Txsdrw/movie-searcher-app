import {Item} from './Main.styled';
import {requestTrending, useAppSelector, useDispatch} from '../../modules';
import {useEffect, useState} from 'react';

export const  Main = () => {
    const trendingMovies = useAppSelector((state) => state.trendingMovies.items);
    const dispatch = useDispatch();
    const [category, setCategory] = useState('all')

    useEffect(() => {
        // @ts-ignore
        dispatch(requestTrending(category))
    }, []);


    const handleRequest = (category: string) => {
        // @ts-ignore
        setCategory(category)
        // @ts-ignore
        dispatch(requestTrending(category));
    };

    return (
        <>
            <button onClick={()=>handleRequest('all')}>All</button>
            <button onClick={()=>handleRequest('movie')}>Movies</button>
            <button onClick={()=>handleRequest('tv')}>TV Shows</button>
            {trendingMovies.map((movie) => (
                <Item key={movie.id}>
                    <h4>{movie.title || movie.name}</h4>
                    <img
                        width="100px"
                        alt="poster"
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    />
                    <h3>Rating: {(movie.vote_average).toFixed(1)}</h3>
                </Item>
            ))}
        </>
    );
}

