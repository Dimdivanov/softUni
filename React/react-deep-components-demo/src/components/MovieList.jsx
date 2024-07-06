import { useState, useEffect } from 'react';
import styles from '../components/MovieList.module.css';

export default function MovieList() {
    let myArr = [
        'Avengers: Infinity Wars',
        'Constantine',
        'Harry Potter',
        'Lord of the Rings',
    ];
    const [movie, setMovie] = useState(myArr);
    const [titleClass, setTitleClass] = useState('');
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        if (isClicked) {
            setTitleClass(styles['main-timer']);
        } 
    }, [movie, isClicked]);

    function addMov() {
        setMovie((oldMovies) => {
            const newMovies = [...oldMovies];
            newMovies[2] = 'John Wick';
            return newMovies;
        });
        setIsClicked(true);
    }

    return (
        <>
            <h1 className={titleClass}>Movies List</h1>

            <ul>
                {movie.map((movie) => (
                    <li key={movie}>{movie}</li>
                ))}
            </ul>

            <button onClick={addMov}>Add Movie</button>
        </>
    );
}
