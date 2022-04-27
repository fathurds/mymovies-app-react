import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import "../styles/Favorites.css";
import { removeFavorite } from "../store/favorites";

function Favorites() {

    const listFavorites = useSelector(state => state.favorite.favorites);

    const navigate = useNavigate();

    const dispact = useDispatch();

    return (
        <div className="d-flex justify-content-around flex-wrap">
            {listFavorites.map((el, i) => (
                <Card className="m-2" style={{ width: '15rem' }} key={i}>
                    <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + el.poster_path} onClick={() => {
                        navigate('/detail/' + el.id);
                    }} />
                    <Card.Body>
                        <Button className="w-100" variant="danger" onClick={() => {
                            dispact(removeFavorite(el.id))
                        }} >Remove from Favorites</Button>
                    </Card.Body>
                </Card>
            ))}
            {listFavorites.length === 0 && <h1 className="d-flex align-items-center">Not data found...</h1>}
        </div>
    )
}

export default Favorites;