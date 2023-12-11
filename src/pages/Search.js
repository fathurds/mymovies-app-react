import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { Card } from 'react-bootstrap';
import { useNavigate, useSearchParams } from "react-router-dom";
import "../styles/Home.css";
import axios from 'axios';
import { setFilteredPosts } from '../store/posts'
import { setDetail } from '../store/posts'

function Search() {
    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const title = searchParams.get('title')

    const listFilteredMovies = useSelector(state => state.posts.filteredPosts);
    const dispatch = useDispatch();

    useEffect(() => {
        document.title = `Search "${title}" | Fath Movies`
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=fe9c2107e7e76afb20fd484f3d893e7f&language=en-US&page=1&include_adult=false&query=${title}`)
            .then(data => {
                dispatch(setFilteredPosts(data.data.results));
            })
            .catch(err => {
                console.log(err, ' ==> error dari search');
            })
    }, [title, dispatch]);

    const setVote = (vote) => {
        if (vote >= 8) {
            return 'text-success';
        } else if (vote >= 6) {
            return 'text-warning';
        } else {
            return 'text-danger';
        }
    };

    return (
        <div className="container-fluid">
            {listFilteredMovies.length !== 0 && (<h2>Search "{title}"</h2>)}
            <div className="justify-content-around align-items-center flex-wrap gap-3 mt-3 search-not-found d-flex">
                {listFilteredMovies.length === 0 && (<h2>Search Not Found</h2>)}
                {listFilteredMovies.map((el, i) => (
                    <Card className="border-secondary movie" key={i} onClick={() => {
                        dispatch(setDetail(el.title));
                        navigate('/detail/' + el.id);
                    }} >
                        <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + el.poster_path} />
                        <Card.Body className="card-body-color">
                            <div className="d-flex justify-content-between align-items-center gap-2">
                                <h6 className="text-light">{el.title}</h6>
                                <h6 className={setVote(el.vote_average)}>{el.vote_average}</h6>
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