import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import { setDetail } from '../store/posts'

function Home() {
    const navigate = useNavigate();

    const listMovies = useSelector(state => state.posts.posts); // ambil data dari store
    const dispacth = useDispatch();

    useEffect(() => {
        document.title = "Home | Fath Movies"
    })

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
            <h2>Now Playing</h2>
            <div className="justify-content-around flex-wrap gap-3 mt-3 mb-2 list-dekstop">
                {listMovies.map((el, i) => (
                    <Card className="border-secondary movie" style={{ width: '15rem' }} key={i} onClick={() => {
                        dispacth(setDetail(el.title));
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

            {/* MOBILE */}
            <div className="justify-content-around flex-wrap gap-3 mt-3 mb-2 list-mobile">
                {listMovies.map((el, i) => (
                    <Card fluid className="border-secondary movie" style={{ width: '11rem' }} key={i} onClick={() => {
                        dispacth(setDetail(el.title));
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
    );
}

export default Home;