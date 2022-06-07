import React from "react";
import { useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

function Home() {
    const navigate = useNavigate();

    const listMovies = useSelector(state => state.posts.posts); // ambil data dari store

    return (
        <div className="p-3">
            <h2>Now Playing</h2>
            <div className="d-flex justify-content-around flex-wrap gap-3 mt-3">
                {listMovies.map((el, i) => (
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
    );
}

export default Home;