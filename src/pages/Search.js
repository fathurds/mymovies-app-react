import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { Card } from 'react-bootstrap';
import { useNavigate, useSearchParams } from "react-router-dom";
import "../styles/Home.css";
import axios from 'axios';
import { setFilteredPosts } from '../store/posts'

function Search() {
    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const title = searchParams.get('title')

    const listFilteredMovies = useSelector(state => state.posts.filteredPosts);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=fe9c2107e7e76afb20fd484f3d893e7f&language=en-US&page=1&include_adult=false&query=${title}`)
            .then(data => {
                dispatch(setFilteredPosts(data.data.results));
            })
            .catch(err => {
                console.log(err, ' ==> error dari search');
            })
    }, [title, dispatch]);

    return (
        <div className="p-3">
            <h2>Search "{title}"</h2>
            <div className="d-flex justify-content-around flex-wrap gap-3 mt-3">
                {listFilteredMovies.map((el, i) => (
                    <Card className="border-secondary movie" style={{ width: '15rem' }} key={i} onClick={() => {
                        navigate('/detail/' + el.id);
                    }} >
                        <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + el.poster_path} />
                        <Card.Body className="card-body-color">
                            <div className="d-flex justify-content-between align-items-center gap-2">
                                <h6 className="text-light">{el.title}</h6>
                                <h6>{el.vote_average}</h6>
                            </div>

                            <div className="movie-over px-2">
                                <h4>Overview</h4>
                                <p>{el.overview}</p>
                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default Search