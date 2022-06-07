import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import "../styles/Detail.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { removeFavorite, setFavorites } from '../store/favorites'
import { useDispatch, useSelector } from 'react-redux';
import moment from "moment";

function Detail() {
    const [dataDetail, setDataDetail] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const params = useParams();

    const listFavorites = useSelector(state => state.favorite.favorites); // ambil data dari store
    const dispact = useDispatch(); // menambahkan ke store

    useEffect(() => {
        setIsLoading(true);

        axios.get('https://api.themoviedb.org/3/movie/' + params.id + '?api_key=fe9c2107e7e76afb20fd484f3d893e7f&language=en-US')
            .then(data => {
                setDataDetail(data.data);
            })
            .catch(err => {
                console.log(err, 'ini error dari catch');
            })
            .finally(() => {
                setIsLoading(false);
            })

    }, [params]);

    const addOrRemoveFavorite = (id) => {
        const findIndex = listFavorites.findIndex((el) => el.id === id);
        if (findIndex >= 0) {
            return 'Remove from Favorites'
        } else {
            return 'Add to Favorites'
        }
    }

    if (isLoading) {
        return <h4>Now Loading...</h4>
    }

    return (
        <>
            <Row className="m-5">
                <Col lg="5" className="text-center">
                    <img src={"https://image.tmdb.org/t/p/w500" + dataDetail.poster_path} width={"400px"} alt="Poster"></img>
                </Col>
                <Col className="px-5">
                    <h1>{dataDetail.title}</h1>
                    <hr></hr>
                    <h5>Genre : </h5>
                    <h6>{dataDetail.genres.map((el, i) => {
                        if (i === dataDetail.genres.length - 1) {
                            return dataDetail.genres[i].name;
                        }
                        return dataDetail.genres[i].name + ', ';
                    })}</h6>
                    <hr></hr>
                    <h5>Release Date:</h5>
                    <h6>{moment(dataDetail.release_date).format('LL')}</h6>
                    <hr></hr>
                    <h5>Duration:</h5>
                    <h6>{Math.floor(dataDetail.runtime / 60)} hour {dataDetail.runtime % 60} minutes</h6>
                    <hr></hr>
                    <h5>Production Companies :</h5>
                    <h6>{dataDetail.production_companies.map((el, i) => {
                        if (i === dataDetail.production_companies.length - 1) {
                            return dataDetail.production_companies[i].name;
                        }
                        return dataDetail.production_companies[i].name + ', ';
                    })}</h6>
                    <hr></hr>
                    <h5>Status:</h5>
                    <h6>{dataDetail.status}</h6>
                    <hr></hr>
                    <h5>Overview: </h5>
                    <p>{dataDetail.overview}</p>
                    <hr></hr>
                    <Button className="w-100" variant="danger" onClick={() => {
                        if (addOrRemoveFavorite(dataDetail.id) === 'Add to Favorites') {
                            dispact(setFavorites(dataDetail))
                        } else {
                            dispact(removeFavorite(dataDetail.id))
                        }
                    }} >{addOrRemoveFavorite(dataDetail.id)}</Button>
                </Col>
            </Row>
        </>
    );
}

export default Detail;