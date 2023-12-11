import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import "../styles/Favorites.css";
import { removeFavorite } from "../store/favorites";

function Favorites() {

    const listFavorites = useSelector(state => state.favorite.favorites);

    const navigate = useNavigate();

    const dispact = useDispatch();

    useEffect(() => {
        document.title = 'Favorites | Fath Movies'
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
        <div>
            <div className="justify-content-around align-items-center flex-wrap py-5 search-not-found d-flex gap-3">
                {listFavorites.map((el, i) => (
                    <Card className="border-secondary movie-favorites" key={i}>
                        <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + el.poster_path} onClick={() => {
                            navigate('/detail/' + el.id);
                        }} />
                        <Card.Body className="card-body-color">
                            <div className="d-flex justify-content-between align-items-center gap-2">
                                <h6 className="text-light">{el.title}</h6>
                                <h6 className={setVote(el.vote_average)}>{el.vote_average}</h6>
                            </div>

                            <div className="movie-over-favorites px-2">
                                <Button className="w-100" variant="danger" onClick={() => {
                                    dispact(removeFavorite(el.id))
                                }} >Remove from Favorites</Button>
                            </div>
                        </Card.Body>
                    </Card>
                ))}
                {listFavorites.length === 0 && <h1 className="d-flex align-items-center h-100">Not data found...</h1>}
            </div>
        </div>
    )
}

export default Favorites;